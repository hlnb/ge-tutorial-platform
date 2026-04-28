---
title: "Mini-project: Fetch and Display Live Data"
slug: intermediate/working-with-data/mini-project
description: Pull everything together — fetch real data from a public API, reshape it with array methods, render it to the DOM, and handle loading and error states like a professional.
section: Working with Data
sectionId: working-with-data
pathway: builder
category: intermediate
level: intermediate
order: 5
estimatedTime: 60
difficulty: intermediate
prerequisites:
  - intermediate/working-with-data/async-await
previous: intermediate/working-with-data/async-await
next: intermediate/frameworks-101/what-is-a-framework-really
pathwayLanding: intermediate/working-with-data
tags:
  - javascript
  - fetch
  - async
  - dom
  - project
  - intermediate
hiddenFromCurriculum: false
---

<!-- ANCHOR HOOK -->

The previous four tutorials gave you the pieces. This one puts them together into something real.

You're going to build **World Explorer** — a small web app that fetches country data from a live public API, displays it as a card grid, and lets users filter by region. No frameworks, no libraries, no build tools. Just HTML, CSS, and the async JavaScript skills you've built up in this section.

By the time you're done, you'll have a complete working example of the most common pattern in modern web development: *fetch data → reshape it → render it to the UI.*

---

<!-- LEARNING OBJECTIVES -->

## What you'll practise

- Fetching data from a real public API using `async`/`await`
- Navigating nested JSON and reshaping data with `map()`
- Rendering dynamic HTML to the DOM from an array of objects
- Handling loading states and errors in a UI
- Filtering rendered content in response to user input

---

> **Before you start:** This project assumes you've worked through the whole Working with Data section. You'll be using all of it — Promises, `fetch()`, JSON, and `async`/`await` — in a single codebase.

---

## What you're building

A page that:

1. Shows a loading message while data fetches
2. Renders a grid of country cards — each with a flag, country name, capital city, population, and region
3. Lets the user filter cards by region using buttons
4. Shows a friendly error message if the fetch fails

The data comes from the **REST Countries API** (`restcountries.com`) — a free, public API with no sign-up or API key required.

---

## Project setup

Create a new project folder with three files:

```
world-explorer/
├── index.html
├── style.css
└── app.js
```

**`index.html`**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>World Explorer</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>World Explorer</h1>
    <p>Browse countries by region</p>
  </header>

  <nav id="filter-bar">
    <button class="filter-btn active" data-region="all">All</button>
    <button class="filter-btn" data-region="Africa">Africa</button>
    <button class="filter-btn" data-region="Americas">Americas</button>
    <button class="filter-btn" data-region="Asia">Asia</button>
    <button class="filter-btn" data-region="Europe">Europe</button>
    <button class="filter-btn" data-region="Oceania">Oceania</button>
  </nav>

  <main>
    <div id="status"></div>
    <div id="card-grid"></div>
  </main>

  <script src="app.js"></script>
</body>
</html>
```

**`style.css`**

```css
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: #f4f4f5;
  color: #18181b;
  min-height: 100vh;
}

header {
  padding: 2rem;
  background: #1d4ed8;
  color: white;
}

header h1 { font-size: 1.75rem; font-weight: 700; }
header p  { font-size: 0.9rem; opacity: 0.8; margin-top: 0.25rem; }

#filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 1.25rem 2rem;
  background: white;
  border-bottom: 1px solid #e4e4e7;
}

.filter-btn {
  padding: 0.4rem 1rem;
  border: 1px solid #d4d4d8;
  border-radius: 6px;
  background: white;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.15s;
}

.filter-btn:hover  { background: #f4f4f5; }
.filter-btn.active { background: #1d4ed8; color: white; border-color: #1d4ed8; }

main { padding: 2rem; }

#status {
  text-align: center;
  padding: 3rem;
  color: #71717a;
  font-size: 0.95rem;
}

#card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.25rem;
}

.card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
  transition: transform 0.15s, box-shadow 0.15s;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.12);
}

.card-flag {
  width: 100%;
  height: 140px;
  object-fit: cover;
  display: block;
  background: #f4f4f5;
}

.card-body { padding: 1rem; }
.card-name  { font-size: 1rem; font-weight: 600; margin-bottom: 0.5rem; }
.card-detail { font-size: 0.8rem; color: #52525b; margin-top: 0.2rem; }

.card-region {
  display: inline-block;
  margin-top: 0.75rem;
  padding: 0.2rem 0.6rem;
  background: #eff6ff;
  color: #1d4ed8;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
}

.error {
  background: #fef2f2;
  color: #b91c1c;
  padding: 1.25rem;
  border-radius: 8px;
  text-align: center;
}
```

---

## Step 1 — Fetch the data

Open `app.js`. Start with the fetch function. You're requesting a filtered set of fields to keep the response lean:

```js
const API_URL = 'https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags';

async function fetchCountries() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(`Failed to load countries: ${response.status}`);
  }

  return response.json();
}
```

This function returns a Promise that resolves to the raw API data. Notice there's no `try`/`catch` here — that belongs in the calling code, which decides what to do with the error.

---

## Step 2 — Understand the data shape

Before rendering, it's worth understanding what the API sends back. Each country object looks like this:

```json
{
  "name": {
    "common": "Australia",
    "official": "Commonwealth of Australia"
  },
  "capital": ["Canberra"],
  "population": 25687041,
  "region": "Oceania",
  "flags": {
    "png": "https://flagcdn.com/w320/au.png",
    "alt": "The flag of Australia..."
  }
}
```

A few things to note:

- `name` is an object — you want `name.common`
- `capital` is an **array** — use `capital[0]` to get the city string, and guard against countries with no capital
- `population` is a raw number — you'll want to format it for display
- `flags.png` is the image URL; `flags.alt` is the accessible description

---

## Step 3 — Reshape the data

Write a function that converts raw API data into a clean, flat array — only the fields you need:

```js
function reshapeCountries(rawData) {
  return rawData
    .map((country) => ({
      name: country.name.common,
      capital: country.capital?.[0] ?? 'No capital listed',
      population: country.population.toLocaleString(),
      region: country.region,
      flagUrl: country.flags.png,
      flagAlt: country.flags.alt ?? `Flag of ${country.name.common}`,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}
```

`optional chaining` (`?.`) handles countries that have no capital array. The nullish coalescing operator (`??`) provides a fallback. `toLocaleString()` formats the population number with commas. `.sort()` with `localeCompare` gives you alphabetical order.

---

## Step 4 — Render a single card

Write a function that takes one country object and returns an HTML string:

```js
function createCard(country) {
  return `
    <article class="card">
      <img
        class="card-flag"
        src="${country.flagUrl}"
        alt="${country.flagAlt}"
        loading="lazy"
      />
      <div class="card-body">
        <h2 class="card-name">${country.name}</h2>
        <p class="card-detail">🏛 ${country.capital}</p>
        <p class="card-detail">👥 ${country.population}</p>
        <span class="card-region">${country.region}</span>
      </div>
    </article>
  `;
}
```

`loading="lazy"` defers image loading until the card is near the viewport — important when you're rendering hundreds of images at once.

---

## Step 5 — Render all cards

Write a function that takes an array of countries and renders them into the grid:

```js
const grid   = document.getElementById('card-grid');
const status = document.getElementById('status');

function renderCards(countries) {
  if (countries.length === 0) {
    grid.innerHTML = '';
    status.textContent = 'No countries found for this region.';
    return;
  }

  status.innerHTML = '';
  grid.innerHTML = countries.map(createCard).join('');
}
```

`countries.map(createCard)` passes each country to `createCard` and collects the resulting HTML strings. `.join('')` combines them into one string for insertion.

---

## Step 6 — Handle loading and error states

```js
function showLoading() {
  status.textContent = 'Loading countries…';
  grid.innerHTML = '';
}

function showError(message) {
  status.innerHTML = `<div class="error">${message}</div>`;
  grid.innerHTML = '';
}
```

Short, focused, single-purpose functions. Each one owns one UI state.

---

## Step 7 — Wire it together

Now write the main `init` function that runs when the page loads:

```js
let allCountries = []; // store fetched data so filtering doesn't re-fetch

async function init() {
  showLoading();

  try {
    const rawData = await fetchCountries();
    allCountries = reshapeCountries(rawData);
    renderCards(allCountries);
  } catch (error) {
    showError(`Couldn't load country data. ${error.message}`);
  }
}

init();
```

The `allCountries` variable stores the full dataset so filtering can work on it without a second network request.

---

## Step 8 — Add region filtering

```js
const filterBar = document.getElementById('filter-bar');

filterBar.addEventListener('click', (event) => {
  const btn = event.target.closest('.filter-btn');
  if (!btn) return;

  // Update active button
  document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
  btn.classList.add('active');

  // Filter and render
  const region = btn.dataset.region;
  const filtered = region === 'all'
    ? allCountries
    : allCountries.filter((c) => c.region === region);

  renderCards(filtered);
});
```

This uses **event delegation** — one listener on the parent `#filter-bar` instead of six listeners on individual buttons. `closest('.filter-btn')` finds the clicked button even if the click lands on a child element.

---

## The complete app.js

Here's the full file for reference:

```js
const API_URL = 'https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags';

const grid   = document.getElementById('card-grid');
const status = document.getElementById('status');
const filterBar = document.getElementById('filter-bar');

let allCountries = [];

// --- Data ---

async function fetchCountries() {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}

function reshapeCountries(rawData) {
  return rawData
    .map((country) => ({
      name:       country.name.common,
      capital:    country.capital?.[0] ?? 'No capital listed',
      population: country.population.toLocaleString(),
      region:     country.region,
      flagUrl:    country.flags.png,
      flagAlt:    country.flags.alt ?? `Flag of ${country.name.common}`,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

// --- UI ---

function showLoading() {
  status.textContent = 'Loading countries…';
  grid.innerHTML = '';
}

function showError(message) {
  status.innerHTML = `<div class="error">${message}</div>`;
  grid.innerHTML = '';
}

function createCard(country) {
  return `
    <article class="card">
      <img class="card-flag" src="${country.flagUrl}" alt="${country.flagAlt}" loading="lazy" />
      <div class="card-body">
        <h2 class="card-name">${country.name}</h2>
        <p class="card-detail">🏛 ${country.capital}</p>
        <p class="card-detail">👥 ${country.population}</p>
        <span class="card-region">${country.region}</span>
      </div>
    </article>
  `;
}

function renderCards(countries) {
  if (countries.length === 0) {
    grid.innerHTML = '';
    status.textContent = 'No countries found for this region.';
    return;
  }
  status.innerHTML = '';
  grid.innerHTML = countries.map(createCard).join('');
}

// --- Init ---

async function init() {
  showLoading();
  try {
    const rawData = await fetchCountries();
    allCountries = reshapeCountries(rawData);
    renderCards(allCountries);
  } catch (error) {
    showError(`Couldn't load country data. ${error.message}`);
  }
}

filterBar.addEventListener('click', (event) => {
  const btn = event.target.closest('.filter-btn');
  if (!btn) return;
  document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
  btn.classList.add('active');
  const region = btn.dataset.region;
  const filtered = region === 'all'
    ? allCountries
    : allCountries.filter((c) => c.region === region);
  renderCards(filtered);
});

init();
```

---

<!-- CHECKPOINT BOX -->
<!-- CheckpointBox component -->

## Check your understanding

**1. Why is `allCountries` declared outside `init()` rather than inside it?**
So the filtering event listener can access the full dataset without triggering a second network request. Data fetched once, used many times.

**2. Why is there no `try`/`catch` inside `fetchCountries()`?**
The function's job is to fetch and parse — not to decide what to do with errors. Keeping error handling in `init()` (the calling code) makes each function responsible for one thing.

**3. What does `event.target.closest('.filter-btn')` do that `event.target` alone doesn't?**
`event.target` is whatever was clicked — which might be a child element inside the button (like a text node). `closest()` walks up the DOM to find the nearest matching ancestor, so the click registers correctly regardless of where exactly on the button the user clicked.

**4. What does `toLocaleString()` do to the population number?**
It formats the number with locale-appropriate thousands separators — so `25687041` becomes `25,687,041` in an en-AU context. Makes large numbers readable without manual string formatting.

<!-- /CheckpointBox -->

---

<!-- INDEPENDENT PRACTICE -->
<!-- IndependentPractice component -->

## Independent practice

Extend World Explorer with one or more of the following features. Each one applies skills from this section in a slightly different way.

**Option A — Search by name**

Add a text input above the card grid. As the user types, filter `allCountries` to show only countries whose name includes the search string (case-insensitive). The region filter and search should work together — searching should filter within the currently selected region.

**Option B — Sort controls**

Add a `<select>` dropdown with options: *Name (A–Z)*, *Name (Z–A)*, *Population (high to low)*, *Population (low to high)*. When the selection changes, re-sort and re-render the current filtered list.

**Option C — Country detail panel**

When a card is clicked, fetch detailed data for that country from `https://restcountries.com/v3.1/name/${country.name}?fullText=true` and display it in a side panel or modal — including languages, currencies, and bordering countries.

**Success criteria (for whichever option you choose):**

- [ ] The feature works alongside existing filtering — it doesn't break region buttons
- [ ] Loading and error states are still handled correctly
- [ ] No second full fetch of all countries is triggered
- [ ] The UI updates without a page reload
- [ ] The code follows the same patterns established in the base project (separate data and UI functions, async/await, response.ok checks)

<!-- /IndependentPractice -->

---

## Section complete

You've finished the Working with Data section. Here's what you can now do:

- Write async JavaScript with confidence — Promises, `async`/`await`, error handling
- Fetch data from real APIs using `fetch()` with proper response and error checking
- Parse, navigate, and reshape JSON using `map()`, `filter()`, `find()`, and `sort()`
- Render dynamic data to the DOM and respond to user interaction
- Handle loading and error states in a UI

These skills sit at the centre of almost every front-end project you'll build from here. The next section — Frameworks 101 — builds directly on them. As you'll see, the reason frameworks exist is largely to make patterns like this one easier to manage at scale.

→ **Next: [Frameworks 101](../frameworks-101/what-is-a-framework-really)**
