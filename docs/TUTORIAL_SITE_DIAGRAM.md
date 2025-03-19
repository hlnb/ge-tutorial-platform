# Tutorial Site Diagrams

This document provides visual diagrams of the tutorial site structure and component relationships using Mermaid.

## Site Structure

```mermaid
graph TD
    Home[Home Page] --> Tutorials[Tutorials Page]
    Tutorials --> Beginner[Beginner Tutorials]
    Tutorials --> Intermediate[Intermediate Tutorials]
    Tutorials --> Advanced[Advanced Tutorials]
    
    Beginner --> HTML[HTML Basics]
    Beginner --> CSS[CSS Basics]
    Beginner --> JS[JavaScript Basics]
    Beginner --> DOM[DOM Basics]
    
    HTML --> HTMLFirst[First Page]
    HTML --> HTMLText[Text Elements]
    HTML --> HTMLEmmet[Emmet]
    
    CSS --> CSSFirst[First Page]
    CSS --> CSSSelectors[Selectors]
    CSS --> CSSBox[Box Model]
    
    JS --> JSFirst[First Page]
    JS --> JSConditionals[Conditionals]
    JS --> JSLoops[Loops]
    
    DOM --> DOMFirst[First Page]
    DOM --> DOMEvents[Events]
    DOM --> DOMManipulation[Manipulation]
```

## Component Relationships

```mermaid
graph TD
    subgraph Layout
        TL[TutorialLayout.vue]
        SN[Sidebar Navigation]
        MC[Main Content Area]
    end
    
    subgraph Tutorial Page
        TP[Tutorial Page Component]
        BN[Breadcrumb Navigation]
        CS[Content Sections]
        QS[Quiz Section]
        RS[Recommendations Section]
        NS[Navigation Section]
    end
    
    subgraph Components
        TQ[TutorialQuiz]
        QC[QuizComponent]
        TR[TutorialRecommendations]
        TN[TutorialNavigation]
    end
    
    subgraph Services
        PS[ProgressService]
        QU[quizUtils.js]
        TU[tutorialUtils.js]
        PU[progressUtils.js]
    end
    
    TL --> SN
    TL --> MC
    MC --> TP
    
    TP --> BN
    TP --> CS
    TP --> QS
    TP --> RS
    TP --> NS
    
    QS --> TQ
    TQ --> QC
    
    RS --> TR
    NS --> TN
    
    TP --> PS
    TQ --> QU
    TR --> TU
    TN --> PU
```

## Data Flow

```mermaid
sequenceDiagram
    participant User
    participant TP as Tutorial Page
    participant PS as ProgressService
    participant QU as QuizUtils
    participant TU as TutorialUtils
    
    User->>TP: Visits Tutorial Page
    TP->>PS: Track Progress
    TP->>TU: Load Recommendations
    
    User->>TP: Starts Quiz
    TP->>QU: Load Questions
    User->>TP: Answers Questions
    TP->>PS: Save Quiz Results
    
    User->>TP: Completes Tutorial
    TP->>PS: Mark as Complete
    TP->>TU: Update Recommendations
```

## Component State Management

```mermaid
stateDiagram-v2
    [*] --> TutorialPage
    
    TutorialPage --> LoadingContent: Initialize
    LoadingContent --> ContentLoaded: Content Ready
    
    ContentLoaded --> QuizAvailable: Has Quiz
    ContentLoaded --> NoQuiz: No Quiz
    
    QuizAvailable --> QuizStarted: Start Quiz
    QuizStarted --> QuizCompleted: Submit Answers
    QuizCompleted --> ContentLoaded: Reset Quiz
    
    NoQuiz --> TutorialComplete: Mark Complete
    QuizCompleted --> TutorialComplete: Mark Complete
    
    TutorialComplete --> [*]
```

## File Structure

```mermaid
graph TD
    subgraph src
        subgraph pages
            subgraph tutorials
                subgraph beginner
                    subgraph dom-basics
                        DE[dom-events.vue]
                        DM[dom-manipulation.vue]
                    end
                    subgraph html-basics
                        HF[HTMLFirstPage.vue]
                        HE[HTMLEmmet.vue]
                    end
                end
            end
        end
        
        subgraph components
            TQ[TutorialQuiz.vue]
            QC[QuizComponent.vue]
            TR[TutorialRecommendations.vue]
            TN[TutorialNavigation.vue]
        end
        
        subgraph utils
            QU[quizUtils.js]
            TU[tutorialUtils.js]
            PU[progressUtils.js]
        end
        
        subgraph services
            PS[ProgressService.js]
        end
    end
```

## Notes

1. The diagrams use Mermaid syntax and can be rendered by any Markdown viewer that supports Mermaid.
2. The site structure diagram shows the main navigation hierarchy.
3. The component relationships diagram shows how different components interact.
4. The data flow diagram illustrates the sequence of operations during user interaction.
5. The state diagram shows the different states a tutorial page can be in.
6. The file structure diagram shows the physical organization of the codebase.

## Related Documentation

- [TUTORIAL_STRUCTURE.md](./TUTORIAL_STRUCTURE.md) - Detailed component documentation
- [QUIZZES.md](./QUIZZES.md) - Quiz system documentation
- [RECOMMENDATIONS.md](./RECOMMENDATIONS.md) - Recommendations system documentation 