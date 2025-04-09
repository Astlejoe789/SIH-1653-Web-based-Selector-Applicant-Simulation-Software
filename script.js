// Handle loading of question and evaluation
window.onload = function() {
    const questionEl = document.getElementById("received-question");
    const finalResultEl = document.getElementById("final-result");

    if (questionEl) {
        const question = localStorage.getItem("question") || "Waiting for question...";
        questionEl.innerText = question;
    }

    if (finalResultEl) {
        const answer = localStorage.getItem("answer") || "";

        if (answer.length === 0) {
            finalResultEl.innerText = "No answer submitted.";
            return;
        }

        let score = 0;
        const answerLength = answer.split(' ').length;

        if (answerLength >= 50) {
            score += 50;
        } else if (answerLength >= 30) {
            score += 30;
        } else if (answerLength >= 10) {
            score += 10;
        }

        const keywords = ["management", "technology", "leadership", "problem-solving", "teamwork"];
        keywords.forEach(word => {
            if (answer.toLowerCase().includes(word)) {
                score += 10;
            }
        });

        if (score > 100) score = 100;
        finalResultEl.innerText = `Your Answer Score: ${score}%`;
    }
};

// Save answer
document.getElementById("answerForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    const answer = document.getElementById("answer").value;
    localStorage.setItem("answer", answer);
    alert("Answer submitted successfully!");
    window.location.href = "result.html";
});
