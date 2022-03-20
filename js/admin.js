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
