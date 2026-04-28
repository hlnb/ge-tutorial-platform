---
title: Working with JSON
slug: intermediate/working-with-data/working-with-json
description: Understand what JSON is, how to parse and stringify it, and how to use array methods to reshape and filter real API data into exactly what your UI needs.
section: Working with Data
sectionId: working-with-data
pathway: builder
category: intermediate
level: intermediate
order: 3
estimatedTime: 35
difficulty: intermediate
prerequisites:
  - intermediate/working-with-data/fetch-api
previous: intermediate/working-with-data/fetch-api
next: intermediate/working-with-data/async-await
pathwayLanding: intermediate/working-with-data
tags:
  - javascript
  - json
  - arrays
  - data
  - intermediate
hiddenFromCurriculum: false
---

<!-- ANCHOR HOOK -->

APIs don't send you a JavaScript object. They send you text — a long string of characters that *looks* like an object. Before you can use any of it, JavaScript needs to convert it. That conversion is called parsing, and the format it's parsing is **JSON**.

Understanding JSON isn't just about knowing its syntax. It's about knowing how to take a raw blob of data from an API — which is almost never in exactly the shape you need — and turn it into something your UI can actually use.

That's what this tutorial covers.

<!-- TODO: Add visual placeholder `public/assets/tutorials/working-with-data/json-reshape-pipeline.svg` comparing raw API JSON, parsed objects, and UI-ready mapped data. -->

---

<!-- LEARNING OBJECTIVES -->

## What you'll learn

By the end of this tutorial you'll be able to:

- Explain what JSON is and how it differs from a JavaScript object
- Use `JSON.parse()` and `JSON.stringify()` correctly
- Navigate and extract values from nested JSON structures
- Use `map()`, `filter()`, and `find()` to reshape and query API data
- Recognise and avoid the most common JSON gotchas

---

> **Before you start:** You should be comfortable with `fetch()` and the two-step response pattern from the previous tutorial. You'll also need a solid grasp of arrays and objects from the Applied JavaScript series.

---

## What is JSON?

**JSON** stands for JavaScript Object Notation. It's a text format for representing structured data — and it's the universal language of web APIs. When a server sends you data, it's almost always JSON.

JSON looks very much like a JavaScript object literal:

```json
{
  "id": 1,
  "name": "Helen Burgess",
  "email": "helen@example.com",
  "active": true,
  "score": null
}
```

But it's not an object. It's a **string**. A very structured string — but a string. That's why you need to parse it before you can work with it.

---

## JSON syntax rules

JSON is stricter than JavaScript object notation. A few key differences:

| Rule | JSON | JavaScript object |
|------|------|-------------------|
| Keys | Must be double-quoted strings | Can be unquoted identifiers |
| Strings | Double quotes only | Single or double quotes |
| Trailing commas | Not allowed | Allowed in modern JS |
| Functions | Not allowed | Allowed |
| `undefined` | Not allowed | Allowed |
| Comments | Not allowed | Allowed |

Valid JSON value types are: string, number, boolean, null, array, and object. That's it.

```json
{
  "title": "Espresso Machine",
  "price": 299,
  "inStock": true,
  "discount": null,
  "tags": ["coffee", "appliance"],
  "dimensions": {
    "width": 28,
    "height": 40
  }
}
```

---

## JSON.parse() — string to object

When you receive JSON from an API, you convert it to a JavaScript object using `JSON.parse()`:

```js
const jsonString = '{"name":"Helen","score":42}';

const user = JSON.parse(jsonString);
console.log(user.name);  // 'Helen'
console.log(user.score); // 42
```

When you use `fetch()` and call `.json()` on the response, this parsing happens for you automatically. But `JSON.parse()` is useful when you're reading JSON from local storage, a file, or any source that gives you a raw string.

If the string isn't valid JSON, `JSON.parse()` throws a `SyntaxError`. It's worth wrapping it in a try/catch when the source isn't guaranteed to be valid:

```js
try {
  const data = JSON.parse(rawString);
  console.log(data);
} catch (error) {
  console.error('Invalid JSON:', error.message);
}
```

---

## JSON.stringify() — object to string

To go the other direction — converting a JavaScript object into a JSON string — use `JSON.stringify()`:

```js
const user = { name: 'Helen', role: 'admin' };
const jsonString = JSON.stringify(user);

console.log(jsonString);         // '{"name":"Helen","role":"admin"}'
console.log(typeof jsonString);  // 'string'
```

You saw this in the previous tutorial when sending a POST request:

```js
body: JSON.stringify({ title: 'My post', userId: 1 })
```

`JSON.stringify()` also accepts optional arguments for formatting. A third argument of `2` adds readable indentation:

```js
console.log(JSON.stringify(user, null, 2));
// {
//   "name": "Helen",
//   "role": "admin"
// }
```

Useful for debugging — especially when you're logging complex nested objects.

---

## Navigating nested JSON

API responses are often deeply nested. Here's a realistic example:

```json
{
  "user": {
    "id": 1,
    "name": "Helen",
    "address": {
      "city": "Perth",
      "postcode": "6020"
    },
    "orders": [
      { "id": 101, "total": 89.50, "status": "delivered" },
      { "id": 102, "total": 145.00, "status": "pending" }
    ]
  }
}
```

Once parsed, you access nested values with dot notation and bracket notation exactly as you would any JavaScript object:

```js
const data = JSON.parse(jsonString);

console.log(data.user.name);              // 'Helen'
console.log(data.user.address.city);     // 'Perth'
console.log(data.user.orders[0].total);  // 89.50
console.log(data.user.orders[1].status); // 'pending'
```

When a path might not exist, optional chaining (`?.`) protects you from errors:

```js
console.log(data.user?.phone?.mobile); // undefined — no error thrown
```

---

## Reshaping data with array methods

API responses rarely arrive in the exact shape your UI needs. You'll almost always need to extract, filter, or transform the data before using it. This is where array methods earn their keep.

### `map()` — transform each item

Use `map()` to convert an array of objects into a new array of a different shape.

```js
const posts = [
  { id: 1, title: 'First post', body: '...', userId: 1 },
  { id: 2, title: 'Second post', body: '...', userId: 1 },
];

// Extract just the titles
const titles = posts.map((post) => post.title);
console.log(titles); // ['First post', 'Second post']

// Create a simpler object shape for the UI
const summaries = posts.map((post) => ({
  id: post.id,
  heading: post.title,
}));
```

### `filter()` — keep matching items

Use `filter()` to return only the items that meet a condition.

```js
const orders = [
  { id: 101, status: 'delivered', total: 89.50 },
  { id: 102, status: 'pending',   total: 145.00 },
  { id: 103, status: 'delivered', total: 32.00 },
];

const delivered = orders.filter((order) => order.status === 'delivered');
// [{ id: 101, ... }, { id: 103, ... }]

const over100 = orders.filter((order) => order.total > 100);
// [{ id: 102, ... }]
```

### `find()` — get one matching item

Use `find()` when you need a single item — by ID, for example.

```js
const users = [
  { id: 1, name: 'Helen' },
  { id: 2, name: 'Gordon' },
  { id: 3, name: 'Sue' },
];

const user = users.find((u) => u.id === 2);
console.log(user.name); // 'Gordon'
```

`find()` returns the first match, or `undefined` if nothing matches. Always check before using the result:

```js
const user = users.find((u) => u.id === 99);
if (user) {
  console.log(user.name);
} else {
  console.log('User not found');
}
```

### Combining methods

Methods chain together — and this is where they become powerful:

```js
fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((posts) => {
    // Get titles of the first 3 posts by user 1
    const result = posts
      .filter((post) => post.userId === 1)
      .slice(0, 3)
      .map((post) => post.title);

    console.log(result);
  });
```

---

## Common JSON gotchas

**1. `undefined` becomes nothing**

`JSON.stringify()` silently drops properties with `undefined` values:

```js
const obj = { name: 'Helen', phone: undefined };
JSON.stringify(obj); // '{"name":"Helen"}' — phone is gone
```

Use `null` when you want to represent "no value" in JSON.

**2. Dates are strings**

JSON has no Date type. Dates are serialised as ISO strings:

```js
JSON.stringify({ created: new Date() });
// '{"created":"2026-04-28T01:00:00.000Z"}'
```

When you parse them back, they're still strings — not Date objects. Convert them explicitly if you need date arithmetic:

```js
const created = new Date(data.created);
```

**3. Numbers can lose precision**

JSON handles standard numbers fine, but very large integers (e.g., database IDs from some systems) can lose precision when parsed. This is rarely a problem with typical web APIs, but worth knowing.

---

<!-- CHECKPOINT BOX -->
<!-- CheckpointBox component -->

## Check your understanding

**1. What's the key difference between a JSON string and a JavaScript object?**
JSON is text — a string. A JavaScript object is a data structure in memory. You convert between them with `JSON.parse()` (string → object) and `JSON.stringify()` (object → string).

**2. Why does `JSON.stringify()` drop `undefined` values?**
Because `undefined` is not a valid JSON value type. JSON only supports strings, numbers, booleans, null, arrays, and objects.

**3. When would you use `filter()` vs `find()`?**
Use `filter()` when you want all items that match a condition (returns an array). Use `find()` when you want the first single item that matches (returns one item or `undefined`).

**4. Why should you use `null` rather than `undefined` in data you're going to serialise?**
`undefined` is dropped by `JSON.stringify()`, so it can't be represented in JSON. `null` is a valid JSON value and survives the conversion intact.

<!-- /CheckpointBox -->

---

<!-- GUIDED PRACTICE -->
<!-- GuidedPractice component -->

## Guided practice

You're going to fetch a list of todos from JSONPlaceholder and reshape the data before displaying it.

**Step 1 — Fetch the todos**

Fetch from `https://jsonplaceholder.typicode.com/todos` with the full `response.ok` check pattern.

**Step 2 — Filter to completed items only**

Use `filter()` on the returned array to keep only todos where `completed === true`.

**Step 3 — Extract the titles**

Use `map()` on the filtered array to produce an array of title strings.

**Step 4 — Limit to the first 5**

Use `.slice(0, 5)` to keep only the first five results.

**Step 5 — Log the result**

Log the final array. You should see five completed todo titles.

<details>
<summary>Hint — chaining the methods</summary>

```js
const titles = todos
  .filter((todo) => todo.completed === true)
  .slice(0, 5)
  .map((todo) => todo.title);
```
</details>

**Step 6 — Stringify for inspection**

Log `JSON.stringify(titles, null, 2)` and compare it to the plain `console.log` output. Notice the difference in how it displays.

<!-- /GuidedPractice -->

---

<!-- INDEPENDENT PRACTICE -->
<!-- IndependentPractice component -->

## Independent practice

Build a **user directory** from API data.

**Requirements:**

- Fetch users from `https://jsonplaceholder.typicode.com/users`
- Use `map()` to reshape each user into this simpler object:
  ```js
  {
    id: user.id,
    name: user.name,
    city: user.address.city,
    company: user.company.name
  }
  ```
- Use `filter()` to keep only users whose company name includes the word `'LLC'`
- Log the filtered, reshaped array using `JSON.stringify()` with indentation
- Add a `find()` call that looks up a specific user by `id` from the *original* unfiltered array and logs their full name and email

**Success criteria:**

- [ ] The fetch uses the full `response.ok` pattern
- [ ] Each item in the reshaped array has exactly the four properties listed above
- [ ] The filter correctly matches company names containing `'LLC'`
- [ ] The `find()` lookup targets a specific ID and guards against `undefined`
- [ ] All output is readable — use `JSON.stringify` with indentation where helpful

<!-- /IndependentPractice -->

---

## What's next

You can now fetch data, parse it, and reshape it into exactly the form your code needs. The next step is making that code cleaner and easier to read.

`async`/`await` is syntactic sugar built on top of Promises — the same engine, a different way of writing it. Most modern codebases prefer it because it reads more like synchronous code while staying fully async.

→ **Next: [async/await Patterns](./async-await)**
