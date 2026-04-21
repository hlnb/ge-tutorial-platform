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
          <a href="#" aria-current="page">Advanced Event Handling</a>
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
        Advanced Event Handling
      </h1>

      <!-- ═══════════════════════════════════════════════════ -->
      <!-- HUNTER ELEMENT 1: ANTICIPATORY SET                -->
      <!-- ═══════════════════════════════════════════════════ -->
      <AnticipatorySet
        title="Beyond the Click"
        icon="⚡"
        :hook="`<p>You already know how to listen for clicks and keyboard presses. But what happens when you need to create your own events? Or when a scroll listener fires hundreds of times per second and makes your page stutter? Or when a component is removed from the page but its event listeners keep running in the background, eating up memory?</p><p>Advanced event handling is about <em>control</em>. It\u2019s the difference between a page that works and a page that works <strong>well</strong> \u2014 smoothly, efficiently, and without hidden bugs.</p><p>In this lesson you\u2019ll learn to create custom events, manage listener lifecycles, throttle and debounce expensive handlers, and handle events across complex UI patterns like modal dialogs and focus traps.</p>`"
      />

      <!-- ═══════════════════════════════════════════════════ -->
      <!-- HUNTER ELEMENT 2: LEARNING OBJECTIVES             -->
      <!-- ═══════════════════════════════════════════════════ -->
      <LearningObjectives
        :objectives="[
          'Create and dispatch custom events with CustomEvent',
          'Pass data through custom events using the detail property',
          'Remove event listeners properly to prevent memory leaks',
          'Implement throttling to limit how often a handler fires',
          'Implement debouncing to delay a handler until activity stops',
          'Use once, passive, and capture options with addEventListener',
          'Build a focus trap for accessible modal dialogs',
          'Apply event.preventDefault() and event.stopPropagation() strategically',
        ]"
      />

      <!-- ═══════════════════════════════════════════════════ -->
      <!-- SECTION 1: CUSTOM EVENTS                          -->
      <!-- ═══════════════════════════════════════════════════ -->
      <section id="custom-events">
        <h2><i class="fas fa-star mr-2"></i>Custom Events</h2>
        <p>
          The browser has dozens of built-in events &mdash; <code>click</code>, <code>keydown</code>,
          <code>submit</code> &mdash; but sometimes you need your own. Custom events let different parts
          of your code communicate without being tightly coupled.
        </p>

        <h3>Creating a Custom Event</h3>
        <p>Use the <code>CustomEvent</code> constructor to create an event with any name you choose:</p>
        <div class="code-example">
          <pre v-pre><code><span class="comment">// Create a custom event</span>
<span class="keyword">const</span> <span class="variable">cartEvent</span> = <span class="keyword">new</span> <span class="function">CustomEvent</span>(<span class="string">'item-added'</span>, {
  <span class="variable">detail</span>: {
    <span class="variable">productId</span>: <span class="number">42</span>,
    <span class="variable">name</span>: <span class="string">'Wireless Mouse'</span>,
    <span class="variable">price</span>: <span class="number">29.99</span>
  },
  <span class="variable">bubbles</span>: <span class="keyword">true</span>
});

<span class="comment">// Dispatch the event on any element</span>
<span class="variable">document</span>.<span class="function">querySelector</span>(<span class="string">'.add-to-cart'</span>).<span class="function">dispatchEvent</span>(<span class="variable">cartEvent</span>);</code></pre>
        </div>

        <h3>Listening for Custom Events</h3>
        <p>Custom events are listened for the same way as built-in events. The <code>detail</code> property carries your data:</p>
        <div class="code-example">
          <pre v-pre><code><span class="comment">// Listen anywhere up the DOM tree (because bubbles: true)</span>
<span class="variable">document</span>.<span class="function">addEventListener</span>(<span class="string">'item-added'</span>, (<span class="variable">event</span>) => {
  <span class="variable">console</span>.<span class="function">log</span>(<span class="string">'Added:'</span>, <span class="variable">event</span>.<span class="variable">detail</span>.<span class="variable">name</span>);
  <span class="variable">console</span>.<span class="function">log</span>(<span class="string">'Price:'</span>, <span class="variable">event</span>.<span class="variable">detail</span>.<span class="variable">price</span>);
  <span class="function">updateCartBadge</span>();
});</code></pre>
        </div>

        <div class="notification is-info is-light">
          <p><i class="fas fa-info-circle mr-2"></i><strong>When to use custom events:</strong> They shine when you have independent UI components that need to communicate. A product card can fire <code>item-added</code>, and the cart icon can listen for it &mdash; neither needs to know the other exists.</p>
        </div>
      </section>

      <!-- ═══════════════════════════════════════════════════ -->
      <!-- SECTION 2: REMOVING EVENT LISTENERS               -->
      <!-- ═══════════════════════════════════════════════════ -->
      <section id="removing-listeners">
        <h2><i class="fas fa-trash-alt mr-2"></i>Removing Event Listeners</h2>
        <p>
          Every <code>addEventListener</code> allocates memory. If you add listeners to elements that get removed from the page
          (like items in a dynamic list), those listeners stay in memory unless you explicitly remove them. This is called a <strong>memory leak</strong>.
        </p>

        <h3>The Named Function Pattern</h3>
        <p>To remove a listener, you need a reference to the exact same function you passed to <code>addEventListener</code>:</p>
        <div class="code-example">
          <pre v-pre><code><span class="comment">// ✅ Named function — can be removed</span>
<span class="keyword">function</span> <span class="function">handleClick</span>(<span class="variable">event</span>) {
  <span class="variable">console</span>.<span class="function">log</span>(<span class="string">'Clicked!'</span>, <span class="variable">event</span>.<span class="variable">target</span>);
}

<span class="variable">button</span>.<span class="function">addEventListener</span>(<span class="string">'click'</span>, <span class="variable">handleClick</span>);
<span class="comment">// Later, when done:</span>
<span class="variable">button</span>.<span class="function">removeEventListener</span>(<span class="string">'click'</span>, <span class="variable">handleClick</span>);

<span class="comment">// ❌ Anonymous function — CANNOT be removed</span>
<span class="variable">button</span>.<span class="function">addEventListener</span>(<span class="string">'click'</span>, (<span class="variable">event</span>) => {
  <span class="variable">console</span>.<span class="function">log</span>(<span class="string">'Clicked!'</span>);
});
<span class="comment">// No way to reference this function to remove it!</span></code></pre>
        </div>

        <h3>The AbortController Pattern</h3>
        <p>Modern JavaScript offers a cleaner way to manage listener cleanup using <code>AbortController</code>:</p>
        <div class="code-example">
          <pre v-pre><code><span class="keyword">const</span> <span class="variable">controller</span> = <span class="keyword">new</span> <span class="function">AbortController</span>();

<span class="comment">// Add multiple listeners with the same signal</span>
<span class="variable">button</span>.<span class="function">addEventListener</span>(<span class="string">'click'</span>, <span class="variable">handleClick</span>, { <span class="variable">signal</span>: <span class="variable">controller</span>.<span class="variable">signal</span> });
<span class="variable">button</span>.<span class="function">addEventListener</span>(<span class="string">'mouseenter'</span>, <span class="variable">handleHover</span>, { <span class="variable">signal</span>: <span class="variable">controller</span>.<span class="variable">signal</span> });
<span class="variable">window</span>.<span class="function">addEventListener</span>(<span class="string">'resize'</span>, <span class="variable">handleResize</span>, { <span class="variable">signal</span>: <span class="variable">controller</span>.<span class="variable">signal</span> });

<span class="comment">// Remove ALL of them at once</span>
<span class="variable">controller</span>.<span class="function">abort</span>();</code></pre>
        </div>

        <div class="notification is-warning is-light">
          <p><i class="fas fa-exclamation-triangle mr-2"></i><strong>Memory leak warning:</strong> If you create a list of 100 items with click listeners, then replace the list with new HTML, those 100 old listeners still exist in memory. Always clean up before replacing content, or use event delegation on a stable parent element.</p>
        </div>
      </section>

      <!-- ═══════════════════════════════════════════════════ -->
      <!-- CHECKPOINT 1                                       -->
      <!-- ═══════════════════════════════════════════════════ -->
      <CheckpointBox :questions="checkpointCustomEvents" />

      <!-- ═══════════════════════════════════════════════════ -->
      <!-- SECTION 3: LISTENER OPTIONS                       -->
      <!-- ═══════════════════════════════════════════════════ -->
      <section id="listener-options">
        <h2><i class="fas fa-sliders-h mr-2"></i>Listener Options</h2>
        <p>
          <code>addEventListener</code> accepts a third argument &mdash; an options object that gives
          you fine-grained control over how the listener behaves:
        </p>

        <table class="table is-bordered is-striped is-fullwidth">
          <thead>
            <tr>
              <th>Option</th>
              <th>Type</th>
              <th>What it does</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>once</code></td>
              <td>Boolean</td>
              <td>Listener automatically removes itself after firing once</td>
            </tr>
            <tr>
              <td><code>passive</code></td>
              <td>Boolean</td>
              <td>Promises not to call <code>preventDefault()</code> &mdash; lets the browser optimise scrolling</td>
            </tr>
            <tr>
              <td><code>capture</code></td>
              <td>Boolean</td>
              <td>Fires during the capture phase instead of the bubble phase</td>
            </tr>
            <tr>
              <td><code>signal</code></td>
              <td>AbortSignal</td>
              <td>Removes the listener when the signal is aborted</td>
            </tr>
          </tbody>
        </table>

        <h3>Practical Examples</h3>
        <div class="code-example">
          <pre v-pre><code><span class="comment">// Only fire once (great for one-time animations)</span>
<span class="variable">dialog</span>.<span class="function">addEventListener</span>(<span class="string">'transitionend'</span>, () => {
  <span class="variable">dialog</span>.<span class="function">remove</span>();
}, { <span class="variable">once</span>: <span class="keyword">true</span> });

<span class="comment">// Passive scroll listener (smoother performance)</span>
<span class="variable">window</span>.<span class="function">addEventListener</span>(<span class="string">'scroll'</span>, <span class="variable">handleScroll</span>, { <span class="variable">passive</span>: <span class="keyword">true</span> });

<span class="comment">// Capture phase — fires BEFORE the target element</span>
<span class="variable">document</span>.<span class="function">addEventListener</span>(<span class="string">'click'</span>, (<span class="variable">e</span>) => {
  <span class="variable">console</span>.<span class="function">log</span>(<span class="string">'Captured on document first!'</span>);
}, { <span class="variable">capture</span>: <span class="keyword">true</span> });</code></pre>
        </div>

        <div class="notification is-success is-light">
          <p><i class="fas fa-check-circle mr-2"></i><strong>Performance tip:</strong> Always use <code>{ passive: true }</code> for <code>scroll</code>, <code>touchstart</code>, and <code>touchmove</code> listeners. This tells the browser it can scroll immediately without waiting for your JavaScript to finish, resulting in noticeably smoother scrolling on mobile devices.</p>
        </div>
      </section>

      <!-- ═══════════════════════════════════════════════════ -->
      <!-- SECTION 4: THROTTLE AND DEBOUNCE                  -->
      <!-- ═══════════════════════════════════════════════════ -->
      <section id="throttle-and-debounce">
        <h2><i class="fas fa-tachometer-alt mr-2"></i>Throttle and Debounce</h2>
        <p>
          Some events fire extremely frequently &mdash; <code>scroll</code>, <code>resize</code>, and <code>mousemove</code>
          can fire hundreds of times per second. Running expensive operations on every single event kills performance.
          Two techniques solve this: <strong>throttling</strong> and <strong>debouncing</strong>.
        </p>

        <div class="columns is-multiline">
          <div class="column is-6">
            <div class="box">
              <h4 class="title is-5"><i class="fas fa-stopwatch mr-2"></i>Throttle</h4>
              <p><strong>&ldquo;Run at most once every N milliseconds&rdquo;</strong></p>
              <p>Like a speed limit. No matter how fast events fire, the handler only runs at regular intervals.</p>
              <p><strong>Use for:</strong> scroll position checks, window resize, mouse tracking</p>
            </div>
          </div>
          <div class="column is-6">
            <div class="box">
              <h4 class="title is-5"><i class="fas fa-hourglass-half mr-2"></i>Debounce</h4>
              <p><strong>&ldquo;Wait until activity stops, then run once&rdquo;</strong></p>
              <p>Like an elevator &mdash; the door only closes when people stop getting on. Resets the timer on each new event.</p>
              <p><strong>Use for:</strong> search input, form validation, auto-save</p>
            </div>
          </div>
        </div>

        <h3>Throttle Implementation</h3>
        <div class="code-example">
          <pre v-pre><code><span class="keyword">function</span> <span class="function">throttle</span>(<span class="variable">fn</span>, <span class="variable">limit</span>) {
  <span class="keyword">let</span> <span class="variable">waiting</span> = <span class="keyword">false</span>;
  <span class="keyword">return</span> <span class="keyword">function</span>(...<span class="variable">args</span>) {
    <span class="keyword">if</span> (!<span class="variable">waiting</span>) {
      <span class="variable">fn</span>.<span class="function">apply</span>(<span class="keyword">this</span>, <span class="variable">args</span>);
      <span class="variable">waiting</span> = <span class="keyword">true</span>;
      <span class="function">setTimeout</span>(() => { <span class="variable">waiting</span> = <span class="keyword">false</span>; }, <span class="variable">limit</span>);
    }
  };
}

<span class="comment">// Scroll handler runs at most once every 200ms</span>
<span class="variable">window</span>.<span class="function">addEventListener</span>(<span class="string">'scroll'</span>,
  <span class="function">throttle</span>(<span class="variable">updateScrollIndicator</span>, <span class="number">200</span>),
  { <span class="variable">passive</span>: <span class="keyword">true</span> }
);</code></pre>
        </div>

        <h3>Debounce Implementation</h3>
        <div class="code-example">
          <pre v-pre><code><span class="keyword">function</span> <span class="function">debounce</span>(<span class="variable">fn</span>, <span class="variable">delay</span>) {
  <span class="keyword">let</span> <span class="variable">timer</span>;
  <span class="keyword">return</span> <span class="keyword">function</span>(...<span class="variable">args</span>) {
    <span class="function">clearTimeout</span>(<span class="variable">timer</span>);
    <span class="variable">timer</span> = <span class="function">setTimeout</span>(() => {
      <span class="variable">fn</span>.<span class="function">apply</span>(<span class="keyword">this</span>, <span class="variable">args</span>);
    }, <span class="variable">delay</span>);
  };
}

<span class="comment">// Only search after user stops typing for 300ms</span>
<span class="variable">searchInput</span>.<span class="function">addEventListener</span>(<span class="string">'input'</span>,
  <span class="function">debounce</span>(<span class="variable">performSearch</span>, <span class="number">300</span>)
);</code></pre>
        </div>
      </section>

      <!-- ═══════════════════════════════════════════════════ -->
      <!-- CHECKPOINT 2                                       -->
      <!-- ═══════════════════════════════════════════════════ -->
      <CheckpointBox :questions="checkpointPerformance" />

      <!-- ═══════════════════════════════════════════════════ -->
      <!-- SECTION 5: PREVENT DEFAULT AND STOP PROPAGATION   -->
      <!-- ═══════════════════════════════════════════════════ -->
      <section id="prevent-and-stop">
        <h2><i class="fas fa-ban mr-2"></i>Controlling Event Flow</h2>
        <p>
          Two powerful methods on the event object let you override default browser behaviour
          and control how events travel through the DOM:
        </p>

        <h3>event.preventDefault()</h3>
        <p>Stops the browser&rsquo;s default action for an event. The event still propagates normally.</p>
        <div class="code-example">
          <pre v-pre><code><span class="comment">// Prevent a form from submitting (validate first)</span>
<span class="variable">form</span>.<span class="function">addEventListener</span>(<span class="string">'submit'</span>, (<span class="variable">event</span>) => {
  <span class="keyword">if</span> (!<span class="function">isFormValid</span>()) {
    <span class="variable">event</span>.<span class="function">preventDefault</span>();
    <span class="function">showErrors</span>();
  }
});

<span class="comment">// Prevent a link from navigating</span>
<span class="variable">link</span>.<span class="function">addEventListener</span>(<span class="string">'click'</span>, (<span class="variable">event</span>) => {
  <span class="variable">event</span>.<span class="function">preventDefault</span>();
  <span class="function">smoothScrollTo</span>(<span class="variable">link</span>.<span class="variable">hash</span>);
});</code></pre>
        </div>

        <h3>event.stopPropagation()</h3>
        <p>Prevents the event from bubbling up to parent elements. Use sparingly &mdash; it can break event delegation.</p>
        <div class="code-example">
          <pre v-pre><code><span class="comment">// Clicking the close button shouldn't also trigger the card click</span>
<span class="variable">card</span>.<span class="function">addEventListener</span>(<span class="string">'click'</span>, () => {
  <span class="function">openCardDetail</span>();
});

<span class="variable">closeBtn</span>.<span class="function">addEventListener</span>(<span class="string">'click'</span>, (<span class="variable">event</span>) => {
  <span class="variable">event</span>.<span class="function">stopPropagation</span>();
  <span class="function">closeCard</span>();
});</code></pre>
        </div>

        <div class="notification is-danger is-light">
          <p><i class="fas fa-exclamation-circle mr-2"></i><strong>Warning:</strong> Avoid using <code>stopPropagation()</code> as a quick fix. It prevents <em>all</em> parent listeners from seeing the event, which can break analytics tracking, accessibility features, and event delegation patterns. Often there&rsquo;s a better solution.</p>
        </div>
      </section>

      <!-- ═══════════════════════════════════════════════════ -->
      <!-- SECTION 6: FOCUS TRAPPING                         -->
      <!-- ═══════════════════════════════════════════════════ -->
      <section id="focus-trapping">
        <h2><i class="fas fa-crosshairs mr-2"></i>Focus Trapping for Modals</h2>
        <p>
          When a modal dialog opens, keyboard users pressing <kbd>Tab</kbd> can accidentally focus elements
          behind the overlay. A <strong>focus trap</strong> keeps focus inside the modal until it&rsquo;s closed.
          This is essential for accessibility.
        </p>

        <div class="code-example">
          <pre v-pre><code><span class="keyword">function</span> <span class="function">trapFocus</span>(<span class="variable">modal</span>) {
  <span class="keyword">const</span> <span class="variable">focusable</span> = <span class="variable">modal</span>.<span class="function">querySelectorAll</span>(
    <span class="string">'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'</span>
  );
  <span class="keyword">const</span> <span class="variable">first</span> = <span class="variable">focusable</span>[<span class="number">0</span>];
  <span class="keyword">const</span> <span class="variable">last</span> = <span class="variable">focusable</span>[<span class="variable">focusable</span>.<span class="variable">length</span> - <span class="number">1</span>];

  <span class="variable">modal</span>.<span class="function">addEventListener</span>(<span class="string">'keydown'</span>, (<span class="variable">e</span>) => {
    <span class="keyword">if</span> (<span class="variable">e</span>.<span class="variable">key</span> !== <span class="string">'Tab'</span>) <span class="keyword">return</span>;

    <span class="keyword">if</span> (<span class="variable">e</span>.<span class="variable">shiftKey</span>) {
      <span class="comment">// Shift+Tab: if on first element, wrap to last</span>
      <span class="keyword">if</span> (<span class="variable">document</span>.<span class="variable">activeElement</span> === <span class="variable">first</span>) {
        <span class="variable">e</span>.<span class="function">preventDefault</span>();
        <span class="variable">last</span>.<span class="function">focus</span>();
      }
    } <span class="keyword">else</span> {
      <span class="comment">// Tab: if on last element, wrap to first</span>
      <span class="keyword">if</span> (<span class="variable">document</span>.<span class="variable">activeElement</span> === <span class="variable">last</span>) {
        <span class="variable">e</span>.<span class="function">preventDefault</span>();
        <span class="variable">first</span>.<span class="function">focus</span>();
      }
    }
  });

  <span class="variable">first</span>.<span class="function">focus</span>();
}</code></pre>
        </div>

        <div class="notification is-info is-light">
          <p><i class="fas fa-universal-access mr-2"></i><strong>Accessibility note:</strong> The <code>&lt;dialog&gt;</code> HTML element provides built-in focus trapping when opened with <code>showModal()</code>. Use it when possible. The manual approach above is useful for custom modal implementations or when supporting older browsers.</p>
        </div>
      </section>

      <!-- ═══════════════════════════════════════════════════ -->
      <!-- SECTION 7: EVENT PATTERNS                         -->
      <!-- ═══════════════════════════════════════════════════ -->
      <section id="event-patterns">
        <h2><i class="fas fa-puzzle-piece mr-2"></i>Common Event Patterns</h2>
        <p>Here are three patterns that professional developers use daily:</p>

        <h3>1. Pub/Sub with Custom Events</h3>
        <p>Use a single element as an event bus to decouple components:</p>
        <div class="code-example">
          <pre v-pre><code><span class="keyword">const</span> <span class="variable">bus</span> = <span class="variable">document</span>.<span class="function">createElement</span>(<span class="string">'div'</span>);

<span class="comment">// Module A publishes</span>
<span class="variable">bus</span>.<span class="function">dispatchEvent</span>(<span class="keyword">new</span> <span class="function">CustomEvent</span>(<span class="string">'user-logged-in'</span>, {
  <span class="variable">detail</span>: { <span class="variable">username</span>: <span class="string">'alice'</span> }
}));

<span class="comment">// Module B subscribes</span>
<span class="variable">bus</span>.<span class="function">addEventListener</span>(<span class="string">'user-logged-in'</span>, (<span class="variable">e</span>) => {
  <span class="function">showWelcomeMessage</span>(<span class="variable">e</span>.<span class="variable">detail</span>.<span class="variable">username</span>);
});</code></pre>
        </div>

        <h3>2. One-Time Setup with { once: true }</h3>
        <div class="code-example">
          <pre v-pre><code><span class="comment">// Lazy-load a library the first time a feature is used</span>
<span class="variable">mapButton</span>.<span class="function">addEventListener</span>(<span class="string">'click'</span>, <span class="keyword">async</span> () => {
  <span class="keyword">const</span> <span class="variable">maps</span> = <span class="keyword">await</span> <span class="function">import</span>(<span class="string">'./maps.js'</span>);
  <span class="variable">maps</span>.<span class="function">init</span>();
}, { <span class="variable">once</span>: <span class="keyword">true</span> });</code></pre>
        </div>

        <h3>3. Escape Key to Close</h3>
        <div class="code-example">
          <pre v-pre><code><span class="keyword">function</span> <span class="function">openModal</span>(<span class="variable">modal</span>) {
  <span class="variable">modal</span>.<span class="variable">hidden</span> = <span class="keyword">false</span>;
  <span class="function">trapFocus</span>(<span class="variable">modal</span>);

  <span class="keyword">const</span> <span class="function">handleEsc</span> = (<span class="variable">e</span>) => {
    <span class="keyword">if</span> (<span class="variable">e</span>.<span class="variable">key</span> === <span class="string">'Escape'</span>) {
      <span class="function">closeModal</span>(<span class="variable">modal</span>);
      <span class="variable">document</span>.<span class="function">removeEventListener</span>(<span class="string">'keydown'</span>, <span class="variable">handleEsc</span>);
    }
  };
  <span class="variable">document</span>.<span class="function">addEventListener</span>(<span class="string">'keydown'</span>, <span class="variable">handleEsc</span>);
}</code></pre>
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
        <h2><i class="fas fa-laptop-code mr-2"></i>Guided Practice: Notification System</h2>
        <GuidedPractice
          title="Build a Toast Notification System"
          :steps="guidedPracticeSteps"
          :success-criteria="[
            'Custom events fire when notifications are created',
            'Notifications auto-dismiss using { once: true } on transitionend',
            'Escape key closes all open notifications',
            'No memory leaks — listeners are cleaned up when notifications are removed',
          ]"
        />
      </section>

      <!-- ═══════════════════════════════════════════════════ -->
      <!-- HUNTER ELEMENT 6: INDEPENDENT PRACTICE            -->
      <!-- ═══════════════════════════════════════════════════ -->
      <section id="independent-practice">
        <h2><i class="fas fa-code mr-2"></i>Independent Practice</h2>
        <IndependentPractice
          task="<p>Build an <strong>accessible modal dialog</strong> with proper event handling. The modal should open and close with animations, trap keyboard focus, close on Escape or backdrop click, and use custom events to notify the rest of the page when it opens and closes.</p>"
          :requirements="[
            'Modal opens with a fade-in transition and closes with fade-out',
            'Focus is trapped inside the modal while open (Tab wraps around)',
            'Pressing Escape closes the modal',
            'Clicking the backdrop (outside the modal content) closes the modal',
            'Dispatch custom events: modal-opened and modal-closed with detail data',
            'All event listeners are properly cleaned up when the modal closes',
          ]"
          :stretch-goals="[
            'Stack multiple modals (closing the top one reveals the one beneath)',
            'Add a debounced search input inside the modal',
            'Use AbortController for all listener cleanup',
            'Restore focus to the element that opened the modal after closing',
          ]"
          :rubric="[
            { criteria: 'Custom events dispatch with data', success: 'CustomEvent fires with relevant detail on open and close' },
            { criteria: 'Focus trapping works correctly', success: 'Tab and Shift+Tab wrap within the modal' },
            { criteria: 'Escape and backdrop close work', success: 'Modal closes cleanly with both methods' },
            { criteria: 'No memory leaks', success: 'All listeners removed after modal closes' },
            { criteria: 'Smooth transitions', success: 'CSS transitions work with once: true on transitionend' },
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

      <TutorialRecommendations current-path="/tutorials/beginner/dom-basics/advanced-events" />
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
  title: 'Advanced Event Handling',
  description: 'Go beyond basic events — custom events, debouncing, throttling, and managing event listener lifecycles.',
  path: '/tutorials/beginner/dom-basics/advanced-events',
});

// ── Sidebar sections ─────────────────────────────────────────────
usePageSections([
  { id: 'custom-events', title: 'Custom Events' },
  { id: 'removing-listeners', title: 'Removing Listeners' },
  { id: 'listener-options', title: 'Listener Options' },
  { id: 'throttle-and-debounce', title: 'Throttle & Debounce' },
  { id: 'prevent-and-stop', title: 'Controlling Event Flow' },
  { id: 'focus-trapping', title: 'Focus Trapping' },
  { id: 'event-patterns', title: 'Event Patterns' },
  { id: 'guided-practice', title: 'Guided Practice' },
  { id: 'independent-practice', title: 'Independent Practice' },
  { id: 'summary', title: 'Summary' },
]);

// ── Checkpoint 1: Custom Events & Removing Listeners ──────────────
const checkpointCustomEvents = [
  {
    question: 'What is the difference between a regular Event and a CustomEvent?',
    answer: 'CustomEvent has a detail property where you can attach any data you want to pass along with the event. Regular Event objects don\u2019t carry custom data.',
  },
  {
    question: 'Why can\u2019t you remove an anonymous arrow function passed to addEventListener?',
    answer: 'removeEventListener needs a reference to the exact same function object. Anonymous functions create a new function object each time, so there\u2019s no reference to pass to removeEventListener.',
  },
  {
    question: 'How does AbortController simplify listener cleanup?',
    answer: 'You pass the same AbortSignal to multiple addEventListener calls. When you call controller.abort(), all listeners registered with that signal are removed at once \u2014 no need to track individual function references.',
  },
];

// ── Checkpoint 2: Performance ─────────────────────────────────────
const checkpointPerformance = [
  {
    question: 'When would you use throttle instead of debounce?',
    answer: 'Use throttle when you want regular updates at a controlled rate (e.g., updating a scroll progress bar every 200ms). Use debounce when you only care about the final value after activity stops (e.g., search-as-you-type after the user finishes typing).',
  },
  {
    question: 'What does the passive option do, and why does it improve scrolling performance?',
    answer: 'passive: true tells the browser the listener will never call preventDefault(). This means the browser can start scrolling immediately without waiting for your JavaScript to finish executing, because it knows you won\u2019t try to cancel the scroll.',
  },
  {
    question: 'A listener set with { once: true } fires. What happens to it after?',
    answer: 'It automatically removes itself. The browser calls removeEventListener for you after the handler runs once. It\u2019s equivalent to calling removeEventListener inside the handler.',
  },
];

// ── Checkpoint 3: Patterns ────────────────────────────────────────
const checkpointPatterns = [
  {
    question: 'Why is stopPropagation() considered risky to use?',
    answer: 'It prevents ALL parent elements from seeing the event, not just the one you\u2019re worried about. This can silently break analytics tracking, accessibility features, event delegation, and other listeners that depend on events bubbling up.',
  },
  {
    question: 'What is the purpose of a focus trap in a modal?',
    answer: 'It keeps keyboard focus inside the modal while it\u2019s open. Without it, a user pressing Tab could focus elements behind the overlay that they can\u2019t see, which breaks keyboard navigation and is an accessibility violation.',
  },
  {
    question: 'Describe the Pub/Sub pattern using custom events.',
    answer: 'A shared element acts as a message bus. One module dispatches custom events (publish), and other modules listen for those events (subscribe). The modules don\u2019t need references to each other \u2014 they only know about the bus and the event names.',
  },
];

// ── Guided Practice Steps ─────────────────────────────────────────
const guidedPracticeSteps = [
  {
    title: 'Create the HTML structure',
    instructions: '<p>Create a file called <code>notifications.html</code> with a container for toast notifications and a few trigger buttons:</p><pre><code>\u003C!DOCTYPE html\u003E\n\u003Chtml lang="en"\u003E\n\u003Chead\u003E\n  \u003Cmeta charset="UTF-8"\u003E\n  \u003Ctitle\u003ENotification System\u003C/title\u003E\n  \u003Cstyle\u003E\n    .toast-container {\n      position: fixed; top: 1rem; right: 1rem;\n      display: flex; flex-direction: column; gap: 0.5rem;\n      z-index: 1000;\n    }\n    .toast {\n      padding: 1rem 1.5rem; border-radius: 8px;\n      color: white; min-width: 250px;\n      opacity: 1; transition: opacity 0.3s ease;\n    }\n    .toast.fade-out { opacity: 0; }\n    .toast.success { background: #2ecc71; }\n    .toast.error { background: #e74c3c; }\n    .toast.info { background: #3498db; }\n  \u003C/style\u003E\n\u003C/head\u003E\n\u003Cbody\u003E\n  \u003Ch1\u003ENotification System\u003C/h1\u003E\n  \u003Cbutton data-type="success"\u003ESuccess\u003C/button\u003E\n  \u003Cbutton data-type="error"\u003EError\u003C/button\u003E\n  \u003Cbutton data-type="info"\u003EInfo\u003C/button\u003E\n  \u003Cdiv class="toast-container"\u003E\u003C/div\u003E\n  \u003Cscript src="notifications.js"\u003E\u003C/script\u003E\n\u003C/body\u003E\n\u003C/html\u003E</code></pre>',
    hints: ['The toast container is fixed in the top-right corner. Each toast will be appended here.'],
  },
  {
    title: 'Create and dispatch a custom event',
    instructions: '<p>In <code>notifications.js</code>, listen for button clicks and dispatch a custom <code>notify</code> event:</p><pre><code>document.addEventListener(\'click\', (e) =\u003E {\n  const btn = e.target.closest(\'button[data-type]\');\n  if (!btn) return;\n\n  const event = new CustomEvent(\'notify\', {\n    detail: {\n      type: btn.dataset.type,\n      message: `This is a ${btn.dataset.type} notification!`\n    },\n    bubbles: true\n  });\n  document.dispatchEvent(event);\n});</code></pre>',
    hints: ['We use event delegation on document and filter by data-type. The custom event bubbles so any listener on document will catch it.'],
  },
  {
    title: 'Listen for the custom event and create toasts',
    instructions: '<p>Add a listener for the <code>notify</code> event that creates a toast element:</p><pre><code>const container = document.querySelector(\'.toast-container\');\n\ndocument.addEventListener(\'notify\', (e) =\u003E {\n  const toast = document.createElement(\'div\');\n  toast.className = `toast ${e.detail.type}`;\n  toast.textContent = e.detail.message;\n  container.appendChild(toast);\n\n  // Auto-dismiss after 3 seconds\n  setTimeout(() =\u003E toast.classList.add(\'fade-out\'), 3000);\n\n  // Remove from DOM after the fade transition ends\n  toast.addEventListener(\'transitionend\', () =\u003E {\n    toast.remove();\n  }, { once: true });\n});</code></pre>',
    hints: ['The { once: true } option ensures the transitionend listener is automatically cleaned up when the toast is removed.'],
  },
  {
    title: 'Add Escape key to dismiss all',
    instructions: '<p>Add a keydown listener that clears all toasts when Escape is pressed:</p><pre><code>document.addEventListener(\'keydown\', (e) =\u003E {\n  if (e.key === \'Escape\') {\n    container.querySelectorAll(\'.toast\').forEach(toast =\u003E {\n      toast.classList.add(\'fade-out\');\n      toast.addEventListener(\'transitionend\', () =\u003E {\n        toast.remove();\n      }, { once: true });\n    });\n  }\n});</code></pre>',
    hints: ['We reuse the same fade-out and cleanup pattern. Each toast removes itself after its transition completes.'],
  },
  {
    title: 'Test the system',
    instructions: '<p>Open your page in a browser and verify:</p><ul><li>Clicking each button creates a coloured toast notification</li><li>Toasts auto-dismiss after 3 seconds with a fade animation</li><li>Pressing Escape dismisses all open notifications</li><li>Removed toasts are completely gone from the DOM (inspect with DevTools)</li></ul><p>Check the Elements panel in DevTools to confirm that no orphaned elements or listeners remain after toasts disappear.</p>',
    hints: ['Use the Performance tab in DevTools to watch for memory that doesn\u2019t get released.'],
  },
];

// ── Closure Data ──────────────────────────────────────────────────
const closureKeyTakeaways = [
  'CustomEvent lets you create your own events with data in the detail property',
  'Always use named functions or AbortController so you can remove listeners and prevent memory leaks',
  'Use { once: true } for one-time listeners and { passive: true } for scroll/touch performance',
  'Throttle limits how often a handler runs; debounce waits until activity stops',
  'Use preventDefault() to override default browser behaviour; use stopPropagation() sparingly',
  'Focus trapping is essential for accessible modal dialogs',
];

const closureObjectives = [
  'Create and dispatch custom events with CustomEvent',
  'Pass data through custom events using the detail property',
  'Remove event listeners properly to prevent memory leaks',
  'Implement throttling and debouncing',
  'Use once, passive, and capture options with addEventListener',
  'Build a focus trap for accessible modal dialogs',
  'Apply preventDefault() and stopPropagation() strategically',
];

const closureReflectionPrompts = [
  {
    title: '\uD83D\uDCAD Reflection Questions',
    icon: '\uD83D\uDCAD',
    questions: [
      'When would you choose custom events over a simple function call between modules?',
      'Can you think of a feature on a website you use daily that likely uses throttle or debounce?',
      'Why is it important to restore focus to the trigger element after closing a modal?',
      'How would memory leaks from unremoved listeners manifest to a user?',
    ],
  },
];

const closureRealWorld = '<p><strong>Advanced event handling is the backbone of every modern web application.</strong> Social media feeds use throttled scroll listeners for infinite scrolling. Search bars use debounced input handlers to avoid hammering APIs. Modal dialogs use focus traps for accessibility compliance. Shopping carts use custom events to decouple the product listing from the cart icon.</p><p>Understanding these patterns is what separates a developer who can build features from one who can build features that are <em>fast, accessible, and leak-free</em>.</p>';

const closureNextSteps = '<p>Now that you can handle events like a pro, it\u2019s time to learn how to <strong>create and manage dynamic content</strong>. In the <strong>Dynamic Content</strong> tutorial, you\u2019ll learn to build, update, and efficiently render content on the fly \u2014 combining everything you\u2019ve learned about DOM manipulation, traversal, and events.</p>';
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

kbd {
  background: #eee;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 0.1rem 0.4rem;
  font-size: 0.85em;
  font-family: inherit;
  box-shadow: 0 1px 0 #bbb;
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
