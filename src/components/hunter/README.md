# Hunter Framework Vue Components

Reusable Vue components that implement the Madelyn Hunter lesson plan framework with CMS integration.

## Overview

These components transform frontmatter data from your CMS into pedagogically-structured tutorial content. Each component represents one of the 8 elements of the Hunter framework.

## Components

### 1. AnticipatorySet.vue

**Purpose:** Hooks students' attention and connects to prior knowledge

**Props:**

```javascript
{
  title: String,           // Default: 'Start Here'
  icon: String,            // Default: '🎯'
  hook: String,            // Required: HTML content to engage students
  reflectionTitle: String, // Default: 'Quick Reflection'
  reflectionPrompts: Array,// Array of question strings
  connection: String       // Connects hook to lesson objectives
}
```

**CMS Frontmatter:**

```yaml
hunterFramework:
  anticipatorySet:
    hook: |
      <p>Think about your favorite website...</p>
    reflectionPrompts:
      - "What's your favorite website?"
      - 'What makes it engaging?'
    connection: "By the end of this lesson, you'll understand..."
```

**Usage:**

```vue
<AnticipatorySet
	:hook="hunterFramework.anticipatorySet.hook"
	:reflectionPrompts="hunterFramework.anticipatorySet.reflectionPrompts"
	:connection="hunterFramework.anticipatorySet.connection"
/>
```

---

### 2. LearningObjectives.vue

**Purpose:** Establishes clear, measurable learning goals with purpose

**Props:**

```javascript
{
  objectivesHeader: String,    // Default: 'By the end of this lesson...'
  objectives: Array,           // Required: Array of objectives
  purpose: String,             // Why these objectives matter
  prerequisites: Array         // Prior knowledge needed
}
```

**Objectives Format:**

```javascript
// Simple string format
objectives: ['Explain how web browsers work', 'Identify HTML tags'];

// Detailed object format (recommended for CMS)
objectives: [
	{
		text: 'Explain how web browsers work',
		verb: 'Explain',
		bloomsLevel: 'Understand',
	},
	{
		text: 'Identify the three core web technologies',
		verb: 'Identify',
		bloomsLevel: 'Remember',
	},
];
```

**Prerequisites Format:**

```javascript
prerequisites: [
	{ topic: 'Basic computer skills', link: null },
	{ topic: 'Text editing', link: '/tutorials/getting-started/text-editors' },
];
```

**CMS Frontmatter:**

```yaml
hunterFramework:
  objectives:
    list:
      - text: 'Explain how web browsers communicate with servers'
        verb: 'Explain'
        bloomsLevel: 'Understand'
      - text: 'Identify HTML, CSS, and JavaScript'
        verb: 'Identify'
        bloomsLevel: 'Remember'
    purpose: 'Understanding web fundamentals gives you a solid foundation...'
    prerequisites:
      - topic: 'Basic computer navigation'
        link: null
```

**Usage:**

```vue
<LearningObjectives
	:objectives="hunterFramework.objectives.list"
	:purpose="hunterFramework.objectives.purpose"
	:prerequisites="hunterFramework.objectives.prerequisites"
/>
```

---

### 3. CheckpointBox.vue

**Purpose:** Formative assessment to check understanding before proceeding

**Props:**

```javascript
{
  title: String,              // Default: 'Pause & Check: Do You Understand?'
  icon: String,               // Default: '⏸️'
  description: String,        // Instructions for students
  questions: Array,           // Q&A pairs with collapsible answers
  quizQuestions: Array,       // Alternative inline quiz format
  answersButtonText: String,  // Default: 'Check Your Answers'
  hideAnswers: Boolean,       // Hide answer key (default: false)
  showSelfAssessment: Boolean,// Show confidence scale (default: true)
  selfAssessmentPrompt: String,
  confidenceScale: String
}
```

**Questions Format:**

```javascript
questions: [
	{
		question: 'What are the three core technologies?',
		answer: 'HTML, CSS, and JavaScript',
		answerLabel: 'Answer', // Optional
	},
];
```

**CMS Frontmatter:**

```yaml
hunterFramework:
  checkpoints:
    - title: 'Pause & Check: Core Concepts'
      description: 'Before moving forward, can you answer these?'
      questions:
        - question: 'What are the three core technologies?'
          answer: 'HTML (structure), CSS (styling), JavaScript (interactivity)'
        - question: "What's the difference between client and server?"
          answer: 'A client requests content; a server delivers it.'
```

**Usage:**

```vue
<CheckpointBox
	:questions="hunterFramework.checkpoints[0].questions"
	:title="hunterFramework.checkpoints[0].title"
	:description="hunterFramework.checkpoints[0].description"
/>
```

**Note:** Use multiple CheckpointBox components throughout your tutorial at logical breaking points (typically 2-3 per lesson).

---

### 4. GuidedPractice.vue

**Purpose:** Scaffolded practice with hints and support

**Props:**

```javascript
{
  title: String,              // Default: 'Guided Practice (Support Available)'
  description: String,        // Overview of practice activity
  steps: Array,               // Required: Step-by-step instructions
  successCriteria: Array,     // What students should accomplish
  successCriteriaTitle: String
}
```

**Steps Format:**

```javascript
steps: [
	{
		title: 'Step 1: Open DevTools', // Optional
		instructions: '<p>Press F12 to open...</p>', // HTML string
		hints: [
			'Try right-clicking on the page',
			'Look for "Inspect Element" option',
		],
		hintLabel: 'Need a hint?', // Optional, default: 'Need a hint?'
	},
];
```

**CMS Frontmatter:**

```yaml
hunterFramework:
  guidedPractice:
    title: "Let's Try This Together"
    description: 'Follow these steps with hints available if you need them.'
    steps:
      - title: 'Step 1: Open the Browser'
        instructions: |
          <p>Launch your web browser (Chrome, Firefox, or Edge).</p>
        hints:
          - 'Look for the browser icon on your desktop or taskbar'
          - 'Any modern browser will work for this exercise'
      - title: 'Step 2: View Source Code'
        instructions: |
          <p>Right-click anywhere on the page and select 'View Page Source'.</p>
        hints:
          - 'You can also use Ctrl+U (Windows) or Cmd+Option+U (Mac)'
    successCriteria:
      - 'You can open and view source code of any website'
      - 'You can identify HTML tags in the source'
```

**Usage:**

```vue
<GuidedPractice
	:steps="hunterFramework.guidedPractice.steps"
	:successCriteria="hunterFramework.guidedPractice.successCriteria"
	:description="hunterFramework.guidedPractice.description"
/>
```

**Slots:**
You can add custom code editors using the `code-area` slot:

```vue
<GuidedPractice :steps="steps">
  <template #code-area>
    <CodeMirror :code="exampleCode" />
  </template>
</GuidedPractice>
```

---

### 5. IndependentPractice.vue

**Purpose:** Independent challenge without scaffolding support

**Props:**

```javascript
{
  title: String,              // Default: 'Independent Challenge'
  icon: String,               // Default: '💪'
  description: String,        // Default: 'Now try this on your own...'
  taskTitle: String,          // Default: 'Your Task:'
  task: String,               // Required: Main challenge description (HTML)
  requirementsTitle: String,
  requirements: Array,        // Must-have criteria
  stretchGoalsTitle: String,
  stretchGoals: Array,        // Optional advanced goals
  rubricTitle: String,
  rubricCriteriaHeader: String,
  rubricSuccessHeader: String,
  rubric: Array              // Success criteria table
}
```

**Rubric Format:**

```javascript
rubric: [
	{
		criteria: 'Code Structure',
		success: 'HTML is properly indented and organized',
	},
	{
		criteria: 'Functionality',
		success: 'Page displays correctly in browser',
	},
];
```

**CMS Frontmatter:**

```yaml
hunterFramework:
  independentPractice:
    title: 'Your Challenge'
    task: |
      <p>Create your own simple webpage that displays information about yourself.</p>
    requirements:
      - 'Use at least 5 different HTML tags'
      - 'Include a heading and at least 2 paragraphs'
      - 'Add an image and a link'
    stretchGoals:
      - 'Add a list (ordered or unordered)'
      - 'Use semantic HTML5 tags like <header>, <main>, <footer>'
      - 'Include a table'
    rubric:
      - criteria: 'HTML Structure'
        success: 'Page uses proper HTML5 structure with head and body'
      - criteria: 'Content'
        success: 'All required elements are present and functional'
      - criteria: 'Creativity'
        success: 'Page includes personal touches and original content'
```

**Usage:**

```vue
<IndependentPractice
	:task="hunterFramework.independentPractice.task"
	:requirements="hunterFramework.independentPractice.requirements"
	:stretchGoals="hunterFramework.independentPractice.stretchGoals"
	:rubric="hunterFramework.independentPractice.rubric"
/>
```

---

### 6. ClosureSection.vue

**Purpose:** Summarizes learning, reinforces objectives, prompts reflection

**Props:**

```javascript
{
  title: String,               // Default: 'Lesson Complete: What You Learned'
  takeawaysTitle: String,      // Default: 'Key Takeaways:'
  keyTakeaways: Array,         // Main points from lesson
  objectivesReviewTitle: String,
  objectivesPrompt: String,
  objectives: Array,           // Original learning objectives (revisited)
  checkmarks: Array,           // Affirmation messages
  readinessMessage: String,
  reflectionTitle: String,
  reflectionPrompts: Array,    // Deep thinking questions
  realWorldApplication: String,// How to use this knowledge
  nextSteps: String           // Preview of next lesson
}
```

**Reflection Prompts Format:**

```javascript
reflectionPrompts: [
	{
		title: 'What surprised you?',
		icon: '💭',
		questions: [
			'What was the most interesting thing you learned?',
			'Did anything challenge your understanding?',
		],
		note: 'Take time to journal your thoughts',
		noteClass: 'has-text-info',
	},
	{
		title: 'Connections',
		icon: '🔗',
		content: '<p>How does this connect to previous lessons?</p>',
	},
];
```

**CMS Frontmatter:**

```yaml
hunterFramework:
  closure:
    keyTakeaways:
      - 'The web uses three core technologies: HTML, CSS, JavaScript'
      - 'Browsers and servers communicate via HTTP requests'
      - "You can inspect any website's code using DevTools"
    reflectionPrompts:
      - title: 'Think About It'
        icon: '💭'
        questions:
          - 'How has your view of websites changed?'
          - 'What connections can you make to real-world sites?'
      - title: 'Looking Forward'
        icon: '🎯'
        content: '<p>What topic do you want to explore next?</p>'
    realWorldApplication: |
      <p>Next time you browse the web, notice the HTML structure, CSS styling, 
      and JavaScript interactions happening behind the scenes.</p>
    nextSteps: |
      <p>In the next lesson, we'll start writing HTML and building our first webpage!</p>
```

**Usage:**

```vue
<ClosureSection
	:keyTakeaways="hunterFramework.closure.keyTakeaways"
	:objectives="
		hunterFramework.objectives.list.map((obj) =>
			typeof obj === 'string' ? obj : obj.text,
		)
	"
	:reflectionPrompts="hunterFramework.closure.reflectionPrompts"
	:realWorldApplication="hunterFramework.closure.realWorldApplication"
	:nextSteps="hunterFramework.closure.nextSteps"
/>
```

---

## Complete Tutorial Template

See [ExampleCMSTutorial.vue](./ExampleCMSTutorial.vue) for a full working example.

### Basic Structure:

```vue
<template>
	<div>
		<TutorialNavigation />

		<!-- 1. Hook students' attention -->
		<AnticipatorySet
			:hook="hunterFramework.anticipatorySet.hook"
			:reflectionPrompts="hunterFramework.anticipatorySet.reflectionPrompts"
			:connection="hunterFramework.anticipatorySet.connection"
		/>

		<!-- 2. Clear learning goals -->
		<LearningObjectives
			:objectives="hunterFramework.objectives.list"
			:purpose="hunterFramework.objectives.purpose"
			:prerequisites="hunterFramework.objectives.prerequisites"
		/>

		<!-- 3-4. Your content sections with periodic checkpoints -->
		<section>
			<h2>Core Concept 1</h2>
			<p>Content...</p>
		</section>

		<CheckpointBox :questions="hunterFramework.checkpoints[0].questions" />

		<section>
			<h2>Core Concept 2</h2>
			<p>Content...</p>
		</section>

		<CheckpointBox :questions="hunterFramework.checkpoints[1].questions" />

		<!-- 5. Scaffolded practice -->
		<GuidedPractice
			:steps="hunterFramework.guidedPractice.steps"
			:successCriteria="hunterFramework.guidedPractice.successCriteria"
		/>

		<!-- 6. Independent work -->
		<IndependentPractice
			:task="hunterFramework.independentPractice.task"
			:requirements="hunterFramework.independentPractice.requirements"
			:stretchGoals="hunterFramework.independentPractice.stretchGoals"
			:rubric="hunterFramework.independentPractice.rubric"
		/>

		<!-- 7. Summary and reflection -->
		<ClosureSection
			:keyTakeaways="hunterFramework.closure.keyTakeaways"
			:objectives="extractObjectiveTexts()"
			:reflectionPrompts="hunterFramework.closure.reflectionPrompts"
		/>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import AnticipatorySet from '@/components/hunter/AnticipatorySet.vue';
import LearningObjectives from '@/components/hunter/LearningObjectives.vue';
import CheckpointBox from '@/components/hunter/CheckpointBox.vue';
import GuidedPractice from '@/components/hunter/GuidedPractice.vue';
import IndependentPractice from '@/components/hunter/IndependentPractice.vue';
import ClosureSection from '@/components/hunter/ClosureSection.vue';

// Import from CMS frontmatter
const hunterFramework = ref({
	// ... your CMS data
});

const extractObjectiveTexts = () => {
	return hunterFramework.value.objectives.list.map((obj) =>
		typeof obj === 'string' ? obj : obj.text,
	);
};
</script>
```

---

## CMS Schema (Sveltia CMS / Decap CMS)

Add this to your `public/admin/config.yml`:

```yaml
collections:
  - name: 'tutorials'
    label: 'Tutorials'
    folder: 'src/pages/tutorials'
    create: true
    fields:
      - label: 'Title'
        name: 'title'
        widget: 'string'

      - label: 'Category'
        name: 'category'
        widget: 'select'
        options: ['getting-started', 'beginner', 'intermediate', 'advanced']

      - label: 'Hunter Framework'
        name: 'hunterFramework'
        widget: 'object'
        collapsed: false
        fields:
          - label: 'Anticipatory Set'
            name: 'anticipatorySet'
            widget: 'object'
            fields:
              - { label: 'Hook (HTML)', name: 'hook', widget: 'markdown' }
              - {
                  label: 'Reflection Prompts',
                  name: 'reflectionPrompts',
                  widget: 'list',
                  field: { label: 'Prompt', name: 'prompt', widget: 'string' },
                }
              - { label: 'Connection', name: 'connection', widget: 'text' }

          - label: 'Learning Objectives'
            name: 'objectives'
            widget: 'object'
            fields:
              - label: 'Objectives List'
                name: 'list'
                widget: 'list'
                fields:
                  - { label: 'Objective Text', name: 'text', widget: 'string' }
                  - { label: 'Action Verb', name: 'verb', widget: 'string' }
                  - {
                      label: "Bloom's Level",
                      name: 'bloomsLevel',
                      widget: 'select',
                      options:
                        [
                          'Remember',
                          'Understand',
                          'Apply',
                          'Analyze',
                          'Evaluate',
                          'Create',
                        ],
                    }
              - { label: 'Purpose', name: 'purpose', widget: 'text' }
              - label: 'Prerequisites'
                name: 'prerequisites'
                widget: 'list'
                required: false
                fields:
                  - { label: 'Topic', name: 'topic', widget: 'string' }
                  - {
                      label: 'Link',
                      name: 'link',
                      widget: 'string',
                      required: false,
                    }

          - label: 'Checkpoints'
            name: 'checkpoints'
            widget: 'list'
            fields:
              - { label: 'Title', name: 'title', widget: 'string' }
              - { label: 'Description', name: 'description', widget: 'text' }
              - label: 'Questions'
                name: 'questions'
                widget: 'list'
                fields:
                  - { label: 'Question', name: 'question', widget: 'text' }
                  - { label: 'Answer', name: 'answer', widget: 'text' }

          - label: 'Guided Practice'
            name: 'guidedPractice'
            widget: 'object'
            fields:
              - {
                  label: 'Title',
                  name: 'title',
                  widget: 'string',
                  required: false,
                }
              - {
                  label: 'Description',
                  name: 'description',
                  widget: 'text',
                  required: false,
                }
              - label: 'Steps'
                name: 'steps'
                widget: 'list'
                fields:
                  - { label: 'Step Title', name: 'title', widget: 'string' }
                  - {
                      label: 'Instructions (HTML)',
                      name: 'instructions',
                      widget: 'markdown',
                    }
                  - {
                      label: 'Hints',
                      name: 'hints',
                      widget: 'list',
                      field: { label: 'Hint', name: 'hint', widget: 'string' },
                    }
              - {
                  label: 'Success Criteria',
                  name: 'successCriteria',
                  widget: 'list',
                  field:
                    { label: 'Criterion', name: 'criterion', widget: 'string' },
                }

          - label: 'Independent Practice'
            name: 'independentPractice'
            widget: 'object'
            fields:
              - { label: 'Task (HTML)', name: 'task', widget: 'markdown' }
              - {
                  label: 'Requirements',
                  name: 'requirements',
                  widget: 'list',
                  field:
                    {
                      label: 'Requirement',
                      name: 'requirement',
                      widget: 'string',
                    },
                }
              - {
                  label: 'Stretch Goals',
                  name: 'stretchGoals',
                  widget: 'list',
                  field: { label: 'Goal', name: 'goal', widget: 'string' },
                }
              - label: 'Rubric'
                name: 'rubric'
                widget: 'list'
                fields:
                  - { label: 'Criteria', name: 'criteria', widget: 'string' }
                  - {
                      label: 'Success Indicator',
                      name: 'success',
                      widget: 'text',
                    }

          - label: 'Closure'
            name: 'closure'
            widget: 'object'
            fields:
              - {
                  label: 'Key Takeaways',
                  name: 'keyTakeaways',
                  widget: 'list',
                  field:
                    { label: 'Takeaway', name: 'takeaway', widget: 'string' },
                }
              - label: 'Reflection Prompts'
                name: 'reflectionPrompts'
                widget: 'list'
                fields:
                  - { label: 'Title', name: 'title', widget: 'string' }
                  - {
                      label: 'Icon',
                      name: 'icon',
                      widget: 'string',
                      required: false,
                    }
                  - {
                      label: 'Content (HTML)',
                      name: 'content',
                      widget: 'markdown',
                      required: false,
                    }
                  - {
                      label: 'Questions',
                      name: 'questions',
                      widget: 'list',
                      required: false,
                      field:
                        {
                          label: 'Question',
                          name: 'question',
                          widget: 'string',
                        },
                    }
              - {
                  label: 'Real World Application (HTML)',
                  name: 'realWorldApplication',
                  widget: 'markdown',
                }
              - {
                  label: 'Next Steps (HTML)',
                  name: 'nextSteps',
                  widget: 'markdown',
                }
```

---

## Benefits

### For Teachers:

- **Classroom-Ready:** All pedagogical elements are built in
- **Differentiation:** Hints in guided practice support struggling students; stretch goals challenge advanced students
- **Assessment:** Checkpoints and rubrics provide formative and summative assessment
- **Flexibility:** Optional props allow customization without breaking the framework

### For Developers:

- **DRY Principle:** Reusable components eliminate code duplication
- **CMS Integration:** Works seamlessly with Sveltia/Decap CMS frontmatter
- **Maintainability:** Changes to Hunter framework styling apply globally
- **Type Safety:** Prop validation ensures correct data structure

### For Content Creators:

- **Consistency:** Every tutorial follows the same pedagogical pattern
- **Easy Authoring:** CMS fields guide you through all required Hunter elements
- **Visual Feedback:** Components provide immediate visual distinction between lesson phases

---

## Visual Design System

Each component has distinct styling to help students recognize different learning phases:

- **🎯 Anticipatory Set:** Purple gradient - engaging and attention-grabbing
- **📚 Learning Objectives:** Gray highlight box with yellow purpose statement
- **⏸️ Checkpoints:** Light blue with blue border - pause and reflect
- **🤝 Guided Practice:** Light green with green border - supportive, collaborative feel
- **💪 Independent Practice:** Light red with red border - challenge mode
- **🏁 Closure:** Green gradient - completion and celebration

---

## Migration Path

### Existing Tutorials:

1. Keep hardcoded HTML for now (still functional)
2. Gradually migrate to components when updating content
3. Extract Hunter data into frontmatter as you convert

### New Tutorials:

1. Use CMS fields to create frontmatter
2. Import and use Hunter components
3. Focus on content; let components handle pedagogy

---

## Testing

Test each component with edge cases:

- Empty arrays
- Missing optional fields
- HTML content with special characters
- Very long text values
- Nested lists

---

## Future Enhancements

Potential additions:

- **Analytics:** Track checkpoint completion rates
- **Progress Persistence:** Remember which students completed checkpoints
- **Adaptive Content:** Show different hints based on student progress
- **Accessibility:** ARIA labels, keyboard navigation, screen reader support
- **Internationalization:** Multi-language support for Hunter framework labels

---

## Support

For issues or questions:

1. Check [ExampleCMSTutorial.vue](./ExampleCMSTutorial.vue) for working implementation
2. Review CMS schema in `public/admin/config.yml`
3. Verify prop types match expected formats
4. Check browser console for validation errors

---

## Credits

Components implement the Madelyn Hunter lesson plan framework, a research-backed instructional design model used in K-12 and higher education worldwide.
