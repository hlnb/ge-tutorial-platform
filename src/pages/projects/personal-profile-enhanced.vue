<template>
	<div class="container">
		<nav class="breadcrumb" aria-label="breadcrumbs">
			<ul>
				<li><router-link to="/">Home</router-link></li>
				<li><router-link to="/projects">Projects</router-link></li>
				<li class="is-active"><a href="#" aria-current="page">Enhanced Personal Profile</a></li>
			</ul>
		</nav>

		<div class="content">
			<h1 class="title">Enhanced Personal Profile</h1>
			<p class="subtitle">
				Create a professional profile page with modern CSS features and animations
			</p>

			<div class="box">
				<h2 class="title is-4">
					<i class="fas fa-bullseye"></i> Project Objectives
				</h2>
				<ul>
					<li>Design a responsive personal profile page</li>
					<li>Implement modern CSS features and animations</li>
					<li>Create an engaging user experience</li>
					<li>Ensure accessibility and performance</li>
					<li>Use CSS Grid and Flexbox for layout</li>
				</ul>
			</div>

			<div class="box">
				<h2 class="title is-4">
					<i class="fas fa-graduation-cap"></i> Learning Outcomes
				</h2>
				<ul>
					<li>Master advanced CSS layout techniques</li>
					<li>Learn about CSS animations and transitions</li>
					<li>Understand CSS custom properties</li>
					<li>Practice responsive design principles</li>
					<li>Improve accessibility in web applications</li>
				</ul>
			</div>

			<div class="box">
				<h2 class="title is-4">
					<i class="fas fa-tasks"></i> Project Steps
				</h2>
				<div class="steps">
					<div class="step">
						<h3 class="title is-5">1. HTML Structure</h3>
						<p>Create the basic HTML structure:</p>
						<CodeMirror
							:code="htmlStructure"
							:options="{ mode: 'htmlmixed', readOnly: true }"
						/>
					</div>

					<div class="step">
						<h3 class="title is-5">2. CSS Variables & Base Styles</h3>
						<p>Set up CSS variables and base styles:</p>
						<CodeMirror
							:code="baseStyles"
							:options="{ mode: 'css', readOnly: true }"
						/>
					</div>

					<div class="step">
						<h3 class="title is-5">3. Layout & Components</h3>
						<p>Implement the layout and component styles:</p>
						<CodeMirror
							:code="layoutStyles"
							:options="{ mode: 'css', readOnly: true }"
						/>
					</div>

					<div class="step">
						<h3 class="title is-5">4. Animations & Effects</h3>
						<p>Add animations and interactive effects:</p>
						<CodeMirror
							:code="animations"
							:options="{ mode: 'css', readOnly: true }"
						/>
					</div>

					<div class="step">
						<h3 class="title is-5">5. Responsive Design</h3>
						<p>Make the profile page responsive:</p>
						<CodeMirror
							:code="responsiveDesign"
							:options="{ mode: 'css', readOnly: true }"
						/>
					</div>
				</div>
			</div>

			<div class="box">
				<h2 class="title is-4">
					<i class="fas fa-lightbulb"></i> Tips & Best Practices
				</h2>
				<div class="content">
					<ul>
						<li>Use CSS Grid for the main layout</li>
						<li>Implement CSS custom properties for theming</li>
						<li>Add smooth transitions and animations</li>
						<li>Ensure proper contrast and readability</li>
						<li>Optimize images and assets</li>
					</ul>
				</div>
			</div>

			<div class="box">
				<h2 class="title is-4">
					<i class="fas fa-code"></i> Complete Example
				</h2>
				<CodeMirror
					:code="completeExample"
					:options="{ mode: 'htmlmixed', readOnly: true }"
				/>
			</div>

			<div class="box">
				<h2 class="title is-4">
					<i class="fas fa-exclamation-circle"></i> Common Issues & Solutions
				</h2>
				<div class="content">
					<ul>
						<li>
							<strong>Layout breaking on mobile:</strong> Use proper media queries and flexible units
						</li>
						<li>
							<strong>Animations not smooth:</strong> Use transform and opacity for better performance
						</li>
						<li>
							<strong>Images not loading:</strong> Implement proper error handling and fallbacks
						</li>
					</ul>
				</div>
			</div>

			<div class="box">
				<h2 class="title is-4">
					<i class="fas fa-tachometer-alt"></i> Performance Tips
				</h2>
				<div class="content">
					<ul>
						<li>Optimize and compress images</li>
						<li>Use appropriate image formats</li>
						<li>Minimize CSS animations on mobile</li>
						<li>Implement lazy loading for images</li>
					</ul>
				</div>
			</div>
		</div>

	
	</div>
</template>

<script setup>
import { ref } from 'vue';
import CodeMirror from '@/components/CodeMirror.vue';

const htmlStructure = ref(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Enhanced Personal Profile</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="profile-container">
    <header class="profile-header">
      <div class="profile-image">
        <img src="images/profile.jpg" alt="Profile picture" loading="lazy">
        <div class="image-overlay">
          <span class="edit-icon">Edit</span>
        </div>
      </div>
      <div class="profile-info">
        <h1>John Doe</h1>
        <p class="title">Full Stack Developer</p>
        <div class="social-links">
          <a href="#" aria-label="GitHub"><i class="fab fa-github"></i></a>
          <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
          <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
        </div>
      </div>
    </header>

    <main class="profile-content">
      <section class="about-section">
        <h2>About Me</h2>
        <p>Passionate developer with expertise in modern web technologies...</p>
      </section>

      <section class="skills-section">
        <h2>Skills</h2>
        <div class="skills-grid">
          <div class="skill-card">
            <i class="fab fa-html5"></i>
            <span>HTML5</span>
          </div>
          <div class="skill-card">
            <i class="fab fa-css3-alt"></i>
            <span>CSS3</span>
          </div>
          <div class="skill-card">
            <i class="fab fa-js"></i>
            <span>JavaScript</span>
          </div>
          <!-- Add more skill cards -->
        </div>
      </section>

      <section class="experience-section">
        <h2>Experience</h2>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-date">2020 - Present</div>
            <div class="timeline-content">
              <h3>Senior Developer</h3>
              <p>Company Name</p>
              <ul>
                <li>Led development team</li>
                <li>Implemented new features</li>
                <li>Improved performance</li>
              </ul>
            </div>
          </div>
          <!-- Add more timeline items -->
        </div>
      </section>
    </main>
  </div>
</body>
</html>`);

const baseStyles = ref(`/* CSS Variables */
:root {
  --primary-color: #4A90E2;
  --secondary-color: #2C3E50;
  --accent-color: #E74C3C;
  --text-color: #333;
  --light-gray: #F5F5F5;
  --dark-gray: #666;
  --white: #FFFFFF;
  --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  --transition-speed: 0.3s;
}

/* Reset & Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: var(--text-color);
  background-color: var(--light-gray);
}

/* Typography */
h1, h2, h3 {
  color: var(--secondary-color);
  margin-bottom: 1rem;
}

h1 {
  font-size: 2.5rem;
  font-weight: 700;
}

h2 {
  font-size: 2rem;
  font-weight: 600;
}

h3 {
  font-size: 1.5rem;
  font-weight: 500;
}

p {
  margin-bottom: 1rem;
}

/* Links */
a {
  color: var(--primary-color);
  text-decoration: none;
  transition: color var(--transition-speed);
}

a:hover {
  color: var(--accent-color);
}

/* Container */
.profile-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}`);

const layoutStyles = ref(`/* Header Styles */
.profile-header {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2rem;
  align-items: center;
  background-color: var(--white);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: var(--shadow);
  margin-bottom: 2rem;
}

.profile-image {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
}

.profile-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-speed);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--transition-speed);
}

.profile-image:hover .image-overlay {
  opacity: 1;
}

.profile-image:hover img {
  transform: scale(1.1);
}

.edit-icon {
  color: var(--white);
  font-weight: 500;
}

.profile-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.social-links a {
  color: var(--dark-gray);
  font-size: 1.5rem;
  transition: color var(--transition-speed);
}

.social-links a:hover {
  color: var(--primary-color);
}

/* Content Sections */
.profile-content {
  display: grid;
  gap: 2rem;
}

section {
  background-color: var(--white);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: var(--shadow);
}

/* Skills Grid */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.skill-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background-color: var(--light-gray);
  border-radius: 4px;
  transition: transform var(--transition-speed);
}

.skill-card:hover {
  transform: translateY(-5px);
}

.skill-card i {
  font-size: 2rem;
  color: var(--primary-color);
}

/* Timeline */
.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: var(--primary-color);
}

.timeline-item {
  position: relative;
  margin-bottom: 2rem;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -2rem;
  top: 0;
  width: 1rem;
  height: 1rem;
  background-color: var(--primary-color);
  border-radius: 50%;
}`);

const animations = ref(`/* Animations & Transitions */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.profile-header {
  animation: fadeIn 0.5s ease forwards;
}

section {
  animation: fadeIn 0.5s ease forwards;
}

section:nth-child(2) { animation-delay: 0.1s; }
section:nth-child(3) { animation-delay: 0.2s; }

/* Hover Effects */
.skill-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow);
}

.social-links a {
  transition: transform 0.3s ease;
}

.social-links a:hover {
  transform: translateY(-3px);
}

/* Smooth Scrolling */
html {
  scroll-behavior: smooth;
}`);

const responsiveDesign = ref(`/* Responsive Design */
@media (max-width: 1024px) {
  .profile-container {
    padding: 1rem;
  }

  .profile-header {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 1rem;
  }

  .profile-image {
    margin: 0 auto;
  }

  .social-links {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .profile-image {
    width: 150px;
    height: 150px;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.75rem;
  }

  .skills-grid {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }
}

@media (max-width: 480px) {
  .profile-header {
    padding: 1rem;
  }

  section {
    padding: 1rem;
  }

  .timeline {
    padding-left: 1.5rem;
  }

  .timeline-item::before {
    left: -1.5rem;
  }
}`);

const completeExample = ref(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Enhanced Personal Profile</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <style>
    /* CSS Variables */
    :root {
      --primary-color: #4A90E2;
      --secondary-color: #2C3E50;
      --accent-color: #E74C3C;
      --text-color: #333;
      --light-gray: #F5F5F5;
      --dark-gray: #666;
      --white: #FFFFFF;
      --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      --transition-speed: 0.3s;
    }

    /* Reset & Base Styles */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Arial', sans-serif;
      line-height: 1.6;
      color: var(--text-color);
      background-color: var(--light-gray);
    }

    /* Typography */
    h1, h2, h3 {
      color: var(--secondary-color);
      margin-bottom: 1rem;
    }

    h1 {
      font-size: 2.5rem;
      font-weight: 700;
    }

    h2 {
      font-size: 2rem;
      font-weight: 600;
    }

    h3 {
      font-size: 1.5rem;
      font-weight: 500;
    }

    p {
      margin-bottom: 1rem;
    }

    /* Links */
    a {
      color: var(--primary-color);
      text-decoration: none;
      transition: color var(--transition-speed);
    }

    a:hover {
      color: var(--accent-color);
    }

    /* Container */
    .profile-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }

    /* Header Styles */
    .profile-header {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 2rem;
      align-items: center;
      background-color: var(--white);
      padding: 2rem;
      border-radius: 8px;
      box-shadow: var(--shadow);
      margin-bottom: 2rem;
    }

    .profile-image {
      position: relative;
      width: 200px;
      height: 200px;
      border-radius: 50%;
      overflow: hidden;
    }

    .profile-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform var(--transition-speed);
    }

    .image-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity var(--transition-speed);
    }

    .profile-image:hover .image-overlay {
      opacity: 1;
    }

    .profile-image:hover img {
      transform: scale(1.1);
    }

    .edit-icon {
      color: var(--white);
      font-weight: 500;
    }

    .profile-info {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .social-links {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
    }

    .social-links a {
      color: var(--dark-gray);
      font-size: 1.5rem;
      transition: all 0.3s ease;
    }

    .social-links a:hover {
      color: var(--primary-color);
      transform: translateY(-3px);
    }

    /* Content Sections */
    .profile-content {
      display: grid;
      gap: 2rem;
    }

    section {
      background-color: var(--white);
      padding: 2rem;
      border-radius: 8px;
      box-shadow: var(--shadow);
    }

    /* Skills Grid */
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 1rem;
      margin-top: 1rem;
    }

    .skill-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem;
      background-color: var(--light-gray);
      border-radius: 4px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .skill-card:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow);
    }

    .skill-card i {
      font-size: 2rem;
      color: var(--primary-color);
    }

    /* Timeline */
    .timeline {
      position: relative;
      padding-left: 2rem;
    }

    .timeline::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 2px;
      background-color: var(--primary-color);
    }

    .timeline-item {
      position: relative;
      margin-bottom: 2rem;
    }

    .timeline-item::before {
      content: '';
      position: absolute;
      left: -2rem;
      top: 0;
      width: 1rem;
      height: 1rem;
      background-color: var(--primary-color);
      border-radius: 50%;
    }

    /* Animations */
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .profile-header {
      animation: fadeIn 0.5s ease forwards;
    }

    section {
      animation: fadeIn 0.5s ease forwards;
    }

    section:nth-child(2) { animation-delay: 0.1s; }
    section:nth-child(3) { animation-delay: 0.2s; }

    /* Responsive Design */
    @media (max-width: 1024px) {
      .profile-container {
        padding: 1rem;
      }

      .profile-header {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 1rem;
      }

      .profile-image {
        margin: 0 auto;
      }

      .social-links {
        justify-content: center;
      }
    }

    @media (max-width: 768px) {
      .profile-image {
        width: 150px;
        height: 150px;
      }

      h1 {
        font-size: 2rem;
      }

      h2 {
        font-size: 1.75rem;
      }

      .skills-grid {
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      }
    }

    @media (max-width: 480px) {
      .profile-header {
        padding: 1rem;
      }

      section {
        padding: 1rem;
      }

      .timeline {
        padding-left: 1.5rem;
      }

      .timeline-item::before {
        left: -1.5rem;
      }
    }
  </style>
</head>
<body>
  <div class="profile-container">
    <header class="profile-header">
      <div class="profile-image">
        <img src="images/profile.jpg" alt="Profile picture" loading="lazy">
        <div class="image-overlay">
          <span class="edit-icon">Edit</span>
        </div>
      </div>
      <div class="profile-info">
        <h1>John Doe</h1>
        <p class="title">Full Stack Developer</p>
        <div class="social-links">
          <a href="#" aria-label="GitHub"><i class="fab fa-github"></i></a>
          <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
          <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
        </div>
      </div>
    </header>

    <main class="profile-content">
      <section class="about-section">
        <h2>About Me</h2>
        <p>Passionate developer with expertise in modern web technologies. I love creating beautiful and functional web applications that provide great user experiences.</p>
      </section>

      <section class="skills-section">
        <h2>Skills</h2>
        <div class="skills-grid">
          <div class="skill-card">
            <i class="fab fa-html5"></i>
            <span>HTML5</span>
          </div>
          <div class="skill-card">
            <i class="fab fa-css3-alt"></i>
            <span>CSS3</span>
          </div>
          <div class="skill-card">
            <i class="fab fa-js"></i>
            <span>JavaScript</span>
          </div>
          <div class="skill-card">
            <i class="fab fa-react"></i>
            <span>React</span>
          </div>
          <div class="skill-card">
            <i class="fab fa-node"></i>
            <span>Node.js</span>
          </div>
          <div class="skill-card">
            <i class="fas fa-database"></i>
            <span>SQL</span>
          </div>
        </div>
      </section>

      <section class="experience-section">
        <h2>Experience</h2>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-date">2020 - Present</div>
            <div class="timeline-content">
              <h3>Senior Developer</h3>
              <p>Tech Company</p>
              <ul>
                <li>Led development team</li>
                <li>Implemented new features</li>
                <li>Improved performance</li>
              </ul>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">2018 - 2020</div>
            <div class="timeline-content">
              <h3>Full Stack Developer</h3>
              <p>Web Agency</p>
              <ul>
                <li>Developed web applications</li>
                <li>Worked with modern frameworks</li>
                <li>Optimized user experience</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</body>
</html>`);
</script>

<style scoped>
.container {
	max-width: 1200px;
	margin: 0 auto;
	padding: 2rem;
}

.steps {
	display: flex;
	flex-direction: column;
	gap: 2rem;
}

.step {
	background-color: #f5f5f5;
	padding: 1.5rem;
	border-radius: 8px;
}

.step h3 {
	margin-bottom: 1rem;
	color: #2c3e50;
}

.content ul {
	list-style-type: disc;
	margin-left: 1.5rem;
}

.content li {
	margin-bottom: 0.5rem;
}

.box {
	margin-bottom: 2rem;
}

.title {
	color: #2c3e50;
}

.subtitle {
	color: #666;
	margin-bottom: 2rem;
}
</style> 