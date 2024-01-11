const $startGameButton = document.querySelector(".start-quiz");
const $questionsContainer = document.querySelector(".questions-container");
const $imageContainer = document.querySelector(".image-container");
const $answersContainer = document.querySelector(".answers-container");
const $questionText = document.querySelector(".question");
const $imageJogador = document.querySelector(".image-jogador");
const $nextQuestion = document.querySelector(".next-question");

$startGameButton.addEventListener("click", startGame);
$nextQuestion.addEventListener("click", displayNextQuestion);

let currentQuestionIndex = 0;
let totalCorrect = 0;

function startGame() {
  $startGameButton.classList.add("hide");
  $questionsContainer.classList.remove("hide");
  $imageContainer.classList.remove("hide");
  displayNextQuestion();
}

function displayNextQuestion() {
  resetState();

  if(questions.length === currentQuestionIndex){
    $imageJogador.classList.add("hide")
    return finishGame()
  }

  $questionText.textContent = questions[currentQuestionIndex].question;
  $imageJogador.src = questions[currentQuestionIndex].image;

  questions[currentQuestionIndex].answers.forEach((answer) => {
    const newAnswer = document.createElement("button");
    newAnswer.classList.add("button", "answer");
    newAnswer.textContent = answer.text;
    if (answer.correct) {
      newAnswer.dataset.correct = answer.correct;
    }
    $answersContainer.appendChild(newAnswer);

    newAnswer.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  while ($answersContainer.firstChild) {
    $answersContainer.removeChild($answersContainer.firstChild);
  }

  document.body.classList.remove("incorrect", "correct");
  $nextQuestion.classList.add("hide");
  
}

function selectAnswer(event) {
  const answerClicked = event.target;

  if (answerClicked.dataset.correct) {
    document.body.classList.add("correct");
    totalCorrect++
  } else {
    document.body.classList.add("incorrect");
  }

  document.querySelectorAll(".answer").forEach((button) => {
    if (button.dataset.correct) {
      button.classList.add("correct");
    } else {
      button.classList.add("incorrect");
    }

    button.disabled = true;
  });

  $nextQuestion.classList.remove("hide");

  currentQuestionIndex++;
}

function finishGame(){
    const totalQuestion = questions.length
    const performance = Math.floor(totalCorrect * 100 / totalQuestion)

    let message = ""

    switch(true){
        case(performance >= 90):
            message = "Excelente :)"
            break
        case(performance >= 70):
            message = "Muito bem :)"
            break
        case(performance >= 50):
            message = "Bom"
            break
        default:
            message = "Você não foi bem :("
    }

    $questionsContainer.innerHTML = 
    `   
        <p class="final-message">
            Você acertou ${totalCorrect} de ${totalQuestion} questões!
            <span>Resultado: ${message}</span>
        </p>
        <button onclick=window.location.reload() class="button"> Refazer teste</button>
    
    `

}
















const questions = [
  {
    image: "./img/player8.jpg",
    question: "Quem é este Jogador?",
    answers: [
      { text: "Edinson Cavani", correct: false },
      { text: "Jonathan Calleri", correct: true },
      { text: "Garmán Cano", correct: false },
      { text: "Lionel Messi", correct: false },
    ],
  },
  {
    image: "./img/player9.jpg",
    question: "Quem é este jogador?",
    answers: [
      { text: "Rodrigo", correct: false },
      { text: "Luciano", correct: false },
      { text: "Gabriel Moscardo", correct: false },
      { text: "Gabriel Barbosa", correct: true },
    ],
  },
  {
    image: "./img/player10.jpg",
    question: "Quem é este jogador?",
    answers: [
      { text: "Edinson Cavani", correct: true },
      { text: "Pablo", correct: false },
      { text: "Ferreira", correct: false },
      { text: "Cristiano Ronaldo", correct: false },
    ],
  },
  {
    image: "./img/player11.jpg",
    question: "Quem é este jogador?",
    answers: [
      { text: "Romelu Lukaku", correct: false },
      { text: "Kylian Mbappé", correct: false },
      { text: "Gabriel Jesus", correct: false },
      { text: "Jérémy Doku", correct: true },
    ],
  },
  {
    image: "./img/player12.jpg",
    question: "Quem é este jogador?",
    answers: [
      { text: "Vinícius Júnior", correct: true },
      { text: "Luciano", correct: false },
      { text: "Gabriel Moscardo", correct: false },
      { text: "Cristiano Ronaldo", correct: false },
    ],
  },
  {
    image: "./img/player13.jpg",
    question: "Quem é este jogador?",
    answers: [
      { text: "Gabriel Jesus", correct: true },
      { text: "Gabriel Menino", correct: false },
      { text: "Gabriel Moscardo", correct: false },
      { text: "Gabriel Barbosa", correct: false },
    ],
  },
  {
    image: "./img/player14.jpg",
    question: "Quem é este jogador?",
    answers: [
      { text: "De la Cruz", correct: false },
      { text: "Marcus Rashford", correct: false },
      { text: "Kylian Mbappe", correct: true },
      { text: "Luciano", correct: false },
    ],
  },
  {
    image: "./img/player15.jpg",
    question: "Quem é este jogador?",
    answers: [
      { text: "Rodrigo", correct: false },
      { text: "Ibrahimović", correct: false },
      { text: "Romelu Lukaku", correct: true },
      { text: "Gabriel Barbosa", correct: false },
    ],
  },
  {
    image: "./img/player1.jpg",
    question: "Quem é este jogador?",
    answers: [
      { text: "Garmán Cano", correct: true },
      { text: "Ibrahimović", correct: false },
      { text: "Edinson Cavani", correct: false },
      { text: "Gabriel Menino", correct: false },
    ],
  },
  {
    image: "./img/player2.jpg",
    question: "Quem é este jogador?",
    answers: [
      { text: "Jonathan Calleri", correct: false },
      { text: "James Rodríguez", correct: false },
      { text: "Lionel Messi", correct: true },
      { text: "luka Modrić", correct: false },
    ],
  },
  {
    image: "./img/player3.jpg",
    question: "Quem é este jogador?",
    answers: [
      { text: "Vinícius Júnior", correct: false },
      { text: "Luciano", correct: false },
      { text: "Marcus Rashford", correct: false },
      { text: "Rodrigo", correct: true },
    ],
  },
  {
    image: "./img/player4.jpg",
    question: "Quem é este jogador?",
    answers: [
      { text: "Neymar Jr", correct: true },
      { text: "Marcos Leonardo", correct: false },
      { text: "Paulinho", correct: false },
      { text: "Gabriel Jesus", correct: false },
    ],
  },
  {
    image: "./img/player5.jpg",
    question: "Quem é este jogador?",
    answers: [
      { text: "Carlos Sanches", correct: false },
      { text: "Cristiano Ronaldo", correct: true },
      { text: "Hulk", correct: false },
      { text: "Karim Benzema", correct: false },
    ],
  },
  {
    image: "./img/player6.jpg",
    question: "Quem é este jogador?",
    answers: [
      { text: "Edinson Cavani", correct: false },
      { text: "De la Cruz", correct: true },
      { text: "Luis Suárez", correct: false },
      { text: "Augustin Canobbio", correct: false },
    ],
  },
  {
    image: "./img/player7.jpg",
    question: "Quem é este jogador?",
    answers: [
      { text: "Carlos Bacca", correct: false },
      { text: "Borré", correct: false },
      { text: "Daniel Ruíz", correct: false },
      { text: "James Rodríguez", correct: true },
    ],
  },
];
