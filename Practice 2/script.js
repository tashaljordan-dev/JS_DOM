console.log("JS connected!");

// DOM Elements
const questionEl = document.getElementById("question");
const answerBtns = document.querySelectorAll(".answer-btn");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const resetBtn = document.getElementById("resetBtn");

//Quiz Data

const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      "Hyper Text Markup Language",
      "High Tech Machine Learning",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language"
    ],
    correctIndex: 0 // correct answer
  },
  {
    question: "Which language styles web pages?",
    answers: ["HTML", "JavaScript", "CSS", "Python"], //array
    correctIndex: 2 //correct answer 
  },
  {
    question: "Which language is used for web development to create interactive effects within web browsers?",
    answers: ["HTML", "JavaScript", "CSS", "Python"], //array
    correctIndex: 1 //correct answer
  }
];

// State the variables 
let currentQuestionIndex = 0;
let score = 0; // <-- Track correct answers

// Show the current question

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

// Handle answer clicks
answerBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const correctIndex = questions[currentQuestionIndex].correctIndex;

    if (index === correctIndex) {
      feedbackEl.textContent = "✅ Correct! \u{1F913}";
      score++; // <-- increment score
    } else {
      feedbackEl.textContent = "❌ Incorrect. Try the next one!";
    }
// Disable answer button after a selection
    answerBtns.forEach(button => button.disabled = true);
  });
});

// move to the next question in the quiz or finish the quiz 
    // move to the next question
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

// Return feedback based on score 

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

// reset quiz to the beginning // could also have written this as a function
document.getElementById("resetBtn").addEventListener("click", () => {
  currentQuestionIndex = 0;
  score = 0;

  answerBtns.forEach(btn => 
    btn.style.display = "inline-block");

  nextBtn.style.display = "inline-block";
  document.getElementById("resetBtn").style.display = "none";


// Start the Quiz
  showQuestion();
});
