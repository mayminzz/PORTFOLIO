//header
const header = document.querySelector("header");
const product = document.querySelector(".new");
const brand = document.querySelector(".brand");
const brandList = document.querySelector(".brand_list");
const overBg = document.querySelector(".overBg");

brand.addEventListener("mouseover", () => {
  brand.classList.add("hover");
  brandList.classList.add("visible");
  overBg.classList.add("bgVisible");
  header.style.backdropFilter = "blur(5px)";
  header.style.background = "rgba(250,250,250,0.7)";
});
brand.addEventListener("mouseleave", () => {
  brand.classList.remove("hover");
  brandList.classList.remove("visible");
  overBg.classList.remove("bgVisible");
  header.style.backdropFilter = "";
  header.style.background = "";
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

if(window.innerWidth < 767) {
  changeText.innerText = "메이크업룩 전체보기"
} else {
  changeText.innerText = "View more"
}

let scrollNum = 0;
let documentHeight = 0;

window.addEventListener("scroll", () => {
  scrollNum = window.scrollY;
  if (scrollNum > 0) {
    header.style.backdropFilter = "blur(5px)";
    header.style.background = "rgba(250,250,250,0.7)";
    if (window.innerWidth < 767) {
      header.style.backdropFilter = "";
      header.style.background = "";
    }
  } else {
    header.style.backdropFilter = "";
    header.style.background = "";
  }
});

const imgs = document.querySelectorAll(".soonjung_item img");

imgs.forEach((img) => {
  const originalSrc = img.getAttribute("src");
  const overSrc = img.getAttribute("data-over");

  img.addEventListener("mouseenter", () => {
    img.setAttribute("src", overSrc);
    // img.style.zIndex = "99px";
    // originalSrc.classList.add("invisible");
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
