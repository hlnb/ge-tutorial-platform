// Quiz data for Git Basics tutorials
export const gitBasicsQuizzes = {
  'introduction': [
    {
      question: 'What is the primary purpose of Git?',
      options: [
        'Text editing',
        'Version control',
        'Image processing',
        'Web hosting'
      ],
      correctAnswer: 1
    },
    {
      question: 'Which command initializes a new Git repository?',
      options: [
        'git start',
        'git init',
        'git new',
        'git create'
      ],
      correctAnswer: 1
    }
  ],
  'installation': [
    {
      question: 'Which command checks your installed Git version?',
      options: [
        'git check',
        'git version',
        'git --version',
        'git status'
      ],
      correctAnswer: 2
    }
  ],
  'basic-commands': [
    {
      question: 'What does "git add" do?',
      options: [
        'Adds a new branch',
        'Stages changes for commit',
        'Deletes files',
        'Pushes changes to remote'
      ],
      correctAnswer: 1
    }
  ],
  'branching': [
    {
      question: 'Which command creates a new branch?',
      options: [
        'git branch <name>',
        'git new branch',
        'git checkout',
        'git create-branch'
      ],
      correctAnswer: 0
    }
  ],
  'merging': [
    {
      question: 'What does "git merge" do?',
      options: [
        'Deletes a branch',
        'Combines branches',
        'Creates a new repository',
        'Stages files'
      ],
      correctAnswer: 1
    }
  ],
  'remote-repositories': [
    {
      question: 'Which command adds a remote repository?',
      options: [
        'git add remote',
        'git remote add',
        'git connect',
        'git push remote'
      ],
      correctAnswer: 1
    }
  ],
  'workflow': [
    {
      question: 'What is the typical order of a Git workflow?',
      options: [
        'add > commit > push',
        'commit > add > push',
        'push > add > commit',
        'add > push > commit'
      ],
      correctAnswer: 0
    }
  ],
  'conclusion': [
    {
      question: 'After completing Git Basics, what is a recommended next step?',
      options: [
        'Stop using Git',
        'Learn advanced Git topics',
        'Switch to another VCS',
        'Delete your repositories'
      ],
      correctAnswer: 1
    }
  ]
};
