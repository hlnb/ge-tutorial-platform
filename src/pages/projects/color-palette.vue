<template>
    <div class="content">
        <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
                <li><router-link to="/projects">Projects</router-link></li>
                <li class="is-active"><a href="#" aria-current="page">Color Palette</a></li>
            </ul>
        </nav>

        <h1 class="title is-1">Color Palette Project</h1>
        <p class="subtitle">Learn about CSS colors and typography by creating a design system</p>

        <div class="box">
            <h2 class="title is-4">Project Objectives</h2>
            <ul>
                <li>Understand CSS color values and formats</li>
                <li>Learn about typography and font properties</li>
                <li>Create a cohesive design system</li>
                <li>Practice using CSS variables</li>
            </ul>
        </div>

        <div class="box">
            <h2 class="title is-4">Learning Outcomes</h2>
            <ul>
                <li>Master different color formats (hex, rgb, hsl)</li>
                <li>Understand font families and weights</li>
                <li>Learn about color contrast and accessibility</li>
                <li>Practice organizing CSS with variables</li>
            </ul>
        </div>

        <div class="box">
            <h2 class="title is-4">Project Steps</h2>
            <div class="steps">
                <div class="step">
                    <h3 class="title is-5">1. Set Up the Project</h3>
                    <p>Create a new HTML file and link your CSS file. Set up the basic structure for your color palette.</p>
                    <CodeMirror
                        v-model="htmlStructure"
                        :options="cmOptions"
                        class="mt-2"
                    />
                </div>

                <div class="step">
                    <h3 class="title is-5">2. Define Color Variables</h3>
                    <p>Create CSS variables for your color palette. Include primary, secondary, and accent colors.</p>
                    <CodeMirror
                        v-model="colorVariables"
                        :options="cmOptions"
                        class="mt-2"
                    />
                </div>

                <div class="step">
                    <h3 class="title is-5">3. Set Up Typography</h3>
                    <p>Define font families, sizes, and weights for your design system.</p>
                    <CodeMirror
                        v-model="typographyStyles"
                        :options="cmOptions"
                        class="mt-2"
                    />
                </div>

                <div class="step">
                    <h3 class="title is-5">4. Create Color Swatches</h3>
                    <p>Style the color swatches to display your palette effectively.</p>
                    <CodeMirror
                        v-model="swatchStyles"
                        :options="cmOptions"
                        class="mt-2"
                    />
                </div>

                <div class="step">
                    <h3 class="title is-5">5. Add Typography Examples</h3>
                    <p>Create examples of different text styles using your typography system.</p>
                    <CodeMirror
                        v-model="typographyExamples"
                        :options="cmOptions"
                        class="mt-2"
                    />
                </div>
            </div>
        </div>

        <div class="box">
            <h2 class="title is-4">Tips & Best Practices</h2>
            <ul>
                <li>Use semantic color names in your variables</li>
                <li>Consider color contrast for accessibility</li>
                <li>Organize your CSS with comments</li>
                <li>Test your color palette in different contexts</li>
            </ul>
        </div>

        <div class="box">
            <h2 class="title is-4">Common Issues & Solutions</h2>
            <ul>
                <li><strong>Issue:</strong> Colors not displaying correctly</li>
                <li><strong>Solution:</strong> Check color format and syntax</li>
                <li><strong>Issue:</strong> Font not loading</li>
                <li><strong>Solution:</strong> Verify font-family name and fallbacks</li>
            </ul>
        </div>

        <div class="box">
            <h2 class="title is-4">Performance Tips</h2>
            <ul>
                <li>Use system fonts when possible</li>
                <li>Optimize web fonts with font-display</li>
                <li>Consider using CSS custom properties for theming</li>
                <li>Test color contrast ratios</li>
            </ul>
        </div>


    </div>
</template>

<script setup>
import { ref } from 'vue';
import CodeMirror from '@/components/CodeMirror.vue';

const cmOptions = {
    mode: 'css',
    theme: 'monokai',
    lineNumbers: true,
    lineWrapping: true,
    readOnly: true,
};

const htmlStructure = ref(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Color Palette</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Color Palette</h1>
        <section class="colors">
            <h2>Primary Colors</h2>
            <div class="swatch primary-1"></div>
            <div class="swatch primary-2"></div>
            <div class="swatch primary-3"></div>
        </section>
        <section class="colors">
            <h2>Secondary Colors</h2>
            <div class="swatch secondary-1"></div>
            <div class="swatch secondary-2"></div>
            <div class="swatch secondary-3"></div>
        </section>
        <section class="typography">
            <h2>Typography</h2>
            <div class="text-examples">
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <p>Body text</p>
                <p class="small">Small text</p>
            </div>
        </section>
    </div>
</body>
</html>`);

const colorVariables = ref(`:root {
    /* Primary Colors */
    --primary-1: #2c3e50;
    --primary-2: #3498db;
    --primary-3: #2980b9;

    /* Secondary Colors */
    --secondary-1: #e74c3c;
    --secondary-2: #f1c40f;
    --secondary-3: #2ecc71;

    /* Neutral Colors */
    --neutral-1: #2c3e50;
    --neutral-2: #7f8c8d;
    --neutral-3: #ecf0f1;
}`);

const typographyStyles = ref(`/* Typography System */
:root {
    /* Font Families */
    --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    --font-secondary: 'Georgia', serif;

    /* Font Sizes */
    --text-xs: 0.75rem;
    --text-sm: 0.875rem;
    --text-base: 1rem;
    --text-lg: 1.125rem;
    --text-xl: 1.25rem;
    --text-2xl: 1.5rem;
    --text-3xl: 1.875rem;
    --text-4xl: 2.25rem;

    /* Font Weights */
    --font-light: 300;
    --font-normal: 400;
    --font-medium: 500;
    --font-semibold: 600;
    --font-bold: 700;
}

body {
    font-family: var(--font-primary);
    font-size: var(--text-base);
    line-height: 1.5;
}`);

const swatchStyles = ref(`.colors {
    margin: 2rem 0;
}

.swatch {
    width: 100%;
    height: 100px;
    margin: 1rem 0;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.primary-1 { background-color: var(--primary-1); }
.primary-2 { background-color: var(--primary-2); }
.primary-3 { background-color: var(--primary-3); }

.secondary-1 { background-color: var(--secondary-1); }
.secondary-2 { background-color: var(--secondary-2); }
.secondary-3 { background-color: var(--secondary-3); }`);

const typographyExamples = ref(`.text-examples {
    margin: 2rem 0;
}

h1 {
    font-size: var(--text-4xl);
    font-weight: var(--font-bold);
    margin-bottom: 1rem;
}

h2 {
    font-size: var(--text-3xl);
    font-weight: var(--font-semibold);
    margin-bottom: 1rem;
}

h3 {
    font-size: var(--text-2xl);
    font-weight: var(--font-medium);
    margin-bottom: 1rem;
}

p {
    font-size: var(--text-base);
    margin-bottom: 1rem;
}

.small {
    font-size: var(--text-sm);
    color: var(--neutral-2);
}`);

// Frontmatter for the page
defineOptions({
    frontmatter: {
        title: 'Color Palette Project',
        description: 'Learn about CSS colors and typography by creating a design system',
        lastUpdated: '2024-03-20',
    },
});
</script>

<style scoped>
.steps {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.step {
    margin-bottom: 2rem;
}

.step:last-child {
    margin-bottom: 0;
}

.title.is-5 {
    margin-bottom: 1rem;
}
</style> 