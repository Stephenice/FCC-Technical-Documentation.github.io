"use strict";
const link_container = document.querySelector(".nav-link-container");

// Page navigation using event delegation
/*
link_container.addEventListener("click", function (e) {
  e.preventDefault();
  //matching strategy
  if (!e.target.classList.contains("nav-link")) return;
  const id_of_link = e.target.getAttribute("href");
  document.querySelector(id_of_link).scrollIntoView({ behavior: "smooth" });
});
*/

document.querySelectorAll(".nav-link").forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    const id_of_link = this.getAttribute("href");
    document.querySelector(id_of_link).scrollIntoView({ behavior: "smooth" });
  });
});
