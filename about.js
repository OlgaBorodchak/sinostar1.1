const menuToggle = document.querySelector(".menu-toggle");
const navMobile = document.querySelector(".nav-mobile-wrapper");
const navItems = document.querySelectorAll(".nav-item-mobile");
const header = document.querySelector("header");

const navMobileAnimation = gsap.timeline({ paused: true, reversed: true })
  .from(".nav-mobile-wrapper", {
    xPercent: "-100",
    duration: 0.8,
    ease: "power2.out",
  });

function menuIn() {
  navMobileAnimation.reversed() ? navMobileAnimation.play() : navMobileAnimation.reverse();
}

function updateAriaAttributes() {
  const isMenuOpen = menuToggle.classList.contains("open-btn");
  menuToggle.setAttribute("aria-expanded", isMenuOpen);
  menuToggle.setAttribute("aria-label", isMenuOpen ? "Schließen" : "Menü");
}

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("open-btn");
  menuIn();
  updateAriaAttributes();
});

//Change Header Height on Scroll
window.addEventListener('scroll', headerHeight);

const changeHeader = document.querySelector('header');

function headerHeight() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    changeHeader.style.paddingBlock = '1.5em';
  } else {
    changeHeader.style.paddingBlock = '2em';
  }
}
