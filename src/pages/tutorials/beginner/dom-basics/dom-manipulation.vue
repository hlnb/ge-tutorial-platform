<template>
  <div class="content">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li>
          <router-link to="/"><i class="fa-solid fa-house mr-2"></i> Home</router-link>
        </li>
        <li><router-link to="/tutorials">Tutorials</router-link></li>
        <li>
          <router-link to="/tutorials/dom-basics">DOM Basics</router-link>
        </li>
        <li class="is-active">
          <a href="#" aria-current="page">DOM Manipulation</a>
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
        <i class="fas fa-sitemap fa-rotate-270" style="color: #ffd43b; margin-right: 0.5rem;"></i>
        DOM Manipulation: Creating Dynamic Web Pages
      </h1>
      
      <div class="box box-info mb-6">
        <h3 class="title is-4">
          <i class="fas fa-graduation-cap"></i> Learning Objectives
        </h3>
        <p>After completing this tutorial, you'll be able to:</p>
        <ul>
          <li><i class="fas fa-check-circle has-text-success mr-2"></i>Create and modify DOM elements dynamically</li>
          <li><i class="fas fa-check-circle has-text-success mr-2"></i>Update element attributes and styles</li>
          <li><i class="fas fa-check-circle has-text-success mr-2"></i>Insert and remove elements from the DOM</li>
          <li><i class="fas fa-check-circle has-text-success mr-2"></i>Work with element classes and CSS</li>
          <li><i class="fas fa-check-circle has-text-success mr-2"></i>Understand DOM traversal methods</li>
        </ul>
      </div>
      
      <div class="box is-info mb-6" style="background-color: #f1f8ff;">
        <h3 class="title is-4">
          <i class="fas fa-lightbulb"></i> Prerequisites
        </h3>
        <p>Before starting this tutorial, you should have:</p>
        <ul>
          <li><i class="fas fa-check"></i> Completed the Introduction to DOM tutorial</li>
          <li><i class="fas fa-check"></i> Understanding of JavaScript basics</li>
          <li><i class="fas fa-check"></i> Familiarity with HTML and CSS</li>
        </ul>
      </div>

      <section id="creating-elements" class="mb-6">
        <h2 class="title is-3">Creating and Adding Elements</h2>
        <div class="concept-card">
          <h3 class="title is-4">Creating New Elements</h3>
          <p>Learn how to create DOM elements programmatically using JavaScript:</p>
          <div class="code-example">
            <pre v-pre><code v-pre><span class="comment">// Creating a new element</span>
<span class="keyword">const</span> <span class="variable">newDiv</span> = <span class="function">document.createElement</span>(<span class="string">'div'</span>);
<span class="variable">newDiv</span>.<span class="variable">textContent</span> = <span class="string">'Hello, DOM!'</span>;
<span class="variable">newDiv</span>.<span class="variable">className</span> = <span class="string">'greeting'</span>;

<span class="comment">// Adding it to the document</span>
<span class="function">document.body.appendChild</span>(<span class="variable">newDiv</span>);</code></pre>
          </div>
          
          <div class="more-examples mt-4">
            <h4 class="title is-5">More Creation Methods</h4>
            <div class="code-example">
              <pre v-pre><code v-pre><span class="comment">// Creating elements with innerHTML</span>
<span class="keyword">const</span> <span class="variable">container</span> = <span class="function">document.getElementById</span>(<span class="string">'container'</span>);
<span class="variable">container</span>.<span class="variable">innerHTML</span> = <span class="string">'&lt;div class="new-element"&gt;Created with innerHTML&lt;/div&gt;'</span>;

<span class="comment">// Creating text nodes</span>
<span class="keyword">const</span> <span class="variable">paragraph</span> = <span class="function">document.createElement</span>(<span class="string">'p'</span>);
<span class="keyword">const</span> <span class="variable">textNode</span> = <span class="function">document.createTextNode</span>(<span class="string">'This is a text node'</span>);
<span class="variable">paragraph</span>.<span class="function">appendChild</span>(<span class="variable">textNode</span>);

<span class="comment">// Creating elements with insertAdjacentHTML</span>
<span class="variable">container</span>.<span class="function">insertAdjacentHTML</span>(<span class="string">'beforeend'</span>, <span class="string">'&lt;div class="adjacent"&gt;Added with insertAdjacentHTML&lt;/div&gt;'</span>);</code></pre>
            </div>
          </div>
          
          <div class="practice-section">
            <h4 class="title is-5">Try it yourself:</h4>
            <div class="interactive-demo">
              <div class="demo-container">
                <div id="element-creator" class="mb-3">
                  <div class="field has-addons">
                    <div class="control">
                      <input class="input" type="text" placeholder="Element type (div, p, button, etc.)">
                    </div>
                    <div class="control">
                      <input class="input" type="text" placeholder="Content text">
                    </div>
                    <div class="control">
                      <button class="button is-info">Create Element</button>
                    </div>
                  </div>
                </div>
                <div id="element-preview" class="p-3 mt-2" style="min-height: 100px; border: 1px dashed #ccc; border-radius: 4px;">
                  <!-- Created elements will appear here -->
                  <p class="has-text-grey has-text-centered">Elements will appear here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="modifying-elements" class="mb-6">
        <h2 class="title is-3">Modifying Elements</h2>
        <div class="concept-card">
          <h3 class="title is-4">Working with Attributes and Styles</h3>
          <p>Explore different ways to modify existing elements:</p>
          <div class="code-example">
            <pre v-pre><code><span class="comment">// Modifying attributes</span>
<span class="variable">element</span>.<span class="function">setAttribute</span>(<span class="string">'id'</span>, <span class="string">'unique-id'</span>);
<span class="variable">element</span>.<span class="variable">id</span> = <span class="string">'unique-id'</span>;

<span class="comment">// Working with styles</span>
<span class="variable">element</span>.<span class="variable">style</span>.<span class="variable">backgroundColor</span> = <span class="string">'blue'</span>;
<span class="variable">element</span>.<span class="variable">style</span>.<span class="variable">fontSize</span> = <span class="string">'16px'</span>;</code></pre>
          </div>
          
          <div class="more-examples mt-4">
            <h4 class="title is-5">Manipulating Classes and Content</h4>
            <div class="code-example">
              <pre v-pre><code><span class="comment">// Working with classes</span>
<span class="variable">element</span>.<span class="variable">classList</span>.<span class="function">add</span>(<span class="string">'active'</span>);
<span class="variable">element</span>.<span class="variable">classList</span>.<span class="function">remove</span>(<span class="string">'inactive'</span>);
<span class="variable">element</span>.<span class="variable">classList</span>.<span class="function">toggle</span>(<span class="string">'highlight'</span>);
<span class="variable">element</span>.<span class="variable">classList</span>.<span class="function">contains</span>(<span class="string">'active'</span>);  <span class="comment">// returns true if class exists</span>

<span class="comment">// Modifying content</span>
<span class="variable">element</span>.<span class="variable">textContent</span> = <span class="string">'New text content'</span>;  <span class="comment">// Sets text (safer)</span>
<span class="variable">element</span>.<span class="variable">innerHTML</span> = <span class="string">'&lt;span&gt;HTML content&lt;/span&gt;'</span>;  <span class="comment">// Parses HTML</span>
<span class="variable">element</span>.<span class="function">insertAdjacentText</span>(<span class="string">'beforeend'</span>, <span class="string">' More text'</span>);</code></pre>
            </div>
          </div>
          
          <div class="practice-section">
            <h4 class="title is-5">Interactive Styler</h4>
            <div class="interactive-demo">
              <div class="columns">
                <div class="column is-two-thirds">
                  <div id="style-controls" class="mb-3">
                    <div class="field">
                      <label class="label">Background Color</label>
                      <div class="control">
                        <input type="color" class="input" value="#ffffff">
                      </div>
                    </div>
                    <div class="field">
                      <label class="label">Text Color</label>
                      <div class="control">
                        <input type="color" class="input" value="#000000">
                      </div>
                    </div>
                    <div class="field">
                      <label class="label">Border Radius</label>
                      <div class="control">
                        <input type="range" min="0" max="50" value="0" class="slider">
                      </div>
                    </div>
                    <div class="field">
                      <label class="label">Classes</label>
                      <div class="control">
                        <div class="select is-multiple">
                          <select multiple>
                            <option value="border">Border</option>
                            <option value="shadow">Shadow</option>
                            <option value="padding">Padding</option>
                            <option value="centered">Centered Text</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <div id="style-preview" class="p-4" style="border: 1px solid #ddd; height: 150px; display: flex; align-items: center; justify-content: center;">
                    <p>Style me!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="dom-traversal" class="mb-6">
        <h2 class="title is-3">DOM Traversal</h2>
        <div class="concept-card">
          <h3 class="title is-4">Navigating the DOM Tree</h3>
          <p>The DOM is structured like a family tree, where elements can have parent, child, and sibling relationships. Understanding these relationships is key to effective DOM manipulation.</p>
          
          <div class="dom-diagram mb-4">
            <div class="diagram-container">
              <!-- Visual DOM Tree Diagram -->
              <svg width="600" height="300" viewBox="0 0 600 300">
                <!-- HTML Root -->
                <g class="node" transform="translate(300,40)">
                  <rect width="80" height="30" rx="5" fill="#ffd43b"/>
                  <text x="40" y="20" text-anchor="middle" fill="#000">html</text>
                </g>
                
                <!-- Body Branch -->
                <g class="node" transform="translate(300,100)">
                  <rect width="80" height="30" rx="5" fill="#ffd43b"/>
                  <text x="40" y="20" text-anchor="middle" fill="#000">body</text>
                  <!-- Vertical connection from html to body -->
                  <line x1="40" y1="-30" x2="40" y2="0" stroke="#666" stroke-width="2"/>
                </g>

                <!-- Horizontal line connecting nav, main, and footer -->
                <line x1="190" y1="175" x2="490" y2="175" stroke="#666" stroke-width="2"/>
                
                <!-- Left Branch (nav) -->
                <g class="node" transform="translate(150,160)">
                  <rect width="80" height="30" rx="5" fill="#ffd43b"/>
                  <text x="40" y="20" text-anchor="middle" fill="#000">nav</text>
                </g>
                
                <!-- Middle Branch (main) -->
                <g class="node" transform="translate(300,160)">
                  <rect width="80" height="30" rx="5" fill="#ffd43b"/>
                  <text x="40" y="20" text-anchor="middle" fill="#000">main</text>
                  <!-- Vertical connection from body -->
                  <line x1="40" y1="-30" x2="40" y2="0" stroke="#666" stroke-width="2"/>
                </g>
                
                <!-- Right Branch (footer) -->
                <g class="node" transform="translate(450,160)">
                  <rect width="80" height="30" rx="5" fill="#ffd43b"/>
                  <text x="40" y="20" text-anchor="middle" fill="#000">footer</text>
                </g>

                <!-- Horizontal line connecting section and article -->
                <line x1="260" y1="235" x2="420" y2="235" stroke="#666" stroke-width="2"/>
                
                <!-- Children under main -->
                <g class="node" transform="translate(220,220)">
                  <rect width="80" height="30" rx="5" fill="#ffd43b"/>
                  <text x="40" y="20" text-anchor="middle" fill="#000">section</text>
                </g>
                
                <g class="node" transform="translate(380,220)">
                  <rect width="80" height="30" rx="5" fill="#ffd43b"/>
                  <text x="40" y="20" text-anchor="middle" fill="#000">article</text>
                </g>

                <!-- Vertical connection from main to children horizontal line -->
                <line x1="340" y1="190" x2="340" y2="235" stroke="#666" stroke-width="2"/>
                
                <!-- Labels for relationships -->
                <g class="labels">
                  <text x="350" y="85" class="relationship-label" fill="#666">Parent</text>
                  <text x="350" y="145" class="relationship-label" fill="#666">Children</text>
                  <text x="350" y="210" class="relationship-label" fill="#666">Siblings</text>
                </g>
              </svg>
            </div>
          </div>

          <div class="traversal-examples">
            <h4 class="title is-5">Common Traversal Methods</h4>
            <div class="code-example">
              <pre v-pre><code><span class="comment">// Parent Relationships</span>
<span class="keyword">const</span> <span class="variable">main</span> = <span class="function">document.querySelector</span>(<span class="string">'main'</span>);
<span class="keyword">const</span> <span class="variable">parent</span> = <span class="variable">main</span>.<span class="variable">parentNode</span>;  <span class="comment">// Gets body element</span>
<span class="keyword">const</span> <span class="variable">parentEl</span> = <span class="variable">main</span>.<span class="variable">parentElement</span>;  <span class="comment">// Same as parentNode for element nodes</span>

<span class="comment">// Child Relationships</span>
<span class="keyword">const</span> <span class="variable">children</span> = <span class="variable">main</span>.<span class="variable">children</span>;  <span class="comment">// HTMLCollection of child elements</span>
<span class="keyword">const</span> <span class="variable">firstChild</span> = <span class="variable">main</span>.<span class="variable">firstElementChild</span>;  <span class="comment">// First child element</span>
<span class="keyword">const</span> <span class="variable">lastChild</span> = <span class="variable">main</span>.<span class="variable">lastElementChild</span>;  <span class="comment">// Last child element</span>

<span class="comment">// Sibling Relationships</span>
<span class="keyword">const</span> <span class="variable">prevSibling</span> = <span class="variable">main</span>.<span class="variable">previousElementSibling</span>;  <span class="comment">// Previous sibling element</span>
<span class="keyword">const</span> <span class="variable">nextSibling</span> = <span class="variable">main</span>.<span class="variable">nextElementSibling</span>;  <span class="comment">// Next sibling element</span></code></pre>
            </div>

            <div class="practical-tips mt-4">
              <h4 class="title is-5">Practical Tips</h4>
              <ul>
                <li><strong>parentNode vs parentElement</strong>: Use parentElement when you specifically need an element node. parentNode might return other node types.</li>
                <li><strong>children vs childNodes</strong>: children returns only element nodes, while childNodes includes text nodes and comments.</li>
                <li><strong>Element-specific methods</strong>: Methods with "Element" in the name (like nextElementSibling) skip text nodes and comments.</li>
                <li><strong>Collections vs Arrays</strong>: Methods like children return live HTMLCollections. Convert to arrays using Array.from() for more flexibility.</li>
              </ul>
            </div>

            <div class="practice-section mt-4">
              <h4 class="title is-5">Try it yourself:</h4>
              <p>Use the interactive console below to practice DOM traversal methods:</p>
              <div class="interactive-demo">
                <div class="demo-structure mb-4" style="border: 1px solid #ddd; padding: 1rem; position: relative;">
                  <div id="traversal-container" style="font-family: monospace; text-align: center;">
                    <div id="nav-elem" style="background-color: #f0f8ff; padding: 10px; margin: 5px; cursor: pointer;">nav</div>
                    <div id="main-elem" style="background-color: #fff0f5; padding: 10px; margin: 5px; cursor: pointer;">
                      main
                      <div class="main-children" style="display: flex; justify-content: space-around; margin-top: 10px;">
                        <div id="section-elem" style="background-color: #f5f5dc; padding: 10px; flex: 1; margin: 0 5px; cursor: pointer;">section</div>
                        <div id="article-elem" style="background-color: #e6e6fa; padding: 10px; flex: 1; margin: 0 5px; cursor: pointer;">article</div>
                      </div>
                    </div>
                    <div id="footer-elem" style="background-color: #f0fff0; padding: 10px; margin: 5px; cursor: pointer;">footer</div>
                  </div>
                  <div class="overlay" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(255,255,255,0.7); display: none; justify-content: center; align-items: center;">
                    <div class="message" style="background: #333; color: white; padding: 10px; border-radius: 5px;"></div>
                  </div>
                </div>
                
                <div class="traversal-controls mb-3">
                  <div class="field">
                    <label class="label">Select an element:</label>
                    <div class="control">
                      <div class="select is-fullwidth">
                        <select id="element-selector">
                          <option value="nav-elem">nav</option>
                          <option value="main-elem">main</option>
                          <option value="section-elem">section</option>
                          <option value="article-elem">article</option>
                          <option value="footer-elem">footer</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div class="field">
                    <label class="label">Select traversal method:</label>
                    <div class="control">
                      <div class="select is-fullwidth">
                        <select id="traversal-method">
                          <option value="parentNode">parentNode</option>
                          <option value="children">children</option>
                          <option value="firstElementChild">firstElementChild</option>
                          <option value="lastElementChild">lastElementChild</option>
                          <option value="previousElementSibling">previousElementSibling</option>
                          <option value="nextElementSibling">nextElementSibling</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div class="field">
                    <div class="control">
                      <button id="apply-traversal" class="button is-primary is-fullwidth">Apply Traversal</button>
                    </div>
                  </div>
                </div>
                
                <div class="traversal-results p-3" style="background-color: #f8f9fa; border: 1px solid #ddd; border-radius: 4px; min-height: 80px;">
                  <p class="traversal-output has-text-grey">Results will appear here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="practical-exercise" class="mb-6">
        <h2 class="title is-3">Practical Exercise</h2>
        <div class="box">
          <h3 class="title is-4">Dynamic Content Manager</h3>
          <p>Create a content management interface that allows you to:</p>
          <ul>
            <li>Add new elements to a container</li>
            <li>Remove elements from the DOM</li>
            <li>Modify element styles and attributes</li>
            <li>Reorder elements using DOM methods</li>
          </ul>
          <div class="practice-section">
            <div class="columns">
              <div class="column is-one-third">
                <div class="control-panel">
                  <h4 class="title is-5">Add New Element</h4>
                  <div class="field">
                    <label class="label">Element Type</label>
                    <div class="control">
                      <div class="select is-fullwidth">
                        <select id="element-type">
                          <option value="div">Div</option>
                          <option value="p">Paragraph</option>
                          <option value="h3">Heading</option>
                          <option value="button">Button</option>
                          <option value="img">Image</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="field">
                    <label class="label">Content</label>
                    <div class="control">
                      <input id="element-content" class="input" type="text" placeholder="Element content">
                    </div>
                  </div>
                  <div class="field">
                    <label class="label">CSS Class</label>
                    <div class="control">
                      <input id="element-class" class="input" type="text" placeholder="Class name">
                    </div>
                  </div>
                  <div class="field">
                    <div class="control">
                      <button id="add-element" class="button is-primary is-fullwidth">Add Element</button>
                    </div>
                  </div>
                  
                  <hr>
                  
                  <h4 class="title is-5">Code Preview</h4>
                  <div class="code-preview p-2" style="background: #f8f9fa; border: 1px solid #ddd; border-radius: 4px; min-height: 100px; font-family: monospace; font-size: 0.9em;">
                    <!-- Dynamic code preview will appear here -->
                    <p class="has-text-grey has-text-centered" style="font-style: italic;">DOM structure will appear here</p>
                  </div>
                </div>
              </div>
              <div class="column">
                <div class="content-preview p-4" style="min-height: 300px; border: 1px dashed #ccc; border-radius: 4px; background: #fff;">
                  <p class="has-text-grey has-text-centered">Add elements to see them here</p>
                  <!-- Dynamic content will appear here -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="real-world-examples" class="mb-6">
        <h2 class="title is-3">Real-World DOM Manipulation Examples</h2>
        <div class="box">
          <p class="mb-4">DOM manipulation is at the heart of interactive web applications. Here are some real-world examples showing how these techniques are applied in common features:</p>
          
          <div class="columns is-multiline">
            <!-- Shopping Cart Example -->
            <div class="column is-half">
              <div class="card">
                <div class="card-header">
                  <div class="card-header-title">
                    <i class="fas fa-shopping-cart mr-2"></i> Shopping Cart
                  </div>
                </div>
                <div class="card-content">
                  <p>E-commerce sites use DOM manipulation to:</p>
                  <ul class="mt-2">
                    <li>Dynamically add items to the cart without page refresh</li>
                    <li>Update cart totals and item counts in real-time</li>
                    <li>Show/hide cart contents when a user clicks the cart icon</li>
                  </ul>
                  <div class="code-example mt-3">
                    <pre v-pre><code><span class="comment">// Add item to cart</span>
<span class="keyword">function</span> <span class="function">addToCart</span>(product) {
  <span class="keyword">const</span> <span class="variable">cartItems</span> = <span class="function">document.getElementById</span>(<span class="string">'cart-items'</span>);
  <span class="keyword">const</span> <span class="variable">cartItem</span> = <span class="function">document.createElement</span>(<span class="string">'div'</span>);
  <span class="variable">cartItem</span>.<span class="variable">className</span> = <span class="string">'cart-item'</span>;
  <span class="variable">cartItem</span>.<span class="variable">innerHTML</span> = <span class="string">`
    &lt;img src="${product.image}" alt="${product.name}" /&gt;
    &lt;div class="item-details"&gt;
      &lt;h4&gt;${product.name}&lt;/h4&gt;
      &lt;p&gt;$${product.price.toFixed(2)}&lt;/p&gt;
      &lt;button class="remove-item" data-id="${product.id}"&gt;Remove&lt;/button&gt;
    &lt;/div&gt;
  `</span>;
  <span class="variable">cartItems</span>.<span class="function">appendChild</span>(<span class="variable">cartItem</span>);
  
  <span class="comment">// Update cart count</span>
  <span class="keyword">const</span> <span class="variable">cartCount</span> = <span class="function">document.querySelector</span>(<span class="string">'.cart-count'</span>);
  <span class="variable">cartCount</span>.<span class="variable">textContent</span> = <span class="variable">cartItems</span>.<span class="variable">children</span>.<span class="variable">length</span>;
}</code></pre>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Form Validation Example -->
            <div class="column is-half">
              <div class="card">
                <div class="card-header">
                  <div class="card-header-title">
                    <i class="fas fa-check-circle mr-2"></i> Form Validation
                  </div>
                </div>
                <div class="card-content">
                  <p>Contact and registration forms use DOM manipulation to:</p>
                  <ul class="mt-2">
                    <li>Display error messages when validation fails</li>
                    <li>Highlight input fields with errors</li>
                    <li>Show success messages after form submission</li>
                  </ul>
                  <div class="code-example mt-3">
                    <pre v-pre><code><span class="comment">// Validate email field</span>
<span class="keyword">function</span> <span class="function">validateEmail</span>() {
  <span class="keyword">const</span> <span class="variable">emailInput</span> = <span class="function">document.getElementById</span>(<span class="string">'email'</span>);
  <span class="keyword">const</span> <span class="variable">emailError</span> = <span class="function">document.getElementById</span>(<span class="string">'email-error'</span>);
  <span class="keyword">const</span> <span class="variable">emailRegex</span> = <span class="regex">/^[^\s@]+@[^\s@]+\.[^\s@]+$/</span>;
  
  <span class="keyword">if</span> (!<span class="variable">emailRegex</span>.<span class="function">test</span>(<span class="variable">emailInput</span>.<span class="variable">value</span>)) {
    <span class="variable">emailInput</span>.<span class="variable">classList</span>.<span class="function">add</span>(<span class="string">'is-invalid'</span>);
    <span class="variable">emailError</span>.<span class="variable">textContent</span> = <span class="string">'Please enter a valid email address'</span>;
    <span class="variable">emailError</span>.<span class="variable">style</span>.<span class="variable">display</span> = <span class="string">'block'</span>;
    <span class="keyword">return</span> <span class="boolean">false</span>;
  } <span class="keyword">else</span> {
    <span class="variable">emailInput</span>.<span class="variable">classList</span>.<span class="function">remove</span>(<span class="string">'is-invalid'</span>);
    <span class="variable">emailInput</span>.<span class="variable">classList</span>.<span class="function">add</span>(<span class="string">'is-valid'</span>);
    <span class="variable">emailError</span>.<span class="variable">style</span>.<span class="variable">display</span> = <span class="string">'none'</span>;
    <span class="keyword">return</span> <span class="boolean">true</span>;
  }
}</code></pre>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Image Gallery Example -->
            <div class="column is-half">
              <div class="card">
                <div class="card-header">
                  <div class="card-header-title">
                    <i class="fas fa-images mr-2"></i> Image Gallery with Lightbox
                  </div>
                </div>
                <div class="card-content">
                  <p>Photo galleries use DOM manipulation to:</p>
                  <ul class="mt-2">
                    <li>Create thumbnail grids from image arrays</li>
                    <li>Show full-size images in a modal/lightbox</li>
                    <li>Implement image navigation (prev/next)</li>
                  </ul>
                  <div class="code-example mt-3">
                    <pre v-pre><code><span class="comment">// Create lightbox for gallery images</span>
<span class="keyword">function</span> <span class="function">openLightbox</span>(imageSrc, caption) {
  <span class="comment">// Create lightbox container if it doesn't exist</span>
  <span class="keyword">let</span> <span class="variable">lightbox</span> = <span class="function">document.getElementById</span>(<span class="string">'lightbox'</span>);
  
  <span class="keyword">if</span> (!<span class="variable">lightbox</span>) {
    <span class="variable">lightbox</span> = <span class="function">document.createElement</span>(<span class="string">'div'</span>);
    <span class="variable">lightbox</span>.<span class="variable">id</span> = <span class="string">'lightbox'</span>;
    <span class="variable">lightbox</span>.<span class="variable">className</span> = <span class="string">'lightbox'</span>;
    <span class="function">document.body.appendChild</span>(<span class="variable">lightbox</span>);
    
    <span class="comment">// Create close button</span>
    <span class="keyword">const</span> <span class="variable">closeBtn</span> = <span class="function">document.createElement</span>(<span class="string">'button'</span>);
    <span class="variable">closeBtn</span>.<span class="variable">className</span> = <span class="string">'close-btn'</span>;
    <span class="variable">closeBtn</span>.<span class="variable">innerHTML</span> = <span class="string">'&times;'</span>;
    <span class="variable">closeBtn</span>.<span class="function">addEventListener</span>(<span class="string">'click'</span>, () => {
      <span class="variable">lightbox</span>.<span class="variable">style</span>.<span class="variable">display</span> = <span class="string">'none'</span>;
    });
    <span class="variable">lightbox</span>.<span class="function">appendChild</span>(<span class="variable">closeBtn</span>);
  }
  
  <span class="comment">// Update lightbox content</span>
  <span class="variable">lightbox</span>.<span class="variable">innerHTML</span> = <span class="string">`
    &lt;button class="close-btn"&gt;&times;&lt;/button&gt;
    &lt;img src="${imageSrc}" alt="${caption}" /&gt;
    &lt;p class="caption"&gt;${caption}&lt;/p&gt;
  `</span>;
  <span class="variable">lightbox</span>.<span class="variable">style</span>.<span class="variable">display</span> = <span class="string">'flex'</span>;
}</code></pre>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Infinite Scroll Example -->
            <div class="column is-half">
              <div class="card">
                <div class="card-header">
                  <div class="card-header-title">
                    <i class="fas fa-scroll mr-2"></i> Infinite Scroll
                  </div>
                </div>
                <div class="card-content">
                  <p>Social media feeds and content-heavy sites use DOM manipulation to:</p>
                  <ul class="mt-2">
                    <li>Load more content as users scroll down</li>
                    <li>Add new content to the DOM without refreshing</li>
                    <li>Show loading indicators during content fetch</li>
                  </ul>
                  <div class="code-example mt-3">
                    <pre v-pre><code><span class="comment">// Add infinite scroll functionality</span>
<span class="keyword">function</span> <span class="function">setupInfiniteScroll</span>() {
  <span class="keyword">let</span> <span class="variable">page</span> = 1;
  <span class="keyword">let</span> <span class="variable">loading</span> = <span class="boolean">false</span>;
  <span class="keyword">const</span> <span class="variable">contentContainer</span> = <span class="function">document.getElementById</span>(<span class="string">'content'</span>);
  <span class="keyword">const</span> <span class="variable">loadingIndicator</span> = <span class="function">document.createElement</span>(<span class="string">'div'</span>);
  <span class="variable">loadingIndicator</span>.<span class="variable">className</span> = <span class="string">'loading'</span>;
  <span class="variable">loadingIndicator</span>.<span class="variable">innerHTML</span> = <span class="string">'Loading more items...'</span>;
  
  <span class="function">window.addEventListener</span>(<span class="string">'scroll'</span>, () => {
    <span class="keyword">const</span> <span class="variable">scrollHeight</span> = <span class="variable">document</span>.<span class="variable">documentElement</span>.<span class="variable">scrollHeight</span>;
    <span class="keyword">const</span> <span class="variable">scrollTop</span> = <span class="variable">window</span>.<span class="variable">scrollY</span>;
    <span class="keyword">const</span> <span class="variable">clientHeight</span> = <span class="variable">window</span>.<span class="variable">innerHeight</span>;
    
    <span class="keyword">if</span> (<span class="variable">scrollTop</span> + <span class="variable">clientHeight</span> >= <span class="variable">scrollHeight</span> - 200 && !<span class="variable">loading</span>) {
      <span class="variable">loading</span> = <span class="boolean">true</span>;
      <span class="variable">page</span>++;
      
      <span class="function">document.body.appendChild</span>(<span class="variable">loadingIndicator</span>);
      
      <span class="comment">// Fetch and add new content</span>
      <span class="function">fetchMoreContent</span>(<span class="variable">page</span>).<span class="function">then</span>(<span class="variable">newItems</span> => {
        <span class="variable">newItems</span>.<span class="function">forEach</span>(<span class="variable">item</span> => {
          <span class="keyword">const</span> <span class="variable">itemElement</span> = <span class="function">document.createElement</span>(<span class="string">'div'</span>);
          <span class="variable">itemElement</span>.<span class="variable">className</span> = <span class="string">'content-item'</span>;
          <span class="variable">itemElement</span>.<span class="variable">innerHTML</span> = <span class="string">`
            &lt;h3&gt;${item.title}&lt;/h3&gt;
            &lt;p&gt;${item.description}&lt;/p&gt;
          `</span>;
          <span class="variable">contentContainer</span>.<span class="function">appendChild</span>(<span class="variable">itemElement</span>);
        });
        
        <span class="variable">loading</span> = <span class="boolean">false</span>;
        <span class="variable">loadingIndicator</span>.<span class="function">remove</span>();
      });
    }
  });
}</code></pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="notification is-primary is-light mt-4">
            <p><strong>Developer Insight:</strong> Modern frameworks like React, Vue, and Angular have abstracted much of this direct DOM manipulation, but understanding these core principles is still essential. These frameworks actually use DOM manipulation under the hood to efficiently update the UI based on state changes.</p>
          </div>
        </div>
      </section>

      <section id="browser-compatibility" class="mb-6">
        <h2 class="title is-3">Browser Compatibility Considerations</h2>
        <div class="box">
          <p class="mb-4">While modern browsers largely implement DOM methods consistently, there are some important compatibility considerations to be aware of:</p>
          
          <div class="columns">
            <div class="column">
              <h3 class="title is-4 mb-3">
                <i class="fas fa-browser fa-lg mr-2"></i> Method Support
              </h3>
              <div class="compatibility-table">
                <table class="table is-fullwidth is-bordered">
                  <thead>
                    <tr>
                      <th>DOM Feature</th>
                      <th>Chrome</th>
                      <th>Firefox</th>
                      <th>Safari</th>
                      <th>Edge</th>
                      <th>IE 11</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>querySelector</code>/<code>querySelectorAll</code></td>
                      <td class="has-text-success">✓</td>
                      <td class="has-text-success">✓</td>
                      <td class="has-text-success">✓</td>
                      <td class="has-text-success">✓</td>
                      <td class="has-text-success">✓</td>
                    </tr>
                    <tr>
                      <td><code>classList</code> API</td>
                      <td class="has-text-success">✓</td>
                      <td class="has-text-success">✓</td>
                      <td class="has-text-success">✓</td>
                      <td class="has-text-success">✓</td>
                      <td class="has-text-warning">Partial</td>
                    </tr>
                    <tr>
                      <td><code>element.remove()</code></td>
                      <td class="has-text-success">✓</td>
                      <td class="has-text-success">✓</td>
                      <td class="has-text-success">✓</td>
                      <td class="has-text-success">✓</td>
                      <td class="has-text-danger">✗</td>
                    </tr>
                    <tr>
                      <td><code>dataset</code> (data attributes)</td>
                      <td class="has-text-success">✓</td>
                      <td class="has-text-success">✓</td>
                      <td class="has-text-success">✓</td>
                      <td class="has-text-success">✓</td>
                      <td class="has-text-warning">Partial</td>
                    </tr>
                    <tr>
                      <td><code>firstElementChild</code>, etc.</td>
                      <td class="has-text-success">✓</td>
                      <td class="has-text-success">✓</td>
                      <td class="has-text-success">✓</td>
                      <td class="has-text-success">✓</td>
                      <td class="has-text-success">✓</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div class="notification is-warning is-light mt-4">
            <p><strong>Note:</strong> Internet Explorer 11 has limited or no support for some modern DOM features. For IE11 compatibility, consider using polyfills or alternative approaches.</p>
          </div>

          <h3 class="title is-4 mb-3 mt-5">Key Compatibility Issues</h3>
          
          <div class="columns is-multiline">
            <div class="column is-half">
              <div class="card">
                <div class="card-header">
                  <div class="card-header-title">
                    <i class="fas fa-exclamation-triangle mr-2"></i> Event Handling
                  </div>
                </div>
                <div class="card-content">
                  <ul>
                    <li><strong>IE11:</strong> Uses <code>attachEvent</code>/<code>detachEvent</code> instead of <code>addEventListener</code>/<code>removeEventListener</code></li>
                    <li><strong>Event Properties:</strong> <code>event.target</code> vs. <code>event.srcElement</code> (in older IE)</li>
                    <li><strong>Event Prevention:</strong> <code>event.preventDefault()</code> vs. <code>event.returnValue = false</code></li>
                  </ul>
                  <div class="code-example mt-3">
                    <pre v-pre><code><span class="comment">// Cross-browser event listener</span>
<span class="keyword">function</span> <span class="function">addEvent</span>(element, event, handler) {
  <span class="keyword">if</span> (element.addEventListener) {
    element.addEventListener(event, handler, <span class="boolean">false</span>);
  } <span class="keyword">else if</span> (element.attachEvent) {
    element.attachEvent(<span class="string">'on'</span> + event, handler);
  } <span class="keyword">else</span> {
    element[<span class="string">'on'</span> + event] = handler;
  }
}</code></pre>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="column is-half">
              <div class="card">
                <div class="card-header">
                  <div class="card-header-title">
                    <i class="fas fa-exclamation-triangle mr-2"></i> Element.classList API
                  </div>
                </div>
                <div class="card-content">
                  <ul>
                    <li><strong>IE10+:</strong> Basic support, but <code>classList.toggle()</code> with a second argument only in IE11+</li>
                    <li><strong>Safari 5.1-6.0:</strong> Only partial support for <code>classList</code></li>
                  </ul>
                  <div class="code-example mt-3">
                    <pre v-pre><code><span class="comment">// Cross-browser class toggling</span>
<span class="keyword">function</span> <span class="function">toggleClass</span>(element, className) {
  <span class="keyword">if</span> (element.classList) {
    element.classList.toggle(className);
  } <span class="keyword">else</span> {
    <span class="keyword">var</span> <span class="variable">classes</span> = element.className.split(<span class="string">' '</span>);
    <span class="keyword">var</span> <span class="variable">existingIndex</span> = classes.indexOf(className);

    <span class="keyword">if</span> (existingIndex >= <span class="number">0</span>)
      classes.splice(existingIndex, <span class="number">1</span>);
    <span class="keyword">else</span>
      classes.push(className);

    element.className = classes.join(<span class="string">' '</span>);
  }
}</code></pre>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="column is-half">
              <div class="card">
                <div class="card-header">
                  <div class="card-header-title">
                    <i class="fas fa-exclamation-triangle mr-2"></i> Element.remove()
                  </div>
                </div>
                <div class="card-content">
                  <ul>
                    <li><strong>IE11:</strong> No support for <code>Element.remove()</code></li>
                    <li><strong>All browsers:</strong> Support <code>parentNode.removeChild(element)</code></li>
                  </ul>
                  <div class="code-example mt-3">
                    <pre v-pre><code><span class="comment">// Cross-browser element removal</span>
<span class="keyword">function</span> <span class="function">removeElement</span>(element) {
  <span class="keyword">if</span> (element.remove) {
    element.remove();
  } <span class="keyword">else if</span> (element.parentNode) {
    element.parentNode.removeChild(element);
  }
}</code></pre>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="column is-half">
              <div class="card">
                <div class="card-header">
                  <div class="card-header-title">
                    <i class="fas fa-exclamation-triangle mr-2"></i> innerHTML vs createTextNode
                  </div>
                </div>
                <div class="card-content">
                  <ul>
                    <li><strong>Performance:</strong> <code>innerHTML</code> is slower when frequently modifying content</li>
                    <li><strong>Security:</strong> <code>innerHTML</code> can be a security risk with user-provided content</li>
                  </ul>
                  <div class="code-example mt-3">
                    <pre v-pre><code><span class="comment">// Safer way to add text content</span>
<span class="keyword">function</span> <span class="function">setTextContent</span>(element, text) {
  <span class="keyword">while</span> (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  <span class="keyword">var</span> <span class="variable">textNode</span> = <span class="function">document.createTextNode</span>(text);
  element.appendChild(textNode);
}</code></pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="notification is-info is-light mt-4">
            <h4 class="title is-5"><i class="fas fa-lightbulb mr-2"></i> Best Practices</h4>
            <ol>
              <li><strong>Feature Detection:</strong> Always use feature detection rather than browser detection</li>
              <li><strong>Polyfills:</strong> Consider using libraries like core-js or polyfill.io to handle compatibility</li>
              <li><strong>Fallbacks:</strong> Implement fallback methods for critical functionality</li>
              <li><strong>Testing:</strong> Test your DOM manipulation code across multiple browsers</li>
            </ol>
          </div>
        </div>
      </section>

      <section id="performance-progressive" class="mb-6">
        <h2 class="title is-3">Performance Considerations & Progressive Enhancement</h2>
        <div class="box">
          <div class="columns is-multiline">
            <div class="column is-full">
              <h3 class="title is-4 mb-3">
                <i class="fas fa-tachometer-alt mr-2"></i> Performance Optimization
              </h3>
              <p class="mb-4">DOM manipulation can be expensive in terms of performance. Here are key strategies to optimize your code:</p>
              
              <div class="card mb-4">
                <div class="card-header">
                  <div class="card-header-title">
                    <i class="fas fa-bolt mr-2"></i> Batch DOM Updates
                  </div>
                </div>
                <div class="card-content">
                  <p>Each time you modify the DOM, the browser may trigger layout, paint, and composite operations. Minimize these expensive operations by batching changes.</p>
                  
                  <div class="columns mt-3">
                    <div class="column">
                      <h4 class="title is-6 has-text-danger">❌ Inefficient</h4>
                      <div class="code-example">
                          <pre v-pre><code v-pre>// Adding items one at a time (forces multiple reflows)
for (let i = 0; i < 100; i++) {
  const item = document.createElement('div');
  item.textContent = `Item ${i}`;
  container.appendChild(item);  // Causes reflow each time
}
</code></pre>
                      </div>
                    </div>
                    <div class="column">
                      <h4 class="title is-6 has-text-success">✅ Optimized</h4>
                      <div class="code-example">
                          <pre v-pre><code v-pre>// Using DocumentFragment (single reflow)
const fragment = document.createDocumentFragment();

for (let i = 0; i < 100; i++) {
  const item = document.createElement('div');
  item.textContent = `Item ${i}`;
  fragment.appendChild(item);
}

container.appendChild(fragment);  // Single reflow
</code></pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="card mb-4">
                <div class="card-header">
                  <div class="card-header-title">
                    <i class="fas fa-stopwatch mr-2"></i> Minimize Reflows and Repaints
                  </div>
                </div>
                <div class="card-content">
                  <p>Layout recalculations (reflows) are particularly expensive operations that can cause performance issues.</p>
                  
                  <div class="columns mt-3">
                    <div class="column">
                      <h4 class="title is-6 has-text-danger">❌ Inefficient</h4>
                      <div class="code-example">
                        <pre v-pre><code><span class="comment">// Reading and writing repeatedly causes thrashing</span>
<span class="keyword">const</span> <span class="variable">width</span> = <span class="variable">element</span>.<span class="function">getBoundingClientRect</span>().<span class="variable">width</span>;
<span class="variable">element</span>.<span class="variable">style</span>.<span class="variable">width</span> = <span class="variable">width</span> + <span class="number">10</span> + <span class="string">'px'</span>;

<span class="keyword">const</span> <span class="variable">height</span> = <span class="variable">element</span>.<span class="function">getBoundingClientRect</span>().<span class="variable">height</span>;
<span class="variable">element</span>.<span class="variable">style</span>.<span class="variable">height</span> = <span class="variable">height</span> + <span class="number">10</span> + <span class="string">'px'</span>;</code></pre>
                      </div>
                    </div>
                    <div class="column">
                      <h4 class="title is-6 has-text-success">✅ Optimized</h4>
                      <div class="code-example">
                        <pre v-pre><code><span class="comment">// Read all measurements, then make all changes</span>
<span class="comment">// This avoids forced synchronous layouts</span>
<span class="keyword">const</span> <span class="variable">rect</span> = <span class="variable">element</span>.<span class="function">getBoundingClientRect</span>();
<span class="keyword">const</span> <span class="variable">width</span> = <span class="variable">rect</span>.<span class="variable">width</span>;
<span class="keyword">const</span> <span class="variable">height</span> = <span class="variable">rect</span>.<span class="variable">height</span>;

<span class="variable">element</span>.<span class="variable">style</span>.<span class="variable">width</span> = <span class="variable">width</span> + <span class="number">10</span> + <span class="string">'px'</span>;
<span class="variable">element</span>.<span class="variable">style</span>.<span class="variable">height</span> = <span class="variable">height</span> + <span class="number">10</span> + <span class="string">'px'</span>;</code></pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="card mb-4">
                <div class="card-header">
                  <div class="card-header-title">
                    <i class="fas fa-memory mr-2"></i> Event Delegation
                  </div>
                </div>
                <div class="card-content">
                  <p>Instead of attaching event listeners to many individual elements, use event delegation to attach a single listener to a parent element.</p>
                  
                  <div class="columns mt-3">
                    <div class="column">
                      <h4 class="title is-6 has-text-danger">❌ Inefficient</h4>
                      <div class="code-example">
                        <pre v-pre><code><span class="comment">// Adding listeners to each button (memory-intensive)</span>
<span class="keyword">const</span> <span class="variable">buttons</span> = <span class="function">document.querySelectorAll</span>(<span class="string">'.button'</span>);

<span class="variable">buttons</span>.<span class="function">forEach</span>(<span class="variable">button</span> => {
  <span class="variable">button</span>.<span class="function">addEventListener</span>(<span class="string">'click'</span>, <span class="variable">handleClick</span>);
});</code></pre>
                      </div>
                    </div>
                    <div class="column">
                      <h4 class="title is-6 has-text-success">✅ Optimized</h4>
                      <div class="code-example">
                        <pre v-pre><code><span class="comment">// Using event delegation (single listener)</span>
<span class="keyword">const</span> <span class="variable">container</span> = <span class="function">document.querySelector</span>(<span class="string">'.buttons-container'</span>);

<span class="variable">container</span>.<span class="function">addEventListener</span>(<span class="string">'click'</span>, <span class="variable">event</span> => {
  <span class="keyword">if</span> (<span class="variable">event</span>.<span class="variable">target</span>.<span class="function">matches</span>(<span class="string">'.button'</span>)) {
    <span class="function">handleClick</span>(<span class="variable">event</span>);
  }
});</code></pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="column is-full mt-4">
              <h3 class="title is-4 mb-3">
                <i class="fas fa-layer-group mr-2"></i> Progressive Enhancement
              </h3>
              <p class="mb-4">Progressive enhancement ensures your web applications work for all users, regardless of browser capabilities, and then enhances the experience for users with modern browsers.</p>
              
              <div class="card">
                <div class="card-header">
                  <div class="card-header-title">
                    <i class="fas fa-code-branch mr-2"></i> Building Resilient Web Apps
                  </div>
                </div>
                <div class="card-content">
                  <div class="content">
                    <h4 class="title is-5">Core Principles</h4>
                    <ol>
                      <li><strong>Start with semantic HTML</strong> - Ensure your content is accessible even without JavaScript</li>
                      <li><strong>Add CSS for presentation</strong> - Style your content for visual appeal</li>
                      <li><strong>Use JavaScript for enhancement</strong> - Add interactivity as an enhancement, not a requirement</li>
                    </ol>
                    
                    <h4 class="title is-5 mt-4">Implementation Example</h4>
                    <div class="code-example">
                      <pre v-pre><code><span class="comment">// Progressive Enhancement Example</span>

<span class="comment">// 1. Check if the browser supports the features we need</span>
<span class="keyword">const</span> <span class="variable">supportsCustomElements</span> = <span class="string">'customElements'</span> <span class="keyword">in</span> <span class="variable">window</span>;
<span class="keyword">const</span> <span class="variable">supportsES6</span> = <span class="keyword">function</span>() {
  <span class="keyword">try</span> {
    <span class="keyword">new</span> <span class="function">Function</span>(<span class="string">'(a = 0) => a'</span>);
    <span class="keyword">return</span> <span class="boolean">true</span>;
  } <span class="keyword">catch</span> (<span class="variable">err</span>) {
    <span class="keyword">return</span> <span class="boolean">false</span>;
  }
}();

<span class="comment">// 2. Apply enhancements only if supported</span>
<span class="keyword">if</span> (<span class="variable">supportsCustomElements</span> && <span class="variable">supportsES6</span>) {
  <span class="comment">// Load modern features</span>
  <span class="keyword">import</span>(<span class="string">'./modern-component.js'</span>)
    .<span class="function">then</span>(<span class="variable">module</span> => {
      <span class="comment">// Initialize modern components</span>
      <span class="variable">module</span>.<span class="function">initComponents</span>();
    });
} <span class="keyword">else</span> {
  <span class="comment">// Provide fallback functionality</span>
  <span class="function">loadFallbackFunctionality</span>();
}

<span class="comment">// 3. Fallback function for older browsers</span>
<span class="keyword">function</span> <span class="function">loadFallbackFunctionality</span>() {
  <span class="keyword">const</span> <span class="variable">containers</span> = <span class="function">document.querySelectorAll</span>(<span class="string">'.enhanced-component'</span>);
  
  <span class="variable">containers</span>.<span class="function">forEach</span>(<span class="variable">container</span> => {
    <span class="keyword">const</span> <span class="variable">fallbackContent</span> = <span class="variable">container</span>.<span class="function">querySelector</span>(<span class="string">'.fallback-content'</span>);
    <span class="keyword">if</span> (<span class="variable">fallbackContent</span>) {
      <span class="variable">fallbackContent</span>.<span class="variable">style</span>.<span class="variable">display</span> = <span class="string">'block'</span>;
    }
    
    <span class="comment">// Basic functionality with older JS APIs</span>
    <span class="keyword">const</span> <span class="variable">toggleButtons</span> = <span class="variable">container</span>.<span class="function">querySelectorAll</span>(<span class="string">'.toggle'</span>);
    <span class="variable">toggleButtons</span>.<span class="function">forEach</span>(<span class="variable">button</span> => {
      <span class="variable">button</span>.<span class="function">onclick</span> = <span class="keyword">function</span>() {
        <span class="keyword">const</span> <span class="variable">targetId</span> = <span class="keyword">this</span>.<span class="function">getAttribute</span>(<span class="string">'data-target'</span>);
        <span class="keyword">const</span> <span class="variable">target</span> = <span class="function">document.getElementById</span>(<span class="variable">targetId</span>);
        
        <span class="keyword">if</span> (<span class="variable">target</span>.<span class="variable">style</span>.<span class="variable">display</span> === <span class="string">'none'</span>) {
          <span class="variable">target</span>.<span class="variable">style</span>.<span class="variable">display</span> = <span class="string">'block'</span>;
        } <span class="keyword">else</span> {
          <span class="variable">target</span>.<span class="variable">style</span>.<span class="variable">display</span> = <span class="string">'none'</span>;
        }
      };
    });
  });
}</code></pre>
                    </div>
                    
                    <h4 class="title is-5 mt-4">Practical Implementation Tips</h4>
                    <ul>
                      <li><strong>Feature Detection</strong> - Use <code>if ('feature' in window)</code> rather than browser detection</li>
                      <li><strong>Non-JS Fallbacks</strong> - Start with functional HTML forms and server-rendered content</li>
                      <li><strong>CSS Fallbacks</strong> - Use <code>@supports</code> to provide CSS alternatives</li>
                      <li><strong>No-JS Warning</strong> - Add a <code>&lt;noscript&gt;</code> tag with instructions for users without JavaScript</li>
                      <li><strong>Accessible Fallbacks</strong> - Ensure core functionality works with keyboard navigation and screen readers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="notification is-info is-light mt-4">
            <h4 class="title is-5"><i class="fas fa-lightbulb mr-2"></i> Key Takeaways</h4>
            <ol>
              <li><strong>Performance matters</strong> - DOM operations are expensive; batch updates when possible and minimize reflows</li>
              <li><strong>Progressive enhancement is responsible development</strong> - Build from a solid foundation that works for all users</li>
              <li><strong>Test across devices</strong> - Performance impacts are more significant on less powerful devices</li>
              <li><strong>Use modern tools wisely</strong> - Frameworks can help manage performance concerns, but understand the fundamentals</li>
            </ol>
          </div>
        </div>
      </section>

      <section id="accessibility-implications" class="mb-6">
        <h2 class="title is-3">Accessibility Implications of DOM Manipulation</h2>
        <div class="box">
          <p class="mb-4">When manipulating the DOM, it's crucial to consider the accessibility implications of your changes. Ensuring your web applications are accessible to all users, including those with disabilities, is both an ethical responsibility and often a legal requirement.</p>
          
          <div class="columns is-multiline">
            <div class="column is-half">
              <div class="card">
                <div class="card-header">
                  <div class="card-header-title">
                    <i class="fas fa-universal-access mr-2"></i> Screen Reader Compatibility
                  </div>
                </div>
                <div class="card-content">
                  <p>When dynamically adding content to the page, screen readers may not announce these changes unless you implement proper ARIA attributes.</p>
                  
                  <div class="columns mt-3">
                    <div class="column">
                      <h4 class="title is-6 has-text-danger">❌ Inaccessible</h4>
                      <div class="code-example">
                        <pre v-pre><code><span class="comment">// Dynamically adding an error message</span>
<span class="keyword">function</span> <span class="function">showError</span>(message) {
  <span class="keyword">const</span> <span class="variable">errorDiv</span> = <span class="function">document.createElement</span>(<span class="string">'div'</span>);
  <span class="variable">errorDiv</span>.<span class="variable">className</span> = <span class="string">'error'</span>;
  <span class="variable">errorDiv</span>.<span class="variable">textContent</span> = message;
  <span class="variable">form</span>.<span class="function">appendChild</span>(<span class="variable">errorDiv</span>);
}</code></pre>
                      </div>
                    </div>
                    <div class="column">
                      <h4 class="title is-6 has-text-success">✅ Accessible</h4>
                      <div class="code-example">
                        <pre v-pre><code><span class="comment">// Screen reader friendly error message</span>
<span class="keyword">function</span> <span class="function">showError</span>(message) {
  <span class="keyword">const</span> <span class="variable">errorDiv</span> = <span class="function">document.createElement</span>(<span class="string">'div'</span>);
  <span class="variable">errorDiv</span>.<span class="variable">className</span> = <span class="string">'error'</span>;
  <span class="variable">errorDiv</span>.<span class="variable">setAttribute</span>(<span class="string">'role'</span>, <span class="string">'alert'</span>);
  <span class="variable">errorDiv</span>.<span class="variable">setAttribute</span>(<span class="string">'aria-live'</span>, <span class="string">'assertive'</span>);
  <span class="variable">errorDiv</span>.<span class="variable">textContent</span> = message;
  <span class="variable">form</span>.<span class="function">appendChild</span>(<span class="variable">errorDiv</span>);
}</code></pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="column is-half">
              <div class="card">
                <div class="card-header">
                  <div class="card-header-title">
                    <i class="fas fa-keyboard mr-2"></i> Keyboard Navigation
                  </div>
                </div>
                <div class="card-content">
                  <p>When adding interactive elements, ensure they're keyboard accessible. Users who rely on keyboards need to be able to access all functionality.</p>
                  
                  <div class="columns mt-3">
                    <div class="column">
                      <h4 class="title is-6 has-text-danger">❌ Not Keyboard Accessible</h4>
                      <div class="code-example">
                        <pre v-pre><code><span class="comment">// Adding a clickable div (non-accessible)</span>
<span class="keyword">const</span> <span class="variable">clickableDiv</span> = <span class="function">document.createElement</span>(<span class="string">'div'</span>);
<span class="variable">clickableDiv</span>.<span class="variable">className</span> = <span class="string">'card'</span>;
<span class="variable">clickableDiv</span>.<span class="variable">innerHTML</span> = <span class="string">'Click me!'</span>;
<span class="variable">clickableDiv</span>.<span class="function">addEventListener</span>(<span class="string">'click'</span>, handleClick);</code></pre>
                      </div>
                    </div>
                    <div class="column">
                      <h4 class="title is-6 has-text-success">✅ Keyboard Accessible</h4>
                      <div class="code-example">
                        <pre v-pre><code><span class="comment">// Creating a properly accessible interactive element</span>
<span class="keyword">const</span> <span class="variable">clickableElement</span> = <span class="function">document.createElement</span>(<span class="string">'button'</span>);
<span class="variable">clickableElement</span>.<span class="variable">className</span> = <span class="string">'card'</span>;
<span class="variable">clickableElement</span>.<span class="variable">textContent</span> = <span class="string">'Click me!'</span>;
<span class="variable">clickableElement</span>.<span class="function">addEventListener</span>(<span class="string">'click'</span>, handleClick);</code></pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="column is-half">
              <div class="card">
                <div class="card-header">
                  <div class="card-header-title">
                    <i class="fas fa-low-vision mr-2"></i> Dynamic Content Updates
                  </div>
                </div>
                <div class="card-content">
                  <p>When content changes dynamically, it's important to notify screen reader users of these changes.</p>
                  
                  <div class="columns mt-3">
                    <div class="column">
                      <h4 class="title is-6 has-text-danger">❌ Silent Updates</h4>
                      <div class="code-example">
                        <pre v-pre><code><span class="comment">// Silently updating content (screen readers miss this)</span>
<span class="keyword">function</span> <span class="function">updateStatus</span>(status) {
  <span class="keyword">const</span> <span class="variable">statusElement</span> = <span class="function">document.getElementById</span>(<span class="string">'status'</span>);
  <span class="variable">statusElement</span>.<span class="variable">textContent</span> = status;
}</code></pre>
                      </div>
                    </div>
                    <div class="column">
                      <h4 class="title is-6 has-text-success">✅ Announced Updates</h4>
                      <div class="code-example">
                        <pre v-pre><code><span class="comment">// Accessible dynamic updates</span>
<span class="keyword">function</span> <span class="function">updateStatus</span>(status) {
  <span class="keyword">const</span> <span class="variable">statusElement</span> = <span class="function">document.getElementById</span>(<span class="string">'status'</span>);
  
  <span class="comment">// Make sure the element is configured for live updates</span>
  <span class="keyword">if</span> (!<span class="variable">statusElement</span>.<span class="function">hasAttribute</span>(<span class="string">'aria-live'</span>)) {
    <span class="variable">statusElement</span>.<span class="function">setAttribute</span>(<span class="string">'aria-live'</span>, <span class="string">'polite'</span>);
  }
  
  <span class="variable">statusElement</span>.<span class="variable">textContent</span> = status;
}</code></pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="column is-half">
              <div class="card">
                <div class="card-header">
                  <div class="card-header-title">
                    <i class="fas fa-th-large mr-2"></i> Modal and Overlay Accessibility
                  </div>
                </div>
                <div class="card-content">
                  <p>Modals, popups, and overlays require special accessibility considerations to trap focus and provide keyboard navigation.</p>
                  
                  <div class="code-example mt-3">
                    <pre v-pre><code><span class="comment">// Accessible modal implementation</span>
<span class="keyword">function</span> <span class="function">createAccessibleModal</span>(title, content) {
  <span class="keyword">const</span> <span class="variable">modal</span> = <span class="function">document.createElement</span>(<span class="string">'div'</span>);
  <span class="variable">modal</span>.<span class="variable">className</span> = <span class="string">'modal'</span>;
  <span class="variable">modal</span>.<span class="function">setAttribute</span>(<span class="string">'role'</span>, <span class="string">'dialog'</span>);
  <span class="variable">modal</span>.<span class="function">setAttribute</span>(<span class="string">'aria-modal'</span>, <span class="string">'true'</span>);
  <span class="variable">modal</span>.<span class="function">setAttribute</span>(<span class="string">'aria-labelledby'</span>, <span class="string">'modal-title'</span>);
  
  <span class="variable">modal</span>.<span class="variable">innerHTML</span> = <span class="string">`
    &lt;div class="modal-content"&gt;
      &lt;h2 id="modal-title"&gt;${title}&lt;/h2&gt;
      &lt;div class="modal-body"&gt;${content}&lt;/div&gt;
      &lt;button class="close-button" aria-label="Close modal"&gt;Close&lt;/button&gt;
    &lt;/div&gt;
  `</span>;
  
  <span class="comment">// Add close functionality</span>
  <span class="keyword">const</span> <span class="variable">closeButton</span> = <span class="variable">modal</span>.<span class="function">querySelector</span>(<span class="string">'.close-button'</span>);
  <span class="variable">closeButton</span>.<span class="function">addEventListener</span>(<span class="string">'click'</span>, () => {
    <span class="variable">modal</span>.<span class="function">remove</span>();
  });
  
  <span class="comment">// Trap focus within modal</span>
  <span class="function">trapFocus</span>(<span class="variable">modal</span>);
  
  <span class="function">document.body.appendChild</span>(<span class="variable">modal</span>);
  <span class="variable">closeButton</span>.<span class="function">focus</span>();
}</code></pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="notification is-warning is-light mt-4">
            <h4 class="title is-5"><i class="fas fa-exclamation-triangle mr-2"></i> Key Accessibility Considerations</h4>
            <ul>
              <li><strong>Use semantic HTML</strong> - Choose elements that convey meaning (buttons for actions, anchors for links)</li>
              <li><strong>ARIA attributes</strong> - Use them to enhance accessibility, not to fix poor HTML structure</li>
              <li><strong>Keyboard access</strong> - Ensure all interactive elements can be accessed and activated with a keyboard</li>
              <li><strong>Focus management</strong> - Manage focus properly, especially in modal dialogs and dynamic content</li>
              <li><strong>Test with screen readers</strong> - Test your DOM manipulations with VoiceOver, NVDA, or JAWS</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="error-debugging" class="mb-6">
        <h2 class="title is-3">Error Handling & Debugging Tips</h2>
        <div class="box">
          <div class="columns is-multiline">
            <div class="column is-full">
              <h3 class="title is-4 mb-3">
                <i class="fas fa-bug mr-2"></i> Common DOM Manipulation Pitfalls
              </h3>
              
              <div class="table-container">
                <table class="table is-fullwidth is-bordered">
                  <thead>
                    <tr>
                      <th>Common Issue</th>
                      <th>Symptom</th>
                      <th>Solution</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Element not found</td>
                      <td><code>Uncaught TypeError: Cannot read property 'appendChild' of null</code></td>
                      <td>Check if your selector returns an element before manipulating it</td>
                    </tr>
                    <tr>
                      <td>Node was removed</td>
                      <td>DOM operations failing on a node that was already removed</td>
                      <td>Check if element exists in the DOM with <code>element.isConnected</code></td>
                    </tr>
                    <tr>
                      <td>Event listener timing</td>
                      <td>Event listeners not working on dynamically added elements</td>
                      <td>Use event delegation or add listeners after creating elements</td>
                    </tr>
                    <tr>
                      <td>Incorrect DOM structure</td>
                      <td>Elements not appearing as expected or in wrong places</td>
                      <td>Inspect DOM structure with developer tools and verify parent-child relationships</td>
                    </tr>
                    <tr>
                      <td>setAttribute issues</td>
                      <td>Attributes not applying correctly</td>
                      <td>Remember all attribute values are strings; convert numbers if needed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div class="column is-half">
              <div class="card">
                <div class="card-header">
                  <div class="card-header-title">
                    <i class="fas fa-shield-alt mr-2"></i> Robust Error Handling
                  </div>
                </div>
                <div class="card-content">
                  <p>Implementing proper error handling makes your DOM manipulation code more reliable and easier to debug.</p>
                  
                  <div class="code-example mt-3">
                    <pre v-pre><code><span class="comment">// Defensive DOM manipulation with error handling</span>
<span class="keyword">function</span> <span class="function">safelyManipulateDOM</span>(selector, manipulation) {
  <span class="keyword">try</span> {
    <span class="keyword">const</span> <span class="variable">element</span> = <span class="function">document.querySelector</span>(selector);
    
    <span class="keyword">if</span> (!<span class="variable">element</span>) {
      <span class="function">console.warn</span>(<span class="string">`Element not found: ${selector}`</span>);
      <span class="keyword">return</span> <span class="boolean">false</span>;
    }
    
    <span class="comment">// Perform the manipulation function safely</span>
    <span class="keyword">return</span> <span class="function">manipulation</span>(<span class="variable">element</span>);
  } <span class="keyword">catch</span> (error) {
    <span class="function">console.error</span>(<span class="string">`DOM manipulation error for ${selector}:`</span>, error);
    <span class="keyword">return</span> <span class="boolean">false</span>;
  }
}

<span class="comment">// Usage example</span>
<span class="function">safelyManipulateDOM</span>(<span class="string">'#user-profile'</span>, (element) => {
  element.innerHTML = <span class="string">'&lt;h2&gt;User Profile&lt;/h2&gt;'</span>;
  <span class="keyword">return</span> <span class="boolean">true</span>;
});</code></pre>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="column is-half">
              <div class="card">
                <div class="card-header">
                  <div class="card-header-title">
                    <i class="fas fa-tools mr-2"></i> Debugging Techniques
                  </div>
                </div>
                <div class="card-content">
                  <h4 class="title is-5">DOM-Specific Debugging Approaches</h4>
                  <ol>
                    <li><strong>Element inspection</strong> - Use browser DevTools to inspect the DOM</li>
                    <li><strong>DOM breakpoints</strong> - Set breakpoints on DOM mutations</li>
                    <li><strong>Monitor element state</strong> - Track changes to specific nodes</li>
                  </ol>
                  
                  <div class="code-example mt-3">
                    <pre v-pre><code><span class="comment">// Debug method to visualize DOM structure</span>
<span class="keyword">function</span> <span class="function">debugDOMStructure</span>(element, depth = 0) {
  <span class="keyword">if</span> (!element) <span class="keyword">return</span>;
  
  <span class="keyword">const</span> <span class="variable">indent</span> = ' '.repeat(depth * 2);
  <span class="keyword">const</span> <span class="variable">id</span> = element.id ? <span class="string">`#${element.id}`</span> : <span class="string">''</span>;
  <span class="keyword">const</span> <span class="variable">classes</span> = element.className ? <span class="string">`.${element.className.replace(/ /g, '.')}`</span> : <span class="string">''</span>;
  
  <span class="function">console.log</span>(<span class="string">`${indent}${element.tagName.toLowerCase()}${id}${classes}`</span>);
  
  <span class="comment">// Recursively debug child elements</span>
  <span class="keyword">for</span> (<span class="keyword">const</span> <span class="variable">child</span> <span class="keyword">of</span> element.children) {
    <span class="function">debugDOMStructure</span>(child, depth + 1);
  }
}

<span class="comment">// Usage: debugDOMStructure(document.body);</span></code></pre>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="column is-full">
              <div class="card">
                <div class="card-header">
                  <div class="card-header-title">
                    <i class="fas fa-clipboard-check mr-2"></i> Testing DOM Manipulations
                  </div>
                </div>
                <div class="card-content">
                  <div class="columns">
                    <div class="column">
                      <h4 class="title is-5">Manual Testing Checklist</h4>
                      <ul>
                        <li>✓ Test in multiple browsers</li>
                        <li>✓ Check with JavaScript disabled</li>
                        <li>✓ Verify keyboard navigation works</li>
                        <li>✓ Test with a screen reader</li>
                        <li>✓ Resize browser to test responsiveness</li>
                      </ul>
                    </div>
                    <div class="column">
                      <h4 class="title is-5">Automated Testing Options</h4>
                      <ul>
                        <li>✓ Jest with jsdom for unit testing</li>
                        <li>✓ Cypress for end-to-end testing</li>
                        <li>✓ Playwright for cross-browser testing</li>
                        <li>✓ Axe or Lighthouse for accessibility testing</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div class="notification is-info is-light mt-3">
                    <p><strong>Pro Tip:</strong> Use the browser's performance panel to identify expensive DOM operations. Look for long-running tasks and layout recalculations to find optimization opportunities.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="quiz" class="mb-6">
        <!-- Add Quiz Section -->
        <tutorial-quiz
          title="Test Your Knowledge"
          description="Let's see how well you've understood DOM Manipulation concepts. Try this quick quiz to test your knowledge!"
        />
      </section>
      <!-- Add Tutorial Recommendations -->
      <section id="next-steps" class="mb-6">
        <tutorial-recommendations :current-path="'/tutorials/beginner/dom-basics/dom-manipulation'" />
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import TutorialQuiz from '@/components/TutorialQuiz.vue'
import { usePageSections } from '@/composables/usePageSections'
import TutorialRecommendations from '@/components/TutorialRecommendations.vue'

const sections = [
  {
    id: 'creating-elements',
    title: 'Creating and Adding Elements',
    subsections: []
  },
  {
    id: 'modifying-elements',
    title: 'Modifying Elements',
    subsections: []
  },
  {
    id: 'dom-traversal',
    title: 'DOM Traversal',
    subsections: []
  },
  {
    id: 'practical-exercise',
    title: 'Practical Exercise',
    subsections: []
  },
  {
    id: 'real-world-examples',
    title: 'Real-World DOM Manipulation Examples',
    subsections: []
  },
  {
    id: 'browser-compatibility',
    title: 'Browser Compatibility Considerations',
    subsections: []
  },
  {
    id: 'performance-progressive',
    title: 'Performance Considerations & Progressive Enhancement',
    subsections: []
  },
  {
    id: 'accessibility-implications',
    title: 'Accessibility Implications',
    subsections: []
  },
  {
    id: 'error-debugging',
    title: 'Error Handling & Debugging Tips',
    subsections: []
  },
  {
    id: 'quiz',
    title: 'Knowledge Check',
    subsections: []
  },
  {
    id: 'next-steps',
    title: 'Next Steps',
    subsections: []
  }
]

// Quiz questions for the DOM Manipulation tutorial
const quizQuestions = [
  {
    question: "Which method is used to create a new DOM element?",
    options: [
      "document.makeElement()",
      "document.createElement()",
      "document.newElement()",
      "document.addElement()"
    ],
    answer: 1,
    explanation: "document.createElement() is the standard method for creating new DOM elements, which can then be inserted into the document."
  },
  {
    question: "How do you add a newly created element to the DOM?",
    options: [
      "document.addElement(newElement)",
      "document.insertElement(newElement)",
      "parentElement.appendChild(newElement)",
      "parentElement.insertElement(newElement)"
    ],
    answer: 2,
    explanation: "The appendChild() method adds a node as the last child of the specified parent node."
  },
  {
    question: "Which property is used to get all direct child elements of a node?",
    options: [
      "node.childElements",
      "node.children",
      "node.childNodes",
      "node.elements"
    ],
    answer: 1,
    explanation: "The children property returns a live HTMLCollection of all direct child elements of a node, excluding text and comment nodes."
  },
  {
    question: "What's the difference between innerHTML and textContent?",
    options: [
      "innerHTML works faster than textContent",
      "textContent only works on paragraph elements",
      "innerHTML parses content as HTML, while textContent treats it as plain text",
      "No difference, they are aliases of the same property"
    ],
    answer: 2,
    explanation: "innerHTML parses its content as HTML, which means it will render any HTML tags, while textContent treats its content as plain text and is safer when handling user input."
  },
  {
    question: "Which method allows you to insert an element before another element?",
    options: [
      "parentElement.insertAfter(newElement, referenceElement)",
      "parentElement.insertBefore(newElement, referenceElement)",
      "parentElement.addBefore(newElement, referenceElement)",
      "referenceElement.insertBefore(newElement)"
    ],
    answer: 1,
    explanation: "The insertBefore() method inserts a node before a reference node as a child of a specified parent node."
  },
  {
    question: "What is the best way to modify multiple CSS properties of an element?",
    options: [
      "element.css = { color: 'red', fontSize: '14px' }",
      "element.style.cssText = 'color: red; font-size: 14px;'",
      "element.setCSS('color: red; font-size: 14px;')",
      "element.modifyStyles({ color: 'red', fontSize: '14px' })"
    ],
    answer: 1,
    explanation: "The cssText property of the style object allows you to set multiple CSS properties at once using a string of CSS declarations."
  },
  {
    question: "How do you access the parent element of a DOM node?",
    options: [
      "node.parent",
      "node.parentElement",
      "node.getParent()",
      "node.root"
    ],
    answer: 1,
    explanation: "The parentElement property returns the parent element of the specified node, or null if the node has no parent or if the parent is not an element."
  },
  {
    question: "Which method is used to remove a DOM element?",
    options: [
      "element.delete()",
      "element.remove()",
      "document.removeElement(element)",
      "element.parentNode.removeChild(element)"
    ],
    answer: 1,
    explanation: "The remove() method removes the element from the DOM. Alternatively, removeChild() can be used from the parent element."
  }
]

usePageSections(sections)

// Initialize interactive components when the component is mounted
onMounted(() => {
  // Wait for DOM to be fully rendered with a small delay
  setTimeout(() => {
    initElementCreator();
    initElementStyler();
    initDOMTraversalDemo();
    initContentManager();
  }, 100);
});

// Runtime type-guards to be safe when manipulating DOM in non-TypeScript lint
const isHTMLElement = (el) => typeof window !== 'undefined' && window.HTMLElement && el instanceof window.HTMLElement;
const isInput = (el) => typeof window !== 'undefined' && window.HTMLInputElement && el instanceof window.HTMLInputElement;
const isSelect = (el) => typeof window !== 'undefined' && window.HTMLSelectElement && el instanceof window.HTMLSelectElement;
const isButton = (el) => typeof window !== 'undefined' && window.HTMLButtonElement && el instanceof window.HTMLButtonElement;

// Element Creator functionality
function initElementCreator() {
  const elementCreator = document.querySelector('#element-creator');
  if (!elementCreator) return;
  
  const inputs = elementCreator.querySelectorAll('input');
  if (inputs.length < 2) return;
  
  const typeInput = inputs[0];
  const contentInput = inputs[1];
  const createButton = elementCreator.querySelector('button');
  const previewArea = document.querySelector('#element-preview');
  
  // Narrow types at runtime to avoid assuming Element has input/button-specific properties
  if (!createButton || !previewArea) return;
  if (!(isInput(typeInput) && isInput(contentInput) && isButton(createButton) && isHTMLElement(previewArea))) return;
  
  createButton.addEventListener('click', function() {
    // Re-check inside handler in case DOM changed
    if (!(isInput(typeInput) && isInput(contentInput) && isHTMLElement(previewArea))) return;
    const type = typeInput.value.trim() || 'div';
    const content = contentInput.value.trim() || 'New Element';
    
    // Create the new element
    const newElement = document.createElement(type);
    newElement.textContent = content;
    newElement.style.margin = '5px';
    newElement.style.padding = '5px';
    newElement.style.border = '1px solid #ddd';
    
    // Clear placeholder if it exists
    const placeholder = previewArea.querySelector('p.has-text-grey');
    if (placeholder) {
      previewArea.innerHTML = '';
    }
    
    // Add a delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x';
    deleteBtn.className = 'delete is-small';
    deleteBtn.style.marginLeft = '5px';
    
    deleteBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      newElement.remove();
      
      // If no more elements, show placeholder again
      if (previewArea.children.length === 0) {
        previewArea.innerHTML = '<p class="has-text-grey has-text-centered">Elements will appear here</p>';
      }
    });
    
    newElement.appendChild(deleteBtn);
    previewArea.appendChild(newElement);
    
    // Reset inputs
    typeInput.value = '';
    contentInput.value = '';
    typeInput.focus();
  });
}

// Element Styler functionality
function initElementStyler() {
  const styleControls = document.querySelector('#style-controls');
  if (!styleControls) return;
  
  const bgColorInput = styleControls.querySelector('.field:nth-child(1) input[type="color"]');
  const textColorInput = styleControls.querySelector('.field:nth-child(2) input[type="color"]');
  const borderRadiusInput = styleControls.querySelector('.field:nth-child(3) input[type="range"]');
  const classSelect = styleControls.querySelector('.field:nth-child(4) select');
  const previewElement = document.querySelector('#style-preview p');
  
  // Ensure we have the expected element types before accessing .value/.selectedOptions/.style
  if (!bgColorInput || !textColorInput || !borderRadiusInput || !classSelect || !previewElement) return;
  if (!(isInput(bgColorInput) && isInput(textColorInput) && isInput(borderRadiusInput) && isSelect(classSelect) && isHTMLElement(previewElement))) return;
  
  // Background color change
  bgColorInput.addEventListener('input', function(e) {
    if (!(typeof window !== 'undefined' && window.HTMLElement && previewElement instanceof window.HTMLElement)) return;
    /** @type {HTMLElement} */
    const pe = previewElement;
    pe.style.backgroundColor = this.value;
  });
  
  // Text color change
  textColorInput.addEventListener('input', function(e) {
    if (!(typeof window !== 'undefined' && window.HTMLElement && previewElement instanceof window.HTMLElement)) return;
    /** @type {HTMLElement} */
    const pe = previewElement;
    pe.style.color = this.value;
  });
  
  // Border radius change
  borderRadiusInput.addEventListener('input', function(e) {
    if (!(typeof window !== 'undefined' && window.HTMLElement && previewElement instanceof window.HTMLElement)) return;
    /** @type {HTMLElement} */
    const pe = previewElement;
    pe.style.borderRadius = `${this.value}px`;
  });
  
  // Class changes
  classSelect.addEventListener('change', function() {
    // Ensure runtime DOM types are available
    if (!(isHTMLElement(previewElement) && isSelect(classSelect))) return;

    /** @type {HTMLElement} */
    const pe = previewElement;
    /** @type {HTMLSelectElement} */
    const cs = classSelect;

    // Reset styles
    pe.style.border = 'none';
    pe.style.boxShadow = 'none';
    pe.style.padding = '0';
    pe.style.textAlign = 'left';

    // Add selected classes
    Array.from(cs.selectedOptions).forEach(option => {
      switch(option.value) {
        case 'border':
          previewElement.style.border = '2px solid #333';
          break;
        case 'shadow':
          previewElement.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
          break;
        case 'padding':
          previewElement.style.padding = '15px';
          break;
        case 'centered':
          previewElement.style.textAlign = 'center';
          break;
      }
    });
  });
}

// DOM Traversal Demo functionality
function initDOMTraversalDemo() {
  const elementSelector = document.querySelector('#element-selector');
  const traversalMethod = document.querySelector('#traversal-method');
  const applyButton = document.querySelector('#apply-traversal');
  const resultsArea = document.querySelector('.traversal-output');
  const overlay = document.querySelector('.overlay');
  
  if (!elementSelector || !traversalMethod || !applyButton || !resultsArea || !overlay) return;
  // Narrow types
  if (!(isSelect(elementSelector) && isSelect(traversalMethod) && isHTMLElement(applyButton) && isHTMLElement(resultsArea) && isHTMLElement(overlay))) return;

  const overlayMessage = overlay.querySelector('.message');
  if (!overlayMessage || !isHTMLElement(overlayMessage)) return;
  
  // Setup element highlighting on click
  const elements = document.querySelectorAll('#traversal-container div');
  elements.forEach(element => {
    // Only attach if element is an HTMLElement
    if (!isHTMLElement(element)) return;
    element.addEventListener('click', function() {
        // Reset all elements
        elements.forEach(el => {
          if (isHTMLElement(el)) {
            /** @type {HTMLElement} */
            const eh = el;
            eh.style.boxShadow = 'none';
          }
        });

        // Highlight selected element
        if (isHTMLElement(this)) {
          /** @type {HTMLElement} */
          const th = this;
          th.style.boxShadow = '0 0 0 3px #ffd43b';
        }

      // Update the selector dropdown
      if (this.id && isSelect(elementSelector)) {
        elementSelector.value = this.id;
      }
    });
  });
  
  // Apply traversal
  applyButton.addEventListener('click', function() {
    // Get selected element
    const elementId = (typeof window !== 'undefined' && window.HTMLSelectElement && elementSelector instanceof window.HTMLSelectElement) ? elementSelector.value : '';
    const element = elementId ? document.getElementById(elementId) : null;

    if (!element) {
      if (isHTMLElement(resultsArea)) resultsArea.textContent = 'Element not found';
      return;
    }
    
  // Get selected method
  const method = isSelect(traversalMethod) ? /** @type {HTMLSelectElement} */ (traversalMethod).value : '';
    
    // Apply traversal method
    let result;
    let resultText = '';
    
    try {
      switch (method) {
        case 'children':
          result = element.children;
          if (result.length === 0) {
            resultText = `${elementId}.${method} → No children found`;
          } else {
            resultText = `${elementId}.${method} → HTMLCollection [${Array.from(result).map(child => child.id || child.tagName).join(', ')}]`;
            highlightElements(Array.from(result));
          }
          break;
          
        case 'parentNode':
          result = element.parentNode;
          if (!result) {
            resultText = `${elementId}.${method} → parent container`;
          } else if (isHTMLElement(result)) {
            /** @type {HTMLElement} */
            const resEl = result;
            if (resEl.id === 'traversal-container') {
              resultText = `${elementId}.${method} → parent container`;
            } else {
              resultText = `${elementId}.${method} → ${resEl.id || resEl.tagName}`;
              highlightElements([resEl]);
            }
          } else {
            resultText = `${elementId}.${method} → (parent)`;
          }
          break;
          
        case 'firstElementChild':
        case 'lastElementChild':
          result = element[method];
          if (!result) {
            resultText = `${elementId}.${method} → null (no children)`;
          } else if (isHTMLElement(result)) {
            /** @type {HTMLElement} */
            const resEl = result;
            resultText = `${elementId}.${method} → ${resEl.id || resEl.tagName}`;
            highlightElements([resEl]);
          } else {
            resultText = `${elementId}.${method} → (element)`;
          }
          break;
          
        case 'previousElementSibling':
        case 'nextElementSibling':
          result = element[method];
          if (!result) {
            resultText = `${elementId}.${method} → null (no ${method === 'previousElementSibling' ? 'previous' : 'next'} sibling)`;
          } else if (isHTMLElement(result)) {
            resultText = `${elementId}.${method} → ${result.id || result.tagName}`;
            highlightElements([result]);
          } else {
            resultText = `${elementId}.${method} → (sibling)`;
          }
          break;
      }
      
      resultsArea.textContent = resultText;
    } catch (e) {
      resultsArea.textContent = `Error: ${e.message}`;
    }
  });
  
  // Function to highlight selected elements
  function highlightElements(elementsToHighlight) {
    if (!elementsToHighlight.length) return;

    // Reset all element styles
    elements.forEach(el => {
      if (isHTMLElement(el)) {
        /** @type {HTMLElement} */
        const eh = el;
        eh.style.boxShadow = 'none';
      }
    });

    // Highlight selected elements
    elementsToHighlight.forEach(el => {
      if (isHTMLElement(el)) {
        /** @type {HTMLElement} */
        const eh = el;
        eh.style.boxShadow = '0 0 0 3px #ffd43b';
      }
    });

    // Show overlay message
    if (isHTMLElement(overlayMessage)) {
      overlayMessage.textContent = `Found ${elementsToHighlight.length} element${elementsToHighlight.length !== 1 ? 's' : ''}`;
    }
    if (isHTMLElement(overlay)) {
      /** @type {HTMLElement} */
      const oh = overlay;
      oh.style.display = 'flex';
    }

    // Hide overlay after a short delay
    setTimeout(() => {
      if (isHTMLElement(overlay)) {
        /** @type {HTMLElement} */
        const oh = overlay;
        oh.style.display = 'none';
      }
    }, 1500);
  }
}

// Content Manager functionality
function initContentManager() {
  const typeSelect = document.querySelector('#element-type');
  const contentInput = document.querySelector('#element-content');
  const classInput = document.querySelector('#element-class');
  const addButton = document.querySelector('#add-element');
  const codePreview = document.querySelector('.code-preview');
  const contentPreview = document.querySelector('.content-preview');
  
  if (!typeSelect || !contentInput || !classInput || !addButton || !codePreview || !contentPreview) return;
  if (!(isSelect(typeSelect) && isInput(contentInput) && isInput(classInput) && isButton(addButton) && isHTMLElement(codePreview) && isHTMLElement(contentPreview))) return;
  
  // Array to track added elements for code preview
  const addedElements = [];
  
  addButton.addEventListener('click', function() {
  if (!(isSelect(typeSelect) && isInput(contentInput) && isInput(classInput) && isHTMLElement(contentPreview) && isHTMLElement(codePreview))) return;
  /** @type {any} */
  const ts = typeSelect;
  /** @type {any} */
  const ci = contentInput;
  /** @type {any} */
  const cl = classInput;
  const type = ts.value;
  const content = ci.value.trim() || `${type} element`;
  const className = cl.value.trim();
    
    // Create the new element
    const newElement = document.createElement(type);
    
    // Handle different element types
    if (type === 'img') {
      // For images, use content as src
      newElement.setAttribute('src', content || 'https://via.placeholder.com/150');
      newElement.setAttribute('alt', 'Sample image');
      newElement.style.maxWidth = '100%';
    } else {
      newElement.textContent = content;
    }
    
    // Add the class if specified
    if (className) {
      newElement.className = className;
    }
    
    // Add styling for visibility
    newElement.style.margin = '10px 0';
    if (type !== 'img') {
      newElement.style.padding = '8px';
      newElement.style.border = '1px solid #ddd';
      newElement.style.borderRadius = '4px';
    }
    
    // Add controls for this element
    const controls = document.createElement('div');
    controls.className = 'element-controls';
    controls.style.marginTop = '5px';
    
    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'button is-small is-danger mr-2';
    deleteBtn.addEventListener('click', function() {
      // Remove element and its entry
      const index = addedElements.findIndex(el => el.element === newElement);
      if (index > -1) {
        addedElements.splice(index, 1);
      }
      
      newElement.remove();
      updateCodePreview();
      
      // If no elements left, show placeholder again
      if (contentPreview.children.length === 0) {
        contentPreview.innerHTML = '<p class="has-text-grey has-text-centered">Add elements to see them here</p>';
      }
    });
    
    // Move up button
    const moveUpBtn = document.createElement('button');
    moveUpBtn.textContent = 'Move Up';
    moveUpBtn.className = 'button is-small is-link mr-2';
    moveUpBtn.addEventListener('click', function() {
      const prev = newElement.previousElementSibling;
      if (prev && prev instanceof HTMLElement && !prev.classList.contains('has-text-grey')) {
        contentPreview.insertBefore(newElement, prev);

        // Update array order
        const index = addedElements.findIndex(el => el.element === newElement);
        if (index > 0) {
          const temp = addedElements[index];
          addedElements[index] = addedElements[index - 1];
          addedElements[index - 1] = temp;
          updateCodePreview();
        }
      }
    });
    
    // Add controls to element
    controls.appendChild(deleteBtn);
    controls.appendChild(moveUpBtn);
    newElement.appendChild(controls);
    
    // Clear placeholder if it exists
    const placeholder = contentPreview.querySelector('p.has-text-grey');
    if (placeholder) {
      contentPreview.innerHTML = '';
    }
    
    // Add to preview
    contentPreview.appendChild(newElement);
    
    // Add to tracking array
    addedElements.push({
      type,
      content,
      className,
      element: newElement
    });
    
  // Update code preview
  updateCodePreview();
    
  // Reset inputs
  /** @type {any} */
  const ciReset = contentInput;
  /** @type {any} */
  const clReset = classInput;
  ciReset.value = '';
  clReset.value = '';
  ciReset.focus();
  });
  
  // Function to update code preview
  function updateCodePreview() {
    if (addedElements.length === 0) {
      codePreview.innerHTML = '<p class="has-text-grey has-text-centered" style="font-style: italic;">DOM structure will appear here</p>';
      return;
    }
    
    let codeHTML = '<pre style="margin: 0; overflow: auto;">';
    codeHTML += '&lt;div class="container"&gt;\n';
    
    addedElements.forEach((item) => {
      const indent = '  ';
      let elementCode = `${indent}&lt;${item.type}`;
      
      if (item.className) {
        elementCode += ` class="${item.className}"`;
      }
      
      if (item.type === 'img') {
        elementCode += ` src="${item.content}" alt="Sample image"&gt;`;
      } else {
        elementCode += `&gt;${item.content}&lt;/${item.type}&gt;`;
      }
      
      codeHTML += elementCode + '\n';
    });
    
    codeHTML += '&lt;/div&gt;</pre>';
    codePreview.innerHTML = codeHTML;
  }
}
</script>

<style scoped>
.concept-card {
  background-color: #ffffff;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1);
}

.practice-section {
  margin-top: 1.5rem;
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 4px;
}

.code-example {
  background-color: #3c3c3c;
  padding: 1rem;
  border-radius: 4px;
  margin: 1rem 0;
  border: 1px solid #525252;
}

.code-example pre {
  background-color: #3c3c3c;
  padding: 0;
  margin: 0;
}

.code-example code {
  color: #d4d4d4;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.95em;
  line-height: 1.5;
  background-color: transparent;
}

/* Syntax highlighting */
.code-example .comment {
  color: #6a9955;
}

.code-example .string {
  color: #ce9178;
}

.code-example .keyword {
  color: #569cd6;
}

.code-example .function {
  color: #dcdcaa;
}

.code-example .variable {
  color: #9cdcfe;
}

@media (max-width: 768px) {
  .concept-card {
    padding: 1rem;
  }
  
  .practice-section {
    padding: 0.75rem;
  }
}

.dom-diagram {
  background-color: #ffffff;
  padding: 1rem;
  border-radius: 8px;
  margin: 2rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.diagram-container {
  width: 100%;
  overflow-x: auto;
}

.relationship-label {
  font-size: 12px;
  font-family: sans-serif;
}

.practical-tips ul {
  list-style-type: disc;
  margin-left: 1.5rem;
}

.practical-tips li {
  margin-bottom: 0.5rem;
}

.practical-tips strong {
  color: #ffd43b;
}

/* Fix for code examples overflowing in accessibility and debugging sections */
#accessibility-implications .code-example pre,
#error-debugging .code-example pre {
  max-width: 100%;
  overflow-x: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
}

/* Make sure long lines in all code examples don't push out the page width */
.code-example pre {
  max-width: 100%;
  overflow-x: auto;
}

/* Stack code examples in a single column in accessibility and debugging sections */
#accessibility-implications .columns,
#error-debugging .columns {
  flex-direction: column;
}

/* Give proper spacing between stacked examples */
#accessibility-implications .column,
#error-debugging .column {
  width: 100%;
  padding: 0.5rem 0;
}

/* Make code example titles more prominent in stacked layout */
#accessibility-implications .title.is-6,
#error-debugging .title.is-6 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
