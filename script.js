// script.js
const questions = [
    {
      question: "What is the capital of France?",
      answers: ["Berlin", "Madrid", "Paris", "Lisbon"],
      correct: "Paris",
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      answers: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "Mark Twain"],
      correct: "Harper Lee",
    },
    {
      question: "What is the largest planet in our Solar System?",
      answers: ["Earth", "Mars", "Jupiter", "Saturn"],
      correct: "Jupiter",
    },
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionContainer = document.getElementById("question-container");
  const questionElement = document.getElementById("question");
  const answersContainer = document.getElementById("answers");
  const nextButton = document.getElementById("next-btn");
  const feedbackElement = document.getElementById("feedback");
  const scoreContainer = document.getElementById("score-container");
  const scoreElement = document.getElementById("score");
  
  function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answersContainer.innerHTML = "";
    currentQuestion.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.textContent = answer;
      button.addEventListener("click", () => checkAnswer(answer));
      answersContainer.appendChild(button);
    });
  }
  
  function checkAnswer(answer) {
    const currentQuestion = questions[currentQuestionIndex];
    if (answer === currentQuestion.correct) {
      feedbackElement.textContent = "Correct! 🎉";
      score++;
    } else {
      feedbackElement.textContent = `Wrong! 😢 The correct answer was: ${currentQuestion.correct}`;
    }
    feedbackElement.classList.remove("hidden");
    nextButton.classList.remove("hidden");
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    feedbackElement.classList.add("hidden");
    nextButton.classList.add("hidden");
  
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  }
  
  function showScore() {
    questionContainer.classList.add("hidden");
    scoreContainer.classList.remove("hidden");
    scoreElement.textContent = `${score} / ${questions.length}`;
  }
  
  nextButton.addEventListener("click", nextQuestion);
  
  // Initialize quiz
  showQuestion();