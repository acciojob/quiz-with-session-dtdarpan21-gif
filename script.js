const questionsElement = document.getElementById("questions");
const scoreElement = document.getElementById("score");
const submitButton = document.getElementById("submit");

// Restore progress from session storage
let userAnswers = JSON.parse(sessionStorage.getItem("progress")) || [];

// Save selected answers
questionsElement.addEventListener("change", function (event) {
  if (event.target.type === "radio") {
    const index = Number(event.target.name.split("-")[1]);

    userAnswers[index] = event.target.value;
    sessionStorage.setItem("progress", JSON.stringify(userAnswers));
  }
});

// Submit quiz and calculate score
submitButton.addEventListener("click", function () {
  let score = 0;

  for (let i = 0; i < questions.length; i++) {
    if (userAnswers[i] === questions[i].answer) {
      score++;
    }
  }

  scoreElement.textContent = `Your score is ${score} out of ${questions.length}.`;
  localStorage.setItem("score", score);
});

// Display previously saved score
const savedScore = localStorage.getItem("score");

if (savedScore !== null) {
  scoreElement.textContent = `Your score is ${savedScore} out of ${questions.length}.`;
}