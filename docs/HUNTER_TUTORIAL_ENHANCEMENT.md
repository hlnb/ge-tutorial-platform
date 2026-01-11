# Tutorial Enhancement Prompt

**Reusable prompt for updating tutorials with Hunter teaching methodology components and ensuring proper quiz/recommendation functionality.**

---

## Usage

**Update the [TUTORIAL_SECTION] tutorial series to integrate Hunter teaching methodology components and ensure proper quiz/recommendation functionality.**

Replace [TUTORIAL_SECTION] with the actual section name (e.g., "CSS Basics", "JavaScript Basics", "DOM Manipulation") and provide this prompt to the assistant along with the section path.

---

## Requirements

### 1. Layout Structure

Ensure all tutorial files use the container/section wrapper:

```vue
<div class="container section">
  <div class="content tutorial-content">
    <!-- content here -->
  </div>
</div>
```

### 2. Hunter Components Integration

For each tutorial file, add after the breadcrumb/tags section:

**AnticipatorySet**: Engaging hook with reflection prompts

- Should include a compelling title (with emoji)
- Real-world connection in the hook
- 2-3 reflection prompts
- Connection statement linking to the tutorial

**LearningObjectives**: Clear, actionable objectives

- 5-7 specific learning objectives
- Purpose statement explaining why these skills matter

**CheckpointBox** (optional): Mid-tutorial formative assessments

- Add strategically after major concept sections
- Include reflection questions and self-check items

### 3. Component Imports

Ensure script section includes:

```javascript
import AnticipatorySet from '@/components/hunter/AnticipatorySet.vue';
import LearningObjectives from '@/components/hunter/LearningObjectives.vue';
import CheckpointBox from '@/components/hunter/CheckpointBox.vue'; // if used
```

### 4. Quiz Configuration

- Check if tutorial has quiz defined in `/src/data/quizzes/[section].js`
- If quiz exists, ensure `<TutorialQuiz />` component is present at bottom
- If no quiz exists, either:
  - Create quiz questions in the quizzes file, OR
  - Remove TutorialQuiz component from template
- Verify only ONE quiz component per tutorial

### 5. Recommendations Configuration

- Check `/src/utils/tutorialUtils.js` for recommendations entry
- Ensure tutorial key matches filename (e.g., 'html-text' not 'text')
- Each tutorial should have:
  - `nextTutorial`: Path and title of next lesson
  - `relatedTutorials`: 1-2 related lessons (optional)
  - `practiceProjects`: Suggested projects (optional)
  - `resources`: 2-3 external learning resources
- Ensure `<TutorialRecommendations :current-path="'/tutorials/[section]/[tutorial]'" />` is present

### 6. Bottom Section Order

Ensure proper ordering at end of tutorial:

```vue
<!-- Recommendations -->
<TutorialRecommendations :current-path="..." />

<!-- Quiz (if applicable) -->
<TutorialQuiz />

<!-- Completion Section (optional) -->
<div class="completion-section mt-6">...</div>
```

### 7. Error Prevention Checklist

- [ ] No orphaned closing tags from old content
- [ ] All Hunter components properly imported
- [ ] Recommendation path matches actual file path
- [ ] Tutorial key in tutorialUtils.js matches filename
- [ ] No duplicate quiz components
- [ ] Breadcrumb navigation has proper Home link structure
- [ ] All opening tags have matching closing tags

### 8. Validation Steps

After updates:

1. Run dev server and check for template parsing errors
2. Navigate to each tutorial and verify:
   - Hunter components render properly
   - No console warnings about unresolved components
   - Recommendations section displays with content
   - Quiz loads (if applicable)
   - Progress tracking marks completion correctly

---

## Example Implementation

For tutorial: `/tutorials/beginner/css-basics/introduction`

1. Check file exists and note structure
2. Add Hunter components after intro section
3. Verify imports in script section
4. Check `/src/data/quizzes/css-basics.js` has 'introduction' key
5. Check `/src/utils/tutorialUtils.js` has 'css-basics' → 'introduction' entry
6. Verify TutorialRecommendations path: `'/tutorials/beginner/css-basics/introduction'`
7. Test in browser

---

## Hunter Teaching Methodology Components

### AnticipatorySet

**Purpose**: Hook learners' attention and activate prior knowledge

**Props**:

- `title` (String): Engaging title with emoji
- `hook` (String): HTML content with real-world connection
- `reflectionPrompts` (Array): 2-3 questions to activate thinking
- `connection` (String): Bridge to tutorial content

**Example**:

```vue
<AnticipatorySet
	title="🎨 Making the Web Beautiful"
	:hook="`<p>Every beautiful website you've ever visited uses CSS...</p>`"
	:reflection-prompts="[
		'What makes a website visually appealing?',
		'How do designers create consistent branding?',
	]"
	connection="In this tutorial, you'll master CSS selectors..."
/>
```

### LearningObjectives

**Purpose**: Set clear expectations for learning outcomes

**Props**:

- `objectives` (Array): 5-7 specific, measurable objectives
- `purpose` (String): Why these skills matter

**Example**:

```vue
<LearningObjectives
	:objectives="[
		'Apply CSS selectors to target specific elements',
		'Use class and ID selectors effectively',
		'Understand specificity and the cascade',
	]"
	purpose="Selectors are the foundation of CSS styling..."
/>
```

### CheckpointBox

**Purpose**: Mid-tutorial formative assessment

**Props**:

- `title` (String): Checkpoint name
- `questions` (Array): Self-check questions
- `tips` (Array): Key takeaways or tips

**Example**:

```vue
<CheckpointBox
	title="Quick Check: CSS Basics"
	:questions="[
		'Can you explain what a CSS selector does?',
		'What is the difference between class and ID selectors?',
	]"
	:tips="[
		'Classes can be reused, IDs should be unique',
		'Specificity matters when styles conflict',
	]"
/>
```

---

## Common Issues and Solutions

### Issue: "Failed to resolve component: AnticipatorySet"

**Solution**: Add import statement in script section:

```javascript
import AnticipatorySet from '@/components/hunter/AnticipatorySet.vue';
```

### Issue: "No recommendations found for tutorial: [name]"

**Solution**: Check tutorial key in `/src/utils/tutorialUtils.js` matches the filename exactly

### Issue: Orphaned closing tags causing parsing errors

**Solution**: Search for isolated `</div>`, `</li>`, `</ul>` tags and remove them

### Issue: Quiz not displaying

**Solution**:

1. Check if quiz exists in `/src/data/quizzes/[section].js`
2. Verify TutorialQuiz component is imported
3. Ensure only one TutorialQuiz component in template

### Issue: Progress not tracking completion

**Solution**: Verify TutorialCompletion component or progress tracking is properly integrated in the tutorial layout

---

## File Structure Reference

```
src/
├── components/
│   └── hunter/
│       ├── AnticipatorySet.vue
│       ├── LearningObjectives.vue
│       └── CheckpointBox.vue
├── data/
│   └── quizzes/
│       ├── html-basics.js
│       ├── css-basics.js
│       └── ...
├── pages/
│   └── tutorials/
│       ├── getting-started/
│       └── beginner/
│           ├── html-basics/
│           └── css-basics/
└── utils/
    └── tutorialUtils.js  (recommendations config)
```

---

## Notes

- Hunter methodology improves engagement and learning outcomes
- Each component serves a specific pedagogical purpose
- Consistency across tutorials improves user experience
- Always test in browser after making changes
- Check browser console for any Vue warnings
