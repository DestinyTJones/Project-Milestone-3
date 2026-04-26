// Function that runs when the user clicks the Submit button
function checkAnswer() {

  // Initialize score counter
  let score = 0;

  // Get user input values and convert text answers to lowercase for easier comparison
  let q1 = document.getElementById("q1").value.toLowerCase();
  let q2 = document.getElementById("q2").value.toLowerCase();
  let q3 = document.getElementById("q3").value;
  let q4 = document.getElementById("q4").value;
  let q5 = document.getElementById("q5").value.toLowerCase();
  let q6 = document.getElementById("q6").value.toLowerCase();
  let q7 = document.getElementById("q7").value.toLowerCase();
  let q8 = document.getElementById("q8").value;
  let q9 = document.getElementById("q9").value.toLowerCase();
  let q10 = document.getElementById("q10").value.toLowerCase();

  // Check answers and increment score if correct

  // Q1: Should mention adaptation to screen size
  if (q1.includes("adapt")) score++;

  // Q2: Should mention screen-based styling
  if (q2.includes("screen")) score++;

  // Q3: Correct answer is "mobile"
  if (q3 === "mobile") score++;

  // Q4: Should include percentage (%) for flexible layouts
  if (q4.includes("%")) score++;

  // Q5: Should mention media queries
  if (q5.includes("media")) score++;

  // Q6: Should reference user experience or usability
  if (q6.includes("user")) score++;

  // Q7: Should mention scaling or fitting images
  if (q7.includes("scale") || q7.includes("fit")) score++;

  // Q8: Correct answer is "phone"
  if (q8 === "phone") score++;

  // Q9: Accepts either flexbox or grid
  if (q9.includes("flex") || q9.includes("grid")) score++;

  // Q10: Should mention adapting to screens
  if (q10.includes("adapt")) score++;

  // Display the final score to the user
  document.getElementById("result").textContent =
    "You got " + score + " out of 10 correct.";
}
