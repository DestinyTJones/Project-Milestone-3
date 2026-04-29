// Event listeners
document.getElementById("submitBtn").addEventListener("click", checkAnswer);
document.getElementById("retryBtn").addEventListener("click", resetQuiz);

function checkAnswer() {
  let score = 0;

  const answers = {
    q1: document.getElementById("q1"),
    q2: document.getElementById("q2"),
    q3: document.getElementById("q3"),
    q4: document.getElementById("q4"),
    q5: document.getElementById("q5"),
    q6: document.getElementById("q6"),
    q7: document.getElementById("q7"),
    q8: document.getElementById("q8"),
    q9: document.getElementById("q9"),
    q10: document.getElementById("q10"),
  };

  // Correct answers reference
  const correct = {
    q1: "Adapts to different screen sizes",
    q2: "Used for styling based on screen size",
    q3: "Mobile-first",
    q4: "Percentage (%)",
    q5: "Media queries",
    q6: "Improves user experience",
    q7: "Scales images to fit screen",
    q8: "Phone",
    q9: "Flexbox or Grid",
    q10: "Adapts layout to different screens"
  };

  // Reset styles
  Object.values(answers).forEach(el => el.style.border = "");

  // Check answers + highlight wrong
  if (answers.q1.value.toLowerCase().includes("adapt")) score++; else answers.q1.style.border = "2px solid red";
  if (answers.q2.value.toLowerCase().includes("screen")) score++; else answers.q2.style.border = "2px solid red";
  if (answers.q3.value === "mobile") score++; else answers.q3.style.border = "2px solid red";
  if (answers.q4.value.includes("%")) score++; else answers.q4.style.border = "2px solid red";
  if (answers.q5.value.toLowerCase().includes("media")) score++; else answers.q5.style.border = "2px solid red";
  if (answers.q6.value.toLowerCase().includes("user")) score++; else answers.q6.style.border = "2px solid red";
  if (
    answers.q7.value.toLowerCase().includes("scale") ||
    answers.q7.value.toLowerCase().includes("fit")
  ) score++; else answers.q7.style.border = "2px solid red";
  if (answers.q8.value === "phone") score++; else answers.q8.style.border = "2px solid red";
  if (
    answers.q9.value.toLowerCase().includes("flex") ||
    answers.q9.value.toLowerCase().includes("grid")
  ) score++; else answers.q9.style.border = "2px solid red";
  if (answers.q10.value.toLowerCase().includes("adapt")) score++; else answers.q10.style.border = "2px solid red";

  // Percentage
  let percentage = (score / 10) * 100;

  // Letter grade
  let letterGrade = "";
  if (percentage >= 90) letterGrade = "A";
  else if (percentage >= 80) letterGrade = "B";
  else if (percentage >= 70) letterGrade = "C";
  else if (percentage >= 60) letterGrade = "D";
  else letterGrade = "F";

  // Result message
  let message = `You got ${score} out of 10 correct. (${percentage.toFixed(0)}%) - Grade: ${letterGrade}`;

  if (score === 10) message += " 🎉 Excellent!";
  else if (score >= 7) message += " 👍 Good job!";
  else if (score >= 5) message += " ⚠️ Keep practicing.";
  else message += " ❌ Review the material and try again.";

  document.getElementById("result").textContent = message;

  // Show ONLY missed answers
  let answerHTML = "<h3>Review (Missed Questions):</h3><ul>";
  let missed = false;

  function checkMissed(questionKey, condition) {
    if (!condition) {
      missed = true;
      answerHTML += `<li><strong>${questionKey.toUpperCase()}:</strong> ${correct[questionKey]}</li>`;
    }
  }

  checkMissed("q1", answers.q1.value.toLowerCase().includes("adapt"));
  checkMissed("q2", answers.q2.value.toLowerCase().includes("screen"));
  checkMissed("q3", answers.q3.value === "mobile");
  checkMissed("q4", answers.q4.value.includes("%"));
  checkMissed("q5", answers.q5.value.toLowerCase().includes("media"));
  checkMissed("q6", answers.q6.value.toLowerCase().includes("user"));
  checkMissed(
    "q7",
    answers.q7.value.toLowerCase().includes("scale") ||
    answers.q7.value.toLowerCase().includes("fit")
  );
  checkMissed("q8", answers.q8.value === "phone");
  checkMissed(
    "q9",
    answers.q9.value.toLowerCase().includes("flex") ||
    answers.q9.value.toLowerCase().includes("grid")
  );
  checkMissed("q10", answers.q10.value.toLowerCase().includes("adapt"));

  answerHTML += "</ul>";

  if (!missed) {
    answerHTML = "<h3>Perfect score! No corrections needed 🎉</h3>";
  }

  document.getElementById("answers").innerHTML = answerHTML;

  // Disable submit + show retry
  document.getElementById("submitBtn").disabled = true;
  document.getElementById("retryBtn").style.display = "inline-block";
}

// Reset quiz
function resetQuiz() {
  document.getElementById("quizForm").reset();
  document.getElementById("result").textContent = "";
  document.getElementById("answers").innerHTML = "";

  const inputs = document.querySelectorAll("input, select");
  inputs.forEach(el => el.style.border = "");

  document.getElementById("submitBtn").disabled = false;
  document.getElementById("retryBtn").style.display = "none";
}
