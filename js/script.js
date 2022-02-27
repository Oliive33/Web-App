/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 3000,
  delay: 400,
  // reset: true
});

// sr.reveal(".container");
// sr.reveal("h1, img, p", { interval: 400 });
sr.reveal(".logo img", { delay: 400 });
sr.reveal(".logo img", {
  origin: "top",
  delay: 1000,
});
// sr.reveal(".form-control", { interval: 400 });
// sr.reveal(".remember", { origin: "right" });
// sr.reveal(".button", { origin: "left" });
