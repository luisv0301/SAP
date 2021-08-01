const hamburMenu = document.querySelector(".nav__hambur-menu");
const navMobile = document.querySelector(".nav-mobile");

hamburMenu.addEventListener("click", () => {
  hamburMenu.getAttribute("aria-expanded") === "true"
    ? hamburMenu.setAttribute("aria-expanded", false)
    : hamburMenu.setAttribute("aria-expanded", true);

  navMobile.classList.toggle("visible");
});
