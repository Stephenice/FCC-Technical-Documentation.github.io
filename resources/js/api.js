"use strict";
const add_box = document.querySelector(".add_box");
const tools_box = document.querySelector(".tools_box");
const html_box = document.querySelector(".html_box");
const css_box = document.querySelector(".css_box");
const javascript_box = document.querySelector(".javascript_box");
const fonts_box = document.querySelector(".fonts_box");
const colors_box = document.querySelector(".colors_box");
const images_box = document.querySelector(".images_box");
const icons_box = document.querySelector(".icons_box");
const design_box = document.querySelector(".design_box");
const blogs_box = document.querySelector(".blogs_box");
const algorithms_box = document.querySelector(".algorithms_box");
const youtube_box = document.querySelector(".youtube_box");
const input_search = document.querySelector(".input_search");
const submit_button = document.querySelector(".submit_button");

//-------------- Array selector
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

//------------------ fetch data
function init(url_link) {
  fetch(url_link)
    .then((res) => res.json())
    .then((data) => {
      render_data(data);
    })
    .catch((err) => err);
}
init(url_link);

//---------------- render data
function render_data(data) {
  // get data property
  const get_data_property = [];
  for (const property in data) {
    get_data_property.push(property);
  }

  // get and set data property index
  const get_data_index = [];
  get_data_property.map(function (v, i) {
    get_data_index.push(i);
  });

  // get header selector index
  const get_header_index = [];
  header_item.forEach((data, dataI) => {
    get_header_index.push(dataI);
  });

  // set condition
  for (let index = 0; index < get_header_index.length; index++) {
    if (get_data_index[index] === get_header_index[index]) {
      const name = get_data_property[index];
      render_items(data[name], header_item[index]);
      // render_items(0, 0);
      // search_box(data[name]);
    }
  }
}

//----------- search box
// function search_box(datas) {
//   submit_button.addEventListener("click", function (e) {
//     e.preventDefault();

//     const search = input_search.value;

//     if (search === "") return;
//     remove_section();

//     let matches = datas.filter((data) => {
//       const regex = new RegExp(`^${search}`, "gi");
//       const res = data.name.match(regex);
//       return data.name.match(regex);
//     });

//     console.log(typeof matches);
//     if (matches.length === 0) return;
//     console.log(matches[1].id);

//     render_items(matches, add_box);
//   });
// }

// -------------------input empty

//------------------ remove items

// render data to all section item
function render_items(data_items, itemsbox) {
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
