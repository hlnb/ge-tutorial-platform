function escapeHtml(value) {
	return value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;');
}

export function slugifyHeading(value) {
	return value
		.toLowerCase()
		.replace(/&amp;/g, 'and')
		.replace(/[^a-z0-9\s-]/g, '')
		.trim()
		.replace(/\s+/g, '-')
		.replace(/-+/g, '-');
}

function renderInline(value) {
	let rendered = escapeHtml(value);

	rendered = rendered.replace(
		/\[([^\]]+)\]\(([^)]+)\)/g,
		(_match, label, url) => `<a href="${escapeHtml(url)}">${escapeHtml(label)}</a>`,
	);
	rendered = rendered.replace(/`([^`]+)`/g, '<code>$1</code>');
	rendered = rendered.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
	rendered = rendered.replace(/\*([^*]+)\*/g, '<em>$1</em>');

	return rendered;
}

function flushParagraph(paragraph, html) {
	if (!paragraph.length) return;
	html.push(`<p>${renderInline(paragraph.join(' '))}</p>`);
	paragraph.length = 0;
}

function flushList(listState, html) {
	if (!listState.items.length) return;

	const tag = listState.type === 'ordered' ? 'ol' : 'ul';
	const start =
		listState.type === 'ordered' && listState.start > 1 ? ` start="${listState.start}"` : '';

	html.push(
		`<${tag}${start}>${listState.items
			.map((item) => `<li>${renderInline(item)}</li>`)
			.join('')}</${tag}>`,
	);

	listState.type = null;
	listState.start = 1;
	listState.items = [];
}

function flushCode(codeState, html) {
	if (!codeState.lines.length) return;
	const languageClass = codeState.language ? ` class="language-${codeState.language}"` : '';
	html.push(
		`<pre><code${languageClass}>${escapeHtml(codeState.lines.join('\n'))}</code></pre>`,
	);
	codeState.lines = [];
	codeState.language = '';
}

function isTableSeparator(line) {
	return /^\s*\|?(?:\s*:?-{3,}:?\s*\|)+\s*:?-{3,}:?\s*\|?\s*$/.test(line);
}

function renderTable(lines) {
	const [headerLine, , ...bodyLines] = lines;
	const parseCells = (line) =>
		line
			.trim()
			.replace(/^\|/, '')
			.replace(/\|$/, '')
			.split('|')
			.map((cell) => renderInline(cell.trim()));

	const headerCells = parseCells(headerLine);
	const bodyRows = bodyLines
		.filter((line) => line.trim())
		.map((line) => parseCells(line))
		.map(
			(cells) =>
				`<tr>${cells.map((cell) => `<td>${cell}</td>`).join('')}</tr>`,
		)
		.join('');

	return `
		<div class="table-container">
			<table class="table is-bordered is-striped">
				<thead>
					<tr>${headerCells.map((cell) => `<th>${cell}</th>`).join('')}</tr>
				</thead>
				<tbody>${bodyRows}</tbody>
			</table>
		</div>
	`;
}

export function extractMarkdownHeadings(markdown, level = 2) {
	const pattern = new RegExp(`^#{${level}}\\s+(.+)$`, 'gm');
	return Array.from(markdown.matchAll(pattern)).map((match) => ({
		title: match[1].trim(),
		id: slugifyHeading(match[1].trim()),
	}));
}

export function renderMarkdown(markdown, { headingIds = false } = {}) {
	if (!markdown) return '';

	const lines = markdown.replace(/\r\n/g, '\n').split('\n');
	const html = [];
	const paragraph = [];
	const listState = { type: null, start: 1, items: [] };
	const codeState = { lines: [], language: '' };

	let inCodeBlock = false;

	for (let index = 0; index < lines.length; index += 1) {
		const line = lines[index];
		const trimmedLine = line.trim();

		if (trimmedLine.startsWith('<!--')) {
			continue;
		}

		if (trimmedLine.startsWith('```')) {
			flushParagraph(paragraph, html);
			flushList(listState, html);

			if (inCodeBlock) {
				flushCode(codeState, html);
			} else {
				codeState.language = trimmedLine.replace(/```/, '').trim();
			}

			inCodeBlock = !inCodeBlock;
			continue;
		}

		if (inCodeBlock) {
			codeState.lines.push(line);
			continue;
		}

		if (trimmedLine === '---') {
			flushParagraph(paragraph, html);
			flushList(listState, html);
			html.push('<hr />');
			continue;
		}

		const headingMatch = line.match(/^(#{1,6})\s+(.*)$/);
		if (headingMatch) {
			flushParagraph(paragraph, html);
			flushList(listState, html);
			const level = headingMatch[1].length;
			const title = headingMatch[2].trim();
			const idAttribute = headingIds ? ` id="${slugifyHeading(title)}"` : '';
			html.push(`<h${level}${idAttribute}>${renderInline(title)}</h${level}>`);
			continue;
		}

		if (
			trimmedLine.includes('|') &&
			index + 1 < lines.length &&
			isTableSeparator(lines[index + 1])
		) {
			flushParagraph(paragraph, html);
			flushList(listState, html);

			const tableLines = [line, lines[index + 1]];
			index += 2;
			while (index < lines.length && lines[index].trim().includes('|')) {
				tableLines.push(lines[index]);
				index += 1;
			}
			index -= 1;
			html.push(renderTable(tableLines));
			continue;
		}

		const orderedMatch = line.match(/^\s*(\d+)\.\s+(.*)$/);
		if (orderedMatch) {
			flushParagraph(paragraph, html);
			if (listState.type && listState.type !== 'ordered') {
				flushList(listState, html);
			}
			if (!listState.type) {
				listState.type = 'ordered';
				listState.start = Number.parseInt(orderedMatch[1], 10);
			}
			listState.items.push(orderedMatch[2]);
			continue;
		}

		const unorderedMatch = line.match(/^\s*[-*]\s+(.*)$/);
		if (unorderedMatch) {
			flushParagraph(paragraph, html);
			if (listState.type && listState.type !== 'unordered') {
				flushList(listState, html);
			}
			if (!listState.type) {
				listState.type = 'unordered';
			}
			listState.items.push(unorderedMatch[1]);
			continue;
		}

		if (trimmedLine.startsWith('>')) {
			flushParagraph(paragraph, html);
			flushList(listState, html);

			const quoteLines = [trimmedLine.replace(/^>\s?/, '')];
			while (index + 1 < lines.length && lines[index + 1].trim().startsWith('>')) {
				index += 1;
				quoteLines.push(lines[index].trim().replace(/^>\s?/, ''));
			}

			html.push(`<blockquote>${renderMarkdown(quoteLines.join('\n'))}</blockquote>`);
			continue;
		}

		if (!trimmedLine) {
			flushParagraph(paragraph, html);
			flushList(listState, html);
			continue;
		}

		paragraph.push(trimmedLine);
	}

	flushParagraph(paragraph, html);
	flushList(listState, html);
	flushCode(codeState, html);

	return html.join('');
}
