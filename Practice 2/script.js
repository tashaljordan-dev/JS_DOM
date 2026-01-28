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
let score = 0; // <-- Track correct answers

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];

  questionEl.textContent = currentQuestion.question;
  feedbackEl.textContent = "";

  answerBtns.forEach((btn, index) => {
    btn.textContent = currentQuestion.answers[index];
    btn.disabled = false;
    btn.style.display = "inline-block"; // make sure buttons are visible
  });

  nextBtn.style.display = "inline-block"; // make sure Next button is visible
}

showQuestion();

answerBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const correctIndex = questions[currentQuestionIndex].correctIndex;

    if (index === correctIndex) {
      feedbackEl.textContent = "✅ Correct! \u{1F913}";
      score++; // <-- increment score
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
    // Quiz is finished — hide buttons and show final feedback
    questionEl.textContent = "🎉 Quiz Complete!";
    feedbackEl.textContent = giveFeedback(score); // <-- now score is accurate
    answerBtns.forEach(btn => btn.style.display = "none");
    nextBtn.style.display = "none";
    document.getElementById("resetBtn").style.display = "inline-block"; // show reset
  }
});

function giveFeedback(score) {
  if (score === 3) {
    return "🎉 Great job! You got all 3 correct!";
  } else if (score === 2) {
    return "👍 Nice work! You got 2 out of 3!";
  } else if (score === 1) {
    return "Keep studying, you got 1 correct!";
  } else {
    return "😅 Study more and try again, you got 0 correct!";
  }
}

document.getElementById("resetBtn").addEventListener("click", () => {
  // Reset variables
  currentQuestionIndex = 0;
  score = 0;

  // Show buttons again
  answerBtns.forEach(btn => btn.style.display = "inline-block");
  nextBtn.style.display = "inline-block";
  document.getElementById("resetBtn").style.display = "none";

  // Show the first question
  showQuestion();
});
