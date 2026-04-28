import { extractMarkdownHeadings } from '@/utils/markdownRenderer';

function parseFrontmatterValue(rawValue) {
	const trimmedValue = rawValue.trim();

	if (
		(trimmedValue.startsWith('"') && trimmedValue.endsWith('"')) ||
		(trimmedValue.startsWith("'") && trimmedValue.endsWith("'"))
	) {
		return trimmedValue.slice(1, -1);
	}

	if (trimmedValue === 'true') return true;
	if (trimmedValue === 'false') return false;
	if (/^\d+$/.test(trimmedValue)) return Number.parseInt(trimmedValue, 10);

	return trimmedValue;
}

export function parseFrontmatter(source) {
	if (!source.startsWith('---')) {
		return { frontmatter: {}, body: source.trim() };
	}

	const lines = source.replace(/\r\n/g, '\n').split('\n');
	const frontmatter = {};
	let currentArrayKey = null;
	let index = 1;

	for (; index < lines.length; index += 1) {
		const line = lines[index];

		if (line.trim() === '---') {
			index += 1;
			break;
		}

		if (!line.trim()) {
			continue;
		}

		const arrayItemMatch = line.match(/^\s*-\s+(.*)$/);
		if (arrayItemMatch && currentArrayKey) {
			frontmatter[currentArrayKey].push(parseFrontmatterValue(arrayItemMatch[1]));
			continue;
		}

		const keyMatch = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
		if (!keyMatch) continue;

		const [, key, rawValue] = keyMatch;
		if (!rawValue) {
			frontmatter[key] = [];
			currentArrayKey = key;
			continue;
		}

		frontmatter[key] = parseFrontmatterValue(rawValue);
		currentArrayKey = null;
	}

	return {
		frontmatter,
		body: lines.slice(index).join('\n').trim(),
	};
}

function getSectionBetween(content, startMarker, endMarkers = []) {
	const startIndex = content.indexOf(startMarker);
	if (startIndex === -1) return '';

	const sectionStart = startIndex + startMarker.length;
	const possibleEndIndexes = endMarkers
		.map((marker) => content.indexOf(marker, sectionStart))
		.filter((value) => value >= 0);
	const sectionEnd =
		possibleEndIndexes.length > 0 ? Math.min(...possibleEndIndexes) : content.length;

	return content.slice(sectionStart, sectionEnd).trim();
}

function getBeforeMarker(content, marker) {
	const markerIndex = content.indexOf(marker);
	return markerIndex === -1 ? content.trim() : content.slice(0, markerIndex).trim();
}

function stripHeading(markdown) {
	return markdown.replace(/^##\s+.+$/m, '').trim();
}

function splitLeadParagraph(content) {
	const blocks = content
		.split(/\n{2,}/)
		.map((block) => block.trim())
		.filter(Boolean);

	if (blocks.length === 0) {
		return { lead: '', rest: '' };
	}

	return {
		lead: blocks[0],
		rest: blocks.slice(1).join('\n\n').trim(),
	};
}

function parseQuestionAnswerPairs(content) {
	const pairs = [];
	const pattern = /\*\*(.+?)\*\*\s*\n([\s\S]*?)(?=\n\*\*.+?\*\*\s*\n|$)/g;

	for (const match of content.matchAll(pattern)) {
		pairs.push({
			question: match[1].trim(),
			answer: match[2].trim().replace(/\n+/g, ' '),
		});
	}

	return pairs;
}

function parseBulletList(content) {
	return Array.from(content.matchAll(/^\s*[-*]\s+(.*)$/gm)).map((match) =>
		match[1].replace(/^\[.\]\s*/, '').trim(),
	);
}

function parseObjectives(content) {
	const objectiveLines = Array.from(content.matchAll(/^\s*-\s+(.*)$/gm)).map((match) =>
		match[1].trim(),
	);
	const beforeYouStartMatch = content.match(/>\s+\*\*Before you start:\*\*\s*([\s\S]*)$/m);

	return {
		items: objectiveLines,
		beforeYouStart: beforeYouStartMatch ? beforeYouStartMatch[1].replace(/\n+/g, ' ').trim() : '',
	};
}

function splitObjectivesAndConcept(content) {
	if (!content) {
		return { objectivesContent: '', conceptContent: '' };
	}

	const headingMatches = Array.from(content.matchAll(/^##\s+.+$/gm));

	if (headingMatches.length <= 1) {
		return {
			objectivesContent: content.trim(),
			conceptContent: '',
		};
	}

	const secondHeadingIndex = headingMatches[1].index ?? content.length;

	return {
		objectivesContent: content.slice(0, secondHeadingIndex).trim(),
		conceptContent: content.slice(secondHeadingIndex).trim(),
	};
}

function parseGuidedPractice(content) {
	if (!content) return null;

	const withoutHeading = stripHeading(content);
	const [beforeSteps, ...stepBlocks] = withoutHeading.split(/\n(?=\*\*Step\s+\d+\s+[—-])/);
	const { lead } = splitLeadParagraph(beforeSteps.trim());

	const steps = stepBlocks
		.map((block) => block.trim())
		.filter(Boolean)
		.map((block) => {
			const titleMatch = block.match(/^\*\*(Step\s+\d+\s+[—-]\s+.+?)\*\*/);
			const title = titleMatch ? titleMatch[1].trim() : 'Step';
			let instructions = block.replace(/^\*\*Step\s+\d+\s+[—-]\s+.+?\*\*\s*/, '').trim();

			const detailsMatch = instructions.match(
				/<details>\s*<summary>(.*?)<\/summary>\s*([\s\S]*?)<\/details>/,
			);

			if (detailsMatch) {
				const hintTitle = detailsMatch[1].replace(/<[^>]+>/g, '').trim();
				const hintBody = detailsMatch[2].trim();
				instructions = instructions.replace(detailsMatch[0], '').trim();
				instructions = `${instructions}\n\n**${hintTitle}**\n\n${hintBody}`.trim();
			}

			return {
				title,
				instructions,
			};
		});

	return {
		title: 'Guided Practice',
		description: lead,
		steps,
	};
}

function parseIndependentPractice(content) {
	if (!content) return null;

	const withoutHeading = stripHeading(content);
	const requirementsMarker = withoutHeading.indexOf('**Requirements:**');
	const successMarker = withoutHeading.indexOf('**Success criteria');
	const sectionBoundaryCandidates = [requirementsMarker, successMarker].filter(
		(value) => value >= 0,
	);
	const sectionBoundary =
		sectionBoundaryCandidates.length > 0
			? Math.min(...sectionBoundaryCandidates)
			: withoutHeading.length;

	const introAndTask = withoutHeading.slice(0, sectionBoundary).trim();
	const { lead: description, rest: taskBody } = splitLeadParagraph(introAndTask);

	const requirementsContent =
		requirementsMarker >= 0
			? withoutHeading
					.slice(
						requirementsMarker + '**Requirements:**'.length,
						successMarker >= 0 ? successMarker : withoutHeading.length,
					)
					.trim()
			: '';
	const successContent =
		successMarker >= 0
			? withoutHeading
					.slice(withoutHeading.indexOf('\n', successMarker) >= 0 ? withoutHeading.indexOf('\n', successMarker) : successMarker)
					.trim()
			: '';

	const explicitRequirements = parseBulletList(requirementsContent);
	const successCriteria = parseBulletList(successContent);

	return {
		title: 'Independent Practice',
		description,
		task: taskBody || description,
		requirements: explicitRequirements.length > 0 ? explicitRequirements : successCriteria,
		successCriteria,
	};
}

function parseClosure(content) {
	if (!content) return null;

	const headingMatch = content.match(/^##\s+(.+)$/m);
	const title = headingMatch ? headingMatch[1].trim() : 'Next Steps';
	const withoutHeading = stripHeading(content);
	const keyTakeaways = parseBulletList(withoutHeading);

	return {
		title,
		body: withoutHeading,
		keyTakeaways,
	};
}

export function parseMarkdownTutorial(source) {
	const { frontmatter, body } = parseFrontmatter(source);
	const objectivesMarker = '<!-- LEARNING OBJECTIVES -->';
	const checkpointMarker = '<!-- CHECKPOINT BOX -->';
	const checkpointEndMarker = '<!-- /CheckpointBox -->';
	const guidedMarker = '<!-- GUIDED PRACTICE -->';
	const guidedEndMarker = '<!-- /GuidedPractice -->';
	const independentMarker = '<!-- INDEPENDENT PRACTICE -->';
	const independentEndMarker = '<!-- /IndependentPractice -->';

	const hookMarkdown = getBeforeMarker(body, objectivesMarker);
	const objectivesAndConceptContent = getSectionBetween(body, objectivesMarker, [
		checkpointMarker,
		guidedMarker,
	]);
	const { objectivesContent, conceptContent } = splitObjectivesAndConcept(
		objectivesAndConceptContent,
	);
	const conceptMarkdown = conceptContent.trim();
	const checkpointContent = getSectionBetween(body, checkpointMarker, [checkpointEndMarker]);
	const guidedContent = getSectionBetween(body, guidedMarker, [guidedEndMarker]);
	const independentContent = getSectionBetween(body, independentMarker, [independentEndMarker]);

	let closureContent = '';
	if (independentContent) {
		const independentEndIndex = body.indexOf(independentEndMarker);
		closureContent = body.slice(independentEndIndex + independentEndMarker.length).trim();
	} else if (checkpointContent) {
		const checkpointEndIndex = body.indexOf(checkpointEndMarker);
		closureContent = body.slice(checkpointEndIndex + checkpointEndMarker.length).trim();
	}

	return {
		frontmatter,
		body,
		hookMarkdown,
		objectives: parseObjectives(objectivesContent),
		conceptMarkdown,
		conceptHeadings: extractMarkdownHeadings(conceptMarkdown, 2),
		checkpoint: checkpointContent
			? {
					title: 'Check Your Understanding',
					questions: parseQuestionAnswerPairs(stripHeading(checkpointContent)),
			  }
			: null,
		guidedPractice: parseGuidedPractice(guidedContent),
		independentPractice: parseIndependentPractice(independentContent),
		closure: parseClosure(closureContent),
	};
}
