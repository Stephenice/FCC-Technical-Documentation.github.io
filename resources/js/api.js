"use strict";
const tools_box = document.querySelector(".tools_box");
const html_box = document.querySelector(".html_box");
const css_box = document.querySelector(".css_box");
const javascript_box = document.querySelector(".html_box");
const fonts_box = document.querySelector(".fonts_box");
const colors_box = document.querySelector(".colors_box");
const images_box = document.querySelector(".images_box");
const icons_box = document.querySelector(".icons_box");
const design_box = document.querySelector(".design_box");
const blogs_box = document.querySelector(".blogs_box");
const algorithms_box = document.querySelector(".algorithms_box");
const youtube_box = document.querySelector(".youtube_box");

// Array selector
const header_item = [
  tools_box,
  html_box,
  css_box,
  javascript_box,
  fonts_box,
  colors_box,
  images_box,
  icons_box,
  design_box,
  blogs_box,
  algorithms_box,
  youtube_box,
];

const url_link = `../resources/section.json`;

// fetch data
fetch(url_link)
  .then((res) => res.json())
  .then((data) => {
    render_data(data);
  })
  .catch();

function render_data(data) {
  const x = [];
  for (const property in data) {
    x.push(property);
    console.log(x);
  }

  console.log(data);
  if (data.tools) {
    render_items(data.tools, tools_box);
  }
}

function render_items(data_items, itemsbox) {
  console.log(data_items);
  for (let index = 0; index < data_items.length; index++) {
    const html = `
  <div class="resource_box box_items">
  <div class="box_img box">
    <img src=" ${data_items[index].image}" alt="" />
  </div>
  <div class="box_header box">
    <h3>
      <a
        href=" ${data_items[index].url}"
        target="_blank"
        > ${data_items[index].name}</a
      >
    </h3>
  </div>
  <div class="box_des box">
    <p class="description">
      ${data_items[index].description}
    </p>
  </div>
</div>
  `;
    itemsbox.insertAdjacentHTML("beforeend", html);
  }
}
