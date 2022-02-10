"use strict";
const link_container = document.querySelector(".nav-link-container");
const dateYear = document.querySelector(".dateYear");

// global variable
const footerdate = new Date().getFullYear();

// nav smooth behavior
document.querySelectorAll(".nav-link").forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    const id_of_link = this.getAttribute("href");
    document.querySelector(id_of_link).scrollIntoView({ behavior: "smooth" });
  });
});

// footer date
dateYear.textContent = `© ${footerdate} by Pismap. All rights reserved.`;
