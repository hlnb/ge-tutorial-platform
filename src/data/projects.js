import { pathways, tutorials } from '@/data/tutorials';

function normalizeProject(project) {
  return {
    ...project,
    path: `/projects/${project.slug}`,
    pathways: project.pathways ?? [],
    relatedSections: project.relatedSections ?? [],
    relatedTutorials: project.relatedTutorials ?? [],
    tags: project.tags ?? [],
    liveLinks: project.liveLinks ?? [],
    sourceLinks: project.sourceLinks ?? [],
    primaryPathway: project.primaryPathway ?? project.pathways?.[0] ?? null,
    pathwayOrder: project.pathwayOrder ?? 999,
  };
}

const projectRecords = [
  {
    slug: 'black-swan-bistro',
    title: 'Black Swan Bistro',
    summary:
      'A guided restaurant-site build that grows from a single HTML page into a deployed multi-page project.',
    description:
      'Black Swan Bistro is the flagship guided project across the curriculum. It is where the beginner, builder, and deployment pathways connect into one coherent build.',
    type: 'guided',
    difficulty: 'medium',
    duration: '7 parts',
    icon: 'fas fa-utensils',
    pathways: ['beginner', 'builder', 'deployment'],
    relatedSections: ['html-basics', 'css-basics', 'design-to-code', 'applied-javascript', 'deployments', 'capstone'],
    relatedTutorials: [
      'beginner/black-swan-bistro-part-1',
      'intermediate/black-swan-bistro-part-2',
      'intermediate/black-swan-bistro-part-3',
      'intermediate/black-swan-bistro-part-4',
      'advanced/black-swan-bistro-part-5',
      'advanced/black-swan-bistro-part-6',
      'advanced/black-swan-bistro-part-7',
    ],
    tags: ['Guided project', 'HTML', 'CSS', 'Deployment'],
    liveLinks: [
      {
        label: 'View HTML reference',
        url: '/projects/html-basics/black-swan-bistro/index.html',
      },
      {
        label: 'View CSS reference',
        url: '/projects/css-basics/black-swan-bistro/index.html',
      },
    ],
    sourceLinks: [
      {
        label: 'HTML project notes',
        url: '/projects/black-swan-bistro/html-notes',
      },
      {
        label: 'CSS project notes',
        url: '/projects/black-swan-bistro/css-notes',
      },
    ],
    primaryPathway: 'beginner',
    pathwayOrder: 1,
  },
  {
    slug: 'rotto-rocks',
    title: 'Rotto Rocks',
    summary:
      'A pathway-linked reference project that reinforces structure, navigation, images, and styling across beginner lessons.',
    description:
      'Rotto Rocks gives learners a second realistic site to compare against Black Swan Bistro. It works best as a reference and extension project rather than a full guided series.',
    type: 'reference',
    difficulty: 'medium',
    duration: 'Reference build',
    icon: 'fas fa-island-tropical',
    pathways: ['beginner', 'builder'],
    relatedSections: ['html-basics', 'css-basics', 'design-to-code'],
    relatedTutorials: [
      'beginner/html-basics/introduction',
      'beginner/html-basics/html-images',
      'beginner/html-basics/html-doc-structure',
      'beginner/css-basics/introduction',
    ],
    tags: ['Reference project', 'HTML', 'CSS', 'Multi-page'],
    liveLinks: [
      {
        label: 'View HTML reference',
        url: '/projects/html-basics/rotto-rocks/index.html',
      },
      {
        label: 'View CSS reference',
        url: '/projects/css-basics/rotto-rocks/index.html',
      },
    ],
    sourceLinks: [
      {
        label: 'HTML project notes',
        url: '/projects/html-basics/rotto-rocks/README.md',
      },
      {
        label: 'CSS project notes',
        url: '/projects/css-basics/rotto-rocks/README.md',
      },
    ],
    primaryPathway: 'beginner',
    pathwayOrder: 2,
  },
  {
    slug: 'personal-profile',
    title: 'Personal Profile Page',
    summary: 'Create a simple profile page to practise headings, sections, and semantic HTML.',
    description:
      'A first-project exercise for learners who need a manageable page with clear structure and personal content.',
    type: 'practice',
    difficulty: 'easy',
    duration: '30 min',
    icon: 'fas fa-id-card',
    pathways: ['beginner'],
    relatedSections: ['html-basics'],
    tags: ['HTML', 'Beginner', 'Structure'],
    pathwayOrder: 3,
  },
  {
    slug: 'recipe-page',
    title: 'Recipe Page',
    summary: 'Practise text structure, lists, and semantic grouping with a recipe page.',
    description: 'A beginner-friendly content page that reinforces readable HTML structure.',
    type: 'practice',
    difficulty: 'easy',
    duration: '45 min',
    icon: 'fas fa-utensils',
    pathways: ['beginner'],
    relatedSections: ['html-basics'],
    tags: ['HTML', 'Content', 'Semantics'],
    pathwayOrder: 4,
  },
  {
    slug: 'photo-gallery',
    title: 'Photo Gallery',
    summary: 'Use images, captions, and simple page structure to build a lightweight gallery.',
    description: 'A visual HTML practice project that supports image and figure lessons.',
    type: 'practice',
    difficulty: 'easy',
    duration: '60 min',
    icon: 'fas fa-images',
    pathways: ['beginner'],
    relatedSections: ['html-basics'],
    tags: ['HTML', 'Images', 'Gallery'],
    pathwayOrder: 5,
  },
  {
    slug: 'interactive-demo',
    title: 'Interactive Demo',
    summary: 'Build a small interactive page with forms and basic event-driven behaviour.',
    description: 'A bridge project between HTML form work and early JavaScript interactivity.',
    type: 'practice',
    difficulty: 'easy',
    duration: '45 min',
    icon: 'fas fa-hand-pointer',
    pathways: ['beginner', 'builder'],
    relatedSections: ['html-basics', 'dom-basics'],
    tags: ['Forms', 'HTML', 'DOM'],
    pathwayOrder: 6,
  },
  {
    slug: 'hello-world',
    title: 'Hello World App',
    summary: 'Create a first JavaScript app that responds to user input and updates the page.',
    description: 'A beginner JavaScript project focused on variables, events, and DOM updates.',
    type: 'practice',
    difficulty: 'easy',
    duration: '15 min',
    icon: 'fas fa-comment-dots',
    pathways: ['beginner', 'builder'],
    relatedSections: ['javascript-basics', 'dom-basics'],
    tags: ['JavaScript', 'DOM', 'Beginner'],
    pathwayOrder: 7,
  },
  {
    slug: 'todo-list',
    title: 'Todo List',
    summary: 'Build a list-based app that combines forms, arrays, and DOM updates.',
    description: 'A staple beginner project for practising dynamic rendering and state changes.',
    type: 'practice',
    difficulty: 'medium',
    duration: '60 min',
    icon: 'fas fa-list-check',
    pathways: ['beginner', 'builder'],
    relatedSections: ['html-basics', 'javascript-basics', 'dom-basics'],
    tags: ['JavaScript', 'DOM', 'Lists'],
    pathwayOrder: 8,
  },
  {
    slug: 'selector-challenge',
    title: 'Selector Challenge',
    summary: 'Strengthen CSS selector fluency with a focused styling challenge.',
    description: 'A short CSS exercise for practising targeting and specificity.',
    type: 'practice',
    difficulty: 'easy',
    duration: '30 min',
    icon: 'fas fa-crosshairs',
    pathways: ['builder'],
    relatedSections: ['css-basics'],
    tags: ['CSS', 'Selectors', 'Practice'],
    pathwayOrder: 1,
  },
  {
    slug: 'card-components',
    title: 'Card Components',
    summary: 'Create reusable card patterns with layout, spacing, and visual hierarchy.',
    description: 'A component-focused CSS project that supports the builder pathway.',
    type: 'practice',
    difficulty: 'medium',
    duration: '45 min',
    icon: 'fas fa-clone',
    pathways: ['builder'],
    relatedSections: ['css-basics'],
    tags: ['CSS', 'Components', 'Layout'],
    pathwayOrder: 2,
  },
  {
    slug: 'color-palette',
    title: 'Color Palette',
    summary: 'Explore colour systems and typography choices for a simple design exercise.',
    description: 'A small design-focused project that supports early visual system thinking.',
    type: 'practice',
    difficulty: 'easy',
    duration: '30 min',
    icon: 'fas fa-swatchbook',
    pathways: ['builder'],
    relatedSections: ['css-basics'],
    tags: ['CSS', 'Colour', 'Design'],
    pathwayOrder: 3,
  },
  {
    slug: 'photo-gallery-enhanced',
    title: 'Enhanced Photo Gallery',
    summary: 'Upgrade a basic gallery with responsive layout and stronger CSS composition.',
    description: 'A builder-path project that reinforces layout and modern styling choices.',
    type: 'practice',
    difficulty: 'medium',
    duration: '60 min',
    icon: 'fas fa-camera-retro',
    pathways: ['builder'],
    relatedSections: ['css-basics'],
    tags: ['CSS', 'Responsive', 'Gallery'],
    pathwayOrder: 4,
  },
  {
    slug: 'personal-profile-enhanced',
    title: 'Enhanced Personal Profile',
    summary: 'Turn a simple profile into a more polished layout with stronger presentation.',
    description: 'A builder project for improving spacing, layout, and visual polish.',
    type: 'practice',
    difficulty: 'medium',
    duration: '45 min',
    icon: 'fas fa-address-card',
    pathways: ['builder'],
    relatedSections: ['css-basics'],
    tags: ['CSS', 'Profile', 'Layout'],
    pathwayOrder: 5,
  },
  {
    slug: 'todo-list-enhanced',
    title: 'Enhanced Todo List',
    summary: 'Expand a todo app with richer styling, motion, and interaction states.',
    description: 'A builder project that strengthens UI polish on a familiar interface.',
    type: 'practice',
    difficulty: 'medium',
    duration: '45 min',
    icon: 'fas fa-list-check',
    pathways: ['builder'],
    relatedSections: ['css-basics', 'dom-basics'],
    tags: ['CSS', 'Animations', 'UI'],
    pathwayOrder: 6,
  },
  {
    slug: 'photo-gallery-2',
    title: 'Photo Gallery 2',
    summary: 'A second gallery project for practicing dynamic rendering and interaction logic.',
    description: 'A builder-path project that extends the gallery pattern with JavaScript work.',
    type: 'practice',
    difficulty: 'medium',
    duration: '45 min',
    icon: 'fas fa-photo-film',
    pathways: ['builder'],
    relatedSections: ['dom-basics', 'applied-javascript'],
    tags: ['JavaScript', 'Gallery', 'DOM'],
    pathwayOrder: 7,
  },
  {
    slug: 'todo-list-2',
    title: 'Todo List 2',
    summary: 'A second todo app focused on deeper array logic and filtering behaviour.',
    description: 'A follow-on project for learners ready for more stateful DOM work.',
    type: 'practice',
    difficulty: 'medium',
    duration: '50 min',
    icon: 'fas fa-list-check',
    pathways: ['builder'],
    relatedSections: ['dom-basics', 'applied-javascript'],
    tags: ['JavaScript', 'Arrays', 'DOM'],
    pathwayOrder: 8,
  },
  {
    slug: 'color-switcher',
    title: 'Color Switcher',
    summary: 'Build a simple interface that changes visual state with JavaScript.',
    description: 'A compact builder-path project for linking controls to UI updates.',
    type: 'practice',
    difficulty: 'easy',
    duration: '25 min',
    icon: 'fas fa-fill-drip',
    pathways: ['builder'],
    relatedSections: ['javascript-basics', 'dom-basics', 'applied-javascript'],
    tags: ['JavaScript', 'DOM', 'UI'],
    pathwayOrder: 9,
  },
  {
    slug: 'temperature-converter',
    title: 'Temperature Converter',
    summary: 'Use inputs, functions, and conditional logic in a practical converter tool.',
    description: 'A straightforward builder project for practising data handling and feedback.',
    type: 'practice',
    difficulty: 'easy',
    duration: '30 min',
    icon: 'fas fa-temperature-half',
    pathways: ['builder'],
    relatedSections: ['javascript-basics', 'applied-javascript'],
    tags: ['JavaScript', 'Functions', 'Forms'],
    pathwayOrder: 10,
  },
  {
    slug: 'number-game',
    title: 'Number Game',
    summary: 'Build a game loop around conditionals, state, and user feedback.',
    description: 'A playful project for reinforcing JavaScript control flow.',
    type: 'practice',
    difficulty: 'medium',
    duration: '35 min',
    icon: 'fas fa-dice',
    pathways: ['builder'],
    relatedSections: ['javascript-basics'],
    tags: ['JavaScript', 'Logic', 'Game'],
    pathwayOrder: 11,
  },
  {
    slug: 'calculator',
    title: 'Calculator',
    summary: 'Combine operators, functions, and UI controls in a practical calculator app.',
    description: 'A classic builder project that rewards clear structure and testing.',
    type: 'practice',
    difficulty: 'medium',
    duration: '45 min',
    icon: 'fas fa-calculator',
    pathways: ['builder'],
    relatedSections: ['javascript-basics', 'applied-javascript'],
    tags: ['JavaScript', 'Logic', 'App'],
    pathwayOrder: 12,
  },
  {
    slug: 'grade-calculator',
    title: 'Grade Calculator',
    summary: 'Practise input handling and branching logic with a simple grading tool.',
    description: 'A small application for turning logic rules into user-facing behaviour.',
    type: 'practice',
    difficulty: 'easy',
    duration: '30 min',
    icon: 'fas fa-percent',
    pathways: ['builder'],
    relatedSections: ['javascript-basics'],
    tags: ['JavaScript', 'Conditionals', 'Forms'],
    pathwayOrder: 13,
  },
  {
    slug: 'quiz-game',
    title: 'Quiz Game',
    summary: 'Build an interactive quiz that tracks answers and gives feedback.',
    description: 'A builder project that combines state, iteration, and dynamic UI updates.',
    type: 'practice',
    difficulty: 'medium',
    duration: '45 min',
    icon: 'fas fa-circle-question',
    pathways: ['builder'],
    relatedSections: ['javascript-basics', 'dom-basics', 'applied-javascript'],
    tags: ['JavaScript', 'Quiz', 'DOM'],
    pathwayOrder: 14,
  },
  {
    slug: 'css-debug-practice',
    title: 'CSS Debug Practice',
    summary: 'Work through broken styles and layout issues in a guided debugging exercise.',
    description: 'A troubleshooting project that supports the builder path and debugging lessons.',
    type: 'practice',
    difficulty: 'medium',
    duration: '35 min',
    icon: 'fas fa-bug',
    pathways: ['builder'],
    relatedSections: ['css-basics'],
    tags: ['CSS', 'Debugging', 'Practice'],
    pathwayOrder: 15,
  },
  {
    slug: 'git-install',
    title: 'Git Install Check',
    summary: 'Verify your Git setup before moving into repository workflows.',
    description: 'A deployment-path onboarding project for confirming the toolchain is ready.',
    type: 'practice',
    difficulty: 'easy',
    duration: '15 min',
    icon: 'fas fa-download',
    pathways: ['deployment'],
    relatedSections: ['git-basics'],
    tags: ['Git', 'Setup'],
    pathwayOrder: 1,
  },
  {
    slug: 'git-verify',
    title: 'Git Verify',
    summary: 'Check identity, configuration, and command-line readiness for Git work.',
    description: 'A short deployment-path exercise for validating core Git settings.',
    type: 'practice',
    difficulty: 'easy',
    duration: '15 min',
    icon: 'fas fa-circle-check',
    pathways: ['deployment'],
    relatedSections: ['git-basics'],
    tags: ['Git', 'Verification'],
    pathwayOrder: 2,
  },
  {
    slug: 'git-clone',
    title: 'Git Clone',
    summary: 'Practise pulling a remote repository to your local machine and inspecting it.',
    description: 'A deployment-path exercise for working with remotes and local copies.',
    type: 'practice',
    difficulty: 'easy',
    duration: '20 min',
    icon: 'fas fa-code-branch',
    pathways: ['deployment'],
    relatedSections: ['git-basics'],
    tags: ['Git', 'Remote'],
    pathwayOrder: 3,
  },
  {
    slug: 'git-commit',
    title: 'Git Commit',
    summary: 'Practise staging work intentionally and writing useful commit messages.',
    description: 'A deployment-path exercise that reinforces snapshot thinking in Git.',
    type: 'practice',
    difficulty: 'easy',
    duration: '20 min',
    icon: 'fas fa-floppy-disk',
    pathways: ['deployment'],
    relatedSections: ['git-basics'],
    tags: ['Git', 'Commit'],
    pathwayOrder: 4,
  },
  {
    slug: 'git-branch',
    title: 'Git Branch',
    summary: 'Create, switch, and use branches safely while keeping work isolated.',
    description: 'A deployment-path exercise that reinforces branching workflow habits.',
    type: 'practice',
    difficulty: 'medium',
    duration: '25 min',
    icon: 'fas fa-code-branch',
    pathways: ['deployment'],
    relatedSections: ['git-basics'],
    tags: ['Git', 'Branching'],
    pathwayOrder: 5,
  },
  {
    slug: 'git-merge',
    title: 'Git Merge',
    summary: 'Combine branches and get comfortable with merge flow and conflict handling.',
    description: 'A deployment-path exercise focused on integration and safe collaboration.',
    type: 'practice',
    difficulty: 'medium',
    duration: '25 min',
    icon: 'fas fa-code-merge',
    pathways: ['deployment'],
    relatedSections: ['git-basics'],
    tags: ['Git', 'Merging'],
    pathwayOrder: 6,
  },
  {
    slug: 'git-remote',
    title: 'Git Remote',
    summary: 'Connect a local repository to a remote and practise pushing or pulling changes.',
    description: 'A deployment-path exercise that supports real collaborative workflows.',
    type: 'practice',
    difficulty: 'medium',
    duration: '25 min',
    icon: 'fas fa-cloud-arrow-up',
    pathways: ['deployment'],
    relatedSections: ['git-basics'],
    tags: ['Git', 'Remote', 'Collaboration'],
    pathwayOrder: 7,
  },
];

export const projects = projectRecords.map(normalizeProject);

function normalizeProjectPath(path) {
  if (!path) return '';
  return path.replace(/\/+$/, '') || '/';
}

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug) || null;
}

export function getProjectByPath(path) {
  const normalizedPath = normalizeProjectPath(path);
  const exactMatch =
    projects.find((project) => normalizeProjectPath(project.path) === normalizedPath) || null;

  if (exactMatch) return exactMatch;

  return (
    projects.find((project) => normalizedPath.startsWith(`${normalizeProjectPath(project.path)}/`)) ||
    null
  );
}

export function getProjectsByPathway(pathwayId) {
  return projects
    .filter((project) => project.pathways.includes(pathwayId))
    .sort((a, b) => {
      if (a.pathwayOrder !== b.pathwayOrder) {
        return a.pathwayOrder - b.pathwayOrder;
      }

      return a.title.localeCompare(b.title);
    });
}

export function getProjectsForSection(sectionId) {
  return projects.filter((project) => project.relatedSections.includes(sectionId));
}

export function getRelatedTutorialsForProject(projectOrSlug) {
  const project =
    typeof projectOrSlug === 'string' ? getProjectBySlug(projectOrSlug) : projectOrSlug;

  if (!project) return [];

  if (project.relatedTutorials.length > 0) {
    return tutorials.filter((tutorial) => project.relatedTutorials.includes(tutorial.slug));
  }

  return tutorials.filter((tutorial) => project.relatedSections.includes(tutorial.section));
}

export function getGuidedProjectParts(projectId) {
  return tutorials
    .filter((tutorial) => tutorial.project === projectId)
    .sort((a, b) => (a.projectPart ?? 0) - (b.projectPart ?? 0));
}

export function getProjectNavigationByPath(path) {
  const project = getProjectByPath(path);

  if (!project?.primaryPathway) {
    return { prev: null, next: null };
  }

  const pathwayProjects = getProjectsByPathway(project.primaryPathway);
  const currentIndex = pathwayProjects.findIndex((item) => item.slug === project.slug);

  if (currentIndex === -1) {
    return { prev: null, next: null };
  }

  return {
    prev: pathwayProjects[currentIndex - 1] || null,
    next: pathwayProjects[currentIndex + 1] || null,
  };
}

export function getProjectBreadcrumbsByPath(path) {
  const project = getProjectByPath(path);

  if (!project) {
    return [
      { label: 'Home', path: '/' },
      { label: 'Projects', path: '/projects' },
    ];
  }

  return [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: project.title, path: project.path },
  ];
}

export function getPathwayProjectGroups() {
  return pathways.map((pathway) => ({
    ...pathway,
    projects: getProjectsByPathway(pathway.id),
  }));
}
