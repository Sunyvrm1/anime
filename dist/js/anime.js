//Navigation

const navIcon = document.querySelector(".navIcon");
const sideNavigation = document.querySelector(".sideNavigation");
const closeBtn = document.querySelector(".closeBtn");
const nav = document.querySelector("nav");

navIcon.addEventListener("click", () => {
  sideNavigation.classList.toggle("activeNav");
  nav.classList.toggle("activeMenu");
});

closeBtn.addEventListener("click", () => {
  sideNavigation.classList.toggle("activeNav");
  nav.classList.toggle("activeMenu");
});
