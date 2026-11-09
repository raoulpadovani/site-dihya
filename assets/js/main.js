// Dihya — site statique (HTML/CSS/JS)
// Gère le menu mobile.

document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initScrollEffects();
});

function initMobileNav() {
  const toggle = document.querySelector(".seve-menu-toggle");
  const nav = document.querySelector(".seve-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function initScrollEffects() {
  const header = document.querySelector(".seve-header");
  if (header) {
    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  const items = document.querySelectorAll("[data-reveal]");
  if (!items.length) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  document.documentElement.classList.add("reveal-ready");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.15 }
  );
  items.forEach((el) => observer.observe(el));
}
