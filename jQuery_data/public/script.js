$(".btn li").click(function () {
  // this: 실제로 선택될 한 아이
  $(this).addClass("active");
  $(this).siblings().removeClass("active");
  // siblings()형제요소를 불러오는 함수
  // 속성값을 가지고올거야 tb2라고 속성값이 result로 들어가는 것
  // console.log(result);
  let result = $(this).attr("data-alt");
  $(".tabs div").removeClass("active");
  $("#" + result).addClass("active");
});
