
// banner
const slides = document.querySelector(".banner_img");
const slide = slides.querySelectorAll("img");
const slideCount = slide.length;
let currentIdx = 0;
const prevBtn = document.querySelector(".prev_btn");
const nextBtn = document.querySelector(".next_btn");

const moveSlide = (num) => {
  slides.style.marginLeft = `${-num * 600}px`;
  currentIdx = num;
  console.log(currentIdx, slideCount);

  if (currentIdx === slideCount || currentIdx === -slideCount) {
    setTimeout(() => {
      slides.classList.remove("animated");
      slides.style.marginLeft = "0px";
      currentIdx = 0;
    }, 500);
    setTimeout(() => {
      slides.classList.add("animated");
    }, 600);
  }
};

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

const products = document.querySelector(".products");
console.log(products);
const URL = "./ably.json";

fetch(URL)
  .then((response) => response.json())
  .then((json) => {
    let productOutput = "";
    json.forEach((product) => {
      productOutput += `
      <div class="product">
      <div class="product_img">
        <img src="${product.img}" alt="${product.alt}">
      </div>
      <div class="product_desc">
        <h1><span>${product.discount} </span>${product.price}</h1>
        <span>${product.brand}</span>
        <span>${product.desc}</span>
        <span class="counts">${product.counts}</span>
      </div>
    </div>
      `;
    });
    products.innerHTML = productOutput;
  });
