// Menu Button
const menuBtn = document.querySelector(".nav-menu-button");
const navMenu = document.querySelector(".nav-menu");
const navlink = document.querySelectorAll(".menu-link");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    navMenu.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    navMenu.classList.remove("open");
    menuOpen = false;
  }
});
navlink.forEach((a) => {
  a.addEventListener("click", () => {
    menuBtn.classList.remove("open");
    navMenu.classList.remove("open");
    menuOpen = false;
  });
});

// Animation
const sr = ScrollReveal({
  duration: 1200,
  viewFactor: 0.5,
});
sr.reveal(
  ` .social-div, .cv-btn, .section > p, .work-container, .contact-form `,
  {
    distance: "100px",
    origin: "top",
    interval: 200,
  }
);

sr.reveal(`.ani-img.left, .section h3, .title`, {
  distance: "100px",
  origin: "left",
});

sr.reveal(`.ani-img.right, .section > h2, .skills`, {
  distance: "100px",
  origin: "right",
});

sr.reveal(`.profile-img, .img-div`);
