//로그인
const loginBtn = document.querySelector("#loginBtn");
const inputId = document.querySelector("#id");
const inputPw = document.querySelector("#password");

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  try {
    if (inputId.value == "" || inputPw.value == "") {
      throw new Error("아이디와 패스워드를 정확하게 입력하세요!");
    } else {
      alert(`${inputId.value}님 환영합니다🤗`);
    }
  } catch (error) {
    alert(error.message);
  }
});


//비회원 내역 조회하기
const orderCheck = document.querySelector("#orderCheck");
const name = document.querySelector("#name");
const orderNumber = document.querySelector("#orderNumber");

orderCheck.addEventListener("click", (e) => {
  e.preventDefault();
  try {
    if (name.value == "" || orderNumber.value == "") {
      throw new Error("주문자명과 주문번호를 정확하게 입력하세요!");
    } else {
      alert(`${name.value}님 주문내역으로 이동합니다.`);
    }
  } catch (error) {
    alert(error.message);
  }
});

//자동 로그인
const autoCheckbox = document.querySelector(".auto > label");
const mark = document.querySelector(".auto > span");

autoCheckbox.addEventListener("click", () => {
  autoCheckbox.classList.toggle("checked");
  mark.classList.toggle("visible");
});

// 회원 or 비회원
const memberOrNot = document.querySelectorAll(".switch a");

memberOrNot.forEach((it, i) => {
  it.addEventListener("click", (e) => {
    e.preventDefault();
    it.classList.add("active");
    memberOrNot.forEach((otherIt) => {
      if (it !== otherIt) {
        otherIt.classList.remove("active");
      }
    });
    const childValue = e.currentTarget.dataset.value;
    const member = document.querySelector(".member_login_section");
    const nomember = document.querySelector(".nomember_search_section");

    if (childValue === "member") {
      member.style.display = "block";
      nomember.style.display = "none";
    } else if (childValue === "nomember") {
      member.style.display = "none";
      nomember.style.display = "block";
    }
  });
});

// 회원가입
const signUpBtn = document.querySelector(".sign_up > p > span");
const signUpModal = document.querySelector(".sign_up_modal");
const delBtn = document.querySelector(".delBtn");
const loginWrapper = document.querySelector("#login_wrapper");

signUpBtn.addEventListener("click", () => {
  signUpModal.classList.add("showModal");
  loginWrapper.classList.add("darkBg");
});
delBtn.addEventListener("click", () => {
  signUpModal.classList.remove("showModal");
  loginWrapper.classList.remove("darkBg");
});
