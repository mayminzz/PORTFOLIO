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

