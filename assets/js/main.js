// Grab elements
const selectElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw new Error(`Error is on ${selector} element`);
};
//Nav styles on scroll
const scrollHeader = () => {
  const headerElement = selectElement(".header");
  if (this.screenY <= 15) {
    headerElement.classList.add("active");
  } else headerElement.classList.remove("active");
};
window.addEventListener("scroll", scrollHeader);

// Open menu & search pop-up
const menuToggleIcon = selectElement(".menu-toggle");
const toggleMenu = () => {
  const mobileMenu = selectElement("#menu");
  mobileMenu.classList.toggle("active");
  menuToggleIcon.classList.toggle("active");
};
menuToggleIcon.addEventListener("click", toggleMenu);

// Open/Close search form popup
const openForm = selectElement("#search-btn");
const closeForm = selectElement("#form-close");
const Form = selectElement("#search-form");

openForm.addEventListener("click", () => Form.classList.add("active"));
closeForm.addEventListener("click", () => Form.classList.remove("active"));

// -- Close the search form popup on ESC keypress

window.addEventListener("keyup", (e) => {
  if (e.key === "Escape") Form.classList.remove("active");
});

// Switch theme/add to local storage
const bodyElement = document.body;
const themeToggleBtn = selectElement("#theme-toggle");
const currentTheme = localStorage.getItem("current");
if (currentTheme) {
  bodyElement.classList.add("light-theme");
}
themeToggleBtn.addEventListener("click", () => {
  bodyElement.classList.toggle("light-theme");
  if (bodyElement.classList.contains("light-theme")) {
    localStorage.setItem("current", "active");
  } else {
    localStorage.removeItem("current");
  }
});

// Swiper
const swiper = new Swiper(".swiper", {
  slidePerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    700: {
      slidePerView: 2
    },
    1200: {
      slidePerView: 3
    },
  },
});
