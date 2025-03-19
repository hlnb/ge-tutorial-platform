# Tutorial Page Structure

This document outlines the component hierarchy and architecture of tutorial pages in the GraphiteEdge platform.

## Overview

Tutorial pages are built with a modular architecture that combines reusable components, interactive elements, and progress tracking. The structure ensures a consistent learning experience while maintaining flexibility for different types of content.

## Component Hierarchy

```
TutorialLayout.vue (Main Layout)
├── Sidebar Navigation
│   └── Dynamic Navigation Components (HTMLBasicsNav, CSSBasicsNav, etc.)
│
└── Main Content Area
    └── Tutorial Page (e.g., dom-events.vue)
        ├── Breadcrumb Navigation
        │
        ├── Tutorial Content Sections
        │   ├── Introduction
        │   ├── Main Content Sections
        │   └── Interactive Demos
        │
        ├── Quiz Section
        │   └── TutorialQuiz Component
        │       └── QuizComponent
        │           ├── Quiz Questions
        │           ├── Answer Selection
        │           └── Results Display
        │
        ├── Recommendations Section
        │   └── TutorialRecommendations Component
        │       ├── Next Tutorial
        │       ├── Related Tutorials
        │       ├── Practice Projects
        │       └── Additional Resources
        │
        └── Navigation Section
            └── TutorialNavigation Component
                ├── Previous Tutorial Link
                ├── Next Tutorial Link
                └── Quiz Indicator
```

## Supporting Services & Utilities

```
Supporting Services & Utilities
=============================
├── ProgressService
│   ├── Track Tutorial Progress
│   ├── Save Quiz Results
│   └── Manage Completion Status
│
├── quizUtils.js
│   ├── Get Quiz Questions
│   ├── Check Quiz Availability
│   └── Format Quiz Data
│
├── tutorialUtils.js
│   └── Get Tutorial Recommendations
│
└── progressUtils.js
    ├── Track Tutorial Progress
    ├── Mark Tutorial Completion
    └── Save Quiz Results
```

## Data Flow

### 1. Tutorial Page Load
- Loads tutorial content
- Initializes interactive demos
- Sets up navigation

### 2. Quiz Interaction
- User starts quiz
- Answers questions
- Submits answers
- Results saved to ProgressService

### 3. Progress Tracking
- Tracks visited sections
- Records quiz completion
- Updates student progress

### 4. Recommendations
- Loads based on current tutorial
- Shows next tutorial in sequence
- Displays related content

## Component Details

### TutorialLayout.vue
The main layout component that provides the overall structure for tutorial pages. It includes:
- Sidebar navigation
- Main content area
- Responsive design handling

### Tutorial Page Components
Each tutorial page is composed of several key components:

#### Breadcrumb Navigation
- Shows the current location in the tutorial hierarchy
- Provides easy navigation back to previous levels

#### Content Sections
- Structured content with clear headings
- Interactive demos and examples
- Code snippets and explanations

#### Quiz Section
The quiz system includes:
- Interactive question display
- Answer selection interface
- Immediate feedback
- Progress tracking
- Score calculation and display

#### Recommendations Section
Provides personalized content suggestions:
- Next tutorial in sequence
- Related tutorials
- Practice projects
- Additional resources

#### Navigation Section
Handles movement between tutorials:
- Previous/Next tutorial links
- Quiz availability indicator
- Progress tracking integration

## Services and Utilities

### ProgressService
Manages student progress tracking:
- Records visited sections
- Stores quiz results
- Tracks completion status
- Provides progress analytics

### quizUtils.js
Handles quiz-related functionality:
- Question management
- Quiz availability checking
- Data formatting
- Score calculation

### tutorialUtils.js
Manages tutorial-specific features:
- Content recommendations
- Navigation structure
- Section organization

### progressUtils.js
Provides progress tracking utilities:
- Progress recording
- Completion status management
- Progress analytics

## Best Practices

When creating new tutorial pages:
1. Follow the established component hierarchy
2. Implement all required sections (introduction, content, quiz, recommendations)
3. Use the provided utilities for consistent functionality
4. Ensure proper progress tracking integration
5. Include interactive elements where appropriate
6. Maintain consistent styling and layout

## Related Documentation

- [QUIZZES.md](./QUIZZES.md) - Detailed information about the quiz system
- [RECOMMENDATIONS.md](./RECOMMENDATIONS.md) - Tutorial recommendation system
- [CONTENT.md](./CONTENT.md) - Content creation guidelines
- [STYLE.md](./STYLE.md) - Styling and design guidelines 