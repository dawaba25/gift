function checkAnswer(choice) {
  let result = document.getElementById("result");
  if (choice === 0) {
    result.innerHTML = "<p>Yes! 💕 That was the day everything started 🥰</p><img src='memory1.jpg' alt='Memory'>";
  } else {
    result.innerHTML = "<p>Hehe, not quite 😘 try again!</p>";
  }
}
