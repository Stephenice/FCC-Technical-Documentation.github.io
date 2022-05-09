"use strict";
const tools_box = document.querySelector(".tools_box");
const url_link = `../resources/section.json`;
console.log(url_link);

// fetch data
fetch(url_link)
  .then((res) => res.json())
  .then((data) => {
    console.log(data.tools.length);
    render_data(data);
  })
  .catch();

function render_data(data) {
  if (data.tools) {
    for (let index = 0; index < data.tools.length; index++) {
      const html = `
    <div class="resource_box box_items">
    <div class="box_img box">
      <img src=" ${data.tools[index].image}" alt="" />
    </div>
    <div class="box_header box">
      <h3>
        <a
          href=" ${data.tools[index].url}"
          target="_blank"
          > ${data.tools[index].name}</a
        >
      </h3>
    </div>
    <div class="box_des box">
      <p class="description">
        ${data.tools[index].description}
      </p>
    </div>
  </div>
    `;
      tools_box.insertAdjacentHTML("beforeend", html);
    }
  }
}
