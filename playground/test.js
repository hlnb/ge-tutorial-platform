console.log("Testing DOM selector with simple HTML:");
document.addEventListener("DOMContentLoaded", () => {
  console.log("  Input:", document.querySelector("input"));
  console.log("  Button:", document.querySelector("button"));
});
