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

function updateBackdropFilter() {
  const currentFilter = getComputedStyle(header).backdropFilter;
  const newFilter = currentFilter === "none" ? "saturate(180%) blur(20px)" : "none";
  
  header.style.backdropFilter = newFilter;
  header.style.webkitBackdropFilter = newFilter;
}

menuToggle.addEventListener("click", () => {
  updateBackdropFilter();
  menuToggle.classList.toggle("open-btn");
  menuIn();
});

navItems.forEach((link) => {
  link.addEventListener('click', () => { 
    updateBackdropFilter();
    menuToggle.classList.toggle("open-btn");
    menuIn();
  });
});


//Header Animation - Animated Text
const headerAnimation = gsap.timeline()

  .to(".animated-text", {
    scale: 100,
    duration: 4,
    transformOrigin: "center center",
    xPercent: -240,
    delay: 3,
    opacity: 0,
    ease: "expo.in",
  })

  .to(".welcome-video", {
      scale: 0.9,
      yPercent: 15,
      duration: 2,
      borderRadius: "2em",
      ease: "power1.inOut",
    }, "+=5"
  )

  .to(".banner", {
      paddingBottom: "10%",
      duration: 2,
      ease: "power1.inOut",
    }, "<"
  )

  .to("header", {
      opacity: 1,
      duration: 2,
    }, "-=1"
  );

const animatedText = document.querySelector(".animated-text");

setTimeout(() => (animatedText.style.display = "none"), 8000);


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
    changeHeader.style.paddingBlock = '3em';
  }
}


// Courusel
const swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 100,
  initialSlide: 2,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },

  keyboard: {
    enabled: true,
  },

  pagination: {
    el: ".swiper-pagination-dots",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
  },

  breakpoints: {
    320: {
      spaceBetween: 40,
    },
    480: {
      spaceBetween: 80,
    },
  },
});


//Hoodies Animation
const hoodies = [
  "./assets/variant-one.webp",
  "./assets/variant-two.webp",
  "./assets/variant-three.webp",
  "./assets/variant-four.webp",
  "./assets/variant-five.webp",
  "./assets/variant-six.webp",
  "./assets/variant-seven.webp",
];

let i = 0;

function changeHoody() {
  const image = document.querySelector(".hoody-img");
  image.src = hoodies[i];
  i++;
  if (i >= hoodies.length) {
    i = 0;
  }
}

setInterval(changeHoody, 1000);

//Circular Text
gsap.to(".circular-text", {
  rotation: 360,
  duration: 9,
  repeat: -1,
  ease: "none",
});

//Video on hover
const video = document.querySelector(".eco-clothing-video");
const videoPlayBtn = document.querySelector(".eco-clothing-video-btn");

video.addEventListener("mouseenter", () => {
  video.play();
  videoPlayBtn.style.display = "none";
});

video.addEventListener("mouseleave", () => {
  video.pause();
  videoPlayBtn.style.display = "block";
});

//Videos
const playBtns = document.querySelectorAll("#play");

playBtns.forEach((btn, index) => {
  const video = document.querySelectorAll(".video")[index];

  btn.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      video.muted = !video.muted;
      btn.classList.toggle("pause-btn");
    } else {
      video.pause();
      video.muted = !video.muted;
      btn.classList.toggle("pause-btn");
    }
  });
});

//Animation Item Five
const itemFiveTitle = document.querySelector(".item-5-title");
const itemFiveImg = document.querySelector(".item-5 img");

const zoomItemFive = gsap.timeline({ paused: true });

zoomItemFive.to(itemFiveImg, {
  scale: 1.3,
  duration: 1,
});

zoomItemFive.to(".item-5-title svg", {
    xPercent: "400",
    ease: "power3.out",
    duration: 1,
  }, "<"
);

itemFiveTitle.addEventListener("mouseenter", function () {
  zoomItemFive.play();
});
itemFiveTitle.addEventListener("mouseleave", function () {
  zoomItemFive.reverse();
});

//Animation Item Thirteen
const itemThirteenTitle = document.querySelector(".item-13");
const itemAnimation = gsap.timeline({ paused: true });

itemAnimation.fromTo(".item-13-title", { y: 100 }, { autoAlpha: 1, y: 0 });
itemAnimation.fromTo(".item-13-title span", { y: 200 }, { y: 0, duration: 1 });
itemAnimation.fromTo(".item-13-title img", { y: 200 }, { y: 4, duration: 1 });

itemThirteenTitle.addEventListener("mouseenter", () => {
  itemAnimation.play();
});
itemThirteenTitle.addEventListener("mouseleave", () => {
  itemAnimation.reverse();
});

// video.addEventListener('mouseleave', () => {
//   if (!video.paused) {
//     btn.style.display = "none";
//   }
// });

// video.addEventListener('mouseenter', () => {
//   if (!video.paused) {
//     btn.style.display = "flex";
//   }
// });
