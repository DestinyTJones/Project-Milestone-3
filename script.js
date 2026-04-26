function checkAnswer() {
  let score = 0;

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

  if (q1.includes("adapt")) score++;
  if (q2.includes("screen")) score++;
  if (q3 === "mobile") score++;
  if (q4.includes("%")) score++;
  if (q5.includes("media")) score++;
  if (q6.includes("user")) score++;
  if (q7.includes("scale") || q7.includes("fit")) score++;
  if (q8 === "phone") score++;
  if (q9.includes("flex") || q9.includes("grid")) score++;
  if (q10.includes("adapt")) score++;

  document.getElementById("result").textContent =
    "You got " + score + " out of 10 correct.";
}
