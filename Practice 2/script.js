console.log("JS connected!");

const questionEl = document.getElementById("question");
const answerBtns = document.querySelectorAll(".answer-btn");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");


const questions = [
{
question: "What does HTML stand for?",
answers: [
"Hyper Text Markup Language",
"High Tech Machine Learning",
"Home Tool Markup Language",
"Hyperlinks and Text Markup Language"
],
correctIndex: 0
},
{
question: "Which language styles web pages?",
answers: ["HTML", "JavaScript", "CSS", "Python"],
correctIndex: 2
},
{
question: "Which language is used for web development to create interactive effects within web browsers?",
answers: ["HTML", "JavaScript", "CSS", "Python"],
correctIndex: 1
}
];


let currentQuestionIndex = 0;

function showQuestion() {
const currentQuestion = questions[currentQuestionIndex];


questionEl.textContent = currentQuestion.question;
feedbackEl.textContent = "";


answerBtns.forEach((btn, index) => {
btn.textContent = currentQuestion.answers[index];
btn.disabled = false;
});
}

showQuestion();

answerBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const correctIndex = questions[currentQuestionIndex].correctIndex;

    if (index === correctIndex) {
      feedbackEl.textContent = "✅ Correct!";
    } else {
      feedbackEl.textContent = "❌ Incorrect. Try the next one!";
    }

    // Disable all buttons after answer
    answerBtns.forEach(button => button.disabled = true);
  });
});

nextBtn.addEventListener("click", () => {
currentQuestionIndex++;


if (currentQuestionIndex < questions.length) {
showQuestion();
} else {
questionEl.textContent = "🎉 Quiz Complete!";
feedbackEl.textContent = "";
answerBtns.forEach(btn => btn.style.display = "none");
nextBtn.style.display = "none";
}
});