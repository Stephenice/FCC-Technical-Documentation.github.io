"use strict";
const link_container = document.querySelector(".nav-link-container");
const dateYear = document.querySelector(".dateYear");
const company_name = document.querySelectorAll(".headline");
const company_title = document.querySelectorAll(".top_title");
const bar_open_btn = document.querySelector(".bar_nav");
const bar_id = document.querySelector("#navbar");
const close_btn = document.querySelector(".mobile_cross");
const nav_items = document.querySelectorAll(".nav-link");

//---------- global variable
const footerdate = new Date().getFullYear();

//----------- nav smooth behavior
document.querySelectorAll(".nav-link").forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    const id_of_link = this.getAttribute("href");
    document.querySelector(id_of_link).scrollIntoView({ behavior: "smooth" });
  });
});

// --------- company name and title
company_name.forEach((e) => (e.innerHTML = `CODELOG`));
company_title.forEach((e) => (e.textContent = `Front-End Resources`));

//--------- footer information
dateYear.textContent = `© ${footerdate} by Pismap. All rights reserved.`;

// ---------menu - Responsive Navigation Bar

bar_open_btn.addEventListener("click", function () {
  // if (bar_id.classList.contains("moblie_nav")) return;
  // bar_id.classList.add("moblie_nav");
  menu_btn_nav();
});

close_btn.addEventListener("click", function () {
  // bar_id.classList.remove("moblie_nav");
  menu_btn_nav();
});

const menu_btn_nav = function () {
  bar_id.classList.toggle("moblie_nav");
};

nav_items.forEach((e) => {
  e.addEventListener("click", function (e) {
    menu_btn_nav();
  });
});
