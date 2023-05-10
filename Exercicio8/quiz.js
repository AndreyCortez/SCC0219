const quizContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const submitButton = document.getElementById('submit-button');
const progressBar = document.getElementById('progress-bar');

let currentQuestion = 0;
let score = 0;
let userAnswers = [];

const questions = [
  {
    question: "Qual a capital do Piaui?",
    answers: ["Maranhão", "Timon", "Tokyo", "Teresina"],
    correctAnswer: "Teresina"
  },
  {
    question: "Qual o professor da matéria SCC0219?",
    answers: ["Simões", "Dilvan", "Navarro", "Maranhão"],
    correctAnswer: "Dilvan"
  },
  {
    question: "Qual o planeta mais proximo do sol?",
    answers: ["Venus", "Maranhão", "Mercurio", "Jupiter"],
    correctAnswer: "Mercurio"
  }
];

function showQuestion() {
  quizContainer.textContent = questions[currentQuestion].question;
  answerButtons.innerHTML = "";
  for (let i = 0; i < questions[currentQuestion].answers.length; i++) {
    const answerButton = document.createElement("button");
    answerButton.textContent = questions[currentQuestion].answers[i];
    answerButton.addEventListener("click", selectAnswer);
    answerButtons.appendChild(answerButton);
  }
}

function selectAnswer(event) {
  userAnswers[currentQuestion] = event.target.textContent;
  answerButtons.querySelectorAll('button').forEach(button => {
    button.classList.remove('selected');
  });
  event.target.classList.add('selected');
}

function showProgress() {
  progressBar.textContent = `Question ${currentQuestion + 1}/${questions.length}`;
}

function calculateScore() {
  for (let i = 0; i < questions.length; i++) {
    if (userAnswers[i] === questions[i].correctAnswer) {
      score++;
    }
  }
}

function showResult() {
  quizContainer.innerHTML = `You got ${score} out of ${questions.length} questions correct!`;
  answerButtons.innerHTML = "";
  progressBar.textContent = "";
  }
  
  function handleNext() {
  currentQuestion++;
  if (currentQuestion >= questions.length) {
  currentQuestion = questions.length - 1;
  }
  showQuestion();
  showProgress();
  }
  
  function handleSubmit() {
  calculateScore();
  showResult();
  const quizCompletedEvent = new CustomEvent("QuizCompleted", { detail: { score: score } });
  document.dispatchEvent(quizCompletedEvent);
  }
  
  nextButton.addEventListener("click", handleNext);
  submitButton.addEventListener("click", handleSubmit);
  
  document.addEventListener("DOMContentLoaded", showQuestion);
  document.addEventListener("AnswerGiven", handleNext);
  document.addEventListener("QuizCompleted", event => {
  console.log("Quiz completed with score: ${event.detail.score}");
  });
  
  showQuestion();
  showProgress();
  
  