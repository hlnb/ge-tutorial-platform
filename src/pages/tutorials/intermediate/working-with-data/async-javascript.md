---
title: Introduction to Async JavaScript
slug: intermediate/working-with-data/async-javascript
description: Learn why asynchronous JavaScript exists, how it works, and how Promises give you a clean way to handle code that takes time to complete.
section: Working with Data
sectionId: working-with-data
pathway: builder
category: intermediate
level: intermediate
order: 1
estimatedTime: 35
difficulty: intermediate
prerequisites:
  - intermediate/applied-javascript/state-and-ui-thinking
  - intermediate/applied-javascript/objects-for-real-features
previous: intermediate/applied-javascript/capstone-feature-build
next: intermediate/working-with-data/fetch-api
pathwayLanding: intermediate/working-with-data
tags:
  - javascript
  - async
  - promises
  - intermediate
hiddenFromCurriculum: false
---

<!-- ANCHOR HOOK -->

You've been writing JavaScript that runs line by line — one thing, then the next, then the next. That's fine for manipulating the DOM, validating a form, or building a to-do list. But what happens when your code needs to *wait*?

Ask yourself: what would happen if you clicked a button and your entire browser froze for three seconds while a slow database responded? No scrolling. No typing. Nothing. That's what synchronous JavaScript does when it hits something slow.

Async JavaScript is the answer. It lets your code say: "Go start this — come back to me when it's ready" — and carry on with everything else in the meantime.

This tutorial explains how that works, and introduces **Promises** — the foundation for all modern async patterns in JavaScript.

<!-- TODO: Add visual placeholder `public/assets/tutorials/working-with-data/async-flow-overview.svg` showing call stack, Web APIs, callback queue, and event loop handoff. -->

---

<!-- LEARNING OBJECTIVES -->

## What you'll learn

By the end of this tutorial you'll be able to:

- Explain what synchronous and asynchronous execution mean, and why the difference matters
- Describe what a Promise is and what the three states of a Promise represent
- Use `.then()` and `.catch()` to handle Promise results and errors
- Read and interpret async code with confidence before writing it

---

<!-- PREREQUISITES NOTE -->

> **Before you start:** You should be comfortable with functions, objects, and callbacks. If you've worked through the Applied JavaScript series — particularly *State and UI Thinking* and *Objects for Real Features* — you're in good shape.

---

## The problem: JavaScript only does one thing at a time

JavaScript is **single-threaded**. That means it has one call stack, and it processes one piece of code at a time, in order. This is fine for most tasks.

The problem arises when a task takes time — loading a file, querying a database, calling an API. If JavaScript ran those tasks synchronously, it would block everything else until they finished.

```js
// Imaginary synchronous fetch — do NOT do this
const data = slowNetworkRequest(); // everything freezes here
console.log(data);                 // only runs after the wait
```

In a browser, this means the UI freezes. The user can't click, scroll, or type. A three-second network request becomes a three-second dead interface.

The solution is to hand off slow work to the browser's Web APIs, which run separately from the JavaScript call stack. When the work is done, the result is returned to JavaScript via a **callback queue** and processed when the stack is free. This is the **event loop** model.

You don't need to fully understand the event loop mechanics to write good async code — but knowing it exists helps explain why async code *looks* different from synchronous code.

---

## Callbacks: the original async pattern

Before Promises, async code used **callbacks** — functions passed as arguments, to be called when work was done.

```js
function loadUser(id, callback) {
  setTimeout(() => {
    const user = { id, name: 'Helen' };
    callback(user);
  }, 1000);
}

loadUser(1, (user) => {
  console.log(user.name); // runs after 1 second
});
```

This works. But callbacks have a well-known problem: nesting. When one async operation depends on another, which depends on another, you end up with deeply nested, hard-to-read code — often called **callback hell**.

```js
loadUser(1, (user) => {
  loadPosts(user.id, (posts) => {
    loadComments(posts[0].id, (comments) => {
      // three levels deep and we're just getting started
    });
  });
});
```

Promises were introduced to solve this.

---

## What is a Promise?

A **Promise** is an object that represents the eventual result of an asynchronous operation. It doesn't have the result yet — it's a *promise* that a result will arrive.

You can think of it like ordering a coffee. The barista hands you a number. You haven't got the coffee yet, but you have a *promise* of coffee. You can keep moving around, do other things, and when your number is called, you collect it.

A Promise has three possible states:

| State | Meaning |
|-------|---------|
| **Pending** | The operation is in progress — no result yet |
| **Fulfilled** | The operation completed successfully — a result is available |
| **Rejected** | The operation failed — an error is available |

Once a Promise is fulfilled or rejected, it stays that way. It won't flip back to pending, and it won't change state again.

---

## Creating a Promise

You create a Promise with `new Promise()`, passing it an **executor function** with two parameters: `resolve` (call this when the work succeeds) and `reject` (call this when it fails).

```js
const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve('Here is your result');
  } else {
    reject('Something went wrong');
  }
});
```

In practice you'll rarely create Promises from scratch — most of the time you'll be working with Promises returned by built-in APIs like `fetch()`. But understanding how they're built helps you understand how they behave.

---

## Handling results with `.then()` and `.catch()`

Once you have a Promise, you handle its outcome using `.then()` for success and `.catch()` for errors.

```js
myPromise
  .then((result) => {
    console.log(result); // 'Here is your result'
  })
  .catch((error) => {
    console.log(error); // only runs if rejected
  });
```

`.then()` and `.catch()` both return new Promises, which means you can **chain** them — each step receives the result of the previous one.

```js
fetch('/api/user')
  .then((response) => response.json())   // step 1: parse the response
  .then((user) => {                       // step 2: use the parsed data
    console.log(user.name);
  })
  .catch((error) => {                     // catches any error in the chain
    console.error('Failed:', error);
  });
```

This flat chain is far more readable than nested callbacks — and it's the pattern `fetch()` is built on. You'll see it in the next tutorial.

---

## A complete example

Here's a self-contained example that simulates loading a user after a short delay:

```js
function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id, name: 'Helen', role: 'admin' });
      } else {
        reject(new Error('Invalid user ID'));
      }
    }, 800);
  });
}

getUser(1)
  .then((user) => {
    console.log(`Welcome, ${user.name}`);
  })
  .catch((error) => {
    console.error(error.message);
  });

console.log('This runs immediately — before the user loads');
```

Notice that the final `console.log` runs *before* the user loads. That's async in action: JavaScript doesn't stop and wait, it moves on and handles the result when it's ready.

---

<!-- CHECKPOINT BOX -->
<!-- CheckpointBox component -->

## Check your understanding

**1. What does "single-threaded" mean for JavaScript?**
JavaScript processes one piece of code at a time. It has one call stack and cannot run two things simultaneously.

**2. What are the three states of a Promise?**
Pending (in progress), Fulfilled (succeeded, result available), Rejected (failed, error available).

**3. What's the difference between `.then()` and `.catch()`?**
`.then()` runs when the Promise is fulfilled and receives the success result. `.catch()` runs when any Promise in the chain is rejected and receives the error.

**4. Why can you chain `.then()` calls?**
Because `.then()` itself returns a new Promise, passing its return value to the next step in the chain.

<!-- /CheckpointBox -->

---

<!-- GUIDED PRACTICE -->
<!-- GuidedPractice component -->

## Guided practice

You're going to build a small Promise-based function that simulates fetching a product, then log its details.

**Step 1 — Create the function**

Write a function called `getProduct` that accepts an `id` parameter and returns a Promise.

```js
function getProduct(id) {
  return new Promise((resolve, reject) => {
    // your code goes here
  });
}
```

**Step 2 — Add the async logic**

Inside the Promise, use `setTimeout` to simulate a 600ms delay. If `id` is a positive number, resolve with an object: `{ id, name: 'Espresso Machine', price: 299 }`. If `id` is 0 or negative, reject with `new Error('Product not found')`.

<details>
<summary>Hint</summary>

```js
setTimeout(() => {
  if (id > 0) {
    resolve({ id, name: 'Espresso Machine', price: 299 });
  } else {
    reject(new Error('Product not found'));
  }
}, 600);
```
</details>

**Step 3 — Call it with `.then()` and `.catch()`**

Call `getProduct(1)` and chain `.then()` to log the product name and price. Add `.catch()` to log the error message.

**Step 4 — Test the error case**

Call `getProduct(0)`. Confirm your `.catch()` handles it without crashing.

**Step 5 — Add a log before the call**

Add `console.log('Requesting product...')` *before* calling `getProduct`. Confirm it appears in the console *before* the product details — even though the delay is only 600ms.

<!-- /GuidedPractice -->

---

<!-- INDEPENDENT PRACTICE -->
<!-- IndependentPractice component -->

## Independent practice

Build a small **order status checker** using Promises.

**Requirements:**

- Write a function `checkOrderStatus(orderId)` that returns a Promise
- Simulate a 1-second delay with `setTimeout`
- If `orderId` is between 1000 and 9999 (a valid order number), resolve with an object: `{ orderId, status: 'dispatched', estimatedDelivery: '2 days' }`
- If `orderId` is outside that range, reject with `new Error('Order not found')`
- Call the function with a valid ID and log a readable message: e.g. *"Order 1042: dispatched — arrives in 2 days"*
- Call the function with an invalid ID and handle the error gracefully

**Success criteria:**

- [ ] `checkOrderStatus` returns a Promise
- [ ] Valid IDs resolve with the correct object shape
- [ ] Invalid IDs reject with a meaningful error message
- [ ] `.then()` produces a readable, formatted output
- [ ] `.catch()` handles the error without crashing
- [ ] A log before the function call confirms async timing

<!-- /IndependentPractice -->

---

## What's next

You can now read and write Promise-based async code. The next step is putting that to practical use with `fetch()` — the browser's built-in tool for making network requests and loading real data from APIs.

In the next tutorial you'll make your first HTTP request, handle the two-step response pattern, and start working with real data from an external source.

→ **Next: [fetch() and the Request/Response Cycle](./fetch-api)**
