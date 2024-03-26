//header
const header = document.querySelector("header");
let scrollNum = 0;
window.addEventListener("scroll", () => {
  scrollNum = window.scrollY;
  if (scrollNum > 30) {
    header.classList.add("scrollEffect");
  } else {
    header.classList.remove("scrollEffect");
  }
});

const dropdownBtn = document.querySelector(".nav_dropdown > button");
const dropdownList = document.querySelector(".dropdown_list");

dropdownBtn.addEventListener("click", () => {
  dropdownList.classList.toggle("dropdown");
  dropdownBtn.classList.toggle("rotate");
});

//navigation
const nav_items = document.querySelectorAll(".nav_item > a");
const nav_sub_boxes = document.querySelectorAll(".nav_subs");
const nav_dropdown = document.querySelector(".nav_dropdown");

nav_items.forEach((item) => {
  item.addEventListener("mouseenter", (e) => {
    const subBox = e.currentTarget.parentNode.querySelector(".nav_subs");
    nav_sub_boxes.forEach((subBox) => {
      subBox.classList.remove("active");
    });
    dropdownList.classList.remove("dropdown");
    dropdownBtn.classList.remove("rotate");
    subBox.classList.add("active");
  });
});

header.addEventListener("mouseleave", () => {
  nav_sub_boxes.forEach((subBox) => {
    subBox.classList.remove("active");
  });
});

nav_dropdown.addEventListener("mouseenter", () => {
  nav_sub_boxes.forEach((subBox) => {
    subBox.classList.remove("active");
  });
});

// toggle
const toggleBtn = document.querySelector(".toggle");
const nav = document.querySelector(".nav");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");
  nav.classList.toggle("mobile_toggle_appear");
});
