# Styling Guide

## CSS Architecture

### Global Styles

Location: `src/assets/styles/global.css`

````css
/ Global CSS imports /
@import './vendor/bulma.min.css';
/ Global custom styles /
:root {
--color-red-berry: #8A0303;
--color-mine-shaft: #3D3D3D;
--color-snow: #FCFCFC;
}


### Component-Level Styles
- Use `<style scoped>` in components
- Follow BEM methodology
- Leverage CSS variables for consistency

## Brand Colors

### Primary Colors
```css
:root {
--color-red-berry: #8A0303; / Primary brand color /
--color-mine-shaft: #3D3D3D; / Text color /
--color-snow: #FCFCFC; / Background color /
}
```

### Usage

```css
.element {
	color: var(--color-red-berry);
	background-color: var(--color-snow);
}
```

## Typography

### Font Stack

```css
body {
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
		Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
}
```

### Text Sizes

```css
/* Headings */
h1 {
	font-size: 2.5rem;
}
h2 {
	font-size: 1.8rem;
}
h3 {
	font-size: 1.5rem;
}

/* Body text */
p {
	font-size: 1.1rem;
	line-height: 1.6;
}
```

## Layout Components

### Container
```css
.container {
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 1rem;
}
```

### Grid System
- Utilize Bulma's grid system
- Use flexbox for custom layouts

## Responsive Design

### Breakpoints
```css
/* Mobile first approach */
/* Small devices (phones) */
@media (min-width: 576px) { }

/* Medium devices (tablets) */
@media (min-width: 768px) { }

/* Large devices (desktops) */
@media (min-width: 992px) { }

/* Extra large devices */
@media (min-width: 1200px) { }
```

### Common Responsive Patterns
```css
/* Example of responsive container */
.container {
  width: 100%;
  padding: 1rem;
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}
```

## Components

### Buttons
```css
.button {
  background-color: var(--color-red-berry);
  color: var(--color-snow);
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.button:hover {
  opacity: 0.9;
}
```

### Cards
```css
.card {
  background: var(--color-snow);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
```

## Blog Post Styles

### Content Formatting
```css
.blog-post {
  max-width: 80vw;
  margin: 0 auto;
  padding: 2rem;
}

.blog-post h1 {
  color: var(--color-red-berry);
  margin-bottom: 2rem;
}

.blog-post p {
  margin-bottom: 1.5rem;
}
```

## Animations

### Transitions
```css
/* Default transition */
.transition-default {
  transition: all 0.3s ease;
}

/* Fade effect */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
```

## Best Practices

### CSS Organization
1. Use consistent naming conventions
2. Group related styles
3. Comment complex selectors
4. Minimize nesting
5. Use CSS variables for repeated values

### Performance
1. Avoid universal selectors
2. Minimize use of !important
3. Use efficient selectors
4. Optimize media queries
5. Consider CSS load time

### Accessibility
1. Maintain color contrast ratios
2. Use relative units (rem/em)
3. Support reduced motion
4. Ensure focus states are visible
```

````
