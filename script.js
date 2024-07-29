const menuToggle = document.querySelector(".menu-toggle");
const navMobile = document.querySelector(".nav-mobile-wrapper");
const navItems = document.querySelectorAll(".nav-item-mobile");
const header = document.querySelector("header");

const navMobileAnimation = gsap.timeline({ paused: true, reversed: true })
  .from(".nav-mobile-wrapper", {
    xPercent: -100,
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

function updateAriaAttributes() {
  const isMenuOpen = menuToggle.classList.contains("open-btn");
  menuToggle.setAttribute("aria-label", isMenuOpen ? "Schließen" : "Menü");
  menuToggle.setAttribute("aria-expanded", isMenuOpen);
}

menuToggle.addEventListener("click", () => {
  updateBackdropFilter();
  menuToggle.classList.toggle("open-btn");
  menuIn();
  updateAriaAttributes();
});

navItems.forEach((link) => {
  link.addEventListener('click', () => { 
    updateBackdropFilter();
    menuToggle.classList.toggle("open-btn");
    menuIn();
    updateAriaAttributes();
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
  }, ">"
  )

  .to(".welcome-video", {
      scaleY: 0.9,
      scaleX: 0.9,
      yPercent: 15,
      duration: 2,
      borderRadius: "2em",
      ease: "power1.inOut",
    }, ">"
  )

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
    changeHeader.style.paddingBlock = '2em';
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
const playBtns = document.querySelectorAll('.video-play-btn');
const closeBtns = document.querySelectorAll('.video-close-btn');
const videoPlayers = document.querySelectorAll('.video-player');

playBtns.forEach((btn, index) => {
  const video = videoPlayers[index].querySelector('.video');

  function updateAriaLabel() {
    btn.setAttribute("aria-label", video.paused ? "Video abspielen" : "Video pausieren");
  }

  btn.addEventListener('click', () => {
    btn.style.display = "none";
    videoPlayers.forEach((player, playerIndex) => {
      if (index === playerIndex) {
        player.style.display = 'block';
        video.play();
      } else {
        const otherVideo = player.querySelector('.video');
        otherVideo.pause();
        player.style.display = 'none';
        btn.style.display = "block";
      }
    });
    updateAriaLabel();
  });

  closeBtns[index].addEventListener('click', () => {
    video.pause();
    videoPlayers[index].style.display = 'none';
    btn.style.display = "block";
  });

  video.addEventListener('ended', () => {
    videoPlayers[index].style.display = 'none';
    btn.style.display = "block";
  });

  updateAriaLabel();
});

//Animation Item Five
const itemFiveTitle = document.querySelector('.item-5-title')
const itemFiveImg = document.querySelector('.item-5 img')

const zoomItemFive = gsap.timeline({ paused: true });

zoomItemFive.to(itemFiveImg, {
  scale: 1.4,
  transformOrigin: "left 100%",
  duration: .6,
  ease: "none",
})

gsap.matchMedia().add("(min-width: 1200px)", () => {
  zoomItemFive.to('.item-5-text-container svg', {
    x: 160,
    ease: "none",
    duration: 0.6,
  }, '<');
});

gsap.matchMedia().add("(max-width: 1199px)", () => {
  zoomItemFive.to('.item-5-text-container svg', {
    x: 140,
    ease: "none",
    duration: 0.6,
  }, '<');
});

gsap.matchMedia().add("(max-width: 860px)", () => {
  zoomItemFive.to('.item-5-text-container svg', {
    x: 100, 
    ease: "none",
    duration: 0.6,
  }, '<');
});

itemFiveTitle.addEventListener("mouseenter", function() {
  zoomItemFive.play();
});

itemFiveTitle.addEventListener("mouseleave", function() {
  zoomItemFive.reverse();
});

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

const itemTenMobile = [
  "./assets/ten.webp",
  "./assets/ten-two.webp",
  "./assets/ten-three.webp",
  "./assets/ten-four.webp",
];

let itemMobile = 0;

function changeItemTenMobile() {
  const itemTenImg = document.querySelector(".item-10-img-mobile");
  itemTenImg.src = itemTenMobile[itemMobile];
  itemMobile++;
  if (itemMobile >= itemTenMobile.length) {
    itemMobile = 0;
  }
}

setInterval(changeItemTenMobile, 2000);

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
