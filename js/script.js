const icon = document.querySelector(".bg-icon");
const popUp = document.querySelector(".pop-up");
const triangle = document.querySelector(".triangle");

icon.addEventListener("mouseenter", () => {
  popUp.classList.remove("sr-only");
  triangle.classList.remove("sr-only");
});

icon.addEventListener("mouseleave", () => {
  popUp.classList.add("sr-only");
  triangle.classList.add("sr-only");
});
