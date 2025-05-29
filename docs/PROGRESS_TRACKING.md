# Student Progress Tracking System

## Overview

This document describes the new student progress tracking system for the tutorial platform. The system now uses a hybrid approach: progress is stored in Firebase Firestore for authenticated users and in localStorage for guests. This replaces the previous Redis-based solution.

## Key Features

- **Hybrid Storage:**
  - **Authenticated users:** Progress is stored in Firestore, associated with their user account.
  - **Guest users:** Progress is stored in the browser's localStorage.
- **Automatic Sync:**
  - When a user logs in, their progress is loaded from Firestore.
  - When a user logs out, progress is saved to localStorage.
- **Unified API:**
  - All progress-related utilities and composables use a single API, abstracting away storage details.
- **Real-Time Updates:**
  - Progress updates are reflected immediately in the UI for both guests and authenticated users.

## Data Model

Progress is tracked per user (or per browser for guests) and includes:

- `completedTutorials`: Array of completed tutorial paths.
- `tutorialProgress`: Object mapping tutorial paths to progress details (e.g., percentage, last section, last updated).
- `completedQuizzes`: Array of completed quiz IDs.
- `quizResults`: Object mapping quiz IDs to result details (score, total, completedAt).

## How It Works

- **Saving Progress:**
  - When a user completes a tutorial or quiz, or makes progress, the system saves the update to Firestore (if logged in) or localStorage (if a guest).
- **Loading Progress:**
  - On page load, the system loads progress from the appropriate source.
- **Clearing Progress:**
  - Users can clear all progress, which removes their data from Firestore or localStorage.
- **Exporting Progress:**
  - Users can export their progress as a JSON file for backup.

## Developer Notes

- All progress logic is handled by `src/services/ProgressService.js`.
- Utilities in `src/utils/progressUtils.js` and the `useProgress` composable provide a unified interface for components.
- UI components (e.g., `StudentProgressPage.vue`, `ProgressSectionList.vue`) use the new composable/utilities and do not interact with storage directly.
- All Redis-related code and documentation have been removed.

## Migration Notes

- If you are upgrading from the Redis-based system, ensure all references to Redis and the old API are removed.
- The new system is fully client-driven and requires no server-side API for progress.
- Firestore security rules should be configured to protect user data.

## File References

- `src/services/ProgressService.js`: Main logic for progress storage and retrieval.
- `src/utils/progressUtils.js`: Utility functions for progress actions.
- `src/composables/useProgress.js`: Vue composable for progress state and actions.
- `src/pages/StudentProgressPage.vue`: Main UI for displaying student progress.
- `src/components/ProgressSectionList.vue`: Section progress display component.

## FAQ

**Q: What happens if a guest user logs in?**
A: Their local progress is not automatically synced to Firestore. (Future enhancements may add this feature.)

**Q: Is progress lost if a guest clears their browser storage?**
A: Yes. Only authenticated users have persistent, cloud-backed progress.

**Q: Can users export and import progress?**
A: Export is supported. Import is not currently available.

---

For further details, see the code comments in the referenced files.
