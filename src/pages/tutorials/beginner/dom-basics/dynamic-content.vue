<template>
  <div class="tutorial-content">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li>
          <router-link to="/"><i class="fa-solid fa-house mr-2"></i> Home</router-link>
        </li>
        <li><router-link to="/tutorials">Tutorials</router-link></li>
        <li>
          <router-link to="/tutorials/beginner/dom-basics">DOM Basics</router-link>
        </li>
        <li class="is-active">
          <a href="#" aria-current="page">Dynamic Content</a>
        </li>
      </ul>
    </nav>

    <div class="tags mb-4">
      <span class="tag is-info">Beginner</span>
      <span class="tag is-warning">45 minutes</span>
      <span class="tag is-success">JavaScript</span>
      <span class="tag is-success">DOM</span>
    </div>

    <div class="content">
      <h1>
        <span class="js-lesson-icon" aria-hidden="true">DOM</span>
        Dynamic Content
      </h1>

      <!-- ═══════════════════════════════════════════════════ -->
      <!-- HUNTER ELEMENT 1: ANTICIPATORY SET                -->
      <!-- ═══════════════════════════════════════════════════ -->
      <AnticipatorySet
        title="Making Pages Come Alive"
        icon="✨"
        :hook="`<p>Think about the last time you used a to-do app. You typed a task, pressed Enter, and it appeared in the list. You clicked a delete button and it vanished. You dragged it to reorder. At no point did the page reload.</p><p>All of that happens because JavaScript can <strong>create, insert, update, and remove HTML elements on the fly</strong>. This is <em>dynamic content</em> \u2014 and it\u2019s the technique that powers every modern web application, from social media feeds to shopping carts to dashboards.</p><p>In this lesson you\u2019ll learn to build elements from scratch, batch them efficiently, and manage lists of dynamic content without performance pitfalls.</p>`"
      />

      <!-- ═══════════════════════════════════════════════════ -->
      <!-- HUNTER ELEMENT 2: LEARNING OBJECTIVES             -->
      <!-- ═══════════════════════════════════════════════════ -->
      <LearningObjectives
        :objectives="[
          'Create new DOM elements with document.createElement()',
          'Set attributes, classes, and text content on created elements',
          'Insert elements at specific positions using append, prepend, before, and after',
          'Use DocumentFragment to batch multiple insertions for better performance',
          'Build dynamic lists with add and delete functionality',
          'Use template literals to generate HTML strings safely',
          'Clone elements with cloneNode() for repeating patterns',
          'Apply best practices for updating the DOM efficiently',
        ]"
      />

      <!-- ═══════════════════════════════════════════════════ -->
      <!-- SECTION 1: CREATING ELEMENTS                      -->
      <!-- ═══════════════════════════════════════════════════ -->
      <section id="creating-elements">
        <h2><i class="fas fa-plus-circle mr-2"></i>Creating Elements</h2>
        <p>
          The <code>document.createElement()</code> method creates a new HTML element in memory.
          It doesn&rsquo;t appear on the page until you insert it into the DOM.
        </p>

        <div class="code-example">
          <pre v-pre><code><span class="comment">// Step 1: Create the element</span>
<span class="keyword">const</span> <span class="variable">card</span> = <span class="variable">document</span>.<span class="function">createElement</span>(<span class="string">'div'</span>);

<span class="comment">// Step 2: Configure it</span>
<span class="variable">card</span>.<span class="variable">className</span> = <span class="string">'card'</span>;
<span class="variable">card</span>.<span class="variable">id</span> = <span class="string">'user-card-1'</span>;
<span class="variable">card</span>.<span class="function">setAttribute</span>(<span class="string">'data-user-id'</span>, <span class="string">'42'</span>);

<span class="comment">// Step 3: Add content</span>
<span class="variable">card</span>.<span class="variable">textContent</span> = <span class="string">'Hello, World!'</span>;
<span class="comment">// Or use innerHTML for HTML content:</span>
<span class="comment">// card.innerHTML = '&lt;h3&gt;Hello&lt;/h3&gt;&lt;p&gt;World&lt;/p&gt;';</span>

<span class="comment">// Step 4: Insert into the page</span>
<span class="variable">document</span>.<span class="function">querySelector</span>(<span class="string">'.container'</span>).<span class="function">appendChild</span>(<span class="variable">card</span>);</code></pre>
        </div>

        <h3>Building Complex Elements</h3>
        <p>For elements with child nodes, create each piece separately and assemble them:</p>
        <div class="code-example">
          <pre v-pre><code><span class="keyword">function</span> <span class="function">createUserCard</span>(<span class="variable">user</span>) {
  <span class="keyword">const</span> <span class="variable">card</span> = <span class="variable">document</span>.<span class="function">createElement</span>(<span class="string">'article'</span>);
  <span class="variable">card</span>.<span class="variable">className</span> = <span class="string">'user-card'</span>;

  <span class="keyword">const</span> <span class="variable">heading</span> = <span class="variable">document</span>.<span class="function">createElement</span>(<span class="string">'h3'</span>);
  <span class="variable">heading</span>.<span class="variable">textContent</span> = <span class="variable">user</span>.<span class="variable">name</span>;

  <span class="keyword">const</span> <span class="variable">email</span> = <span class="variable">document</span>.<span class="function">createElement</span>(<span class="string">'p'</span>);
  <span class="variable">email</span>.<span class="variable">textContent</span> = <span class="variable">user</span>.<span class="variable">email</span>;

  <span class="keyword">const</span> <span class="variable">deleteBtn</span> = <span class="variable">document</span>.<span class="function">createElement</span>(<span class="string">'button'</span>);
  <span class="variable">deleteBtn</span>.<span class="variable">textContent</span> = <span class="string">'Delete'</span>;
  <span class="variable">deleteBtn</span>.<span class="variable">className</span> = <span class="string">'btn-delete'</span>;

  <span class="variable">card</span>.<span class="function">append</span>(<span class="variable">heading</span>, <span class="variable">email</span>, <span class="variable">deleteBtn</span>);
  <span class="keyword">return</span> <span class="variable">card</span>;
}</code></pre>
        </div>

        <div class="notification is-info is-light">
          <p><i class="fas fa-info-circle mr-2"></i><strong>append vs appendChild:</strong> <code>append()</code> accepts multiple arguments and can insert text strings. <code>appendChild()</code> only accepts one node. Prefer <code>append()</code> for modern code.</p>
        </div>
      </section>

      <!-- ═══════════════════════════════════════════════════ -->
      <!-- SECTION 2: INSERTION METHODS                      -->
      <!-- ═══════════════════════════════════════════════════ -->
      <section id="insertion-methods">
        <h2><i class="fas fa-arrows-alt mr-2"></i>Insertion Methods</h2>
        <p>
          Modern JavaScript gives you precise control over where a new element lands
          relative to an existing one:
        </p>

        <table class="table is-bordered is-striped is-fullwidth">
          <thead>
            <tr>
              <th>Method</th>
              <th>Where it inserts</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>parent.append(el)</code></td>
              <td>Inside parent, after last child</td>
              <td>Add item to end of list</td>
            </tr>
            <tr>
              <td><code>parent.prepend(el)</code></td>
              <td>Inside parent, before first child</td>
              <td>Add item to start of list</td>
            </tr>
            <tr>
              <td><code>sibling.before(el)</code></td>
              <td>Right before the sibling</td>
              <td>Insert row above current</td>
            </tr>
            <tr>
              <td><code>sibling.after(el)</code></td>
              <td>Right after the sibling</td>
              <td>Insert row below current</td>
            </tr>
            <tr>
              <td><code>el.replaceWith(newEl)</code></td>
              <td>Replaces el entirely</td>
              <td>Swap a loading spinner for content</td>
            </tr>
          </tbody>
        </table>

        <div class="code-example">
          <pre v-pre><code><span class="keyword">const</span> <span class="variable">list</span> = <span class="variable">document</span>.<span class="function">querySelector</span>(<span class="string">'ul'</span>);
<span class="keyword">const</span> <span class="variable">newItem</span> = <span class="variable">document</span>.<span class="function">createElement</span>(<span class="string">'li'</span>);
<span class="variable">newItem</span>.<span class="variable">textContent</span> = <span class="string">'New task'</span>;

<span class="comment">// Add to the end</span>
<span class="variable">list</span>.<span class="function">append</span>(<span class="variable">newItem</span>);

<span class="comment">// Add to the beginning</span>
<span class="variable">list</span>.<span class="function">prepend</span>(<span class="variable">newItem</span>);

<span class="comment">// Insert before a specific item</span>
<span class="keyword">const</span> <span class="variable">thirdItem</span> = <span class="variable">list</span>.<span class="variable">children</span>[<span class="number">2</span>];
<span class="variable">thirdItem</span>.<span class="function">before</span>(<span class="variable">newItem</span>);</code></pre>
        </div>
      </section>

      <!-- ═══════════════════════════════════════════════════ -->
      <!-- CHECKPOINT 1                                       -->
      <!-- ═══════════════════════════════════════════════════ -->
      <CheckpointBox :questions="checkpointCreating" />

      <!-- ═══════════════════════════════════════════════════ -->
      <!-- SECTION 3: DOCUMENT FRAGMENT                      -->
      <!-- ═══════════════════════════════════════════════════ -->
      <section id="document-fragment">
        <h2><i class="fas fa-layer-group mr-2"></i>DocumentFragment: Batch Insertions</h2>
        <p>
          Every time you insert an element into the DOM, the browser recalculates layout and repaints.
          If you&rsquo;re adding 50 items one by one, that&rsquo;s 50 recalculations. A <code>DocumentFragment</code>
          lets you build everything in memory first, then insert it all at once &mdash; only one recalculation.
        </p>

        <div class="columns is-multiline">
          <div class="column is-6">
            <div class="box" style="border-left: 4px solid #e74c3c;">
              <h4 class="title is-5"><i class="fas fa-times-circle mr-2" style="color: #e74c3c;"></i>Slow: One by One</h4>
              <div class="code-example">
                <pre v-pre><code><span class="comment">// ❌ 100 separate DOM updates</span>
<span class="keyword">const</span> <span class="variable">list</span> = <span class="variable">document</span>.<span class="function">querySelector</span>(<span class="string">'ul'</span>);

<span class="variable">users</span>.<span class="function">forEach</span>(<span class="variable">user</span> => {
  <span class="keyword">const</span> <span class="variable">li</span> = <span class="variable">document</span>.<span class="function">createElement</span>(<span class="string">'li'</span>);
  <span class="variable">li</span>.<span class="variable">textContent</span> = <span class="variable">user</span>.<span class="variable">name</span>;
  <span class="variable">list</span>.<span class="function">appendChild</span>(<span class="variable">li</span>);
});</code></pre>
              </div>
            </div>
          </div>
          <div class="column is-6">
            <div class="box" style="border-left: 4px solid #2ecc71;">
              <h4 class="title is-5"><i class="fas fa-check-circle mr-2" style="color: #2ecc71;"></i>Fast: Batch with Fragment</h4>
              <div class="code-example">
                <pre v-pre><code><span class="comment">// ✅ 1 DOM update</span>
<span class="keyword">const</span> <span class="variable">list</span> = <span class="variable">document</span>.<span class="function">querySelector</span>(<span class="string">'ul'</span>);
<span class="keyword">const</span> <span class="variable">fragment</span> = <span class="variable">document</span>.<span class="function">createDocumentFragment</span>();

<span class="variable">users</span>.<span class="function">forEach</span>(<span class="variable">user</span> => {
  <span class="keyword">const</span> <span class="variable">li</span> = <span class="variable">document</span>.<span class="function">createElement</span>(<span class="string">'li'</span>);
  <span class="variable">li</span>.<span class="variable">textContent</span> = <span class="variable">user</span>.<span class="variable">name</span>;
  <span class="variable">fragment</span>.<span class="function">appendChild</span>(<span class="variable">li</span>);
});

<span class="variable">list</span>.<span class="function">appendChild</span>(<span class="variable">fragment</span>);</code></pre>
              </div>
            </div>
          </div>
        </div>

        <div class="notification is-success is-light">
          <p><i class="fas fa-bolt mr-2"></i><strong>Performance rule of thumb:</strong> If you&rsquo;re adding more than 3&ndash;5 elements at once, use a DocumentFragment. The browser only does one layout calculation instead of one per element.</p>
        </div>
      </section>

      <!-- ═══════════════════════════════════════════════════ -->
      <!-- SECTION 4: DYNAMIC LISTS                          -->
      <!-- ═══════════════════════════════════════════════════ -->
      <section id="dynamic-lists">
        <h2><i class="fas fa-list mr-2"></i>Building Dynamic Lists</h2>
        <p>
          The most common dynamic content pattern is a list that users can add to and
          delete from. Here&rsquo;s a complete, production-quality pattern:
        </p>

        <div class="code-example">
          <pre v-pre><code><span class="keyword">const</span> <span class="variable">form</span> = <span class="variable">document</span>.<span class="function">querySelector</span>(<span class="string">'#todo-form'</span>);
<span class="keyword">const</span> <span class="variable">input</span> = <span class="variable">document</span>.<span class="function">querySelector</span>(<span class="string">'#todo-input'</span>);
<span class="keyword">const</span> <span class="variable">list</span> = <span class="variable">document</span>.<span class="function">querySelector</span>(<span class="string">'#todo-list'</span>);

<span class="comment">// Add a new item on form submit</span>
<span class="variable">form</span>.<span class="function">addEventListener</span>(<span class="string">'submit'</span>, (<span class="variable">e</span>) => {
  <span class="variable">e</span>.<span class="function">preventDefault</span>();
  <span class="keyword">const</span> <span class="variable">text</span> = <span class="variable">input</span>.<span class="variable">value</span>.<span class="function">trim</span>();
  <span class="keyword">if</span> (!<span class="variable">text</span>) <span class="keyword">return</span>;

  <span class="keyword">const</span> <span class="variable">li</span> = <span class="variable">document</span>.<span class="function">createElement</span>(<span class="string">'li'</span>);
  <span class="variable">li</span>.<span class="variable">className</span> = <span class="string">'todo-item'</span>;
  <span class="variable">li</span>.<span class="variable">innerHTML</span> = <span class="string">`
    &lt;span class="todo-text"&gt;${text}&lt;/span&gt;
    &lt;button class="btn-delete" aria-label="Delete"&gt;&amp;times;&lt;/button&gt;
  `</span>;

  <span class="variable">list</span>.<span class="function">appendChild</span>(<span class="variable">li</span>);
  <span class="variable">input</span>.<span class="variable">value</span> = <span class="string">''</span>;
  <span class="variable">input</span>.<span class="function">focus</span>();
});

<span class="comment">// Delete items using event delegation</span>
<span class="variable">list</span>.<span class="function">addEventListener</span>(<span class="string">'click'</span>, (<span class="variable">e</span>) => {
  <span class="keyword">if</span> (<span class="variable">e</span>.<span class="variable">target</span>.<span class="function">matches</span>(<span class="string">'.btn-delete'</span>)) {
    <span class="variable">e</span>.<span class="variable">target</span>.<span class="function">closest</span>(<span class="string">'li'</span>).<span class="function">remove</span>();
  }
});</code></pre>
        </div>

        <div class="notification is-warning is-light">
          <p><i class="fas fa-shield-alt mr-2"></i><strong>Security note:</strong> When using <code>innerHTML</code> with user input, always sanitise the input first to prevent XSS attacks. For plain text, prefer <code>textContent</code> which is always safe. The example above uses <code>innerHTML</code> only for the predefined button markup &mdash; the user text should be escaped or set via <code>textContent</code> on the span separately.</p>
        </div>
      </section>

      <!-- ═══════════════════════════════════════════════════ -->
      <!-- CHECKPOINT 2                                       -->
      <!-- ═══════════════════════════════════════════════════ -->
      <CheckpointBox :questions="checkpointDynamic" />

      <!-- ═══════════════════════════════════════════════════ -->
      <!-- SECTION 5: CLONING ELEMENTS                       -->
      <!-- ═══════════════════════════════════════════════════ -->
      <section id="cloning-elements">
        <h2><i class="fas fa-clone mr-2"></i>Cloning Elements</h2>
        <p>
          When you need multiple copies of a complex element, <code>cloneNode()</code> is faster
          than calling <code>createElement()</code> for each piece:
        </p>

        <div class="code-example">
          <pre v-pre><code><span class="comment">// Create a template element once</span>
<span class="keyword">const</span> <span class="variable">template</span> = <span class="variable">document</span>.<span class="function">createElement</span>(<span class="string">'div'</span>);
<span class="variable">template</span>.<span class="variable">className</span> = <span class="string">'card'</span>;
<span class="variable">template</span>.<span class="variable">innerHTML</span> = <span class="string">`
  &lt;img class="card-image" src="" alt=""&gt;
  &lt;div class="card-body"&gt;
    &lt;h3 class="card-title"&gt;&lt;/h3&gt;
    &lt;p class="card-text"&gt;&lt;/p&gt;
  &lt;/div&gt;
`</span>;

<span class="comment">// Clone it for each item (true = deep clone with children)</span>
<span class="variable">products</span>.<span class="function">forEach</span>(<span class="variable">product</span> => {
  <span class="keyword">const</span> <span class="variable">card</span> = <span class="variable">template</span>.<span class="function">cloneNode</span>(<span class="keyword">true</span>);

  <span class="variable">card</span>.<span class="function">querySelector</span>(<span class="string">'.card-image'</span>).<span class="variable">src</span> = <span class="variable">product</span>.<span class="variable">image</span>;
  <span class="variable">card</span>.<span class="function">querySelector</span>(<span class="string">'.card-image'</span>).<span class="variable">alt</span> = <span class="variable">product</span>.<span class="variable">name</span>;
  <span class="variable">card</span>.<span class="function">querySelector</span>(<span class="string">'.card-title'</span>).<span class="variable">textContent</span> = <span class="variable">product</span>.<span class="variable">name</span>;
  <span class="variable">card</span>.<span class="function">querySelector</span>(<span class="string">'.card-text'</span>).<span class="variable">textContent</span> = <span class="variable">product</span>.<span class="variable">description</span>;

  <span class="variable">container</span>.<span class="function">appendChild</span>(<span class="variable">card</span>);
});</code></pre>
        </div>

        <h3>Using HTML &lt;template&gt; Elements</h3>
        <p>
          HTML has a built-in <code>&lt;template&gt;</code> element designed exactly for this pattern.
          Its contents are parsed but not rendered until you clone them:
        </p>
        <div class="code-example">
          <pre v-pre><code><span class="comment">// In your HTML:</span>
<span class="comment">// &lt;template id="card-template"&gt;</span>
<span class="comment">//   &lt;div class="card"&gt;...&lt;/div&gt;</span>
<span class="comment">// &lt;/template&gt;</span>

<span class="keyword">const</span> <span class="variable">template</span> = <span class="variable">document</span>.<span class="function">querySelector</span>(<span class="string">'#card-template'</span>);

<span class="variable">products</span>.<span class="function">forEach</span>(<span class="variable">product</span> => {
  <span class="comment">// Clone the template content</span>
  <span class="keyword">const</span> <span class="variable">clone</span> = <span class="variable">template</span>.<span class="variable">content</span>.<span class="function">cloneNode</span>(<span class="keyword">true</span>);

  <span class="comment">// Fill in the data</span>
  <span class="variable">clone</span>.<span class="function">querySelector</span>(<span class="string">'.card-title'</span>).<span class="variable">textContent</span> = <span class="variable">product</span>.<span class="variable">name</span>;

  <span class="variable">container</span>.<span class="function">appendChild</span>(<span class="variable">clone</span>);
});</code></pre>
        </div>
      </section>

      <!-- ═══════════════════════════════════════════════════ -->
      <!-- SECTION 6: UPDATING VS REPLACING                  -->
      <!-- ═══════════════════════════════════════════════════ -->
      <section id="updating-content">
        <h2><i class="fas fa-sync-alt mr-2"></i>Updating vs Replacing Content</h2>
        <p>
          When data changes, you have two options: update existing elements in place, or
          tear everything down and rebuild. Each approach has trade-offs:
        </p>

        <div class="columns is-multiline">
          <div class="column is-6">
            <div class="box">
              <h4 class="title is-5">Update in Place</h4>
              <ul>
                <li><i class="fas fa-check mr-1" style="color: #2ecc71;"></i>Preserves scroll position and focus</li>
                <li><i class="fas fa-check mr-1" style="color: #2ecc71;"></i>Smooth transitions possible</li>
                <li><i class="fas fa-times mr-1" style="color: #e74c3c;"></i>More complex code</li>
                <li><i class="fas fa-times mr-1" style="color: #e74c3c;"></i>Must track what changed</li>
              </ul>
            </div>
          </div>
          <div class="column is-6">
            <div class="box">
              <h4 class="title is-5">Replace Entirely</h4>
              <ul>
                <li><i class="fas fa-check mr-1" style="color: #2ecc71;"></i>Simpler code</li>
                <li><i class="fas fa-check mr-1" style="color: #2ecc71;"></i>Guaranteed correct state</li>
                <li><i class="fas fa-times mr-1" style="color: #e74c3c;"></i>Loses scroll position and focus</li>
                <li><i class="fas fa-times mr-1" style="color: #e74c3c;"></i>Can be slower for large lists</li>
              </ul>
            </div>
          </div>
        </div>

        <h3>Update in Place Example</h3>
        <div class="code-example">
          <pre v-pre><code><span class="keyword">function</span> <span class="function">updatePrice</span>(<span class="variable">productId</span>, <span class="variable">newPrice</span>) {
  <span class="keyword">const</span> <span class="variable">card</span> = <span class="variable">document</span>.<span class="function">querySelector</span>(<span class="string">`[data-id="${productId}"]`</span>);
  <span class="keyword">if</span> (!<span class="variable">card</span>) <span class="keyword">return</span>;

  <span class="keyword">const</span> <span class="variable">priceEl</span> = <span class="variable">card</span>.<span class="function">querySelector</span>(<span class="string">'.price'</span>);
  <span class="variable">priceEl</span>.<span class="variable">textContent</span> = <span class="string">`$${newPrice.toFixed(2)}`</span>;
  <span class="variable">priceEl</span>.<span class="variable">classList</span>.<span class="function">add</span>(<span class="string">'price-updated'</span>);
}</code></pre>
        </div>

        <h3>Replace Entirely Example</h3>
        <div class="code-example">
          <pre v-pre><code><span class="keyword">function</span> <span class="function">renderProducts</span>(<span class="variable">products</span>) {
  <span class="keyword">const</span> <span class="variable">container</span> = <span class="variable">document</span>.<span class="function">querySelector</span>(<span class="string">'.products'</span>);
  <span class="keyword">const</span> <span class="variable">fragment</span> = <span class="variable">document</span>.<span class="function">createDocumentFragment</span>();

  <span class="variable">products</span>.<span class="function">forEach</span>(<span class="variable">product</span> => {
    <span class="variable">fragment</span>.<span class="function">appendChild</span>(<span class="function">createProductCard</span>(<span class="variable">product</span>));
  });

  <span class="comment">// Clear and replace in one go</span>
  <span class="variable">container</span>.<span class="variable">innerHTML</span> = <span class="string">''</span>;
  <span class="variable">container</span>.<span class="function">appendChild</span>(<span class="variable">fragment</span>);
}</code></pre>
        </div>
      </section>

      <!-- ═══════════════════════════════════════════════════ -->
      <!-- SECTION 7: REAL-WORLD EXAMPLE                     -->
      <!-- ═══════════════════════════════════════════════════ -->
      <section id="real-world">
        <h2><i class="fas fa-globe mr-2"></i>Real-World Example: Comment Section</h2>
        <p>
          Let&rsquo;s put it all together with a comment section that creates, renders, and
          deletes comments dynamically:
        </p>

        <div class="code-example">
          <pre v-pre><code><span class="keyword">const</span> <span class="variable">commentForm</span> = <span class="variable">document</span>.<span class="function">querySelector</span>(<span class="string">'#comment-form'</span>);
<span class="keyword">const</span> <span class="variable">commentList</span> = <span class="variable">document</span>.<span class="function">querySelector</span>(<span class="string">'#comments'</span>);
<span class="keyword">const</span> <span class="variable">commentCount</span> = <span class="variable">document</span>.<span class="function">querySelector</span>(<span class="string">'#comment-count'</span>);

<span class="keyword">function</span> <span class="function">createComment</span>(<span class="variable">text</span>, <span class="variable">author</span>) {
  <span class="keyword">const</span> <span class="variable">comment</span> = <span class="variable">document</span>.<span class="function">createElement</span>(<span class="string">'article'</span>);
  <span class="variable">comment</span>.<span class="variable">className</span> = <span class="string">'comment'</span>;

  <span class="keyword">const</span> <span class="variable">header</span> = <span class="variable">document</span>.<span class="function">createElement</span>(<span class="string">'header'</span>);
  <span class="keyword">const</span> <span class="variable">nameEl</span> = <span class="variable">document</span>.<span class="function">createElement</span>(<span class="string">'strong'</span>);
  <span class="variable">nameEl</span>.<span class="variable">textContent</span> = <span class="variable">author</span>;
  <span class="keyword">const</span> <span class="variable">timeEl</span> = <span class="variable">document</span>.<span class="function">createElement</span>(<span class="string">'time'</span>);
  <span class="variable">timeEl</span>.<span class="variable">textContent</span> = <span class="keyword">new</span> <span class="function">Date</span>().<span class="function">toLocaleString</span>();
  <span class="variable">header</span>.<span class="function">append</span>(<span class="variable">nameEl</span>, <span class="string">' \u2014 '</span>, <span class="variable">timeEl</span>);

  <span class="keyword">const</span> <span class="variable">body</span> = <span class="variable">document</span>.<span class="function">createElement</span>(<span class="string">'p'</span>);
  <span class="variable">body</span>.<span class="variable">textContent</span> = <span class="variable">text</span>;

  <span class="keyword">const</span> <span class="variable">deleteBtn</span> = <span class="variable">document</span>.<span class="function">createElement</span>(<span class="string">'button'</span>);
  <span class="variable">deleteBtn</span>.<span class="variable">textContent</span> = <span class="string">'Delete'</span>;
  <span class="variable">deleteBtn</span>.<span class="variable">className</span> = <span class="string">'btn-delete'</span>;

  <span class="variable">comment</span>.<span class="function">append</span>(<span class="variable">header</span>, <span class="variable">body</span>, <span class="variable">deleteBtn</span>);
  <span class="keyword">return</span> <span class="variable">comment</span>;
}

<span class="keyword">function</span> <span class="function">updateCount</span>() {
  <span class="variable">commentCount</span>.<span class="variable">textContent</span> = <span class="variable">commentList</span>.<span class="variable">children</span>.<span class="variable">length</span>;
}

<span class="comment">// Add comment</span>
<span class="variable">commentForm</span>.<span class="function">addEventListener</span>(<span class="string">'submit'</span>, (<span class="variable">e</span>) => {
  <span class="variable">e</span>.<span class="function">preventDefault</span>();
  <span class="keyword">const</span> <span class="variable">text</span> = <span class="variable">commentForm</span>.<span class="function">querySelector</span>(<span class="string">'textarea'</span>).<span class="variable">value</span>.<span class="function">trim</span>();
  <span class="keyword">if</span> (!<span class="variable">text</span>) <span class="keyword">return</span>;

  <span class="variable">commentList</span>.<span class="function">prepend</span>(<span class="function">createComment</span>(<span class="variable">text</span>, <span class="string">'You'</span>));
  <span class="function">updateCount</span>();
  <span class="variable">commentForm</span>.<span class="function">reset</span>();
});

<span class="comment">// Delete comment (event delegation)</span>
<span class="variable">commentList</span>.<span class="function">addEventListener</span>(<span class="string">'click'</span>, (<span class="variable">e</span>) => {
  <span class="keyword">if</span> (<span class="variable">e</span>.<span class="variable">target</span>.<span class="function">matches</span>(<span class="string">'.btn-delete'</span>)) {
    <span class="variable">e</span>.<span class="variable">target</span>.<span class="function">closest</span>(<span class="string">'.comment'</span>).<span class="function">remove</span>();
    <span class="function">updateCount</span>();
  }
});</code></pre>
        </div>

        <div class="notification is-info is-light">
          <p><i class="fas fa-lightbulb mr-2"></i><strong>Notice the patterns:</strong> We use <code>createElement</code> + <code>textContent</code> (safe from XSS), <code>prepend</code> to add newest first, event delegation for delete buttons, and <code>closest()</code> to find the parent comment from the button click.</p>
        </div>
      </section>

      <!-- ═══════════════════════════════════════════════════ -->
      <!-- CHECKPOINT 3                                       -->
      <!-- ═══════════════════════════════════════════════════ -->
      <CheckpointBox :questions="checkpointPatterns" />

      <!-- ═══════════════════════════════════════════════════ -->
      <!-- HUNTER ELEMENT 5: GUIDED PRACTICE                 -->
      <!-- ═══════════════════════════════════════════════════ -->
      <section id="guided-practice">
        <h2><i class="fas fa-laptop-code mr-2"></i>Guided Practice: Dynamic Product Gallery</h2>
        <GuidedPractice
          title="Build a Dynamic Product Gallery"
          :steps="guidedPracticeSteps"
          :success-criteria="[
            'Products render from a data array using DocumentFragment',
            'New products can be added via a form',
            'Products can be deleted with event delegation',
            'A counter updates automatically when products are added or removed',
            'HTML template element is used for the card structure',
          ]"
        />
      </section>

      <!-- ═══════════════════════════════════════════════════ -->
      <!-- HUNTER ELEMENT 6: INDEPENDENT PRACTICE            -->
      <!-- ═══════════════════════════════════════════════════ -->
      <section id="independent-practice">
        <h2><i class="fas fa-code mr-2"></i>Independent Practice</h2>
        <IndependentPractice
          task="<p>Build a <strong>dynamic task board</strong> (like a simplified Trello). The board should have three columns: To Do, In Progress, and Done. Users should be able to add tasks, move them between columns, and delete them \u2014 all without page reloads.</p>"
          :requirements="[
            'Three columns rendered dynamically from data',
            'Add new tasks to the To Do column via a form',
            'Move tasks between columns using forward/back buttons on each task',
            'Delete tasks with a delete button',
            'Use DocumentFragment when initially rendering tasks',
            'Use event delegation for all button clicks',
            'Display task counts for each column that update automatically',
          ]"
          :stretch-goals="[
            'Persist tasks to localStorage so they survive page reloads',
            'Add drag-and-drop to move tasks between columns',
            'Add a filter input that shows/hides tasks by keyword',
            'Add colour-coded priority labels to tasks',
          ]"
          :rubric="[
            { criteria: 'Elements are created with createElement', success: 'No innerHTML with user data \u2014 textContent is used for user input' },
            { criteria: 'DocumentFragment used for batch rendering', success: 'Initial render uses a fragment, not individual appends' },
            { criteria: 'Event delegation on columns', success: 'One listener per column handles all task buttons' },
            { criteria: 'Tasks move between columns', success: 'Forward/back buttons move the task element to the correct column' },
            { criteria: 'Counts update dynamically', success: 'Column headers show current task count, updated on every add/move/delete' },
          ]"
        />
      </section>

      <!-- ═══════════════════════════════════════════════════ -->
      <!-- HUNTER ELEMENT: CLOSURE                           -->
      <!-- ═══════════════════════════════════════════════════ -->
      <section id="summary">
        <ClosureSection
          :key-takeaways="closureKeyTakeaways"
          :objectives="closureObjectives"
          :reflection-prompts="closureReflectionPrompts"
          :real-world-application="closureRealWorld"
          :next-steps="closureNextSteps"
        />
      </section>

      <TutorialRecommendations current-path="/tutorials/beginner/dom-basics/dynamic-content" />
    </div>
  </div>
</template>

<script setup>
import '@/assets/styles/tutorials.css';
import { usePageSections } from '@/composables/usePageSections';
import AnticipatorySet from '@/components/hunter/AnticipatorySet.vue';
import LearningObjectives from '@/components/hunter/LearningObjectives.vue';
import CheckpointBox from '@/components/hunter/CheckpointBox.vue';
import GuidedPractice from '@/components/hunter/GuidedPractice.vue';
import IndependentPractice from '@/components/hunter/IndependentPractice.vue';
import ClosureSection from '@/components/hunter/ClosureSection.vue';
import TutorialRecommendations from '@/components/TutorialRecommendations.vue';

// ── Sidebar sections ─────────────────────────────────────────────
usePageSections([
  { id: 'creating-elements', title: 'Creating Elements' },
  { id: 'insertion-methods', title: 'Insertion Methods' },
  { id: 'document-fragment', title: 'DocumentFragment' },
  { id: 'dynamic-lists', title: 'Dynamic Lists' },
  { id: 'cloning-elements', title: 'Cloning Elements' },
  { id: 'updating-content', title: 'Updating vs Replacing' },
  { id: 'real-world', title: 'Real-World Example' },
  { id: 'guided-practice', title: 'Guided Practice' },
  { id: 'independent-practice', title: 'Independent Practice' },
  { id: 'summary', title: 'Summary' },
]);

// ── Checkpoint 1: Creating & Inserting ────────────────────────────
const checkpointCreating = [
  {
    question: 'What is the difference between append() and appendChild()?',
    answer: 'append() can take multiple arguments and accepts both nodes and text strings. appendChild() takes only one node argument. append() is the modern, more flexible method.',
  },
  {
    question: 'A newly created element with createElement() is not visible on the page. Why?',
    answer: 'createElement() creates the element in memory only. You must insert it into the DOM using a method like append(), prepend(), before(), after(), or appendChild() for it to appear.',
  },
  {
    question: 'What is the difference between prepend() and before()?',
    answer: 'prepend() inserts inside the target element as its first child. before() inserts as a sibling immediately before the target element. They place content at different levels of the DOM tree.',
  },
];

// ── Checkpoint 2: Dynamic Lists & Fragments ──────────────────────
const checkpointDynamic = [
  {
    question: 'Why is DocumentFragment better than appending elements one by one?',
    answer: 'Each append to the live DOM triggers a layout recalculation and repaint. DocumentFragment collects all elements in memory first, then inserts them all in one operation \u2014 only one recalculation happens.',
  },
  {
    question: 'Why should you use event delegation for delete buttons on dynamic list items?',
    answer: 'Event delegation uses one listener on the parent, so it automatically works for items added after the listener was set up. Without it, you\u2019d need to add a new listener every time you create an item.',
  },
  {
    question: 'Why is textContent safer than innerHTML for user-provided content?',
    answer: 'textContent treats everything as plain text, so HTML and script tags are displayed as text. innerHTML parses and executes HTML, which can lead to cross-site scripting (XSS) attacks if the content comes from a user.',
  },
];

// ── Checkpoint 3: Patterns ────────────────────────────────────────
const checkpointPatterns = [
  {
    question: 'When should you update elements in place vs replace them entirely?',
    answer: 'Update in place when you need to preserve scroll position, focus, or run smooth transitions. Replace entirely when the data has changed so much that updating individual elements would be more complex than rebuilding.',
  },
  {
    question: 'What advantage does the HTML \u003Ctemplate\u003E element have over creating a template with createElement?',
    answer: 'The \u003Ctemplate\u003E element\u2019s content is parsed by the browser but never rendered, so it\u2019s validated HTML. It also keeps the structure in the HTML file where designers and other developers can easily see and edit it.',
  },
  {
    question: 'What does cloneNode(true) do differently from cloneNode(false)?',
    answer: 'cloneNode(true) creates a deep clone \u2014 the element and all its children. cloneNode(false) only clones the element itself, without any of its child nodes or content.',
  },
];

// ── Guided Practice Steps ─────────────────────────────────────────
const guidedPracticeSteps = [
  {
    title: 'Create the HTML structure',
    instructions: '<p>Create a file called <code>gallery.html</code> with a product form and gallery container:</p><pre><code>\u003C!DOCTYPE html\u003E\n\u003Chtml lang="en"\u003E\n\u003Chead\u003E\n  \u003Cmeta charset="UTF-8"\u003E\n  \u003Ctitle\u003EProduct Gallery\u003C/title\u003E\n  \u003Cstyle\u003E\n    .gallery { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1rem; padding: 1rem; }\n    .product-card { border: 1px solid #ddd; border-radius: 8px; padding: 1rem; }\n    .product-card h3 { margin: 0 0 0.5rem; }\n    .btn-delete { background: #e74c3c; color: white; border: none; padding: 0.3rem 0.8rem; border-radius: 4px; cursor: pointer; }\n    .product-count { color: #666; }\n  \u003C/style\u003E\n\u003C/head\u003E\n\u003Cbody\u003E\n  \u003Ch1\u003EProduct Gallery \u003Cspan class="product-count"\u003E(0 products)\u003C/span\u003E\u003C/h1\u003E\n  \u003Cform id="product-form"\u003E\n    \u003Cinput name="name" placeholder="Product name" required\u003E\n    \u003Cinput name="price" type="number" step="0.01" placeholder="Price" required\u003E\n    \u003Cbutton type="submit"\u003EAdd Product\u003C/button\u003E\n  \u003C/form\u003E\n  \u003Ctemplate id="card-template"\u003E\n    \u003Cdiv class="product-card"\u003E\n      \u003Ch3 class="card-name"\u003E\u003C/h3\u003E\n      \u003Cp class="card-price"\u003E\u003C/p\u003E\n      \u003Cbutton class="btn-delete"\u003EDelete\u003C/button\u003E\n    \u003C/div\u003E\n  \u003C/template\u003E\n  \u003Cdiv class="gallery"\u003E\u003C/div\u003E\n  \u003Cscript src="gallery.js"\u003E\u003C/script\u003E\n\u003C/body\u003E\n\u003C/html\u003E</code></pre>',
    hints: ['Notice the \u003Ctemplate\u003E element \u2014 its content is invisible but ready to be cloned.'],
  },
  {
    title: 'Render initial products with DocumentFragment',
    instructions: '<p>In <code>gallery.js</code>, start with sample data and render it using a fragment:</p><pre><code>const gallery = document.querySelector(\'.gallery\');\nconst template = document.querySelector(\'#card-template\');\nconst countEl = document.querySelector(\'.product-count\');\n\nconst sampleProducts = [\n  { name: \'Wireless Mouse\', price: 29.99 },\n  { name: \'Mechanical Keyboard\', price: 89.99 },\n  { name: \'USB-C Hub\', price: 49.99 },\n];\n\nfunction renderProducts(products) {\n  const fragment = document.createDocumentFragment();\n  products.forEach(p =\u003E fragment.appendChild(createCard(p)));\n  gallery.appendChild(fragment);\n  updateCount();\n}\n\nrenderProducts(sampleProducts);</code></pre>',
    hints: ['The fragment collects all three cards, then inserts them in one DOM operation.'],
  },
  {
    title: 'Create cards by cloning the template',
    instructions: '<p>Write the <code>createCard</code> function that clones the template and fills in data:</p><pre><code>function createCard(product) {\n  const clone = template.content.cloneNode(true);\n  clone.querySelector(\'.card-name\').textContent = product.name;\n  clone.querySelector(\'.card-price\').textContent = `$${product.price.toFixed(2)}`;\n  return clone;\n}</code></pre>',
    hints: ['cloneNode(true) does a deep clone of the template content. We use textContent so user data is never parsed as HTML.'],
  },
  {
    title: 'Add new products from the form',
    instructions: '<p>Listen for form submissions and create new cards:</p><pre><code>const form = document.querySelector(\'#product-form\');\n\nform.addEventListener(\'submit\', (e) =\u003E {\n  e.preventDefault();\n  const data = new FormData(form);\n  const product = {\n    name: data.get(\'name\'),\n    price: parseFloat(data.get(\'price\'))\n  };\n  gallery.appendChild(createCard(product));\n  updateCount();\n  form.reset();\n});</code></pre>',
    hints: ['FormData is a clean way to read form values. We reuse the same createCard function.'],
  },
  {
    title: 'Delete products with event delegation and update the count',
    instructions: '<p>Add one click listener on the gallery for all delete buttons, and write the count updater:</p><pre><code>gallery.addEventListener(\'click\', (e) =\u003E {\n  if (e.target.matches(\'.btn-delete\')) {\n    e.target.closest(\'.product-card\').remove();\n    updateCount();\n  }\n});\n\nfunction updateCount() {\n  countEl.textContent = `(${gallery.children.length} products)`;\n}</code></pre>',
    hints: ['Event delegation means this one listener works for existing and future cards. closest() traverses from the button to its card.'],
  },
];

// ── Closure Data ──────────────────────────────────────────────────
const closureKeyTakeaways = [
  'Use createElement() + textContent for safe, secure element creation',
  'Modern insertion methods (append, prepend, before, after) give precise placement control',
  'DocumentFragment batches multiple insertions into one DOM update for better performance',
  'The HTML \u003Ctemplate\u003E element and cloneNode() are ideal for repeating patterns',
  'Event delegation on a stable parent works with dynamically added elements',
  'Choose between updating in place (preserves state) and replacing entirely (simpler code) based on your needs',
];

const closureObjectives = [
  'Create new DOM elements with document.createElement()',
  'Set attributes, classes, and text content on created elements',
  'Insert elements at specific positions using append, prepend, before, and after',
  'Use DocumentFragment to batch multiple insertions',
  'Build dynamic lists with add and delete functionality',
  'Clone elements with cloneNode() for repeating patterns',
  'Choose between updating and replacing content',
];

const closureReflectionPrompts = [
  {
    title: '\uD83D\uDCAD Reflection Questions',
    icon: '\uD83D\uDCAD',
    questions: [
      'Why is textContent safer than innerHTML when displaying user data?',
      'When would you choose to update elements in place vs rebuild the entire list?',
      'How does event delegation interact with dynamically created elements?',
      'What websites do you use daily that likely create DOM elements dynamically?',
    ],
  },
];

const closureRealWorld = '<p><strong>Dynamic content creation is the core of every interactive web application.</strong> Social media feeds render new posts as you scroll. Shopping carts add and remove items. Chat applications append messages in real time. Dashboards update graphs and tables when new data arrives.</p><p>The patterns you learned here \u2014 createElement, DocumentFragment, event delegation, and template cloning \u2014 are the foundation that frameworks like Vue, React, and Angular build on top of. Understanding them makes you a better developer in any framework.</p>';

const closureNextSteps = '<p>Congratulations! You\u2019ve completed the DOM Basics course. You now understand how to select elements, traverse the tree, handle events, and create dynamic content. These are the building blocks of every interactive website.</p><p>Ready for the next step? Check out the <strong>recommendations</strong> below to continue your learning journey.</p>';
</script>

<style scoped>
.tutorial-content {
  max-width: 800px;
  margin: 0 auto;
}

code {
  background-color: #f5f5f5;
  color: #485fc7;
  padding: 0.15rem 0.35rem;
  border-radius: 3px;
  font-size: 0.9em;
}

.code-example {
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 1rem;
  border-radius: 6px;
  margin: 1rem 0;
  overflow-x: auto;
}

.code-example :deep(code) {
  color: #ecf0f1;
  font-size: 0.9rem;
  background: none;
  padding: 0;
}

.code-example :deep(.keyword) { color: #c678dd; }
.code-example :deep(.variable) { color: #e06c75; }
.code-example :deep(.function) { color: #61afef; }
.code-example :deep(.string) { color: #98c379; }
.code-example :deep(.comment) { color: #7f848e; font-style: italic; }
.code-example :deep(.number) { color: #d19a66; }

.js-lesson-icon {
  background: #f7df1e;
  color: #000;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-weight: bold;
  font-size: 0.8em;
  margin-right: 0.5rem;
}
</style>
