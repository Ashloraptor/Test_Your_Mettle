//query select button
var startButton = document.querySelector(".start-button");
var timerElement = document.querySelector(".timer-count");

var isWin = false;
var timer;
var timerCount;

//var for questions
//with corresponding series of options



// The startGame function is called when the start button is clicked
function startGame() {
    isWin = false;
    timerCount = 60;
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    startTimer()
  }

//commit initials to local storage