/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById("nav-menu"),
  toggleMenu = document.getElementById("nav-toggle"),
  closeMenu = document.getElementById("nav-close");

/*SHOW*/
toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

/*HIDDEN*/
closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  /*Active link*/
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  /*Remove menu mobile*/
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));
const start = document.getElementById("start_date");
const today = new Date().toISOString().split("T")[0];

start.value = today;
start.min = today;

start.addEventListener("change", (e) => {
  let day = new Date(e.target.value);
  day.setDate(day.getDate() + 1);
  //   let tomorrow = day.toISOString().split("T")[0];
  //   start.min = tomorrow;
  //   start.value = tomorrow;
});
// ===================
//Apparition Pop up lang
let BackgroundBtn = document.querySelector("#background-btn");
let loginBackground = document.querySelector(".login-background-container");
let formBackgroundClose = document.querySelector("#form-background-close");

// window.onscroll = () => {
//   loginLang.classList.remove("active");
// };
BackgroundBtn.addEventListener("click", () => {
  loginBackground.classList.add("active");
});

formBackgroundClose.addEventListener("click", () => {
  loginBackground.classList.remove("active");
});
//====================
// Modif logo

const imgDiv = document.querySelector(".profile-pic-div");
const img = document.querySelector("#photo");
const file = document.querySelector("#file");
const uploadBtn = document.querySelector("#uploadBtn");

//Quand on passe au hover

imgDiv.addEventListener("mouseenter", function () {
  uploadBtn.style.display = "block";
});

//Quand on passe au hover

imgDiv.addEventListener("mouseleave", function () {
  uploadBtn.style.display = "none";
});

//Quand on choisit une photo to upload

file.addEventListener("change", function () {
  //this refers to file
  const choosedFile = this.files[0];

  if (choosedFile) {
    const reader = new FileReader();

    reader.addEventListener("load", function () {
      img.setAttribute("src", reader.result);
    });

    reader.readAsDataURL(choosedFile);
  }
});
// /*===============  SWIPER ===============*/
let swiper = new Swiper(".themes-menu", {
  loop: true,
  spaceBetween: 58,
  slidesPerView: "auto",
  grabCursor: true,
  centeredSlides: true,

  breakpoints: {
    768: {
      slidesPerView: 43,
    },
    1024: {
      spaceBetween: 48,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
