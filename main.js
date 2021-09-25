let form = document.querySelector(".survey-form");
let result = document.querySelector(".result");
let correctAnswers = ["Y", "Y", "Y", "Y"];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  let userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];
  userAnswers.forEach((x, index) => {
    if (x === correctAnswers[index]) {
      score += 25;
    }
  });

  result.classList.remove("d-none");
  let counter = 0;
  let count = setInterval(() => {
    result.querySelector("#score").textContent = `${counter}%`;
    if (counter == score) {
      clearInterval(count);
    } else {
      counter++;
    }
  }, 15);
});
