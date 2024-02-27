const header = document.querySelector("header");
header.addEventListener("mouseover", () => {
  header.classList.add("bgChange");
});
header.addEventListener("mouseleave", () => {
  header.classList.remove("bgChange");
});

const toggle = document.querySelector(".toggle");
const gnb = document.querySelector(".gnb");

toggle.addEventListener("click", () => {
  gnb.classList.toggle("show");
  toggle.classList.toggle("active");
});

const gnbLi = document.querySelectorAll(".gnb > li > a");
gnbLi.forEach((li) => {
  li.addEventListener("mouseover", () => {
    li.classList.add("active");
  });
  li.addEventListener("mouseleave", () => {
    li.classList.remove("active");
  });
});

// project_sec slide
const sliderWrapper = document.querySelector(".slideContainer");
const slideContainer = document.querySelector(".slider_projects");
const slides = document.querySelectorAll(".slide_project");
const slideCount = slides.length;
// slideCount = 4
const pager = document.querySelector(".pager");

let currentIndex = 0;
let pagerHTML = "";

const prevBtn = document.querySelector("#prev > img");
const nextBtn = document.querySelector("#next > img");

for (let i = 0; i < slideCount; i++) {
  slides[i].style.left = `${i * 100}%`;
  pagerHTML += `<span data-idx="${i}"></span>`;
  pager.innerHTML = pagerHTML;
}
const pagerBtn = document.querySelectorAll(".pager > span");
console.log(pagerBtn);

const upDateNav = () => {
  if (currentIndex === 0) {
    prevBtn.classList.add("disabled");
  } else {
    prevBtn.classList.remove("disabled");
  }

  if (currentIndex === slideCount - 1) {
    nextBtn.classList.add("disabled");
  } else {
    nextBtn.classList.remove("disabled");
  }
};

pagerBtn[0].classList.add("active");
const goToSlide = (i) => {
  slideContainer.style.left = `${i * -100}%`;
  slideContainer.classList.add("animated");
  currentIndex = i;
  for (let i = 0; i < pagerBtn.length; i++) {
    pagerBtn[i].classList.remove("active");
  }
  pagerBtn[i].classList.add("active");
};

for (let i = 0; i < pagerBtn.length; i++) {
  pagerBtn[i].addEventListener("click", (e) => {
    console.log(e.target);
    let pagerNum = e.target.getAttribute("data-idx");
    goToSlide(pagerNum);
  });
}

prevBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentIndex > 0) {
    goToSlide(currentIndex - 1);
  } else {
    goToSlide(slideCount - 1);
  }
});

nextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentIndex < slideCount - 1) {
    goToSlide(currentIndex + 1);
  } else {
    goToSlide(0);
  }
});

const modals = document.querySelectorAll(".project_desc > button");
const aside = document.querySelector("aside");
const close = document.querySelector(".close");
const main = document.querySelector("main");

for (let modal of modals) {
  modal.addEventListener("click", (e) => {
    const tit = e.currentTarget.parentNode.querySelector(
      ".project_title > h3"
    ).innerText;
    const subTxt =
      e.currentTarget.parentNode.querySelector(".project_title > p").innerText;
    const hashTxt =
      e.currentTarget.parentNode.querySelector(".badge").innerHTML;
    const overview = e.currentTarget.parentNode.querySelector(
      ".project_info_sec .overview > p"
    ).innerText;
    const workInfo = e.currentTarget.parentNode.querySelector(
      ".project_info_sec .work_info"
    ).innerHTML;
    const aLink = e.currentTarget.parentNode
      .querySelector("a")
      .getAttribute("href");

    const dataIdx = e.currentTarget.getAttribute("data-idx");

    if (dataIdx === "0") {
      document
        .querySelector(".detail_img > img")
        .setAttribute("src", "./img/aesop.png");
    }
    if (dataIdx === "1") {
      document
        .querySelector(".detail_img > img")
        .setAttribute("src", "./img/myPage.png");
    }

    aside.querySelector(".top_sec > h3").innerText = tit;
    aside.querySelector(".top_sec > p").innerText = subTxt;
    aside.querySelector(".modal_badge").innerHTML = hashTxt;
    aside.querySelector(".overview > p").innerHTML = overview;
    aside.querySelector(".work_info").innerHTML = workInfo;
    aside.querySelector(".aLink > a").setAttribute("href", aLink);
    aside.classList.add("on");
    main.classList.add("invisible");

    close.addEventListener("click", (e) => {
      aside.classList.remove("on");
      main.classList.remove("invisible");
    });
  });
}

const goToTopBtn = document.querySelector("#goToTop");

window.addEventListener("scroll", () => {
  let scrollNum = window.scrollY;
  console.log(scrollNum);

  if (scrollNum < 477) {
    goToTopBtn.classList.remove("visible");
  } else {
    goToTopBtn.classList.add("visible");
  }
});

$(".btn li").click(function () {
  $(this).addClass("active");
  $(this).siblings().removeClass("active");

  let result = $(this).attr("data-alt");
  $(".tabs > div").removeClass("active");
  $("#" + result).addClass("active");
});
