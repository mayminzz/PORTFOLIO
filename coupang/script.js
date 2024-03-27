const allAgreementBtn = document.querySelector(".all_agreement input");
const allAgreement = document.querySelector(".all_agreement label i");
const checkboxes = document.querySelectorAll("input[type='checkbox']");
const labelBtns = document.querySelectorAll(".wrapper > label i");
const inputs = document.querySelectorAll(".wrapper > input");

allAgreementBtn.addEventListener("click", () => {
  const checked = allAgreementBtn.checked;
  if (checked) {
    labelBtns.forEach((labelBtn) => {
      labelBtn.classList.add("active");
    });
  } else {
    labelBtns.forEach((labelBtn) => {
      labelBtn.classList.remove("active");
    });
  }
  inputs.forEach((input) => {
    input.addEventListener("click", () => {
      const allChecked = Array.from(inputs).every((input) => input.checked);
      if (allChecked) {
        allAgreement.classList.add("active");
      } else {
        allAgreement.classList.remove("active");
      }
    });
  });
});

