document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorEl = document.getElementById("error");

  if (username === "hr" && password === "hr123") {
      window.location.href = "ask_question.html";
  } else if (username === "candidate" && password === "cand123") {
      window.location.href = "answer.html";
  } else {
      errorEl.textContent = "Invalid username or password!";
  }
});
