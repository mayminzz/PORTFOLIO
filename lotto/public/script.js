const button = document.querySelector("button");
const result = document.querySelector("#result > p");
const bonusResult = document.querySelector("#bonus > span");

const luckyNumber = {
  digitCount: 6,
  maxNumber: 45,
};
const bonusNumber = {
  digitCount: 1,
  maxNumber: 45,
};
const bonus = () => {
  bonusResult.classList.add("visible");
  const { digitCount, maxNumber } = bonusNumber;
  let bonusNum = new Set();
  for (let i = 0; i < digitCount; i++) {
    bonusNum.add(Math.floor(Math.random() * maxNumber) + 1);
  }
  bonusResult.innerText = `${[...bonusNum]}`;

  color();
};

const lotto = () => {
  const { digitCount, maxNumber } = luckyNumber;
  let myNumber = new Set();
  for (let i = 0; i < digitCount; i++) {
    myNumber.add(Math.floor(Math.random() * maxNumber) + 1);
  }

  // result.innerText = `${[...myNumber]}`;
  const arr = [...myNumber];
  console.log(arr);
  let output = "";
  arr.forEach((i) => {
    output += `
    <span>${i}</span>
    `;
  });
  result.innerHTML = output;

  if (arr.length < 6) {
    result.innerText = "중복숫자가 발생하였습니다. 재추첨합니다!";
  }

  bonus();
};

button.addEventListener("click", lotto);

//공 색상
const colorArr = ["orange", "blue", "red", "gray", "green"];
const color = () => {
  const resultNum = document.querySelectorAll("#result > p > span");

  resultNum.forEach((num) => {
    const number = parseInt(num.innerText);
    if (number <= 10) {
      num.style.backgroundColor = "orange";
    } else if (number <= 20) {
      num.style.backgroundColor = "blue";
    } else if (number <= 30) {
      num.style.backgroundColor = "red";
    } else if (number <= 40) {
      num.style.backgroundColor = "gray";
    } else if (number <= 45) {
      num.style.backgroundColor = "green";
    }
  });
};
