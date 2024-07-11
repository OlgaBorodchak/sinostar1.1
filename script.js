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

  .to("header", {
    opacity: 1,
    duration: 2,
  }, ">")

  .to("#welcome-video-container", {
    scaleX: 0.9, 
    scaleY: 0.9, 
    yPercent: 15,
    duration: 2,
    ease: "power1.inOut",
    borderRadius: "2em",
  }, ">")

  .to(".welcome-video", {
    duration: 2,
    borderRadius: "2em",
  }, "<")

  .to(".banner", {
    paddingBottom: "10%",
    duration: 2,
    ease: "none",
  }, "<"
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

//Switch sources based on screen size
document.addEventListener('DOMContentLoaded', function() {
  const video = document.querySelector('.welcome-video');
  const sources = video.getElementsByTagName('source');

  function updateVideoSource() {
    if (window.innerWidth <= 480) {
      sources[0].src = './assets/welcome_video_mobile.webm';
      sources[1].src = './assets/welcome_video_mobile.mp4';
    } else {
      sources[0].src = './assets/welcome_video.webm';
      sources[1].src = './assets/welcome_video.mp4';
    }
    video.load(); 
  }

  updateVideoSource();
});


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
const itemFiveTitle = document.querySelector('.item-5-title')
const itemFiveImg = document.querySelector('.item-5 img')

const zoomItemFive = gsap.timeline({ paused: true });

zoomItemFive.to(itemFiveImg, {
  scale: 1.4,
  transformOrigin: "20px 200px ",
  duration: .6,
  ease: "none",
})

zoomItemFive.to('.item-5-title svg', {
  x: '155',
  ease: "none",
  duration: .6,
}, '<')

itemFiveTitle.addEventListener("mouseenter", function () {zoomItemFive.play();});
itemFiveTitle.addEventListener("mouseleave", function () {zoomItemFive.reverse();});

//Animation Iten Ten
const itemTen = [
  "./assets/ten.webp",
  "./assets/ten-two.webp",
  "./assets/ten-three.webp",
  "./assets/ten-four.webp",
];

let item = 0;

function changeItemTen() {
  const itemTenImg = document.querySelector(".item-10-img");
  itemTenImg.src = itemTen[item];
  item++;
  if (item >= itemTen.length) {
    item = 0;
  }
}

setInterval(changeItemTen, 2000);

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

//Animation Item Fifteen
const itemFifteen = document.querySelector(".item-15");
const zoomItemFifteen = gsap.timeline({ paused: true });

zoomItemFifteen.to(".zoom-item-15", {
  scale: 1.3,
  duration: 1,
});
zoomItemFifteen.fromTo(".item-15-icon", { y: 100 }, { autoAlpha: 1, y: 0 });

itemFifteen.addEventListener("mouseenter", () => {
  zoomItemFifteen.play();
});
itemFifteen.addEventListener("mouseleave", () => {
  zoomItemFifteen.reverse();
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


