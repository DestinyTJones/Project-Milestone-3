function checkAnswer() {
  let answer = document.getElementById("answer").value.toLowerCase();
  let result = document.getElementById("result");

  if (answer.includes("adapt")) {
    result.textContent = "Correct!";
  } else {
    result.textContent = "Try again.";
  }
}
