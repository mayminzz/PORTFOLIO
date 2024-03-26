// header scroll
const header = document.querySelector("header");
const logo = document.querySelector(".logo img");
const menu = document.querySelector(".menu");
const gnb = document.querySelector(".gnb");

let scrollNum = 0;
let documentHeight = 0;

window.addEventListener("scroll", () => {
  scrollNum = window.scrollY;
  if (scrollNum > 140) {
    header.classList.add("scrollEffect");
    logo.style.width = "51px";
    logo.style.height = "45px";
    gnb.classList.add("activeSmall");
  } else {
    header.classList.remove("scrollEffect");
    logo.style.width = "";
    logo.style.height = "";
    gnb.classList.remove("activeSmall");
  }
});


// header menu open
const visibleMenu = document.querySelectorAll(".over_detail_menu");
const gnbLists = document.querySelectorAll(".gnb> li");

gnbLists.forEach((list) => {
  list.addEventListener("mouseover", () => {
    list.classList.add("highlight");
    header.classList.add("active");
    visibleMenu.forEach((menu) => {
      menu.classList.add("visible");
      header.style.borderBottom = "none";
    });
  });
  list.addEventListener("mouseleave", () => {
    list.classList.remove("highlight");
  });
  header.addEventListener("mouseleave", () => {
    header.classList.remove("active");
    visibleMenu.forEach((menu) => {
      menu.classList.remove("visible");
      header.style.borderBottom = "";
    });
  });
});

// 통합검색
const body = document.querySelector("body");
const searchOpen = document.querySelector(".search");
const srchFeild = document.querySelector(".search_input");
const searchClose = document.querySelector(".close");

searchOpen.addEventListener("click", (e) => {
  e.preventDefault();
  srchFeild.classList.add("showFeild");
  body.classList.add("darkBg");
});
searchClose.addEventListener("click", () => {
  srchFeild.classList.remove("showFeild");
  body.classList.remove("darkBg");
});
