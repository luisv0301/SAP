gsap.registerPlugin(ScrollTrigger);
const hamburMenu = document.querySelector(".nav__hambur-menu");
const navMobile = document.querySelector(".nav-mobile");

hamburMenu.addEventListener("click", () => {
  hamburMenu.getAttribute("aria-expanded") === "true"
    ? hamburMenu.setAttribute("aria-expanded", false)
    : hamburMenu.setAttribute("aria-expanded", true);

  navMobile.classList.toggle("visible");
});

//ANIMATIONS
//tween
gsap.from(".image-animation", {
  scale: 1.2,
  opacity: 0,
  stagger: {
    from: "random",
    amount: 2,
  },
});
//Scrool-trigger animations
const sections = gsap.utils.toArray(".section");

sections.forEach((section) => {
  const title = section.querySelector(".section__tittle");
  const text = section.querySelector(".section__description");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "center bottom",
      end: "bottom bottom",
      scrub: true,
      markers: true,
    },
  });
  tl.from(title, {
    opacity: 0,
    x: 500,
  }).from(text, {
    opacity: 0,
    x: 500,
  });
});

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-customers",
    start: "top center",
    end: "+=400",
    scrub: true,
    markers: true,
  },
});
tl2
  .from(".animate-numbers-1", {
    color: "#475569",
  })
  .from(".animate-numbers-2", {
    color: "#475569",
  });
