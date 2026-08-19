/* global document */

const navToggle = document.querySelector("[data-nav-toggle]");
const navigation = document.querySelector("[data-navigation]");

if (navToggle && navigation) {
  const closeNavigation = () => {
    navigation.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeNavigation();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeNavigation();
      navToggle.focus();
    }
  });
}

document.querySelectorAll("[data-demo-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = form.querySelector("[data-form-status]");

    if (status) {
      status.textContent =
        "Thank you. This demonstration form does not send or store personal information.";
    }

    form.reset();
  });
});
