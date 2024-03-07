window.addEventListener("load", () => {
  const grid = new Isotope("section", {
    // Isotope 함수의 첫번 째 매개변수: 레이아웃을 재배치할 요소를 감싸고 있는 부모요소명
    itemSelector: "article",
    // 실제로 레이아웃을 재배치할 요소명 = article
    columnWidth: "article",
    // 실제로 레이아웃을 재배치할때, 너비값을 자동으로 정렬시키는 요소 = article
    transitionDuration: "0.5s",
    // 실제로 레이아웃을 재배치할 때, 걸리는 속도(반응형 만들때)
  });

  const btns = document.querySelectorAll("main ul li");
  for (let el of btns) {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      // 이벤트가 발생된 요소와 이벤트와 연관성이 있는 같은 부모자식 요소 가운데서 찾고자 할때 currentTarget
      // 클릭하면 클릭한 요소의 이벤트 버블링 으로 a태그 찾아오고 그 a태그의 href 속성을 찾아와줘
      const sort = e.currentTarget.querySelector("a").getAttribute("href");
      console.log(sort);
      grid.arrange({
        filter: sort,
      });
      for(let el of btns) {
        el.classList.remove("on");
      }
      e.currentTarget.classList.add("on");
    });
  }
});
