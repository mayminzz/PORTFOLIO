//header
const header = document.querySelector("header");
const product = document.querySelector(".new");
const brand = document.querySelector(".brand");
const brandList = document.querySelector(".brand_list");
const overBg = document.querySelector(".overBg");

let scrollNum = 0;

window.addEventListener("scroll", () => {
  scrollNum = window.scrollY;
  if (scrollNum > 0) {
    header.classList.add("scrollEffect");
    if (window.innerWidth < 767) {
      header.classList.remove("scrollEffect");
    }
  } else {
    header.classList.remove("scrollEffect");
  }
});

brand.addEventListener("mouseover", () => {
  brand.classList.add("hover");
  brandList.classList.add("visible");
  overBg.classList.add("bgVisible");
  header.classList.add("scrollEffect");
});
brand.addEventListener("mouseleave", () => {
  brand.classList.remove("hover");
  brandList.classList.remove("visible");
  overBg.classList.remove("bgVisible");
  header.classList.remove("scrollEffect");
});

//toggle
const toggle = document.querySelector(".toggle");
const mobile_toggle_box = document.querySelector(".mobile_toggle_box");
const megaMenus = document.querySelectorAll(".mega_menu_link");
const toggle_menu_lists = document.querySelectorAll(".toggle_menu_list");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  mobile_toggle_box.classList.toggle("show_menu");
});

megaMenus.forEach((menu) => {
  menu.addEventListener("click", (e) => {
    e.preventDefault();
    const megaLink = e.currentTarget;
    megaLink.classList.toggle("active");
    const accordion_list = megaLink.querySelector(".toggle_menu_list");
    accordion_list.classList.toggle("accordion");
  });
});

const accordionBtns = document.querySelectorAll(".accordion_button");

accordionBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const target = e.currentTarget;
    console.log(target);
    target.classList.remove("active");
  });
});

const shoppingAtBtn = document.querySelector(".brand_store");
const shoppingAtList = document.querySelector(".brans_store_list");

shoppingAtBtn.addEventListener("click", () => {
  shoppingAtBtn.classList.toggle("hidden");
});

//category
const item_lists = document.querySelectorAll(".category_items > li ");

item_lists.forEach((list) => {
  list.addEventListener("click", (e) => {
    e.preventDefault();
    const category_items = e.currentTarget;
    category_items.classList.toggle("hidden");
  });
});

const URL = "./etude.json";
fetch(URL)
  .then((response) => response.json())
  .then((json) => {
    let trendoutput = "";
    json.forEach((item) => {
      trendoutput += `
      <div class="item">
        <img src="${item.src}" />
        <div class="description">
          <h5>${item.name}</h5> 
          <br/><br/>
          <span>${item.price}</span>
        </div>
      </div>
      `;
    });
    const items = document.querySelector(".items");
    items.innerHTML = trendoutput;
  });

// makeupLook
const changeText = document.querySelector(".makeup_top_sec > .viewmore");

if (window.innerWidth < 767) {
  changeText.innerText = "메이크업룩 전체보기";
} else {
  changeText.innerText = "View more";
}

const imgs = document.querySelectorAll(".soonjung_item img");

imgs.forEach((img) => {
  const originalSrc = img.getAttribute("src");
  const overSrc = img.getAttribute("data-over");

  img.addEventListener("mouseenter", () => {
    img.setAttribute("src", overSrc);
  });

  img.addEventListener("mouseleave", () => {
    img.setAttribute("src", originalSrc);
  });
});

// whatsnew_section item_color
const colorSpan = document.querySelectorAll(".item_color > span");
console.log(colorSpan);

const color = ["./img/lashup_black.jpeg", "./img/lashup_ashblack.jpeg"];

colorSpan.forEach((item, i) => {
  item.style.background = `url(${color[i]})center center/cover no-repeat`;
});

//footer
const familySite = document.querySelector(".familySite");
const siteMap = document.querySelector(".siteMap");
const fToggleBox = document.querySelector(".familySite_toggle_box");

familySite.addEventListener("click", () => {
  fToggleBox.classList.toggle("clickSlide");
});

$(".btn li").click(function () {
  $(this).addClass("active");
  $(this).siblings().removeClass("active");

  let result = $(this).attr("data-index");
  console.log("#" + result);
  $(".tabs > div").removeClass("active");
  $("#" + result).addClass("active");
});
