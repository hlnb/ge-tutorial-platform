---
title: async/await Patterns
slug: intermediate/working-with-data/async-await
description: Rewrite Promise chains as clean, readable async/await functions, handle errors with try/catch, and run multiple requests in parallel with Promise.all().
section: Working with Data
sectionId: working-with-data
pathway: builder
category: intermediate
level: intermediate
order: 4
estimatedTime: 40
difficulty: intermediate
prerequisites:
  - intermediate/working-with-data/working-with-json
previous: intermediate/working-with-data/working-with-json
next: intermediate/working-with-data/mini-project
pathwayLanding: intermediate/working-with-data
tags:
  - javascript
  - async
  - await
  - promises
  - intermediate
hiddenFromCurriculum: false
---

<!-- ANCHOR HOOK -->

Promise chains work. But after a few nested `.then()` calls, they start to look more like a ladder than code. Something like:

```js
getUser(1)
  .then((user) => getPosts(user.id))
  .then((posts) => getComments(posts[0].id))
  .then((comments) => render(comments))
  .catch((error) => handleError(error));
```

This is fine. But `async`/`await` lets you write the same logic so it reads top to bottom — like synchronous code — while staying fully asynchronous underneath:

```js
async function loadComments() {
  const user = await getUser(1);
  const posts = await getPosts(user.id);
  const comments = await getComments(posts[0].id);
  render(comments);
}
```

Same engine. Different syntax. This tutorial shows you how to use it.

---

<!-- LEARNING OBJECTIVES -->

## What you'll learn

By the end of this tutorial you'll be able to:

- Explain what `async` and `await` do and how they relate to Promises
- Rewrite a `.then()` chain as an `async`/`await` function
- Handle errors in async functions using `try`/`catch`
- Run multiple independent requests in parallel using `Promise.all()`
- Avoid the most common async/await mistakes

---

> **Before you start:** `async`/`await` is built on Promises — it's not a replacement, it's a cleaner way to write them. You should be comfortable with Promises and `.then()` chaining before reading this tutorial.

---

## The async keyword

Adding `async` before a function declaration does two things:

1. It allows you to use `await` inside that function
2. It makes the function **always return a Promise**

```js
async function greet() {
  return 'Hello';
}

greet().then((message) => console.log(message)); // 'Hello'
```

Even though `greet` just returns a plain string, `async` wraps it in a resolved Promise automatically. This means async functions always fit into Promise chains — you can call `.then()` on them.

---

## The await keyword

`await` pauses execution *within the async function* until a Promise resolves, then gives you the resolved value directly — no `.then()` needed.

```js
async function loadUser() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  const user = await response.json();
  console.log(user.name);
}
```

Compare this to the `.then()` version:

```js
function loadUser() {
  fetch('https://jsonplaceholder.typicode.com/users/1')
    .then((response) => response.json())
    .then((user) => console.log(user.name));
}
```

Same result. The `async`/`await` version reads like a simple sequence of steps — which is exactly what it is.

**Important:** `await` only pauses the *function* it's inside. The rest of your program keeps running. It doesn't freeze the browser.

---

## Error handling with try/catch

With `.then()` chains, you use `.catch()` for errors. With `async`/`await`, you use a standard `try`/`catch` block:

```js
async function loadUser(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const user = await response.json();
    console.log(user.name);

  } catch (error) {
    console.error('Failed to load user:', error.message);
  }
}
```

The `catch` block handles everything that could go wrong inside the `try` — network failures, the `response.ok` check, parsing errors, anything. One handler for all of it.

---

## Rewriting a Promise chain

Here's a direct before/after comparison — the same logic in both styles.

**Promise chain:**

```js
function loadPostTitles(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
      return response.json();
    })
    .then((posts) => posts.map((post) => post.title))
    .catch((error) => {
      console.error(error.message);
      return [];
    });
}
```

**async/await equivalent:**

```js
async function loadPostTitles(userId) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

    const posts = await response.json();
    return posts.map((post) => post.title);

  } catch (error) {
    console.error(error.message);
    return [];
  }
}
```

Both functions return a Promise that resolves to an array of titles (or an empty array on error). The `async`/`await` version is easier to follow, especially once the logic grows.

---

## Running requests in parallel

One common mistake with `async`/`await` is making requests sequential when they could run at the same time.

**Slow — sequential (each waits for the previous):**

```js
async function loadDashboard() {
  const user  = await getUser(1);    // wait...
  const posts = await getPosts(1);   // then wait...
  const todos = await getTodos(1);   // then wait...
  // Total time: sum of all three requests
}
```

If `getUser`, `getPosts`, and `getTodos` don't depend on each other, there's no reason to queue them. **`Promise.all()`** runs them in parallel and waits for all to finish:

**Fast — parallel:**

```js
async function loadDashboard() {
  const [user, posts, todos] = await Promise.all([
    getUser(1),
    getPosts(1),
    getTodos(1),
  ]);
  // Total time: the slowest single request
}
```

`Promise.all()` takes an array of Promises and returns a single Promise that resolves when all of them have resolved — giving you an array of results in the same order. If any one rejects, the whole thing rejects.

Here's a real example with `fetch`:

```js
async function loadUserWithPosts(userId) {
  try {
    const [userRes, postsRes] = await Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`),
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`),
    ]);

    if (!userRes.ok || !postsRes.ok) {
      throw new Error('One or more requests failed');
    }

    const [user, posts] = await Promise.all([
      userRes.json(),
      postsRes.json(),
    ]);

    return { user, posts };

  } catch (error) {
    console.error(error.message);
    return null;
  }
}
```

---

## Common mistakes

**Forgetting `await`**

Without `await`, you get the Promise object — not the resolved value:

```js
async function broken() {
  const response = fetch('https://jsonplaceholder.typicode.com/users/1'); // missing await
  console.log(response); // Promise { <pending> } — not the response
}
```

If your data looks like `Promise { <pending> }`, a missing `await` is almost always the cause.

**Using `await` outside an `async` function**

`await` is only valid inside an `async` function. Using it at the top level of a regular script will throw a syntax error (though modern environments support top-level `await` in ES modules).

```js
// This will throw in most contexts
const user = await getUser(1); // SyntaxError
```

Wrap it in an async function, or use an immediately invoked async function expression (IIFE):

```js
(async () => {
  const user = await getUser(1);
  console.log(user.name);
})();
```

**Making sequential requests when parallel is possible**

If two requests don't depend on each other's results, use `Promise.all()`. Sequential `await` calls for independent data is one of the most common performance issues in async JavaScript.

---

<!-- CHECKPOINT BOX -->
<!-- CheckpointBox component -->

## Check your understanding

**1. What does adding `async` to a function do?**
It allows the use of `await` inside the function, and makes the function always return a Promise — even if it returns a plain value.

**2. What does `await` actually do?**
It pauses execution within the async function until the awaited Promise resolves, then gives you the resolved value directly. It doesn't block the rest of the program.

**3. How does error handling differ between `.then()` chains and `async`/`await`?**
With `.then()` chains you add `.catch()` at the end. With `async`/`await` you use a `try`/`catch` block inside the function. Both catch the same errors.

**4. When should you use `Promise.all()` instead of sequential `await` calls?**
When the requests are independent — when one doesn't need the result of another to run. `Promise.all()` runs them in parallel, reducing total wait time to the slowest single request.

<!-- /CheckpointBox -->

---

<!-- GUIDED PRACTICE -->
<!-- GuidedPractice component -->

## Guided practice

You're going to rewrite an existing Promise chain as an `async`/`await` function, then extend it with parallel requests.

**Step 1 — Start with a Promise chain**

Copy this function into your editor:

```js
function getUserAndPosts(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
      return response.json();
    })
    .then((user) => {
      return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
        .then((response) => response.json())
        .then((posts) => ({ user, posts }));
    })
    .catch((error) => {
      console.error(error.message);
      return null;
    });
}
```

**Step 2 — Rewrite it as async/await**

Create a new function `getUserAndPostsAsync(userId)` that produces the same result using `async`/`await` and `try`/`catch`.

<details>
<summary>Hint — structure</summary>

```js
async function getUserAndPostsAsync(userId) {
  try {
    const userRes = await fetch(...);
    if (!userRes.ok) throw new Error(...);
    const user = await userRes.json();

    const postsRes = await fetch(...);
    const posts = await postsRes.json();

    return { user, posts };
  } catch (error) {
    console.error(error.message);
    return null;
  }
}
```
</details>

**Step 3 — Call it and log the results**

Call `getUserAndPostsAsync(1)` and log the user's name and the number of posts returned.

**Step 4 — Optimise with Promise.all()**

Notice that in your rewrite, the posts request waits for the user request to finish — but it doesn't need to, because you're passing the `userId` directly. Refactor to fetch both in parallel using `Promise.all()`.

<!-- /GuidedPractice -->

---

<!-- INDEPENDENT PRACTICE -->
<!-- IndependentPractice component -->

## Independent practice

Build an **async data loader** that fetches three independent resources in parallel and combines the results.

**Requirements:**

- Write an `async` function `loadSummary()` that uses `Promise.all()` to fetch simultaneously:
  - A single user: `https://jsonplaceholder.typicode.com/users/3`
  - Their posts: `https://jsonplaceholder.typicode.com/posts?userId=3`
  - Their todos: `https://jsonplaceholder.typicode.com/todos?userId=3`
- Use `try`/`catch` for error handling
- Check `response.ok` for each response and throw a descriptive error if any fail
- Return an object in this shape:
  ```js
  {
    name: user.name,
    postCount: posts.length,
    completedTodos: todos.filter(t => t.completed).length,
    pendingTodos: todos.filter(t => !t.completed).length
  }
  ```
- Call `loadSummary()` and log the result in a readable format

**Success criteria:**

- [ ] All three fetches run in parallel via `Promise.all()`
- [ ] All three responses are checked with `response.ok`
- [ ] `try`/`catch` handles errors without crashing
- [ ] The returned object has exactly the four properties listed
- [ ] The function is called and the result is logged clearly

<!-- /IndependentPractice -->

---

## What's next

You now have the full async toolkit: Promises, `fetch()`, JSON, and `async`/`await`. The final tutorial in this section puts it all together in a practical mini-project — fetching real data from a public API and rendering it to the page.

→ **Next: [Mini-project: Fetch and Display Live Data](./mini-project)**
