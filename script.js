//query select button
var startButton = document.querySelector(".start-button");
var nextButton = document.querySelector(".next-button");
var submitButton = document.querySelector(".submit-button");
var timerElement = document.querySelector(".timer-count");
var container = document.querySelector(".container");
//var questions = document.querySelector(".questions");
//var for questions
//with corresponding series of options
var questions = [
  {
    question: "Question 1",
    answers: {A: "A",B: "B",C: "C",D: "D"},
    correct: "C"
  },
  {
    question: "Question 2",
    answers: {A: "A",B: "B",C: "C",D: "D"},
    correct: "C"
  },
  {
    question: "Question 3",
    answers: {A: "A",B: "B",C: "C",D: "D"},
    correct: "C"
  },
  {
    question: "Question 4",
    answers: {A: "A",B: "B",C: "C",D: "D"},
    correct: "C"
  }
];

var isRight = false;
var timer;
var timerCount;


//init function
function init() {
  container.hidden = true
  nextButton.hidden = true
  submitButton.hidden = true
}


// The startGame function is called when the start button is clicked
function startQuiz() {
  isWin = false;
  timerCount = 60;
  // Hides start button when quiz is in progress
  startButton.hidden = true;
  startTimer();
  //Shows question and Next button
  container.hidden = false
  nextButton.hidden = false
  renderQuestion();

}

//Timer
function startTimer() {
  // Sets timer
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;

    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
    }
  }, 1000);
}

//Presents the questions
for (var i = 0; i < questions.length; i++) {
}

function renderQuestion() {
  // Randomly picks question from questions array
  //chosenQuestion = questions[Math.floor(Math.random() * questions.length)];
  //Shows on screen

  var output = [];
  //Displays answers with radio buttons
  for (var i = 0; i < questions.length; i++) {
    answers = [];
    for (letter in questions[i].answers) {
      answers.push(
        '<label>'
        + '<input type="radio" name="question' + i + '"value="' + letter + '">'
        + letter + ': '
        + questions[i].answers[letter]
        + '</label>'
      );
    }
  //Displays question with available answers
    output.push(
      '<div class="question">' + questions[i].question + '</div>'
      + '<div class="answers">' + answers.join("") + '</div>'
    );
  }
  container.innerHTML = output.join('')
}



//create a variable to track the current question you're on; so when a person clicks/triggers the  nextQuestion function. it would increment the currentQuestionIndex first, then trigger the renderQuestion

//Checks if correct
function checkCorrect() {
  // If the choice selected equals the correct answer, set isRight to true
  if (chosen === correct) {
    // This value is used in the timer function to test if win condition is met
    isRight = true;
  }
}

//commit initials to local storage

//Calls init function at page load
init();
// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startQuiz);

//nextButton.addEventListener("click", submit);
//submitButton.addEventListener("click", endQuiz);