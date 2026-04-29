// EVENT LISTENERS
// Runs functions when buttons are clicked
document.getElementById("submitBtn").addEventListener("click", checkAnswer);
document.getElementById("retryBtn").addEventListener("click", resetQuiz);

// MAIN QUIZ FUNCTION
// Checks answers, calculates score, and displays feedback
function checkAnswer() {

  // Initialize score counter
  let score = 0;

  // Store all input elements for easy access
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

  // Correct answers used for feedback (only shown if incorrect)
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

  // CLEAN UP PREVIOUS ATTEMPT

  // Removed previously displayed correct answers (if user retakes quiz)
  document.querySelectorAll(".correct-answer").forEach(el => el.remove());

  // Reset input borders
  Object.values(answers).forEach(el => el.style.border = "");

  // HELPER FUNCTION
  // Displays correct answer under a question if it was wrong
  function showCorrect(inputEl, text) {
    const msg = document.createElement("div");
    msg.className = "correct-answer";
    msg.style.color = "red";
    msg.style.fontSize = "0.9em";
    msg.textContent = "Correct answer: " + text;

    // Insert message directly under the input field
    inputEl.parentNode.insertBefore(msg, inputEl.nextSibling);
  }

  // ANSWER CHECKING SECTION
  // Each question is validated and incorrect ones are highlighted

  // Question 1
  if (answers.q1.value.toLowerCase().includes("adapt")) {
    score++;
  } else {
    answers.q1.style.border = "2px solid red";
    showCorrect(answers.q1, correct.q1);
  }

  // Question 2
  if (answers.q2.value.toLowerCase().includes("screen")) {
    score++;
  } else {
    answers.q2.style.border = "2px solid red";
    showCorrect(answers.q2, correct.q2);
  }

  // Question 3
  if (answers.q3.value === "mobile") {
    score++;
  } else {
    answers.q3.style.border = "2px solid red";
    showCorrect(answers.q3, correct.q3);
  }

  // Question 4
  if (answers.q4.value.includes("%")) {
    score++;
  } else {
    answers.q4.style.border = "2px solid red";
    showCorrect(answers.q4, correct.q4);
  }

  // Question 5
  if (answers.q5.value.toLowerCase().includes("media")) {
    score++;
  } else {
    answers.q5.style.border = "2px solid red";
    showCorrect(answers.q5, correct.q5);
  }

  // Question 6
  if (answers.q6.value.toLowerCase().includes("user")) {
    score++;
  } else {
    answers.q6.style.border = "2px solid red";
    showCorrect(answers.q6, correct.q6);
  }

  // Question 7
  if (
    answers.q7.value.toLowerCase().includes("scale") ||
    answers.q7.value.toLowerCase().includes("fit")
  ) {
    score++;
  } else {
    answers.q7.style.border = "2px solid red";
    showCorrect(answers.q7, correct.q7);
  }

  // Question 8
  if (answers.q8.value === "phone") {
    score++;
  } else {
    answers.q8.style.border = "2px solid red";
    showCorrect(answers.q8, correct.q8);
  }

  // Question 9
  if (
    answers.q9.value.toLowerCase().includes("flex") ||
    answers.q9.value.toLowerCase().includes("grid")
  ) {
    score++;
  } else {
    answers.q9.style.border = "2px solid red";
    showCorrect(answers.q9, correct.q9);
  }

  // Question 10
  if (answers.q10.value.toLowerCase().includes("adapt")) {
    score++;
  } else {
    answers.q10.style.border = "2px solid red";
    showCorrect(answers.q10, correct.q10);
  }


  // CALCULATE RESULTS

  // Calculate percentage score
  let percentage = (score / 10) * 100;

  // Assign letter grade based on percentage
  let letterGrade = "";
  if (percentage >= 90) letterGrade = "A";
  else if (percentage >= 80) letterGrade = "B";
  else if (percentage >= 70) letterGrade = "C";
  else if (percentage >= 60) letterGrade = "D";
  else letterGrade = "F";

  // Build result message
  let message = `You got ${score} out of 10 correct. (${percentage.toFixed(0)}%) - Grade: ${letterGrade}`;

  // Add feedback message based on performance
  if (score === 10) message += " 🎉 Excellent!";
  else if (score >= 7) message += " 👍 Good job!";
  else if (score >= 5) message += " ⚠️ Keep practicing.";
  else message += " ❌ Review the material and try again.";

  // Display result to user
  document.getElementById("result").textContent = message;


  // FINAL UI UPDATES
  // Disable submit button after submission
  document.getElementById("submitBtn").disabled = true;

  // Show "Retake Quiz" button
  document.getElementById("retryBtn").style.display = "inline-block";
}

// RESET FUNCTION
// Clears inputs and resets UI for a new attempt

function resetQuiz() {

  // Reset form inputs
  document.getElementById("quizForm").reset();

  // Clear result message
  document.getElementById("result").textContent = "";

  // Remove displayed correct answers
  document.querySelectorAll(".correct-answer").forEach(el => el.remove());

  // Reset input borders
  const inputs = document.querySelectorAll("input, select");
  inputs.forEach(el => el.style.border = "");

  // Re-enable submit button
  document.getElementById("submitBtn").disabled = false;

  // Hide retake button again
  document.getElementById("retryBtn").style.display = "none";
}
