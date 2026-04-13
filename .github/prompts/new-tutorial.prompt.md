---
description: 'Scaffold a new GraphiteEdge tutorial page with Hunter lesson structure, quiz data, and recommendation entry.'
agent: 'agent'
argument-hint: 'Title, level (beginner/intermediate/advanced), and section (e.g. html-basics)'
---

Create a new GraphiteEdge tutorial using the **graphitedge-tutorial-builder** skill.

The user will provide: tutorial title, level, and section.

## Steps

1. Read `AGENTS.md` and [docs/CREATE_NEW_TUTORIAL.md](../docs/CREATE_NEW_TUTORIAL.md) for conventions
2. Check existing tutorials in `src/pages/tutorials/` at the target level/section for structure patterns
3. Create the `.vue` tutorial page at `src/pages/tutorials/{level}/{section}/{slug}.vue` using:
   - Hunter lesson components (AnticipatorySet, LearningObjectives, CheckpointBox, GuidedPractice, IndependentPractice, ClosureSection)
   - `usePageSections` composable for section tracking
   - `TestYourKnowledgeSection` for quiz
   - `TutorialRecommendations` for next steps
4. Add quiz data in `src/data/quizzes/`
5. Register the tutorial in `src/data/tutorials.js` with correct pathway, level, stage, and order
6. Add recommendation data in `src/data/tutorialRecommendations.js`
7. Run `npm run build` and `npm run lint` to validate
