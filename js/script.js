/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 3000,
  delay: 400,
  // reset: true
});

sr.reveal(".container");
sr.reveal("h1, img, p", { interval: 300 });
sr.reveal(".form-control", { delay: 500 });
sr.reveal(".remember-button", {
  origin: "top",
  delay: 1000,
});
sr.reveal(".form-control", { interval: 300 });
sr.reveal(".remember", { origin: "right" });
sr.reveal(".button", { origin: "left" });
