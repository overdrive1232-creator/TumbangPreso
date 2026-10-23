/* ==========================================================
   script.js
   1. Mobile menu
   2. Newsletter form
   ========================================================== */

/* ---------- 1. Mobile menu ---------- */
const menu = document.getElementById("menu");
const burger = document.getElementById("burger");

function toggleMenu() {
  menu.classList.toggle("open");
}

function closeMenu() {
  menu.classList.remove("open");
}

burger.addEventListener("click", toggleMenu);

// Close the menu after tapping a link
menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

/* ---------- 2. Newsletter form ---------- */
const form = document.getElementById("form");
const message = document.getElementById("msg");

function handleSubmit(event) {
  event.preventDefault();

  message.textContent = "You're signed up. Watch your inbox for news.";
  form.reset();
}

form.addEventListener("submit", handleSubmit);