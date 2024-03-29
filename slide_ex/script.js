alert(
  "바닐라 자바스크립트로 자동 슬라이드 기능을 구현했습니다. 슬라이드 이미지 위에 마우스를 올리면 슬라이드가 일시 정지하며, 마우스가 벗어나면 다시 자동으로 슬라이드가 작동합니다."
);
// 변수 및 버튼 정의!!!
const slides = document.querySelector(".slides");
const slide = slides.querySelectorAll("li");
const slideCount = slide.length;
const slideWidth = 200;
const slideMargin = 30;
let currentIdx = 0;
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

// ul & li 너비값 정의
const updateWidth = () => {
  let currentSlides = document.querySelectorAll(".slides li");
  let newSlideCount = currentSlides.length;
  let newWidth = `
  ${(slideWidth + slideMargin) * newSlideCount - slideMargin}px 
  `;
  slides.style.width = newWidth;
  console.log(newWidth);
};

// ul & li 위치값 세팅
const setInitialPos = () => {
  let initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
  slides.style.transform = `translateX(${initialTranslateValue}px)`;
};

// li태그 복제
const makeClone = () => {
  for (let i = 0; i < slideCount; i++) {
    let cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.appendChild(cloneSlide);
  }

  for (let i = slideCount - 1; i >= 0; i--) {
    let cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.prepend(cloneSlide);
  }
  updateWidth();
  setInitialPos();
  setTimeout(() => {
    slides.classList.add("animated");
  }, 100);
};

makeClone();

// 슬라이드 이동함수
const moveSlide = (num) => {
  slides.style.left = `${-num * (slideWidth + slideMargin)}px`;
  currentIdx = num;
  console.log(currentIdx, slideCount);

  if (currentIdx === slideCount || currentIdx === -slideCount) {
    setTimeout(() => {
      slides.classList.remove("animated");
      slides.style.left = "0px";
      currentIdx = 0;
    }, 500);
    setTimeout(() => {
      slides.classList.add("animated");
    }, 600);
  }
};

// 자동 슬라이드
let timer = undefined;

const autoSlide = () => {
  if (timer === undefined) {
    timer = setInterval(() => {
      moveSlide(currentIdx + 1);
    }, 3000);
  }
};

autoSlide();

const stopSlide = () => {
  clearInterval(timer);
  timer = undefined;
};

slides.addEventListener("mouseenter", () => {
  stopSlide();
});

slides.addEventListener("mouseleave", () => {
  autoSlide();
});

// 버튼 클릭 이벤트
prevBtn.addEventListener("click", () => {
  moveSlide(currentIdx - 1);
});
nextBtn.addEventListener("click", () => {
  moveSlide(currentIdx + 1);
});

// // 변수 및 버튼 정의
// const slides = document.querySelector(".slides");
// const slide = slides.querySelectorAll("li");
// const slideCount = slide.length;
// const slideWidth = 200;
// const slideMargin = 30;
// let currentIdx = 0;
// const prevBtn = document.querySelector(".prev");
// const nextBtn = document.querySelector(".next");

// // li  너비값 정의
// const updateWidth = () => {
//   let currentSlides = document.querySelectorAll("slides li");
//   let newSlideCount = currentSlides.length;
//   let newWidth = `
//   ${(slideWidth + slideMargin) * newSlideCount - slideMargin}px
//   `;
//   slides.style.width = newWidth;
//   console.log(newWidth);
// };
// updateWidth();

// // ul & li 위치값 세팅
// const setInitialPos = () => {
//   let initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
//   slides.style.transform = `translateX${initialTranslateValue}`;
// };
// setInitialPos();

// // li태그 복제
// const makeClone = () => {
//   for (let i = 0; i < slideCount; i++) {
//     let cloneSlide = slide[i].cloneNode(true);
//     cloneSlide.classList.add("clone");
//     slides.appendChild(cloneSlide);
//   }
//   for (let i = slideCount - 1; i >= 0; i--) {
//     let cloneSlide = slide[i].cloneNode(true);
//     // cloneNode 그대로 복제시킴
//     cloneSlide.classList.add("clone");
//     slides.prepend(cloneSlide);
//   }
//   updateWidth();
//   setInitialPos();
//   setTimeout = (() => {
//     slides.classList.add("animated");
//   },100);
// };

// makeClone();

// // 슬라이드 이동함수
// const moveSlide = (num) => {
//   slides.style.left = `${-num * (slideWidth + slideMargin)}px`;
//   currentIdx = num;
//   console.log(currentIdx, slideCount);

//   if (currentIdx === slideCount || currentIdx === -slideCount) {
//     setTimeout(() => {
//       slides.classList.remove("animated");
//       slides.style.left = "0px";
//       currentIdx = 0;
//     }, 500);
//     setTimeout(() => {
//       slides.classList.add("animated");
//     }, 600);
//   }
// };

// // 자동슬라이드
// let timer = undefined;
// const autoSlide = () => {
//   if (timer === undefined) {
//     timer = setInterval(() => {
//       moveSlide(currentIdx + 1);
//     }, 3000);
//   }
// };
// autoSlide();

// const stopSlide = () => {
//   clearInterval(timer);
//   timer = undefined;
// };

// slides.addEventListener("mouse둣ㄷㄱ", () => {
//   stopSlide();
// });
// slides.addEventListener("mouseleave", () => {
//   autoSlide();
// });

// // 버튼 클릭 이벤트
// prevBtn.addEventListener("click", () => {
//   moveSlide(currentIdx - 1);
// });
// nextBtn.addEventListener("click", () => {
//   moveSlide(currentIdx + 1);
// });
