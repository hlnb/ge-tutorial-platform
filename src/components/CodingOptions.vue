<template>
  <div class="box coding-options">
    <h2 class="title is-3">
      <i class="fas fa-laptop-code"></i> Getting Ready to Code
    </h2>
    <p>
      Before we start, you can choose how you want to code along with this
      tutorial:
    </p>

    <div class="coding-options-grid mt-4">
      <div class="coding-option-card box has-background-primary-light">
        <h3 class="title is-4"><i class="fas fa-desktop"></i> Local Editor</h3>
        <div class="content">
          <p>Use your preferred code editor:</p>
          <ul>
            <li>
              Create a new file: <code>{{ filename }}</code>
            </li>
            <li>Use VS Code, Sublime, or any text editor</li>
            <li>Save and open in your browser</li>
          </ul>
        </div>
      </div>

      <div class="coding-option-card box has-background-info-light">
        <h3 class="title is-4"><i class="fas fa-globe"></i> Online Editor</h3>
        <div class="content">
          <p>Use an online coding platform:</p>
          <ul>
            <li>
              <a href="https://codepen.io" target="_blank" rel="external"
                >CodePen</a
              >
            </li>
            <li>
              <a href="https://jsfiddle.net" target="_blank" rel="external"
                >JSFiddle</a
              >
            </li>
            <li>
              <a href="https://replit.com" target="_blank" rel="external"
                >Replit</a
              >
            </li>
          </ul>
        </div>
      </div>

      <div class="coding-option-card box has-background-success-light">
        <h3 class="title is-4"><i class="fas fa-code"></i> Practice Area</h3>
        <div class="content">
          <p>Use our built-in editor:</p>
          <ul>
            <li>Interactive examples below</li>
            <li>Try code and see results</li>
            <li>No setup required</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="notification is-light mt-4">
      <p>
        <strong>Tip:</strong> For beginners, we recommend using the Practice
        Area or an online editor to focus on learning rather than setup.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CodingOptions",
  props: {
    filename: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.coding-options {
  max-width: 960px;
  margin: 0 auto;
}

.coding-options-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 15rem), 1fr));
  gap: 1.5rem;
}

.coding-option-card {
  min-width: 0;
}

.coding-option-card .title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  line-height: 1.2;
}

.coding-option-card code {
  overflow-wrap: anywhere;
}
</style>
