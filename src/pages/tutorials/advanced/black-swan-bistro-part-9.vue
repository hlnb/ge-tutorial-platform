<script setup>
import { useTutorialHead } from "@/composables/useTutorialHead";
import { usePageSections } from "@/composables/usePageSections";
import AnticipatorySet from "@/components/hunter/AnticipatorySet.vue";
import LearningObjectives from "@/components/hunter/LearningObjectives.vue";
import CheckpointBox from "@/components/hunter/CheckpointBox.vue";
import IndependentPractice from "@/components/hunter/IndependentPractice.vue";
import ClosureSection from "@/components/hunter/ClosureSection.vue";
import TutorialRecommendations from "@/components/TutorialRecommendations.vue";
import "@/assets/styles/tutorials.css";
const tutorialPath = "/tutorials/advanced/black-swan-bistro-part-9";
useTutorialHead({
  title: "Black Swan Bistro — Part 9: Responding to a Client Change Request",
  description:
    "Clarify a Bistro client request, plan and test website updates, prepare a preview for approval, and publish and hand over the approved version.",
  path: tutorialPath,
  keywords:
    "client change request, website maintenance, Git, acceptance testing, Black Swan Bistro",
});
usePageSections([
  { id: "intro", title: "Introduction" },
  { id: "client-request", title: "Client request" },
  { id: "change-plan", title: "Change plan" },
  { id: "checkpoint", title: "Checkpoint" },
  { id: "make-changes", title: "Make the changes" },
  { id: "testing-and-review", title: "Testing and review" },
  { id: "publish-approved-changes", title: "Publish approved changes" },
  { id: "client-handover", title: "Client handover" },
  { id: "recap", title: "Recap" },
  { id: "next-steps", title: "Where to next?" },
  { id: "independent-practice", title: "Submission" },
  { id: "closure", title: "Closure" },
  { id: "recommended-next-steps", title: "Recommended Next Steps" },
]);
const objectives = [
  "Read a client request and work out what information is missing.",
  "Break a request into manageable development tasks.",
  "Make changes to an existing website while preserving its structure and functionality.",
  "Check that your changes work across different devices and browsers.",
  "Use Git to keep track of what you've changed.",
  "Prepare changes for client review before publication.",
  "Publish an approved website update.",
  "Explain the completed work to your client.",
];
const checkpointQuestions = [
  {
    question: "Can you publish guessed Sunday hours while waiting for Sarah?",
    answer:
      "No. Confirm the opening, closing, last-order time, and start date before publishing customer-facing details.",
  },
  {
    question:
      "The booking page opens, but the event cannot be selected. Has the promotion passed?",
    answer:
      "No. Verify the intended event booking with the client. Record the blocker instead of treating a working URL as a working reservation.",
  },
  {
    question:
      "Local checks passed and the preview is deployed. Can you release it?",
    answer:
      "Only after client acceptance of that version. Record real approval, or label simulated approval for this exercise, before following the production workflow.",
  },
  {
    question:
      "Sarah requests an adjustment after reviewing the preview. What happens next?",
    answer:
      "Make the focused change, repeat affected tests, and send a new preview for approval. Do not publish a version different from the one approved.",
  },
];
const takeaways = [
  "Clarify missing business details instead of guessing.",
  "Keep changes focused and follow the existing project structure.",
  "Test both the changed content and the customer journey.",
  "Client approval applies to a specific preview version.",
  "Verify production and communicate only what your evidence supports.",
];
</script>
<template>
  <div class="container section">
    <div class="tutorial-content bsb-client-lesson">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li>
            <router-link to="/projects/black-swan-bistro"
              >Black Swan Bistro</router-link
            >
          </li>
          <li class="is-active">
            <a href="#intro" aria-current="page">Part 9</a>
          </li>
        </ul>
      </nav>
      <div class="tutorial-meta">
        <div class="tags">
          <span class="tag is-info">Intermediate</span
          ><span class="tag is-light">2–3 hours</span
          ><span class="tag is-link">Project</span
          ><span class="tag is-light">Part 9 of 9</span>
        </div>
      </div>
      <h1 class="title is-1">
        Black Swan Bistro — Part 9: Responding to a Client Change Request
      </h1>
      <p class="subtitle is-5">
        Making changes to an existing website without breaking what already
        works.
      </p>
      <section id="intro">
        <h2 class="title is-3">
          Introduction: The website is finished. Now what?
        </h2>
        <AnticipatorySet
          title="The next client request"
          hook="<p>The website is live, and the client needs three updates. What must you clarify, test, and get approved before publishing?</p>"
        />
        <p>
          You&#39;ve built the Black Swan Bistro website, published it, and
          spent time checking how well it works. You&#39;ve even made
          improvements based on what you discovered during your website audit.
        </p>
        <p>So, that&#39;s the project finished, right?</p>
        <p>Not quite.</p>
        <p>
          A website isn&#39;t something you build once and then forget about.
          Businesses change. Menus get updated, opening hours shift, and new
          events need promoting. Sometimes a client spots something they want
          done differently.
        </p>
        <p>That&#39;s all part of looking after a website.</p>
        <p>
          In this part of the Black Swan Bistro project, you&#39;ll be working
          with a client who has requested a few changes to their existing
          website.
        </p>
        <p>
          Rather than jumping straight into VS Code, we&#39;ll look at how to
          handle those requests properly. You&#39;ll work out exactly what the
          client needs, plan the changes, update the website, test your work,
          and let the client review everything before the changes go live.
        </p>
        <p>
          You&#39;ll be using skills you&#39;ve already developed throughout the
          project, but this time you&#39;ll approach the work from a slightly
          different perspective.
        </p>
        <p>
          <strong
            >You&#39;re no longer just building a website. You&#39;re
            maintaining one for a client.</strong
          >
        </p>
        <LearningObjectives :objectives="objectives" />
        <h3 class="title is-4">Before you begin</h3>
        <p>
          Complete Black Swan Bistro Parts 1–8 before starting. You&#39;ll need
          your existing project, VS Code, access to your Git repository, and the
          ability to run the website locally.
        </p>
        <p>
          You&#39;ll also find several downloadable worksheets throughout the
          lesson. These are based on the documents developers commonly use when
          managing client work.
        </p>
        <p>
          Keep your completed worksheets. They&#39;re useful examples of the
          planning, testing and communication involved in professional web
          development.
        </p>
        <hr />
        <p>
          <router-link to="/tutorials/advanced/black-swan-bistro-part-8"
            >Review Part 8: Prioritise and Improve</router-link
          >
          before beginning this maintenance work.
        </p>
        <p class="notification is-info is-light">
          This is a fictional client scenario. Keep the supplied November 2026
          and May 2027 dates for this exercise. For a real site, confirm current
          dates with the client. Approval may be simulated for learning, but
          must be labelled honestly.
        </p>
      </section>
      <section id="client-request">
        <h2 class="title is-3">1. A message from the client</h2>
        <p>Imagine you&#39;ve just opened your email on Monday morning.</p>
        <p>There&#39;s a message from Black Swan Bistro management.</p>
        <h3 id="client-email-title" class="title is-4">Client email</h3>
        <article class="client-email" aria-labelledby="client-email-title">
          <p><strong>Subject: A few updates to our website</strong></p>
          <p>Hi,</p>
          <p>
            We&#39;re really happy with the website and have a few updates
            we&#39;d like you to make.
          </p>
          <p>We&#39;re going to start opening for dinner on Sundays.</p>
          <p>
            We&#39;ve also added a new dessert to our menu called Wattleseed
            Crème Brûlée. It will cost $16.
          </p>
          <p>
            Finally, we&#39;re planning a special Mother&#39;s Day lunch and
            would like to advertise it on the website.
          </p>
          <p>Could you update everything for us?</p>
          <p>Thanks,<br />Black Swan Bistro Management</p>
        </article>
        <h3 class="title is-4">Where would you start?</h3>
        <p>
          You might be tempted to open the project and begin editing the menu.
        </p>
        <p>
          After all, the new dessert has a name and a price. That seems simple
          enough.
        </p>
        <p>
          But what about the Sunday opening hours? What time will dinner service
          begin and finish? And what exactly should the website say about the
          Mother&#39;s Day lunch?
        </p>
        <p>The client hasn&#39;t told you.</p>
        <p>
          This is a fairly typical situation. Clients know what they want to
          achieve, but they don&#39;t always know which details a developer
          needs to complete the work.
        </p>
        <p>Part of your job is helping them fill in those gaps.</p>
        <h3 class="title is-4">Activity 1: What do you need to know?</h3>
        <p>Read the client&#39;s email again.</p>
        <p>
          For each requested change, write down what you already know and what
          you still need to find out.
        </p>
        <p>Here are a few questions to get you started.</p>
        <p><strong>Sunday dinner service</strong></p>
        <ul>
          <li>What time will the restaurant open and close?</li>
          <li>Is Sunday dinner a permanent addition?</li>
          <li>Will customers need to book?</li>
        </ul>
        <p><strong>New dessert</strong></p>
        <ul>
          <li>Does the client have a description for the menu?</li>
          <li>
            Are there any dietary or allergen details that need to be included?
          </li>
          <li>Is there an approved photograph?</li>
        </ul>
        <p><strong>Mother&#39;s Day lunch</strong></p>
        <ul>
          <li>What date and time will the event take place?</li>
          <li>Is there a special menu or set price?</li>
          <li>How will customers make a reservation?</li>
          <li>Is there a booking deadline?</li>
        </ul>
        <p>You may think of other questions as you work through the request.</p>
        <p>
          <strong>Your task:</strong> Draft a short email asking the client for
          the information you need.
        </p>
        <p>
          Keep your message friendly and professional. You don&#39;t need to
          explain the technical details of the website. The client simply needs
          to understand what information you&#39;re asking for and why.
        </p>
        <p class="download-block">
          <a
            class="button is-link is-light download-link"
            href="/resources/black-swan-bistro-part-9/01-client-brief.md"
            download
            >Download 01: Black Swan Bistro Client Brief (Markdown)</a
          >
        </p>
        <p>
          Use this document to review the original request and record your
          clarification questions.
        </p>
        <h3 class="title is-4">A useful habit: Don&#39;t guess</h3>
        <p>
          There&#39;s an important difference between what a client has told you
          and what you&#39;ve assumed.
        </p>
        <p>
          For example, you might think Sunday dinner service probably starts at
          5 pm. That might be a reasonable guess, but it isn&#39;t information
          you should publish.
        </p>
        <p>
          Incorrect opening hours can mean disappointed customers turning up at
          the wrong time.
        </p>
        <p>The same applies to menu prices, event dates and booking details.</p>
        <p>When you&#39;re unsure, ask.</p>
        <hr />
      </section>
      <section id="change-plan">
        <h2 class="title is-3">2. Turning the request into a plan</h2>
        <p>
          You&#39;ve reviewed the original request and identified a few details
          that need clarifying.
        </p>
        <p>
          The good news is that Sarah, the Bistro&#39;s manager, has replied
          with the information you need.
        </p>
        <p>
          Before you start making changes, read her response carefully.
          You&#39;ll use it to decide what needs updating, where those changes
          belong and how you&#39;ll check that everything works.
        </p>
        <h3 id="client-response-title" class="title is-4">
          The client&#39;s response
        </h3>
        <article class="client-email" aria-labelledby="client-response-title">
          <p><strong>Subject: RE: A few updates to our website</strong></p>
          <p>Hi,</p>
          <p>
            Thanks for getting back to us. Happy to clarify the details for the
            website updates.
          </p>
          <p><strong>Sunday Dinner Service</strong></p>
          <p>
            We&#39;re going to start opening for dinner every Sunday from 5:30
            pm to 9:00 pm, beginning Sunday, 1 November 2026.
          </p>
          <p>
            Our kitchen will take its last orders at 8:30 pm. We&#39;d like
            customers to be able to book a table using the existing booking link
            on the website.
          </p>
          <p>
            Could you update our opening hours wherever they appear on the
            website?
          </p>
          <p><strong>New Dessert — Wattleseed Crème Brûlée</strong></p>
          <p>
            We&#39;re excited to add a little Australian flavour to our dessert
            menu.
          </p>
          <p>Here&#39;s the description we&#39;d like you to use:</p>
          <p><em>Wattleseed Crème Brûlée — $16</em></p>
          <p>
            A rich, creamy vanilla custard infused with roasted Australian
            wattleseed, finished with a crisp caramelised sugar topping. Served
            with a delicate shortbread biscuit.
          </p>
          <p>
            The dessert contains dairy, eggs, wheat and gluten. It is suitable
            for vegetarians but isn&#39;t suitable for vegans.
          </p>
          <p>
            We don&#39;t have a photograph ready yet, so just the description
            and price will be fine for now.
          </p>
          <p><strong>Mother&#39;s Day Lunch</strong></p>
          <p>
            We&#39;re planning a special Mother&#39;s Day lunch for Sunday, 9
            May 2027.
          </p>
          <p>Here are the details:</p>
          <ul>
            <li><strong>Time:</strong> 12:00 pm – 3:00 pm</li>
            <li>
              <strong>Price:</strong> $75 per adult and $30 per child (under 12)
            </li>
            <li>
              <strong>Menu:</strong> A special three-course set menu featuring
              seasonal Western Australian produce
            </li>
            <li>
              <strong>Bookings:</strong> Essential, using our existing online
              booking system
            </li>
            <li><strong>Booking deadline:</strong> Wednesday, 5 May 2027</li>
          </ul>
          <p>
            We&#39;d like a small promotional section on the homepage so
            visitors can see the event without having to search for it.
          </p>
          <p>Something along the lines of:</p>
          <p>
            <strong>Celebrate Mother&#39;s Day at Black Swan Bistro</strong>
          </p>
          <p>
            Treat Mum to a relaxed afternoon of delicious food and good company.
            Join us for a special three-course lunch celebrating fresh, seasonal
            Western Australian produce.
          </p>
          <p>Sunday, 9 May 2027 | 12:00 pm – 3:00 pm</p>
          <p>$75 per adult | $30 per child (under 12)</p>
          <p>Bookings essential. Reserve your table by 5 May.</p>
          <p>
            A &quot;Book Your Table&quot; button linking to our existing booking
            page would be great.
          </p>
          <p>
            Please use the Bistro&#39;s existing colours and styling so the
            promotion fits with the rest of the website.
          </p>
          <p>
            Once you&#39;ve made the changes, could you send us a link so we can
            check everything before it goes live?
          </p>
          <p>Thanks again for your help.</p>
          <p>Kind regards,</p>
          <p>
            <strong>Sarah Mitchell</strong><br />Restaurant Manager<br />Black
            Swan Bistro
          </p>
        </article>
        <h3 class="title is-4">Now we have something to work with</h3>
        <p>Sarah&#39;s reply gives us much more useful information.</p>
        <p>
          We know the Sunday opening hours, we have approved wording for the new
          dessert, and we understand what the Mother&#39;s Day promotion needs
          to include.
        </p>
        <p>
          We&#39;ve also learnt something important about how the client wants
          the work handled.
        </p>
        <p>
          <strong
            >Sarah wants to review the changes before they&#39;re
            published.</strong
          >
        </p>
        <p>
          That means we&#39;ll need to prepare a version of the updated website
          that the client can view without replacing the existing live website.
        </p>
        <p>
          We&#39;ll come back to that when we discuss testing and deployment.
        </p>
        <p>
          For now, let&#39;s turn the information into a practical development
          plan.
        </p>
        <h3 class="title is-4">Breaking down the work</h3>
        <p>
          You don&#39;t need an elaborate project management system for three
          small updates. A simple change plan is enough.
        </p>
        <p>The purpose of the plan is to help you answer three questions:</p>
        <ol>
          <li>What needs to change?</li>
          <li>Where will I make the changes?</li>
          <li>How will I know I&#39;ve finished?</li>
        </ol>
        <p>Here&#39;s how the work might be organised.</p>
        <div class="table-container">
          <table class="table is-bordered is-striped">
            <thead>
              <tr>
                <th>Change</th>
                <th>Where you might work</th>
                <th>What success looks like</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sunday opening hours</td>
                <td>Contact page, footer or shared component</td>
                <td>
                  The correct hours appear everywhere they are needed, including
                  the 8:30 pm last-order time where appropriate
                </td>
              </tr>
              <tr>
                <td>New dessert</td>
                <td>Menu section</td>
                <td>
                  The dessert appears with its approved description, dietary
                  information and $16 price
                </td>
              </tr>
              <tr>
                <td>Mother&#39;s Day lunch</td>
                <td>Homepage or promotional component</td>
                <td>
                  Visitors can see the event details, prices and booking
                  instructions
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Notice that we haven&#39;t assumed which files need editing.</p>
        <p>
          Your Black Swan Bistro project already has a structure, and you should
          work within that structure rather than creating new files
          unnecessarily.
        </p>
        <h3 class="title is-4">
          Check for information used in more than one place
        </h3>
        <p>Opening hours are a good example.</p>
        <p>
          You might have them displayed in the footer and on the contact page.
          If you update one and forget the other, customers will see conflicting
          information.
        </p>
        <p>
          Before editing anything, search your project to find every place the
          opening hours appear.
        </p>
        <p>VS Code&#39;s project-wide search is particularly useful here.</p>
        <p>
          Capture your own screenshot of VS Code’s search results showing where
          opening hours appear. Keep it with your change plan.
        </p>
        <h3 class="title is-4">Planning for client approval</h3>
        <p>Before you begin, there&#39;s one more thing to consider.</p>
        <p>Sarah has asked to see the changes before they go live.</p>
        <p>
          This is often called <em>client acceptance testing</em> or
          <em>user acceptance testing (UAT)</em>.
        </p>
        <p>
          The idea is straightforward. You make the requested changes, test them
          yourself, and then give the client an opportunity to confirm that the
          result meets their requirements.
        </p>
        <p>Only after approval do you publish the updates.</p>
        <p>
          For this project, you&#39;ll prepare your changes on a separate Git
          branch and use a preview deployment where your hosting platform
          supports one.
        </p>
        <p>
          This gives Sarah a working version to review while the live website
          remains unchanged.
        </p>
        <h3 class="title is-4">Activity 2: Make your change plan</h3>
        <p>Open the Change Request and Planning Worksheet.</p>
        <p>For each client request, record:</p>
        <ul>
          <li>What the client wants changed.</li>
          <li>Which files or components you expect to work with.</li>
          <li>Any dependencies or possible problems.</li>
          <li>How you&#39;ll check that the change works.</li>
          <li>What Sarah needs to review before approving the work.</li>
        </ul>
        <p>
          You&#39;ll also need to consider whether one change depends on
          another.
        </p>
        <p>
          For example, the Mother&#39;s Day promotion needs a working booking
          link. If the existing booking system doesn&#39;t support the event,
          you&#39;ll need to clarify that with Sarah before publishing the
          promotion.
        </p>
        <p class="download-block">
          <a
            class="button is-link is-light download-link"
            href="/resources/black-swan-bistro-part-9/02-change-request-and-planning.md"
            download
            >Download 02: Change Request and Planning Worksheet (Markdown)</a
          >
        </p>
        <p>
          When you&#39;ve finished, you should have a clear picture of the work
          ahead.
        </p>
        <hr />
      </section>
      <figure class="box">
        <figcaption><strong>From request to release</strong></figcaption>
        <ol class="change-flow" role="list">
          <li>
            <span class="flow-number" aria-hidden="true">1.</span> Clarify the
            request
          </li>
          <li>
            <span class="flow-number" aria-hidden="true">2.</span> Plan and
            branch
          </li>
          <li>
            <span class="flow-number" aria-hidden="true">3.</span> Change and
            test
          </li>
          <li>
            <span class="flow-number" aria-hidden="true">4.</span> Preview and
            get approval
          </li>
          <li>
            <span class="flow-number" aria-hidden="true">5.</span> Publish that
            version
          </li>
          <li>
            <span class="flow-number" aria-hidden="true">6.</span> Verify live
            and hand over
          </li>
        </ol>
        <p>
          The preview is a review point. Return to changes and testing if the
          client requests an adjustment; production follows approval.
        </p>
      </figure>
      <section id="checkpoint">
        <h2 class="title is-3">Checkpoint: Can this go live?</h2>
        <CheckpointBox :questions="checkpointQuestions" />
      </section>
      <section id="make-changes">
        <h2 class="title is-3">3. Making the changes</h2>
        <p>Now it&#39;s time to open VS Code.</p>
        <p>
          We&#39;ll start with the new dessert because it&#39;s the most
          straightforward of the three requests.
        </p>
        <p>
          Then you&#39;ll apply the same approach to the opening hours and
          Mother&#39;s Day promotion.
        </p>
        <h3 class="title is-4">Step 1: Prepare your project</h3>
        <p>Open your Black Swan Bistro project.</p>
        <p>
          Before making changes, check the current state of your Git repository.
        </p>
        <pre v-pre><code class="language-bash">git status</code></pre>
        <p>
          If you have unfinished work, deal with that first. You don&#39;t want
          unrelated changes getting mixed up with the Bistro updates.
        </p>
        <p>
          Use your established Git workflow to bring your starting branch up to
          date without discarding unfinished work. Then create a new branch for
          this work:
        </p>
        <pre
          v-pre
        ><code class="language-bash">git switch -c feature/bistro-client-updates</code></pre>
        <p>
          A separate branch allows you to work on the updates without
          immediately changing the main version of the project.
        </p>
        <p>
          Start your local development server using the command appropriate for
          your project.
        </p>
        <p>If you&#39;re using Vite, that will usually be:</p>
        <pre v-pre><code class="language-bash">npm run dev</code></pre>
        <p>
          Open the website in your browser and check that everything is working
          before you begin.
        </p>
        <h3 class="title is-4">Step 2: Add the new dessert</h3>
        <p>Find the menu section in your project.</p>
        <p>
          Have a look at how the existing menu items have been built. Are they
          written directly in HTML? Does the project use a reusable component?
          Are the menu details stored in a JavaScript object or another data
          file?
        </p>
        <p>Follow the pattern that&#39;s already there.</p>
        <p>
          For example, if the menu uses HTML cards, a new item might look
          something like this:
        </p>
        <pre
          v-pre
        ><code class="language-html">&lt;article class=&quot;menu-item&quot;&gt;
  &lt;h3&gt;Wattleseed Crème Brûlée&lt;/h3&gt;

  &lt;p&gt;
    A rich, creamy vanilla custard infused with
    roasted Australian wattleseed, finished with
    a crisp caramelised sugar topping. Served
    with a delicate shortbread biscuit.
  &lt;/p&gt;

  &lt;p class=&quot;menu-item__dietary&quot;&gt;
    Contains dairy, eggs, wheat and gluten.
    Suitable for vegetarians. Not suitable for vegans.
  &lt;/p&gt;

  &lt;p class=&quot;menu-item__price&quot;&gt;$16&lt;/p&gt;
&lt;/article&gt;</code></pre>
        <p>
          This is only an example. Your markup should match the structure of
          your existing menu.
        </p>
        <p>Once you&#39;ve added the dessert, look at it in the browser.</p>
        <p>
          Does it line up with the other menu items? Is the price easy to read?
          Have you kept the heading structure consistent?
        </p>
        <p>Small details like these help a website feel well maintained.</p>
        <p>
          Capture your own screenshots of the dessert markup and the finished
          menu item. These should show your implementation, rather than an
          example presented as test evidence.
        </p>
        <h3 class="title is-4">Step 3: Update the Sunday opening hours</h3>
        <p>
          Sarah has confirmed that the Bistro will open for Sunday dinner from
          5:30 pm to 9:00 pm, beginning 1 November 2026, with last orders at
          8:30 pm.
        </p>
        <p>Find the existing opening hours and update the relevant content.</p>
        <p>
          Remember to check the rest of the website for any other references to
          Sunday trading.
        </p>
        <p>
          If the project uses shared data for opening hours, update that source
          rather than writing separate values into multiple components.
        </p>
        <p>Check that the information makes sense to a customer.</p>
        <p>
          For example, the restaurant&#39;s closing time and the kitchen&#39;s
          last-order time are two different things. Display them clearly rather
          than expecting visitors to work out the difference.
        </p>
        <p>
          This is also a good opportunity to review the booking link and confirm
          that customers can use it to reserve a table for Sunday dinner.
        </p>
        <h3 class="title is-4">
          Step 4: Create the Mother&#39;s Day promotion
        </h3>
        <p>The final request involves a little more thought.</p>
        <p>
          Sarah wants the Mother&#39;s Day lunch advertised on the homepage.
        </p>
        <p>
          The promotion should be easy to find without overwhelming the existing
          page design.
        </p>
        <p>
          Think about how someone visiting the Bistro&#39;s website will
          experience it.
        </p>
        <p>
          They should be able to understand what the event is, when it&#39;s
          happening, how much it costs and what they need to do to book.
        </p>
        <p>
          You might use an existing promotional area, add an event card, or
          create a new section if the design genuinely needs one.
        </p>
        <p>Use Sarah&#39;s supplied wording as the basis for the content.</p>
        <p><strong>Promotion content</strong></p>
        <p><strong>Celebrate Mother&#39;s Day at Black Swan Bistro</strong></p>
        <p>
          Treat Mum to a relaxed afternoon of delicious food and good company.
          Join us for a special three-course lunch celebrating fresh, seasonal
          Western Australian produce.
        </p>
        <p><strong>Sunday, 9 May 2027</strong> 12:00 pm – 3:00 pm</p>
        <p>$75 per adult | $30 per child (under 12)</p>
        <p>Bookings essential. Reserve your table by Wednesday, 5 May 2027.</p>
        <p><strong>Book Your Table</strong></p>
        <p>
          The booking button should link to the Bistro&#39;s existing booking
          page.
        </p>
        <p>
          Before considering the work complete, check that the booking process
          actually supports this event. A button that opens a booking page is
          only useful if customers can make the intended reservation.
        </p>
        <p>
          Keep accessibility in mind. Use meaningful headings, readable text,
          appropriate image descriptions if you use an image, and a link that
          clearly describes its purpose.
        </p>
        <p>
          There&#39;s no need to redesign the entire homepage to announce one
          event.
        </p>
        <h3 class="title is-4">Activity 3: Update your website</h3>
        <p>
          Complete all three changes using the information Sarah has provided.
        </p>
        <p>As you work, regularly check your changes in the browser.</p>
        <p>
          If something doesn&#39;t look right, investigate it before moving on.
        </p>
        <p>
          It&#39;s much easier to fix a problem while you still remember exactly
          what you changed.
        </p>
        <p>
          <strong>Important:</strong> Keep the changes on your development
          branch. Sarah hasn&#39;t approved them for publication yet.
        </p>
        <hr />
      </section>
      <section id="testing-and-review">
        <h2 class="title is-3">4. Testing your work</h2>
        <p>
          You&#39;ve updated the website, and everything looks fine on your
          laptop.
        </p>
        <p>Are you ready to send it to Sarah?</p>
        <p>Almost.</p>
        <p>
          Before asking a client to review your work, you should test it
          yourself.
        </p>
        <p>
          Even a small change can cause an unexpected problem. A longer menu
          description might affect the layout. A new event promotion might not
          fit properly on a mobile screen. An updated link might lead to the
          wrong page.
        </p>
        <p>
          Testing helps you find these problems before your client or visitors
          do.
        </p>
        <h3 class="title is-4">Start with the client&#39;s requests</h3>
        <p>Go back to your change plan.</p>
        <p>
          For each request, check whether you&#39;ve delivered what Sarah asked
          for.
        </p>
        <p>
          Don&#39;t rely on memory. Compare the website with the information in
          her email.
        </p>
        <p>
          Pay particular attention to the dates, times, prices and dietary
          information.
        </p>
        <h3 class="title is-4">Check the layout</h3>
        <p>
          Open your browser&#39;s developer tools and look at the updated pages
          at different screen sizes.
        </p>
        <p>Pay particular attention to:</p>
        <ul>
          <li>Menu cards and text wrapping.</li>
          <li>The opening hours layout.</li>
          <li>The Mother&#39;s Day promotion.</li>
          <li>Navigation and spacing on smaller screens.</li>
        </ul>
        <p>If something looks awkward, adjust it and check again.</p>
        <h3 class="title is-4">Check accessibility</h3>
        <p>
          Think about how someone might use the site without a mouse or with
          assistive technology.
        </p>
        <p>
          Can they reach the booking link with a keyboard? Is the focus
          indicator visible? Does the page have a sensible heading order?
        </p>
        <p>
          You can also run Lighthouse to identify issues worth investigating.
        </p>
        <p>
          Remember that automated tools are helpful, but they won&#39;t catch
          every accessibility problem.
        </p>
        <h3 class="title is-4">Activity 4: Test and record your results</h3>
        <p>Use the Website Update Testing Checklist.</p>
        <p>Work through the checks and record whether each one passes.</p>
        <p>
          If something fails, make a note of the problem, correct it, and test
          again.
        </p>
        <p>
          Keep evidence of your testing. A few screenshots and a completed
          checklist are enough for this project.
        </p>
        <p class="download-block">
          <a
            class="button is-link is-light download-link"
            href="/resources/black-swan-bistro-part-9/03-website-update-testing-checklist.md"
            download
            >Download 03: Website Update Testing Checklist (Markdown)</a
          >
        </p>
        <h3 class="title is-4">Preparing the website for client review</h3>
        <p>
          Once your own testing is complete, the next step is preparing a
          version Sarah can review.
        </p>
        <p>This is where a preview deployment becomes useful.</p>
        <p>
          If your project is hosted through Vercel or Netlify and connected to
          GitHub, you can usually create a preview deployment from your feature
          branch or pull request.
        </p>
        <p>
          This allows the client to see the proposed changes in a browser
          without replacing the production website.
        </p>
        <p>
          Commit the relevant files, review the staged diff, and push your
          feature branch using your established Git workflow so the hosting
          service can build it. Follow your hosting provider’s instructions to
          create a preview deployment. Record its URL and commit ID. Do not
          merge into the production branch at this stage.
        </p>
        <p>
          If you&#39;re using traditional hosting, you may be able to create a
          separate staging location instead.
        </p>
        <p>
          Be careful not to publish the unapproved changes to the live website.
        </p>
        <p>
          When the preview is ready, open it yourself and check the changes
          again.
        </p>
        <p>
          A preview deployment is still a deployment, so it&#39;s worth making
          sure everything works before sending the link to Sarah.
        </p>
        <h3 class="title is-4">Sending the preview to the client</h3>
        <p>
          Prepare a short message explaining that the changes are ready for
          review.
        </p>
        <p>
          Include the preview website address and briefly describe what
          you&#39;d like Sarah to check.
        </p>
        <p>For example:</p>
        <p>
          <strong
            >Subject: Black Swan Bistro website updates — ready for
            review</strong
          >
        </p>
        <p>Hi Sarah,</p>
        <p>
          I&#39;ve completed the requested changes and prepared an updated
          version of the website for you to review.
        </p>
        <p>You can view the changes here:</p>
        <p>[Preview website URL]</p>
        <p>
          I&#39;ve updated the Sunday dinner hours, added the Wattleseed Crème
          Brûlée to the menu, and created the Mother&#39;s Day lunch promotion.
        </p>
        <p>
          Could you please check that the information is correct and that the
          promotion looks the way you expected?
        </p>
        <p>
          Once you&#39;re happy with everything, I&#39;ll publish the changes to
          the live website.
        </p>
        <p>Thanks, Your Name</p>
        <h3 class="title is-4">Client acceptance testing</h3>
        <p>
          For this exercise, you may simulate Sarah reviewing the preview and
          confirming that all three changes are correct. Label this record
          “simulated approval” in your handover; do not present it as approval
          from a real client.
        </p>
        <p>
          In a real project, you should receive and record that approval before
          deploying to production.
        </p>
        <p>
          If the client requests further adjustments, make those changes and
          provide another preview for review.
        </p>
        <hr />
      </section>
      <section id="publish-approved-changes">
        <h2 class="title is-3">5. Recording and publishing your changes</h2>
        <p>
          Continue once Sarah has approved the preview, or you have recorded
          explicitly simulated approval for this exercise.
        </p>
        <p>Now you can prepare the final update for the live website.</p>
        <h3 class="title is-4">Review what you&#39;ve changed</h3>
        <p>In your terminal, run:</p>
        <pre v-pre><code class="language-bash">git diff
git status</code></pre>
        <p>Take a moment to review your work.</p>
        <p>
          Have you edited the files you expected to edit? Have any unrelated
          files changed? Are there temporary notes or unfinished placeholders
          you don&#39;t want to publish?
        </p>
        <p>It&#39;s worth catching these things now.</p>
        <h3 class="title is-4">Commit your work</h3>
        <p>
          If you haven&#39;t already committed the changes while preparing the
          preview, add the relevant files and create a descriptive commit.
        </p>
        <p>For example:</p>
        <pre
          v-pre
        ><code class="language-bash"># Replace these example paths with the files you actually changed.
git add path/to/menu-file path/to/hours-file path/to/homepage-file
git diff --cached
git commit -m &quot;Update Bistro hours, menu and event promotion&quot;</code></pre>
        <p>
          Stage only the files belonging to this request. Review the staged diff
          before committing; never include unrelated work.
        </p>
        <p>
          The commit message should make sense when you read it several months
          from now.
        </p>
        <p>
          &quot;Fixed stuff&quot; probably won&#39;t help future you very much.
        </p>
        <h3 class="title is-4">Deploy the approved changes</h3>
        <p>
          Use the deployment process you established earlier in the Black Swan
          Bistro project.
        </p>
        <p>
          If you&#39;re working with GitHub and a hosting service such as
          Vercel, this may involve merging an approved pull request into the
          production branch.
        </p>
        <p>
          If you&#39;re working with traditional hosting, follow the process
          you&#39;ve already practised for uploading and checking your website
          files.
        </p>
        <p>
          The important point is that the live website should receive the
          version Sarah approved.
        </p>
        <h3 class="title is-4">Check the live website</h3>
        <p>Once the deployment is complete, visit the public website.</p>
        <p>Go through the updated content one final time.</p>
        <p>Check that:</p>
        <ul>
          <li>Sunday dinner hours are displayed correctly.</li>
          <li>The new dessert appears with its description and price.</li>
          <li>Dietary information matches the approved content.</li>
          <li>The Mother&#39;s Day promotion displays correctly.</li>
          <li>The booking link works as expected.</li>
          <li>The website remains usable on mobile devices.</li>
        </ul>
        <p>
          A successful deployment message tells you the deployment process
          completed. It doesn&#39;t necessarily tell you that the website is
          correct.
        </p>
        <p>You still need to look.</p>
        <hr />
      </section>
      <section id="client-handover">
        <h2 class="title is-3">6. Letting the client know</h2>
        <p>
          You&#39;ve made the changes, completed your testing, received
          Sarah&#39;s approval and checked the live website.
        </p>
        <p>There&#39;s one more thing to do.</p>
        <p>Tell the client.</p>
        <p>
          This is an easy step to overlook, particularly when you&#39;ve been
          focused on the technical work.
        </p>
        <p>
          But from the client&#39;s perspective, the job isn&#39;t finished
          until they know what&#39;s been done.
        </p>
        <h3 class="title is-4">What should your message include?</h3>
        <p>
          Your completion message should explain which changes have been
          published, where the client can see them, and whether anything still
          needs attention.
        </p>
        <p>
          You don&#39;t need to describe every line of code you&#39;ve written.
          The client is interested in the outcome.
        </p>
        <p>For example (include only checks you actually completed):</p>
        <article class="client-email" aria-label="Example completion email">
          <p>
            <strong
              >Subject: Black Swan Bistro website updates completed</strong
            >
          </p>
          <p>Hi Sarah,</p>
          <p>The approved website updates have now been published.</p>
          <p>
            The Sunday dinner opening hours have been updated, the Wattleseed
            Crème Brûlée has been added to the menu, and the Mother&#39;s Day
            lunch promotion is now displayed on the homepage.
          </p>
          <p>
            I&#39;ve checked the live website on desktop and mobile and
            confirmed that the relevant links are working.
          </p>
          <p>You can view the updates here:</p>
          <p>[Live website URL]</p>
          <p>
            Thanks again for reviewing the changes. Please let me know if you
            notice anything that needs attention.
          </p>
          <p>Kind regards,<br />Your Name</p>
        </article>
        <h3 class="title is-4">Activity 5: Prepare your client handover</h3>
        <p>
          Using the Change Log and Client Handover Template, record the work
          you&#39;ve completed.
        </p>
        <p>Include:</p>
        <ul>
          <li>The changes requested.</li>
          <li>The changes completed.</li>
          <li>The date of client approval.</li>
          <li>The date the changes were published.</li>
          <li>The website address.</li>
          <li>A reference to the Git commit or pull request.</li>
          <li>Any outstanding issues or follow-up work.</li>
        </ul>
        <p>Keep a copy with your project documentation.</p>
        <p class="download-block">
          <a
            class="button is-link is-light download-link"
            href="/resources/black-swan-bistro-part-9/04-change-log-and-client-handover.md"
            download
            >Download 04: Change Log and Client Handover Template (Markdown)</a
          >
        </p>
        <hr />
      </section>
      <section id="recap">
        <h2 class="title is-3">7. Bringing it all together</h2>
        <p>
          At the beginning of this lesson, you received a fairly ordinary email
          asking for a few website changes.
        </p>
        <p>
          You could have opened the project and started editing immediately.
        </p>
        <p>Instead, you worked through the request carefully.</p>
        <p>
          You identified missing information, asked for clarification, planned
          the changes, updated the website and tested your work.
        </p>
        <p>
          You also gave the client an opportunity to review the changes before
          publishing them.
        </p>
        <p>
          Finally, you checked the live website and documented what you&#39;d
          completed.
        </p>
        <p>
          These habits become increasingly valuable as you work on larger
          projects or begin managing websites for real clients.
        </p>
        <p>
          The technical changes might only take an hour. Getting the
          requirements right, checking the results and communicating clearly are
          just as important.
        </p>
        <h3 class="title is-4">A few questions to think about</h3>
        <p>
          Before finishing this part of the project, consider the following:
        </p>
        <ol>
          <li>
            Which part of the client&#39;s request needed the most
            clarification?
          </li>
          <li>
            Did you discover any places where the same information was repeated
            across the website?
          </li>
          <li>
            What would have happened if you&#39;d published the changes without
            testing?
          </li>
          <li>
            Why was it useful to let Sarah review the changes before they went
            live?
          </li>
          <li>How did using Git help you manage the work?</li>
          <li>
            What would you do differently if the client sent another change
            request tomorrow?
          </li>
        </ol>
        <p>
          There&#39;s no single correct answer to every question. Think about
          the decisions you made and what you learnt from them.
        </p>
        <h3 class="title is-4">What to submit</h3>
        <p>For this project, you should have:</p>
        <ul>
          <li>An updated Black Swan Bistro website.</li>
          <li>A completed change request and planning worksheet.</li>
          <li>A website testing checklist with recorded results.</li>
          <li>A Git commit documenting the changes.</li>
          <li>Evidence of the preview deployment and client approval.</li>
          <li>A completed client handover.</li>
        </ul>
        <p>
          These documents, along with your updated website, demonstrate that you
          understand more than the technical side of making changes.
        </p>
        <p>They show how you approach a piece of work from beginning to end.</p>
      </section>
      <section id="next-steps">
        <h2 class="title is-3">Where to next?</h2>
        <p>
          You&#39;ve now experienced something important about web development:
          publishing a website isn&#39;t the end of its story.
        </p>
        <p>
          The businesses and people who use websites continue to change, and
          their websites need to change with them.
        </p>
        <p>
          As you continue developing your skills, think about how the decisions
          you make during the original build can make future maintenance easier.
        </p>
        <p>
          Clear code, reusable components, sensible file structures and good
          documentation aren&#39;t just nice things to have.
        </p>
        <p>
          They&#39;re what make the next client request a manageable job rather
          than an afternoon spent wondering why changing one line of CSS broke
          three other pages.
        </p>
      </section>
      <section id="independent-practice">
        <IndependentPractice
          title="Independent practice: Assemble your submission"
          title-heading="h2"
          task-heading="h3"
          requirements-heading="h3"
          description="Use the five activities above as your project workflow."
          task-title="Your task"
          requirements-title="Requirements"
          task="<p>Bring together the three website updates and the four worksheets. Ask another learner to check the preview against Sarah’s email, then record any adjustments and retest them.</p>"
          :requirements="[
            'Correct approved content in every relevant location.',
            'Desktop, mobile, keyboard, booking, and regression test results.',
            'Preview URL and commit ID with real or clearly simulated approval.',
            'Release status, live verification if published, and an honest handover.',
          ]"
        />
      </section>
      <section id="closure">
        <ClosureSection
          title="Looking ahead: Maintain with confidence"
          :key-takeaways="takeaways"
          next-steps="<p>Keep your planning, test evidence, and release record with the project. Clear code, reusable structure, and good documentation make the next client request easier to manage.</p>"
        />
      </section>
      <div id="recommended-next-steps">
        <TutorialRecommendations :current-path="tutorialPath" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.bsb-client-lesson > section > h2.title {
  margin-top: clamp(3rem, 5vw, 3.75rem);
}

.bsb-client-lesson > section > h3.title {
  margin-top: 2.25rem;
}

.client-email {
  border: 1px solid #aeb8c5;
  border-radius: 8px;
  padding: clamp(1.25rem, 3vw, 2rem);
  margin: 1rem 0 1.5rem;
  background: #f8fafc;
  color: #1f2937;
}

.bsb-client-lesson :deep(p:not(.download-block)) {
  margin: 0.8rem 0;
}

.client-email p + ul {
  margin-top: 1rem;
}

.bsb-client-lesson > section :deep(ul),
.bsb-client-lesson > section :deep(ol),
.bsb-client-lesson > figure ol,
.bsb-client-lesson > #recommended-next-steps :deep(ul),
.bsb-client-lesson > #recommended-next-steps :deep(ol) {
  margin-left: 0;
  padding-left: 3rem;
}

.bsb-client-lesson > section > ul,
.client-email ul {
  list-style: disc;
}

.bsb-client-lesson > section > ol {
  list-style: decimal;
}

.change-flow {
  display: grid;
  list-style: none;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2.5rem;
}
.change-flow li {
  position: relative;
  border: 1px solid #dbeafe;
  border-radius: 8px;
  padding: 1rem;
  background: #f8fafc;
}
.flow-number {
  display: inline-block;
  margin-right: 0.3rem;
  font-weight: 700;
}
.change-flow li:nth-child(4) {
  grid-area: 2 / 3;
}
.change-flow li:nth-child(5) {
  grid-area: 2 / 2;
}
.change-flow li:nth-child(6) {
  grid-area: 2 / 1;
}
.change-flow li:not(:last-child)::after {
  position: absolute;
  top: 50%;
  right: -1.9rem;
  transform: translateY(-50%);
  color: #34495e;
  content: "→";
  font-size: 1.5rem;
  line-height: 1;
}
.change-flow li:nth-child(3)::after {
  top: auto;
  right: auto;
  bottom: -2rem;
  left: 50%;
  transform: translateX(-50%);
  content: "↓";
}
.change-flow li:nth-child(4)::after,
.change-flow li:nth-child(5)::after {
  right: auto;
  left: -1.9rem;
  content: "←";
}

@media (max-width: 768px) {
  .change-flow {
    grid-template-columns: minmax(0, 1fr);
  }
  .change-flow li:nth-child(n) {
    grid-area: auto;
  }
  .change-flow li:not(:last-child)::after {
    top: auto;
    right: auto;
    bottom: -2rem;
    left: 50%;
    transform: translateX(-50%);
    content: "↓";
  }
}

.download-block {
  margin: 1.5rem 0;
}

.download-link {
  white-space: normal;
  height: auto;
  text-align: left;
  max-width: 100%;
}
pre {
  max-width: 100%;
  overflow-x: auto;
}
</style>
