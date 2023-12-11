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
    question1: "What keyword is used for variables?",
    answers1: ["v", "variable", "var", "bar"],
    correct1: "C"
  },
  {
    question2: "What punctuation is used to end a line of code?",
    answers2: [".", "$", ";", "!"],
    correct2: "C"
  },
  {
    question3: 'What value type is in variable var= "Hello World"; ?',
    answers3: ["Boolean", "Integer", "String", "Quote"],
    correct3: "C"
  },
  {
    question4: "What is the value of the first item in an array?",
    answers4: ["1", "A", "0", "None of the above"],
    correct4: "C"
  }
];

var answersOne = questions[0].answers1;
var answersTwo = questions[1].answers2;
var answersThree = questions[2].answers3;
var answersFour = questions[3].answers4;
var numQuestion = 0;

var nextBtn = document.querySelector("#nextBtn");



var isRight;
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
  isRight = 0;
  timerCount = 60;
  // Hides start button when quiz is in progress
  startButton.hidden = true;
  startTimer();
  //Shows question and Next button
  container.hidden = false
  nextButton.hidden = false
  renderQuestion(questions[0].question1, answersOne);

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

//Presents the first questions after Start is selected

answersOne = questions[0].answers1;
var theQuestion = document.querySelector(".theQuestion");

function renderQuestion( yourQuestion, answersOne) {
  theQuestion.innerHTML = yourQuestion;
 //clears answers
  answers=[];
  //for each question
  for (var i = 0; i < 4; i++) {
    console.log(answersOne);
    answers.push(
      '<input type="radio" name="question" value="value="' + 
      answersOne[i]+ '">' + answersOne[i]
    );
  }
 
  container.innerHTML=answers.join("");
  
}


function nextQuestion() {
  //checkCorrect();
  renderQuestion(questions[1].question2, answersTwo);
}


function nextQuestion() {
  numQuestion++;
  if (numQuestion == 1){
    console.log("two")
    renderQuestion(questions[1].question2, answersTwo);
  }
  else if (numQuestion == 2){
    renderQuestion(questions[2].question3, answersThree);
  }
  else if (numQuestion == 3){
    renderQuestion(questions[3].question4, answersFour);
  }
  }


//Checks if correct
/*function checkCorrect() {
   //If the choice selected equals the correct answer, set isRight to true
  if (questions[0].correct1 === checked) {
    // then add 1 to isRight and commit to local storage
    isRight++;
    localStorage.setItem("correct", isRight);
  } else {
    timerCount -5;
  }
}*/



//commit initials to local storage

//Calls init function at page load
init();
// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startQuiz);

nextButton.addEventListener("click", nextQuestion);
//submitButton.addEventListener("click", endQuiz);
