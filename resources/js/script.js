"use strict";
const link_container = document.querySelector(".nav-link-container");
const dateYear = document.querySelector(".dateYear");
const company_name = document.querySelectorAll(".headline");
const company_title = document.querySelectorAll(".top_title");
const bar_open_btn = document.querySelector(".bar_nav");
const bar_id = document.querySelector("#navbar");
const 

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
company_name.forEach((e) => (e.textContent = `PISMAP`));
company_title.forEach((e) => (e.textContent = `Front-End Resources`));

//--------- footer information
dateYear.textContent = `© ${footerdate} by Pismap. All rights reserved.`;

// ---------menu
bar_btn.addEventListener("click", function () {
  bar_id.classList.add("moblie_nav");
});
