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
// const gnbListA = document.querySelectorAll(".gnb> li > a");

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


// live contents
const contents = document.querySelector(".live_contents");
const URL = "./mc.json";
fetch(URL)
  .then((response) => response.json())
  .then((json) => {
    let output = "";
    json.contents.forEach((item) => {
      output += `
      <div class="live_content">
        <a href="">
          <div class="pic">
            <img src="${item.img}" alt="${item.alt}"/>
          </div>
          <div class="desc">
            <h2>${item.description}</h2>
          </div>
        </a>
      </div>
      `;
    });

    contents.innerHTML = output;
    let moreOutput = "";
    json.moreContents.forEach((item) => {
      moreOutput += `
      <div class="live_content">
      <a href="">
        <div class="pic">
          <img src="${item.img}" alt="${item.alt}"/>
        </div>
        <div class="desc">
          <h2>${item.description}</h2>
        </div>
      </a>
    </div>
      `;
    });

    // view more live contents
    const viewmoreBtn = document.querySelector(".viewmore_btn");
    viewmoreBtn.addEventListener("click", () => {
      contents.innerHTML += moreOutput;
      viewmoreBtn.remove(viewmoreBtn);
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
