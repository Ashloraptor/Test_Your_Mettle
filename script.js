//query select button
var startButton = document.querySelector(".start-button");
var timerElement = document.querySelector(".timer-count");
var containter = document.querySelector(".container")

var isWin = false;
var timer;
var timerCount;

//var for questions
//with corresponding series of options



// The startGame function is called when the start button is clicked
function startQuiz() {
    isWin = false;
    timerCount = 60;
    // Hides start button when quiz is in progress
    startButton.hidden = true;
    startTimer()
  }

//Timer
function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
    }
  }, 1000);
}

//commit initials to local storage

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startQuiz);