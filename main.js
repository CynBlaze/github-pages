const hamburgerEl = document.querySelector(".hamburger");
const navMenuEl = document.querySelector(".nav-menu");

hamburgerEl.addEventListener("click", () => {
  navMenuEl.classList.toggle("active");
  hamburgerEl.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((item) => {
  item.addEventListener("click", () => {
    navMenuEl.classList.toggle("active");
    hamburgerEl.classList.toggle("active");
  });
});
