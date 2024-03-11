const header = document.querySelector("header");
const gnbLists = document.querySelectorAll(".gnb_list");
const detailBoxes = document.querySelectorAll(".detail_list_box");
const main = document.querySelector("main");

mouseenterEffect = (e) => {
  const detailBox = e.currentTarget.querySelector(".detail_list_box");
  detailBoxes.forEach((detailBox) => {
    detailBox.classList.remove("active");
  });
  detailBox.classList.add("active");
  main.classList.add("blurEffect");
};

gnbLists.forEach((list) => {
  list.addEventListener("mouseenter", mouseenterEffect);
});

// 헤더 영역에서 마우스 이탈 이벤트 추가
header.addEventListener("mouseleave", () => {
  detailBoxes.forEach((detailBox) => {
    detailBox.classList.remove("active");
  });
  main.classList.remove("blurEffect");
});

//mobile trigger
const triggertBtn = document.querySelector(".trigger");
const gnbModal = document.querySelector(".gnb");

triggertBtn.addEventListener("click", () => {
  triggertBtn.classList.toggle("active");
  gnbModal.classList.toggle("on");
  main.classList.toggle("disappear");
});
