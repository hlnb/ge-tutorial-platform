# HTML Basics Project Links

This document tracks where the HTML Basics course projects (Black Swan Bistro and Rotto Rocks) are linked throughout the tutorial series.

## Project Files Location

- **Black Swan Bistro**: `/public/projects/html-basics/black-swan-bistro/`

  - `index.html` - Complete restaurant website
  - `README.md` - Project documentation and learning objectives

- **Rotto Rocks**: `/public/projects/html-basics/rotto-rocks/`
  - `index.html` - Complete tourism website
  - `README.md` - Project documentation and learning objectives

## Links Added to Tutorials

### 1. HTML Basics Index Page

**File**: `src/pages/tutorials/beginner/html-basics/index.vue`

**Location**: Course Projects section

**Links Added**:

- View Complete HTML Project (Black Swan Bistro)
- Project Documentation (Black Swan Bistro README)
- View Complete HTML Project (Rotto Rocks)
- Project Documentation (Rotto Rocks README)

**Purpose**: Introduces students to both projects at the start of the series

---

### 2. Introduction Tutorial

**File**: `src/pages/tutorials/beginner/html-basics/introduction.vue`

**Location**: "Your Learning Journey" section (after project descriptions)

**Links Added**:

- Black Swan Bistro HTML (complete reference)
- Rotto Rocks HTML (complete reference)

**Purpose**: Allows students to preview what they'll build throughout the series

---

### 3. HTML Images Tutorial

**File**: `src/pages/tutorials/beginner/html-basics/html-images.vue`

**Location**: After "What's Next?" section

**Links Added**:

- Black Swan Bistro (direct link)
- Rotto Rocks (direct link)

**Purpose**: Shows students how images are implemented in complete websites, reinforcing the lesson content

---

### 4. HTML Forms Tutorial

**File**: `src/pages/tutorials/beginner/html-basics/html-forms.vue`

**Location**: Completion section

**Links Added**:

- Bistro Reservation Form (anchor link to #contact)
- Rotto Feedback Forms (anchor link to #contact)

**Purpose**: Demonstrates practical form implementations in real-world contexts

---

### 5. HTML Emmet Tutorial (Series Completion)

**File**: `src/pages/tutorials/beginner/html-basics/html-emmet.vue`

**Location**: Enhanced completion section

**Links Added**:

- Black Swan Bistro - Complete HTML
- Rotto Rocks - Complete HTML

**Purpose**:

- Celebrates series completion
- Encourages students to review complete projects
- Provides transition to CSS Basics series
- Allows comparison of student work with reference implementations

## Student Experience Flow

1. **Series Start** (Index + Introduction):

   - Students learn about both projects
   - Can preview complete HTML to see what they'll build
   - Understand the progressive learning approach

2. **Mid-Series** (Images, Forms):

   - Context-specific links show relevant features
   - Students can reference complete implementations for specific concepts
   - Reinforces learning with real-world examples

3. **Series End** (Emmet):
   - Comprehensive review opportunity
   - Encourages reflection on progress
   - Smooth transition to next tutorial series

## Project Features Demonstrated

### Black Swan Bistro (Beginner-Friendly)

- Restaurant information and about section
- Menu with appetizers, mains, desserts
- Hours of operation (table)
- Reservation form (multiple input types)
- Contact information
- Image gallery
- ~350 lines of semantic HTML

### Rotto Rocks (Advanced)

- Multi-section tourism site
- Island history and information
- Attractions and activities
- Wildlife education
- Travel planning (ferry schedules, accommodation)
- Multiple forms (newsletter, feedback)
- Extensive image gallery
- Conservation information
- ~750 lines of comprehensive HTML

## Technical Implementation

### Link Patterns Used

1. **Direct Project Links**:

   ```html
   <a
   	href="/projects/html-basics/black-swan-bistro/index.html"
   	target="_blank"
   ></a>
   ```

2. **Anchor Links to Sections**:

   ```html
   <a
   	href="/projects/html-basics/rotto-rocks/index.html#contact"
   	target="_blank"
   ></a>
   ```

3. **Documentation Links**:
   ```html
   <a
   	href="/projects/html-basics/black-swan-bistro/README.md"
   	target="_blank"
   ></a>
   ```

### Styling Classes

- Bulma button classes (`is-primary`, `is-link`, `is-small`)
- Font Awesome icons for visual interest
- Notification boxes with light backgrounds
- Consistent button groups with icons

## Benefits

1. **Reference Implementation**: Students can check their work against complete examples
2. **Progressive Learning**: Links placed strategically throughout the series
3. **Context-Specific**: Each link placement relates to the tutorial content
4. **Confidence Building**: Students see what's possible with HTML alone
5. **Motivation**: Preview of complete projects encourages continuation
6. **Best Practices**: Shows proper semantic HTML, accessibility, and structure

## Next Steps

These HTML-only projects will be enhanced in future tutorial series:

- **CSS Basics**: Add styling, layouts, responsive design
- **JavaScript Basics**: Add interactivity, form validation, dynamic content
- **Advanced Topics**: Animations, API integration, advanced features
