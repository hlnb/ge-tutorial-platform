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
          <a href="#" aria-current="page">DOM Traversal</a>
        </li>
      </ul>
    </nav>

    <div class="tags mb-4">
      <span class="tag is-info">Beginner</span>
      <span class="tag is-warning">40 minutes</span>
      <span class="tag is-success">JavaScript</span>
      <span class="tag is-success">DOM</span>
    </div>

    <div class="content">
      <h1>
        <span class="js-lesson-icon" aria-hidden="true">DOM</span>
        DOM Traversal: Navigating the Family Tree
      </h1>

      <!-- ═══════════════════════════════════════════════════ -->
      <!-- HUNTER ELEMENT 1: ANTICIPATORY SET                -->
      <!-- ═══════════════════════════════════════════════════ -->
      <AnticipatorySet
        title="Finding Your Way Around a Web Page"
        icon="🧭"
        :hook="`<p>Imagine you&rsquo;re standing in a hallway of a large building. You can see the room you&rsquo;re in, but you also know there are rooms above you (upstairs), rooms next to you (neighbours), and rooms inside this room (closets, alcoves). If someone says &lsquo;go to the room next door&rsquo;, you don&rsquo;t need to walk all the way back to the front entrance and start a new search &mdash; you just step sideways.</p><p>The DOM works the same way. Once you&rsquo;ve selected an element, you can <em>walk</em> from it to its parent, its children, or its siblings without going back to <code>document.querySelector()</code>. This is called <strong>DOM traversal</strong>, and it&rsquo;s one of the most powerful techniques for writing efficient, readable JavaScript.</p><p>By the end of this lesson you&rsquo;ll be able to navigate any web page&rsquo;s structure using just a handful of built-in properties.</p>`"
      />

      <!-- ═══════════════════════════════════════════════════ -->
      <!-- HUNTER ELEMENT 2: LEARNING OBJECTIVES             -->
      <!-- ═══════════════════════════════════════════════════ -->
      <LearningObjectives
        :objectives="[
          'Explain the parent\u2013child\u2013sibling relationships in the DOM tree',
          'Use parentNode and parentElement to move up the tree',
          'Use children, firstElementChild, and lastElementChild to move down',
          'Use nextElementSibling and previousElementSibling to move sideways',
          'Explain the difference between Node properties (childNodes) and Element properties (children)',
          'Combine traversal methods to reach any element from any starting point',
          'Apply DOM traversal in a real-world scenario instead of querying from document every time'
        ]"
        purpose="DOM traversal lets you write shorter, faster code by walking between related elements instead of repeatedly searching the entire document."
      />

      <!-- ═══════════════════════════════════════════════════ -->
      <!-- SECTION 1: The DOM Family Tree                    -->
      <!-- ═══════════════════════════════════════════════════ -->
      <h2 id="family-tree">The DOM Family Tree</h2>

      <p>Every element in the DOM has relationships with other elements, just like people in a family tree. The language we use is the same:</p>

      <div class="box">
        <ul>
          <li><strong>Parent</strong> &mdash; the element that directly contains this element</li>
          <li><strong>Children</strong> &mdash; the elements directly inside this element</li>
          <li><strong>Siblings</strong> &mdash; elements that share the same parent</li>
          <li><strong>Ancestors</strong> &mdash; all elements above this one (parent, grandparent, &hellip;)</li>
          <li><strong>Descendants</strong> &mdash; all elements below this one (children, grandchildren, &hellip;)</li>
        </ul>
      </div>

      <p>Consider this HTML:</p>

      <div class="code-example">
        <pre v-pre><code>&lt;body&gt;
  &lt;header&gt;
    &lt;h1&gt;My Site&lt;/h1&gt;
    &lt;nav&gt;
      &lt;a href="#"&gt;Home&lt;/a&gt;
      &lt;a href="#"&gt;About&lt;/a&gt;
    &lt;/nav&gt;
  &lt;/header&gt;
  &lt;main&gt;
    &lt;section&gt;
      &lt;h2&gt;Welcome&lt;/h2&gt;
      &lt;p&gt;Hello world&lt;/p&gt;
    &lt;/section&gt;
    &lt;article&gt;
      &lt;h2&gt;News&lt;/h2&gt;
      &lt;p&gt;Latest post&lt;/p&gt;
    &lt;/article&gt;
  &lt;/main&gt;
  &lt;footer&gt;
    &lt;p&gt;&amp;copy; 2025&lt;/p&gt;
  &lt;/footer&gt;
&lt;/body&gt;</code></pre>
      </div>

      <p>In this structure:</p>

      <div class="box">
        <ul>
          <li><code>&lt;body&gt;</code> is the <strong>parent</strong> of <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, and <code>&lt;footer&gt;</code></li>
          <li><code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, and <code>&lt;footer&gt;</code> are <strong>siblings</strong> of each other</li>
          <li><code>&lt;section&gt;</code> and <code>&lt;article&gt;</code> are <strong>children</strong> of <code>&lt;main&gt;</code></li>
          <li><code>&lt;h2&gt;</code> inside <code>&lt;section&gt;</code> is a <strong>grandchild</strong> (descendant) of <code>&lt;main&gt;</code></li>
        </ul>
      </div>

      <!-- DOM Tree Diagram -->
      <div class="dom-diagram mb-5">
        <div class="diagram-container">
          <svg width="100%" viewBox="0 0 620 320" aria-label="DOM tree diagram showing parent, child, and sibling relationships">
            <!-- body -->
            <g transform="translate(270,20)">
              <rect width="80" height="30" rx="5" fill="#ffd43b"/>
              <text x="40" y="20" text-anchor="middle" font-size="14" fill="#000">body</text>
            </g>
            <!-- lines from body down -->
            <line x1="310" y1="50" x2="310" y2="75" stroke="#666" stroke-width="2"/>
            <line x1="110" y1="75" x2="510" y2="75" stroke="#666" stroke-width="2"/>
            <line x1="110" y1="75" x2="110" y2="90" stroke="#666" stroke-width="2"/>
            <line x1="310" y1="75" x2="310" y2="90" stroke="#666" stroke-width="2"/>
            <line x1="510" y1="75" x2="510" y2="90" stroke="#666" stroke-width="2"/>

            <!-- header -->
            <g transform="translate(70,90)">
              <rect width="80" height="30" rx="5" fill="#74c0fc"/>
              <text x="40" y="20" text-anchor="middle" font-size="14" fill="#000">header</text>
            </g>
            <!-- main -->
            <g transform="translate(270,90)">
              <rect width="80" height="30" rx="5" fill="#74c0fc"/>
              <text x="40" y="20" text-anchor="middle" font-size="14" fill="#000">main</text>
            </g>
            <!-- footer -->
            <g transform="translate(470,90)">
              <rect width="80" height="30" rx="5" fill="#74c0fc"/>
              <text x="40" y="20" text-anchor="middle" font-size="14" fill="#000">footer</text>
            </g>

            <!-- header children lines -->
            <line x1="110" y1="120" x2="110" y2="145" stroke="#666" stroke-width="2"/>
            <line x1="50" y1="145" x2="170" y2="145" stroke="#666" stroke-width="2"/>
            <line x1="50" y1="145" x2="50" y2="160" stroke="#666" stroke-width="2"/>
            <line x1="170" y1="145" x2="170" y2="160" stroke="#666" stroke-width="2"/>
            <!-- h1 -->
            <g transform="translate(20,160)">
              <rect width="60" height="26" rx="5" fill="#b2f2bb"/>
              <text x="30" y="18" text-anchor="middle" font-size="12" fill="#000">h1</text>
            </g>
            <!-- nav -->
            <g transform="translate(140,160)">
              <rect width="60" height="26" rx="5" fill="#b2f2bb"/>
              <text x="30" y="18" text-anchor="middle" font-size="12" fill="#000">nav</text>
            </g>

            <!-- main children lines -->
            <line x1="310" y1="120" x2="310" y2="145" stroke="#666" stroke-width="2"/>
            <line x1="250" y1="145" x2="370" y2="145" stroke="#666" stroke-width="2"/>
            <line x1="250" y1="145" x2="250" y2="160" stroke="#666" stroke-width="2"/>
            <line x1="370" y1="145" x2="370" y2="160" stroke="#666" stroke-width="2"/>
            <!-- section -->
            <g transform="translate(215,160)">
              <rect width="70" height="26" rx="5" fill="#b2f2bb"/>
              <text x="35" y="18" text-anchor="middle" font-size="12" fill="#000">section</text>
            </g>
            <!-- article -->
            <g transform="translate(335,160)">
              <rect width="70" height="26" rx="5" fill="#b2f2bb"/>
              <text x="35" y="18" text-anchor="middle" font-size="12" fill="#000">article</text>
            </g>

            <!-- section children -->
            <line x1="250" y1="186" x2="250" y2="210" stroke="#666" stroke-width="2"/>
            <line x1="220" y1="210" x2="280" y2="210" stroke="#666" stroke-width="2"/>
            <line x1="220" y1="210" x2="220" y2="225" stroke="#666" stroke-width="2"/>
            <line x1="280" y1="210" x2="280" y2="225" stroke="#666" stroke-width="2"/>
            <g transform="translate(200,225)">
              <rect width="40" height="22" rx="4" fill="#e9ecef"/>
              <text x="20" y="16" text-anchor="middle" font-size="11" fill="#000">h2</text>
            </g>
            <g transform="translate(260,225)">
              <rect width="40" height="22" rx="4" fill="#e9ecef"/>
              <text x="20" y="16" text-anchor="middle" font-size="11" fill="#000">p</text>
            </g>

            <!-- Relationship labels -->
            <text x="555" y="40" font-size="12" fill="#888" font-style="italic">Parent</text>
            <text x="555" y="110" font-size="12" fill="#888" font-style="italic">Children</text>
            <text x="555" y="180" font-size="12" fill="#888" font-style="italic">Grandchildren</text>

            <!-- Sibling arrows -->
            <text x="155" y="108" font-size="10" fill="#e94560">&larr; siblings &rarr;</text>
          </svg>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════════ -->
      <!-- SECTION 2: Moving Up — Parent Properties          -->
      <!-- ═══════════════════════════════════════════════════ -->
      <h2 id="moving-up">Moving Up: Parent Properties</h2>

      <p>To move <strong>up</strong> the tree from an element to the element that contains it, use:</p>

      <div class="code-example">
        <pre v-pre><code><span class="keyword">const</span> <span class="variable">section</span> = <span class="function">document.querySelector</span>(<span class="string">'section'</span>);

<span class="comment">// parentElement — always returns an element (or null)</span>
<span class="variable">section</span>.<span class="variable">parentElement</span>;   <span class="comment">// &lt;main&gt;</span>

<span class="comment">// parentNode — may return a non-element node (rare edge case)</span>
<span class="variable">section</span>.<span class="variable">parentNode</span>;      <span class="comment">// &lt;main&gt; (same in this case)</span></code></pre>
      </div>

      <div class="notification is-info is-light">
        <p><i class="fas fa-lightbulb mr-2"></i> <strong>Which should you use?</strong> Prefer <code>parentElement</code>. It guarantees you get an element back (or <code>null</code> if you&rsquo;ve reached the top). <code>parentNode</code> can return the document node above <code>&lt;html&gt;</code>, which is rarely what you want.</p>
      </div>

      <h3>Climbing Multiple Levels</h3>

      <p>You can chain <code>parentElement</code> to climb several levels at once:</p>

      <div class="code-example">
        <pre v-pre><code><span class="keyword">const</span> <span class="variable">h2</span> = <span class="function">document.querySelector</span>(<span class="string">'section h2'</span>);

<span class="variable">h2</span>.<span class="variable">parentElement</span>;                     <span class="comment">// &lt;section&gt;</span>
<span class="variable">h2</span>.<span class="variable">parentElement</span>.<span class="variable">parentElement</span>;        <span class="comment">// &lt;main&gt;</span>
<span class="variable">h2</span>.<span class="variable">parentElement</span>.<span class="variable">parentElement</span>.<span class="variable">parentElement</span>; <span class="comment">// &lt;body&gt;</span></code></pre>
      </div>

      <h3>closest() &mdash; The Smart Climber</h3>

      <p>Instead of chaining <code>parentElement</code> repeatedly, use <code>closest()</code> to jump straight to the nearest ancestor that matches a CSS selector:</p>

      <div class="code-example">
        <pre v-pre><code><span class="keyword">const</span> <span class="variable">h2</span> = <span class="function">document.querySelector</span>(<span class="string">'section h2'</span>);

<span class="comment">// Find the nearest ancestor that is a &lt;main&gt;</span>
<span class="variable">h2</span>.<span class="function">closest</span>(<span class="string">'main'</span>);      <span class="comment">// &lt;main&gt;</span>

<span class="comment">// Find the nearest ancestor with a class</span>
<span class="variable">h2</span>.<span class="function">closest</span>(<span class="string">'.container'</span>); <span class="comment">// null (none found)</span>

<span class="comment">// closest() checks the element itself too</span>
<span class="variable">h2</span>.<span class="function">closest</span>(<span class="string">'h2'</span>);         <span class="comment">// the h2 itself</span></code></pre>
      </div>

      <div class="notification is-warning is-light">
        <p><i class="fas fa-exclamation-triangle mr-2"></i> <strong>Real-world use:</strong> <code>closest()</code> is incredibly useful in event handling. When a user clicks a button inside a card, you can use <code>event.target.closest('.card')</code> to find the card that was clicked, no matter how deeply nested the button is.</p>
      </div>

      <!-- ═══════════════════════════════════════════════════ -->
      <!-- SECTION 3: Moving Down — Child Properties         -->
      <!-- ═══════════════════════════════════════════════════ -->
      <h2 id="moving-down">Moving Down: Child Properties</h2>

      <p>To move <strong>down</strong> the tree from a parent to its contents:</p>

      <div class="box">
        <table class="table is-fullwidth">
          <thead>
            <tr>
              <th>Property</th>
              <th>Returns</th>
              <th>Includes text nodes?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>children</code></td>
              <td>HTMLCollection of child <strong>elements</strong></td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>childNodes</code></td>
              <td>NodeList of <strong>all</strong> child nodes</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td><code>firstElementChild</code></td>
              <td>First child element</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>lastElementChild</code></td>
              <td>Last child element</td>
              <td>No</td>
            </tr>
            <tr>
              <td><code>firstChild</code></td>
              <td>First child node (any type)</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td><code>lastChild</code></td>
              <td>Last child node (any type)</td>
              <td>Yes</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="code-example">
        <pre v-pre><code><span class="keyword">const</span> <span class="variable">mainEl</span> = <span class="function">document.querySelector</span>(<span class="string">'main'</span>);

<span class="comment">// children — only element nodes (what you usually want)</span>
<span class="variable">mainEl</span>.<span class="variable">children</span>;              <span class="comment">// [section, article]</span>
<span class="variable">mainEl</span>.<span class="variable">children</span>.<span class="variable">length</span>;       <span class="comment">// 2</span>
<span class="variable">mainEl</span>.<span class="variable">children</span>[<span class="number">0</span>];           <span class="comment">// &lt;section&gt;</span>

<span class="comment">// First and last shortcuts</span>
<span class="variable">mainEl</span>.<span class="variable">firstElementChild</span>;     <span class="comment">// &lt;section&gt;</span>
<span class="variable">mainEl</span>.<span class="variable">lastElementChild</span>;      <span class="comment">// &lt;article&gt;</span>

<span class="comment">// childNodes includes whitespace text nodes!</span>
<span class="variable">mainEl</span>.<span class="variable">childNodes</span>;            <span class="comment">// [text, section, text, article, text]</span>
<span class="variable">mainEl</span>.<span class="variable">childNodes</span>.<span class="variable">length</span>;     <span class="comment">// 5 (three text nodes for whitespace)</span></code></pre>
      </div>

      <div class="notification is-danger is-light">
        <p><i class="fas fa-exclamation-circle mr-2"></i> <strong>Common trap:</strong> <code>childNodes</code> includes invisible whitespace text nodes (the line breaks between your HTML tags). This is the number-one gotcha for beginners. Almost always use <code>children</code> instead.</p>
      </div>

      <h3>Looping Through Children</h3>

      <div class="code-example">
        <pre v-pre><code><span class="keyword">const</span> <span class="variable">nav</span> = <span class="function">document.querySelector</span>(<span class="string">'nav'</span>);

<span class="comment">// children returns an HTMLCollection — use for...of</span>
<span class="keyword">for</span> (<span class="keyword">const</span> <span class="variable">link</span> <span class="keyword">of</span> <span class="variable">nav</span>.<span class="variable">children</span>) {
  <span class="variable">console</span>.<span class="function">log</span>(<span class="variable">link</span>.<span class="variable">textContent</span>);
}

<span class="comment">// Or convert to an array for .forEach, .map, .filter</span>
<span class="keyword">const</span> <span class="variable">linksArray</span> = <span class="function">Array.from</span>(<span class="variable">nav</span>.<span class="variable">children</span>);
<span class="variable">linksArray</span>.<span class="function">forEach</span>(<span class="variable">link</span> =&gt; {
  <span class="variable">link</span>.<span class="variable">classList</span>.<span class="function">add</span>(<span class="string">'nav-link'</span>);
});</code></pre>
      </div>

      <!-- ═══════════════════════════════════════════════════ -->
      <!-- CHECKPOINT 1                                      -->
      <!-- ═══════════════════════════════════════════════════ -->
      <CheckpointBox
        title="Check Your Understanding: Parents &amp; Children"
        :questions="checkpointParents"
      />

      <!-- ═══════════════════════════════════════════════════ -->
      <!-- SECTION 4: Moving Sideways — Sibling Properties   -->
      <!-- ═══════════════════════════════════════════════════ -->
      <h2 id="moving-sideways">Moving Sideways: Sibling Properties</h2>

      <p>Siblings are elements that share the same parent. You can step from one sibling to the next or previous:</p>

      <div class="code-example">
        <pre v-pre><code><span class="keyword">const</span> <span class="variable">mainEl</span> = <span class="function">document.querySelector</span>(<span class="string">'main'</span>);

<span class="comment">// Previous sibling element</span>
<span class="variable">mainEl</span>.<span class="variable">previousElementSibling</span>;   <span class="comment">// &lt;header&gt;</span>

<span class="comment">// Next sibling element</span>
<span class="variable">mainEl</span>.<span class="variable">nextElementSibling</span>;       <span class="comment">// &lt;footer&gt;</span>

<span class="comment">// At the edges, you get null</span>
<span class="keyword">const</span> <span class="variable">header</span> = <span class="function">document.querySelector</span>(<span class="string">'header'</span>);
<span class="variable">header</span>.<span class="variable">previousElementSibling</span>;    <span class="comment">// null (no sibling before it)</span></code></pre>
      </div>

      <div class="notification is-info is-light">
        <p><i class="fas fa-lightbulb mr-2"></i> <strong>Element vs Node:</strong> Just like with children, always use the <strong>Element</strong> versions (<code>nextElementSibling</code>, <code>previousElementSibling</code>). The plain <code>nextSibling</code> / <code>previousSibling</code> may return whitespace text nodes.</p>
      </div>

      <h3>Walking All Siblings</h3>

      <p>There is no built-in &ldquo;give me all siblings&rdquo; property, but you can get them by going up to the parent and then back down to its children:</p>

      <div class="code-example">
        <pre v-pre><code><span class="keyword">const</span> <span class="variable">mainEl</span> = <span class="function">document.querySelector</span>(<span class="string">'main'</span>);

<span class="comment">// Get all siblings (including mainEl itself)</span>
<span class="keyword">const</span> <span class="variable">allSiblings</span> = <span class="variable">mainEl</span>.<span class="variable">parentElement</span>.<span class="variable">children</span>;
<span class="comment">// [header, main, footer]</span>

<span class="comment">// Get only the OTHER siblings (exclude mainEl)</span>
<span class="keyword">const</span> <span class="variable">otherSiblings</span> = <span class="function">Array.from</span>(<span class="variable">allSiblings</span>)
  .<span class="function">filter</span>(<span class="variable">el</span> =&gt; <span class="variable">el</span> !== <span class="variable">mainEl</span>);
<span class="comment">// [header, footer]</span></code></pre>
      </div>

      <!-- ═══════════════════════════════════════════════════ -->
      <!-- SECTION 5: Nodes vs Elements                      -->
      <!-- ═══════════════════════════════════════════════════ -->
      <h2 id="nodes-vs-elements">Nodes vs Elements: Why It Matters</h2>

      <p>This is the most confusing part of DOM traversal for beginners. The DOM has two parallel sets of traversal properties:</p>

      <div class="box">
        <table class="table is-fullwidth">
          <thead>
            <tr>
              <th>Node properties (all nodes)</th>
              <th>Element properties (elements only)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>parentNode</code></td>
              <td><code>parentElement</code></td>
            </tr>
            <tr>
              <td><code>childNodes</code></td>
              <td><code>children</code></td>
            </tr>
            <tr>
              <td><code>firstChild</code></td>
              <td><code>firstElementChild</code></td>
            </tr>
            <tr>
              <td><code>lastChild</code></td>
              <td><code>lastElementChild</code></td>
            </tr>
            <tr>
              <td><code>nextSibling</code></td>
              <td><code>nextElementSibling</code></td>
            </tr>
            <tr>
              <td><code>previousSibling</code></td>
              <td><code>previousElementSibling</code></td>
            </tr>
          </tbody>
        </table>
      </div>

      <p><strong>Node</strong> properties include <em>everything</em> &mdash; elements, text nodes (including whitespace), and comments. <strong>Element</strong> properties skip all non-element nodes and give you only the HTML tags.</p>

      <div class="code-example">
        <pre v-pre><code><span class="comment">// Given this HTML: &lt;ul&gt; &lt;li&gt;A&lt;/li&gt; &lt;li&gt;B&lt;/li&gt; &lt;/ul&gt;</span>
<span class="keyword">const</span> <span class="variable">ul</span> = <span class="function">document.querySelector</span>(<span class="string">'ul'</span>);

<span class="comment">// Node version — includes whitespace text nodes!</span>
<span class="variable">ul</span>.<span class="variable">firstChild</span>;          <span class="comment">// #text (the whitespace before first &lt;li&gt;)</span>
<span class="variable">ul</span>.<span class="variable">childNodes</span>.<span class="variable">length</span>;   <span class="comment">// 5 (text, li, text, li, text)</span>

<span class="comment">// Element version — only elements, what you actually want</span>
<span class="variable">ul</span>.<span class="variable">firstElementChild</span>;   <span class="comment">// &lt;li&gt;A&lt;/li&gt;</span>
<span class="variable">ul</span>.<span class="variable">children</span>.<span class="variable">length</span>;      <span class="comment">// 2 (li, li)</span></code></pre>
      </div>

      <div class="notification is-success is-light">
        <p><i class="fas fa-check-circle mr-2"></i> <strong>Rule of thumb:</strong> Always use the <strong>Element</strong> versions unless you have a specific reason to work with text nodes or comments. This will save you hours of debugging.</p>
      </div>

      <!-- ═══════════════════════════════════════════════════ -->
      <!-- CHECKPOINT 2                                      -->
      <!-- ═══════════════════════════════════════════════════ -->
      <CheckpointBox
        title="Check Your Understanding: Siblings &amp; Nodes vs Elements"
        :questions="checkpointSiblings"
      />

      <!-- ═══════════════════════════════════════════════════ -->
      <!-- SECTION 6: Combining Traversal Methods            -->
      <!-- ═══════════════════════════════════════════════════ -->
      <h2 id="combining-methods">Combining Traversal Methods</h2>

      <p>The real power of traversal is chaining multiple steps together to reach any element from any starting point:</p>

      <div class="code-example">
        <pre v-pre><code><span class="keyword">const</span> <span class="variable">section</span> = <span class="function">document.querySelector</span>(<span class="string">'section'</span>);

<span class="comment">// From section, get the first link in the header</span>
<span class="variable">section</span>
  .<span class="variable">parentElement</span>            <span class="comment">// &lt;main&gt;</span>
  .<span class="variable">previousElementSibling</span>   <span class="comment">// &lt;header&gt;</span>
  .<span class="function">querySelector</span>(<span class="string">'a'</span>);       <span class="comment">// first &lt;a&gt; in header</span>

<span class="comment">// From article, get the h2 inside its sibling section</span>
<span class="keyword">const</span> <span class="variable">article</span> = <span class="function">document.querySelector</span>(<span class="string">'article'</span>);
<span class="variable">article</span>
  .<span class="variable">previousElementSibling</span>   <span class="comment">// &lt;section&gt;</span>
  .<span class="variable">firstElementChild</span>;       <span class="comment">// &lt;h2&gt;Welcome&lt;/h2&gt;</span></code></pre>
      </div>

      <h3>Traversal vs querySelector &mdash; When to Use Which</h3>

      <div class="box">
        <table class="table is-fullwidth">
          <thead>
            <tr>
              <th>Use traversal when&hellip;</th>
              <th>Use querySelector when&hellip;</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>You already have a reference to a nearby element</td>
              <td>You need to find an element anywhere in the page</td>
            </tr>
            <tr>
              <td>You&rsquo;re inside an event handler and need the parent card/row</td>
              <td>You&rsquo;re setting up the page and need initial references</td>
            </tr>
            <tr>
              <td>The relationship is structural (parent, next sibling)</td>
              <td>The target has a unique ID or class</td>
            </tr>
            <tr>
              <td>You want to avoid searching the whole document again</td>
              <td>The elements aren&rsquo;t in a predictable structural relationship</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- ═══════════════════════════════════════════════════ -->
      <!-- SECTION 7: Real-World Example                     -->
      <!-- ═══════════════════════════════════════════════════ -->
      <h2 id="real-world">Real-World Example: Accordion Component</h2>

      <p>Here is a common pattern where DOM traversal shines &mdash; an accordion (FAQ section) where clicking a question reveals its answer:</p>

      <div class="code-example">
        <pre v-pre><code><span class="comment">/* HTML structure */</span>
<span class="comment">// &lt;div class="accordion"&gt;</span>
<span class="comment">//   &lt;div class="accordion-item"&gt;</span>
<span class="comment">//     &lt;button class="accordion-header"&gt;Question 1&lt;/button&gt;</span>
<span class="comment">//     &lt;div class="accordion-body"&gt;Answer 1&lt;/div&gt;</span>
<span class="comment">//   &lt;/div&gt;</span>
<span class="comment">//   &lt;div class="accordion-item"&gt;</span>
<span class="comment">//     &lt;button class="accordion-header"&gt;Question 2&lt;/button&gt;</span>
<span class="comment">//     &lt;div class="accordion-body"&gt;Answer 2&lt;/div&gt;</span>
<span class="comment">//   &lt;/div&gt;</span>
<span class="comment">// &lt;/div&gt;</span>

<span class="keyword">const</span> <span class="variable">accordion</span> = <span class="function">document.querySelector</span>(<span class="string">'.accordion'</span>);

<span class="variable">accordion</span>.<span class="function">addEventListener</span>(<span class="string">'click'</span>, (<span class="variable">event</span>) =&gt; {
  <span class="comment">// Use closest() to find the header that was clicked</span>
  <span class="keyword">const</span> <span class="variable">header</span> = <span class="variable">event</span>.<span class="variable">target</span>.<span class="function">closest</span>(<span class="string">'.accordion-header'</span>);
  <span class="keyword">if</span> (!<span class="variable">header</span>) <span class="keyword">return</span>;  <span class="comment">// Click wasn't on a header</span>

  <span class="comment">// Traverse to the answer (next sibling of the button)</span>
  <span class="keyword">const</span> <span class="variable">body</span> = <span class="variable">header</span>.<span class="variable">nextElementSibling</span>;

  <span class="comment">// Toggle visibility</span>
  <span class="variable">body</span>.<span class="variable">classList</span>.<span class="function">toggle</span>(<span class="string">'is-open'</span>);

  <span class="comment">// Close all other accordion items</span>
  <span class="keyword">const</span> <span class="variable">allBodies</span> = <span class="variable">accordion</span>.<span class="function">querySelectorAll</span>(<span class="string">'.accordion-body'</span>);
  <span class="variable">allBodies</span>.<span class="function">forEach</span>(<span class="variable">b</span> =&gt; {
    <span class="keyword">if</span> (<span class="variable">b</span> !== <span class="variable">body</span>) <span class="variable">b</span>.<span class="variable">classList</span>.<span class="function">remove</span>(<span class="string">'is-open'</span>);
  });
});</code></pre>
      </div>

      <p>Notice how we used <code>closest()</code> to go <strong>up</strong> from the click target, <code>nextElementSibling</code> to go <strong>sideways</strong> to the answer panel, and <code>querySelectorAll</code> to find all siblings. This is DOM traversal in action.</p>

      <!-- ═══════════════════════════════════════════════════ -->
      <!-- CHECKPOINT 3                                      -->
      <!-- ═══════════════════════════════════════════════════ -->
      <CheckpointBox
        title="Check Your Understanding: Combining Methods"
        :questions="checkpointCombining"
      />

      <!-- ═══════════════════════════════════════════════════ -->
      <!-- HUNTER ELEMENT 4: GUIDED PRACTICE                 -->
      <!-- ═══════════════════════════════════════════════════ -->
      <h2 id="guided-practice">Guided Practice: Navigate a Product Page</h2>

      <GuidedPractice
        title="Traverse a Product Card Layout"
        description="You have a product listing page. Use DOM traversal to update elements without querying from document each time."
        :steps="guidedPracticeSteps"
        :success-criteria="[
          'You can reach the product title from a button click using traversal',
          'You can highlight all sibling products of a clicked product',
          'You use closest() to find a parent container from a nested click target',
          'You understand when to use traversal vs querySelector'
        ]"
      />

      <!-- ═══════════════════════════════════════════════════ -->
      <!-- HUNTER ELEMENT 6: INDEPENDENT PRACTICE            -->
      <!-- ═══════════════════════════════════════════════════ -->
      <h2 id="independent-practice">Independent Challenge: DOM Navigator</h2>

      <IndependentPractice
        title="DOM Navigator: Build an Interactive Tree Explorer"
        task="Build a small interactive page that lets the user click any element and see its DOM relationships displayed in a panel. When an element is clicked, highlight its parent (red outline), children (green outline), and siblings (blue outline) using DOM traversal properties &mdash; no <code>document.querySelector</code> calls allowed for the highlighting logic."
        :requirements="[
          'Create an HTML page with at least 3 levels of nesting (e.g. body \u2192 main \u2192 section \u2192 p)',
          'When any element is clicked, display its tagName, parentElement, number of children, and number of siblings in an info panel',
          'Highlight the clicked element\u2019s parent with a red outline',
          'Highlight all children with a green outline',
          'Highlight all siblings (excluding the clicked element) with a blue outline',
          'Use only DOM traversal properties (parentElement, children, nextElementSibling, etc.) \u2014 no querySelector in the highlight logic',
          'Clear previous highlights when a new element is clicked'
        ]"
        :stretch-goals="[
          'Add a breadcrumb trail showing the path from \u003Chtml\u003E down to the clicked element using a while loop with parentElement',
          'Let the user navigate with keyboard arrows: Up = parentElement, Down = firstElementChild, Left = previousElementSibling, Right = nextElementSibling',
          'Show the difference between childNodes and children count for each clicked element'
        ]"
        :rubric="[
          { criteria: 'Clicking highlights parent, children, and siblings correctly', success: 'Meets expectations' },
          { criteria: 'Info panel shows accurate DOM relationship data', success: 'Meets expectations' },
          { criteria: 'Only traversal properties used in highlight logic (no querySelector)', success: 'Meets expectations' },
          { criteria: 'Keyboard navigation or breadcrumb trail implemented', success: 'Exceeds expectations' },
          { criteria: 'Clean code with clear variable names and comments', success: 'Exceeds expectations' }
        ]"
      />

      <!-- ═══════════════════════════════════════════════════ -->
      <!-- HUNTER ELEMENT 8: CLOSURE                         -->
      <!-- ═══════════════════════════════════════════════════ -->
      <h2 id="summary">Summary</h2>

      <ClosureSection
        title="🏁 Lesson Complete: You Can Navigate the DOM"
        :key-takeaways="closureKeyTakeaways"
        :objectives="closureObjectives"
        :reflection-prompts="closureReflectionPrompts"
        :real-world-application="closureRealWorld"
        :next-steps="closureNextSteps"
      />

      <TutorialRecommendations current-path="/tutorials/beginner/dom-basics/dom-traversal" />
    </div>
  </div>
</template>

<script setup>
import { useTutorialHead } from '@/composables/useTutorialHead';
import '@/assets/styles/tutorials.css';
import { usePageSections } from '@/composables/usePageSections';
import AnticipatorySet from '@/components/hunter/AnticipatorySet.vue';
import LearningObjectives from '@/components/hunter/LearningObjectives.vue';
import CheckpointBox from '@/components/hunter/CheckpointBox.vue';
import GuidedPractice from '@/components/hunter/GuidedPractice.vue';
import IndependentPractice from '@/components/hunter/IndependentPractice.vue';
import ClosureSection from '@/components/hunter/ClosureSection.vue';
import TutorialRecommendations from '@/components/TutorialRecommendations.vue';

useTutorialHead({
  title: 'DOM Traversal',
  description: 'Navigate the DOM tree in JavaScript — access parent, child, and sibling elements to find and update page content.',
  path: '/tutorials/beginner/dom-basics/dom-traversal',
});

// ── Sidebar sections ─────────────────────────────────────────────
usePageSections([
  { id: 'family-tree', title: 'The DOM Family Tree' },
  { id: 'moving-up', title: 'Moving Up: Parents' },
  { id: 'moving-down', title: 'Moving Down: Children' },
  { id: 'moving-sideways', title: 'Moving Sideways: Siblings' },
  { id: 'nodes-vs-elements', title: 'Nodes vs Elements' },
  { id: 'combining-methods', title: 'Combining Methods' },
  { id: 'real-world', title: 'Real-World Example' },
  { id: 'guided-practice', title: 'Guided Practice' },
  { id: 'independent-practice', title: 'Independent Challenge' },
  { id: 'summary', title: 'Summary' },
]);

// ── Checkpoint 1: Parents & Children ──────────────────────────────
const checkpointParents = [
  {
    question: 'What is the difference between parentNode and parentElement?',
    answer: 'parentElement always returns an element node (or null at the top of the tree). parentNode can return a non-element node like the document node above \u003Chtml\u003E. In practice, parentElement is almost always what you want.',
  },
  {
    question: 'You use mainEl.childNodes.length and get 5, but there are only 2 child elements. Why?',
    answer: 'childNodes includes all node types, including invisible whitespace text nodes (the line breaks and spaces between your HTML tags). Use children instead \u2014 it returns only element nodes.',
  },
  {
    question: 'How would you get all child elements of a \u003Cnav\u003E and add a class to each one?',
    answer: 'Use Array.from(nav.children).forEach(child => child.classList.add("nav-item")). You need Array.from() because children returns an HTMLCollection, not an array.',
  },
];

// ── Checkpoint 2: Siblings & Nodes vs Elements ────────────────────
const checkpointSiblings = [
  {
    question: 'How do you get the element immediately after \u003Cmain\u003E in the DOM?',
    answer: 'Use mainEl.nextElementSibling. This skips text nodes and returns the next element, which would be \u003Cfooter\u003E in our example HTML.',
  },
  {
    question: 'Why should you always prefer the "Element" versions of traversal properties?',
    answer: 'The plain Node versions (nextSibling, firstChild, etc.) include whitespace text nodes and comments, which are almost never what you want. The Element versions (nextElementSibling, firstElementChild, etc.) skip those and give you only HTML elements.',
  },
  {
    question: 'There is no built-in "siblings" property. How can you get all siblings of an element?',
    answer: 'Go up to the parent and then back down: Array.from(element.parentElement.children).filter(el => el !== element). This gives you all children of the parent except the element itself.',
  },
];

// ── Checkpoint 3: Combining Methods ──────────────────────────────
const checkpointCombining = [
  {
    question: 'In an event handler, how can you find the nearest parent with a specific class?',
    answer: 'Use event.target.closest(".class-name"). closest() walks up the tree and returns the first ancestor (or the element itself) that matches the CSS selector. It returns null if no match is found.',
  },
  {
    question: 'When should you use DOM traversal instead of querySelector?',
    answer: 'Use traversal when you already have a reference to a nearby element and the relationship is structural (parent, sibling, child). Use querySelector when you need to find an element by ID, class, or selector from scratch.',
  },
];

// ── Guided Practice Steps ─────────────────────────────────────────
const guidedPracticeSteps = [
  {
    title: 'Create the product listing page',
    instructions: '<p>Create a new file called <code>product-listing.html</code> with this structure:</p><pre><code>\u003C!DOCTYPE html\u003E\n\u003Chtml lang="en"\u003E\n\u003Chead\u003E\n  \u003Cmeta charset="UTF-8"\u003E\n  \u003Ctitle\u003EProduct Listing\u003C/title\u003E\n  \u003Cstyle\u003E\n    .products { display: flex; gap: 1rem; padding: 1rem; }\n    .product-card { border: 2px solid #ddd; padding: 1rem; border-radius: 8px; width: 200px; }\n    .product-card h3 { margin: 0 0 0.5rem; }\n    .highlight { border-color: #e94560; background: #fff0f3; }\n    .info-panel { padding: 1rem; background: #f0f0f0; margin: 1rem; }\n  \u003C/style\u003E\n\u003C/head\u003E\n\u003Cbody\u003E\n  \u003Ch1\u003EOur Products\u003C/h1\u003E\n  \u003Cdiv class="products"\u003E\n    \u003Cdiv class="product-card"\u003E\n      \u003Ch3\u003EWidget A\u003C/h3\u003E\n      \u003Cp class="price"\u003E$19.99\u003C/p\u003E\n      \u003Cbutton\u003EDetails\u003C/button\u003E\n    \u003C/div\u003E\n    \u003Cdiv class="product-card"\u003E\n      \u003Ch3\u003EWidget B\u003C/h3\u003E\n      \u003Cp class="price"\u003E$29.99\u003C/p\u003E\n      \u003Cbutton\u003EDetails\u003C/button\u003E\n    \u003C/div\u003E\n    \u003Cdiv class="product-card"\u003E\n      \u003Ch3\u003EWidget C\u003C/h3\u003E\n      \u003Cp class="price"\u003E$39.99\u003C/p\u003E\n      \u003Cbutton\u003EDetails\u003C/button\u003E\n    \u003C/div\u003E\n  \u003C/div\u003E\n  \u003Cdiv class="info-panel"\u003EClick a Details button\u003C/div\u003E\n  \u003Cscript src="app.js"\u003E\u003C/script\u003E\n\u003C/body\u003E\n\u003C/html\u003E</code></pre>',
    hints: ['This creates three product cards, each with a title, price, and button.'],
  },
  {
    title: 'Use closest() to find the clicked card',
    instructions: '<p>Create <code>app.js</code>. Add a single click listener on the <code>.products</code> container (event delegation). When a button is clicked, use <code>closest()</code> to find the parent card:</p><pre><code>const products = document.querySelector(\'.products\');\nconst infoPanel = document.querySelector(\'.info-panel\');\n\nproducts.addEventListener(\'click\', (event) =\u003E {\n  const button = event.target.closest(\'button\');\n  if (!button) return;\n\n  const card = button.closest(\'.product-card\');\n  console.log(\'Clicked card:\', card);\n});</code></pre>',
    hints: ['closest() searches up the DOM tree from the clicked element. If the click was not on a button, we return early.'],
  },
  {
    title: 'Traverse to get the product title and price',
    instructions: '<p>Inside the click handler, use traversal to get the product name and price from the card:</p><pre><code>// The card\'s first child element is the h3\nconst title = card.firstElementChild.textContent;\n\n// The price is the next sibling of the h3\nconst price = card.firstElementChild.nextElementSibling.textContent;\n\ninfoPanel.textContent = `Selected: ${title} \u2014 ${price}`;</code></pre><p>No <code>querySelector</code> needed &mdash; we walked from the card to its children using traversal.</p>',
    hints: ['firstElementChild gives the h3, and nextElementSibling from the h3 gives the price paragraph.'],
  },
  {
    title: 'Highlight sibling cards',
    instructions: '<p>When a card is clicked, add a highlight class to all its sibling cards (but not itself):</p><pre><code>// Clear previous highlights\nArray.from(card.parentElement.children).forEach(sibling =\u003E {\n  sibling.classList.remove(\'highlight\');\n});\n\n// Highlight the clicked card\ncard.classList.add(\'highlight\');</code></pre><p>We went <strong>up</strong> to the parent (<code>.products</code>), then <strong>down</strong> to all its children, then decided which ones to highlight.</p>',
    hints: ['parentElement.children gives you all siblings including the clicked card. We clear them all first, then add the highlight to just the clicked one.'],
  },
  {
    title: 'Verify the traversal chain in DevTools',
    instructions: '<p>Open DevTools and add a breakpoint inside the click handler. Click a Details button and inspect each traversal step:</p><ul><li><code>event.target</code> \u2014 the button</li><li><code>button.closest(\'.product-card\')</code> \u2014 the card</li><li><code>card.firstElementChild</code> \u2014 the h3</li><li><code>card.parentElement.children</code> \u2014 all three cards</li></ul><p>Confirm that no <code>document.querySelector</code> calls were used in the traversal logic.</p>',
    hints: ['In the Console, you can type these expressions directly to see what they return.'],
  },
];

// ── Closure Data ──────────────────────────────────────────────────
const closureKeyTakeaways = [
  'The DOM is a tree of nodes with parent, child, and sibling relationships',
  'Use parentElement to go up, children to go down, and nextElementSibling / previousElementSibling to go sideways',
  'Always use the Element versions of traversal properties to skip invisible whitespace text nodes',
  'closest() is the most powerful traversal method \u2014 it jumps straight to the nearest matching ancestor',
  'DOM traversal lets you write shorter, faster code when you already have a reference to a nearby element',
];

const closureObjectives = [
  'Explain the parent\u2013child\u2013sibling relationships in the DOM tree',
  'Use parentNode and parentElement to move up the tree',
  'Use children, firstElementChild, and lastElementChild to move down',
  'Use nextElementSibling and previousElementSibling to move sideways',
  'Explain the difference between Node properties and Element properties',
  'Combine traversal methods to reach any element from any starting point',
  'Apply DOM traversal in a real-world scenario',
];

const closureReflectionPrompts = [
  {
    title: '\uD83D\uDCAD Reflection Questions',
    icon: '\uD83D\uDCAD',
    questions: [
      'Why do you think the DOM has both Node and Element versions of traversal properties?',
      'In what situations would traversal be more readable than querySelector?',
      'How does closest() simplify event handling compared to chaining parentElement?',
      'Can you think of a UI pattern in a website you use daily where DOM traversal would be used behind the scenes?',
    ],
  },
];

const closureRealWorld = '<p><strong>DOM traversal is everywhere in professional front-end development.</strong> UI component libraries like accordions, tab panels, dropdown menus, and data tables all rely heavily on traversal to connect related elements. When a user clicks a tab header, the code uses <code>nextElementSibling</code> to find the panel to show. When a row in a table is deleted, the code uses <code>parentElement</code> to find the table body and <code>children</code> to recount the rows.</p><p>Modern frameworks like Vue and React abstract some of this away, but understanding traversal helps you debug layout issues, write custom components, and work with third-party libraries that manipulate the DOM directly.</p>';

const closureNextSteps = '<p>Now that you can navigate the DOM tree, you&rsquo;re ready to learn how to <strong>listen for user interactions</strong>. In the <strong>Event Handling</strong> tutorial, you&rsquo;ll learn about click events, keyboard events, and event delegation \u2014 and you&rsquo;ll see how traversal and events work together to build interactive web pages.</p>';
</script>

<style scoped>
.tutorial-content {
  max-width: 800px;
  margin: 0 auto;
}

.dom-diagram {
  text-align: center;
}

.diagram-container {
  display: inline-block;
  max-width: 100%;
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
  color: #000000;
  font-size: 0.9rem;
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
