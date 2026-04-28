---
title: fetch() and the Request/Response Cycle
slug: intermediate/working-with-data/fetch-api
description: Use the browser's built-in fetch() API to make HTTP requests, handle the two-step response pattern, and load real data from an external source.
section: Working with Data
sectionId: working-with-data
pathway: builder
category: intermediate
level: intermediate
order: 2
estimatedTime: 45
difficulty: intermediate
prerequisites:
  - intermediate/working-with-data/async-javascript
previous: intermediate/working-with-data/async-javascript
next: intermediate/working-with-data/working-with-json
pathwayLanding: intermediate/working-with-data
tags:
  - javascript
  - fetch
  - http
  - api
  - intermediate
hiddenFromCurriculum: false
---

<!-- ANCHOR HOOK -->

Every time you scroll a social media feed, search a product catalogue, or check the weather in a browser app, JavaScript is fetching data from a server. Not from the HTML file — from a separate data source, on demand, without reloading the page.

That's `fetch()`. It's the browser's built-in tool for making HTTP requests, and it's built entirely on Promises.

You already understand Promises. This tutorial puts them to work.

<!-- TODO: Add visual placeholder `public/assets/tutorials/working-with-data/fetch-request-response-cycle.svg` to show request, Response object, body parsing, and error checkpoints. -->

---

<!-- LEARNING OBJECTIVES -->

## What you'll learn

By the end of this tutorial you'll be able to:

- Use `fetch()` to make a GET request to a real API
- Explain why `fetch()` requires two `.then()` steps to get usable data
- Check whether a response was successful using `response.ok`
- Handle both network errors and HTTP errors correctly
- Read and interpret a `Response` object

---

> **Before you start:** This tutorial builds directly on *Introduction to Async JavaScript*. You should be comfortable with Promises and `.then()` / `.catch()` chaining before continuing.

---

## What is fetch()?

`fetch()` is a global browser function that sends an HTTP request and returns a **Promise** that resolves to a `Response` object.

```js
fetch('https://jsonplaceholder.typicode.com/users/1');
// returns a Promise<Response>
```

`jsonplaceholder.typicode.com` is a free fake API used for practice. It returns realistic-looking JSON data and requires no sign-up or API key — you'll use it throughout this section.

---

## The two-step response pattern

Here's the part that trips people up. When the Promise from `fetch()` resolves, you don't immediately have your data. You have a **Response object** — a wrapper that represents the HTTP response.

To get the actual data out of it, you need to call `.json()` on the response. And `.json()` is *also* async — it returns another Promise.

This means every basic `fetch()` call has two `.then()` steps:

```js
fetch('https://jsonplaceholder.typicode.com/users/1')
  .then((response) => response.json())   // Step 1: parse the body
  .then((data) => {                       // Step 2: use the data
    console.log(data);
  })
  .catch((error) => {
    console.error('Something went wrong:', error);
  });
```

**Why two steps?** The browser receives the HTTP response in a stream. The headers arrive first — before the body is fully downloaded. The first `.then()` fires when the headers arrive. `.json()` then reads the rest of the stream and parses it. It's efficient, but it does mean you always need both steps.

---

## Reading the Response object

Before you parse the body, the `Response` object gives you useful information about what came back from the server.

```js
fetch('https://jsonplaceholder.typicode.com/users/1')
  .then((response) => {
    console.log(response.status);     // 200
    console.log(response.ok);         // true (status 200–299)
    console.log(response.statusText); // 'OK'
    return response.json();
  })
  .then((data) => console.log(data));
```

The most important property is **`response.ok`** — a boolean that's `true` when the status code is in the 200–299 range (success) and `false` for anything else (404, 500, etc.).

---

## Handling errors properly

This is the most common mistake beginners make with `fetch()`:

> **`fetch()` does not reject on HTTP errors.**

If the server returns a 404 or 500, the Promise still *resolves* — because the network request itself succeeded. You get a Response object with `ok: false`, but no error is thrown.

Your `.catch()` only fires for genuine network failures — no internet connection, DNS failure, request blocked by CORS, and so on.

To handle HTTP errors correctly, check `response.ok` in the first `.then()` and throw an error manually if needed:

```js
fetch('https://jsonplaceholder.typicode.com/users/999')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error.message);
  });
```

By throwing inside `.then()`, you force the error into the `.catch()` handler — keeping all your error handling in one place.

---

## A complete, realistic example

Here's a function that fetches a list of posts and logs their titles. It follows the full pattern: two steps, `response.ok` check, and proper error handling.

```js
function loadPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to load posts: ${response.status}`);
      }
      return response.json();
    })
    .then((posts) => {
      posts.forEach((post) => {
        console.log(`[${post.id}] ${post.title}`);
      });
    })
    .catch((error) => {
      console.error('Error:', error.message);
    });
}

loadPosts();
```

The `?_limit=5` query parameter tells JSONPlaceholder to return only five posts. Most real APIs use similar query parameters for filtering and pagination.

---

## Returning data from a fetch function

You'll often want a reusable function that returns data rather than logging it. To do that, return the entire Promise chain:

```js
function getUser(id) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`User not found: ${response.status}`);
      }
      return response.json();
    });
}

// Now the caller decides what to do with the data
getUser(1)
  .then((user) => console.log(user.name))
  .catch((error) => console.error(error.message));
```

Notice there's no `.catch()` inside `getUser` — the function returns the Promise and lets the caller handle errors. This is a clean pattern: fetch functions fetch and parse, calling code decides what to do.

---

## What about POST requests?

`fetch()` defaults to a GET request. To send data to a server — creating a new resource — you pass a second argument with the request options:

```js
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    title: 'My new post',
    body: 'Post content here',
    userId: 1,
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data));
```

This tutorial focuses on GET requests because that's where you'll start when consuming data. POST, PUT, and DELETE follow the same pattern — just with different `method` values and a `body`.

---

<!-- CHECKPOINT BOX -->
<!-- CheckpointBox component -->

## Check your understanding

**1. Why does fetch() require two `.then()` steps to get usable data?**
The first step fires when the response headers arrive. `.json()` then reads the body stream and parses it asynchronously, which is why it also returns a Promise.

**2. What does `response.ok` tell you?**
It's `true` when the HTTP status code is in the 200–299 range (success), and `false` for any other status including 404 and 500.

**3. Why won't `.catch()` fire on a 404 response?**
Because `fetch()` only rejects on network-level failures (no connection, CORS block, DNS error). A 404 is a valid HTTP response — the request completed, the server just said "not found". You need to check `response.ok` and throw manually.

**4. What's the benefit of returning the Promise chain from a fetch function rather than logging inside it?**
It keeps the function focused on one job (fetch and parse), and lets the caller decide how to use or display the data. It also makes the function reusable in different contexts.

<!-- /CheckpointBox -->

---

<!-- GUIDED PRACTICE -->
<!-- GuidedPractice component -->

## Guided practice

You're going to fetch a list of users from JSONPlaceholder and display their names and email addresses.

**Step 1 — Write the fetch call**

Call `fetch('https://jsonplaceholder.typicode.com/users')` and chain the two-step response pattern.

**Step 2 — Add the `response.ok` check**

In the first `.then()`, check `response.ok`. If it's false, throw an error with the status code in the message.

**Step 3 — Log the data**

In the second `.then()`, receive the `users` array and use `forEach` to log each user's `name` and `email`. Format it as: `Helen Burgess — helen@example.com`.

<details>
<summary>Hint</summary>

```js
users.forEach((user) => {
  console.log(`${user.name} — ${user.email}`);
});
```
</details>

**Step 4 — Add `.catch()`**

Add a `.catch()` that logs `'Failed to load users: '` followed by the error message.

**Step 5 — Test the error case**

Change the URL to `'https://jsonplaceholder.typicode.com/nonexistent'`. Confirm your error handler fires and logs a useful message.

<!-- /GuidedPractice -->

---

<!-- INDEPENDENT PRACTICE -->
<!-- IndependentPractice component -->

## Independent practice

Build a **post loader** function that fetches posts for a specific user and returns their titles.

**Requirements:**

- Write a function `getPostsByUser(userId)` that accepts a user ID and returns a Promise
- Fetch from `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
- Check `response.ok` — throw a descriptive error if the request failed
- Return an array of post titles (strings), not the full post objects
- Call the function with userId `1` and log the resulting titles
- Call the function with an invalid URL path and confirm the error is handled

**Success criteria:**

- [ ] `getPostsByUser` returns a Promise
- [ ] The `response.ok` check is present and throws on failure
- [ ] The resolved value is an array of title strings, not raw post objects
- [ ] The calling code uses `.then()` to log the titles and `.catch()` to handle errors
- [ ] Tested with both a valid and invalid request

<!-- /IndependentPractice -->

---

## What's next

You can now fetch data from a real API and handle the full response lifecycle — including errors that `fetch()` won't catch on its own.

But raw JSON from an API often needs work before it's useful — filtering, reshaping, nesting. The next tutorial covers **working with JSON**: what it is, how to parse and stringify it, and the array methods you'll reach for every time you work with API data.

→ **Next: [Working with JSON](./working-with-json)**
