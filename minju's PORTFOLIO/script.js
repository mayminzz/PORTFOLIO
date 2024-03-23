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

//Bright Version
const toggleBtn = document.querySelector(".toggle_button");
const container = document.querySelector("#container");
const modeTxt = document.querySelector(".bright_version > span");
const body = document.querySelector("body");
const arrows = document.querySelectorAll("#project > a img");

const arrowChange = () => {
  arrows.forEach((arrow) => {
    const dataImg = arrow.dataset.img;
    const dataImg2 = arrow.dataset.img2;
    if (modeTxt.innerText === "Dark Mode") {
      arrow.setAttribute("src", dataImg);
    } else {
      arrow.setAttribute("src", dataImg2);
    }
  });
};

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");
  container.classList.toggle("bright");
  body.classList.toggle("bright");
  if (modeTxt.innerText === "Light Mode") {
    modeTxt.innerText = "Dark Mode";
  } else {
    modeTxt.innerText = "Light Mode";
  }
  arrowChange();
});

//home
const spanElements = document.querySelectorAll(".title_text > span");
const count = spanElements.length;
const delay = 0.2;

const spanList = (numbers) => {
  spanElements.forEach((spanElement, index) => {
    spanElement.style.animationDelay = `${numbers[index]}s`;
  });
};
const titleTxt = document.querySelector(".title+text");

const delayplus = () => {
  let Delayarr = [];
  for (let i = 0; i < count; i++) {
    Delayarr.push(i / 5);
  }
  spanList(Delayarr);
};
delayplus();

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
      ".project_info_sec .overview"
    ).innerHTML;
    const workInfo = e.currentTarget.parentNode.querySelector(
      ".project_info_sec .work_info"
    ).innerHTML;
    const aLink = e.currentTarget.parentNode
      .querySelector("a")
      .getAttribute("href");

    const figmaLink = e.currentTarget.parentNode
      .querySelector(".figmaView button a")
      .getAttribute("href");

    console.log(figmaLink);

    const dataIdx = e.currentTarget.getAttribute("data-idx");

    if (dataIdx === "0") {
      document
        .querySelector(".detail_img > img")
        .setAttribute("src", "./img/myPage.png");
    }
    if (dataIdx === "1") {
      document
        .querySelector(".detail_img > img")
        .setAttribute("src", "./img/aesop.png");
    }

    aside.querySelector(".top_sec > h3").innerText = tit;
    aside.querySelector(".top_sec > p").innerText = subTxt;
    aside.querySelector(".modal_badge").innerHTML = hashTxt;
    aside.querySelector(".overview").innerHTML = overview;
    aside.querySelector(".work_info").innerHTML = workInfo;
    aside.querySelector(".aLink > a").setAttribute("href", aLink);
    aside
      .querySelector(".buttons .figmaView a")
      .setAttribute("href", figmaLink);
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

  if (scrollNum < 477) {
    goToTopBtn.classList.remove("visible");
  } else {
    goToTopBtn.classList.add("visible");
  }
});

//example

const btns = document.querySelectorAll(".btn li");
const tabs = document.querySelectorAll(".tabs .tab_content");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const targetClass = e.currentTarget.querySelector("a").getAttribute("href");
    const thebtn = e.currentTarget;

    btns.forEach((btn) => {
      btn.classList.remove("active");
    });

    e.currentTarget.classList.add("active");

    tabs.forEach((tab) => {
      if (tab.classList.contains(targetClass)) {
        tab.style.display = "block";
      } else {
        tab.style.display = "none";
      }
    });
  });
});



// ★라이브러리★  =========================================
//wow
let wow = new WOW({
  boxClass: "wow", // default /값받고 싶은 애는 wow라는 클래스를 가지고 있을거야
  // animateClass: 'animated', // default /css로 만든 애니메이션을 연결하고 싶으면 animated이라는 클래스를 줘라
  offset: 150, // default / 몇픽셀 정도가 됐을때 wow라는 애니메이션을 실행시킬거냐
  mobile: true, // default /모바일에서쓰고 싶으면 트루 아니면 폴스
  live: true, // default / 지속적으로 반영하고 싶게 해줄거냐
});
wow.init();
