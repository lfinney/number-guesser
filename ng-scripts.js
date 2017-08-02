var saveButton = document.querySelector('guess-button');

//generate a random number between one and one-hundred
function getRandomNumber() {
  var getRandomNumber = (Math.floor( (Math.random() * 100) + 1);
  // document.getElementById('guess-display').innerHTML = message[getRandomNumber];
)} /* How do I get this number to appear in HTML? */

// Capture guess number from user
var userGuess = document.getElementById('guess');
console.log(userGuess);

// button that submits guess
var guessButton = document.getElementById('guess-button');

guessButton.addEventListener('click', compareGuess);
function compareGuess(event) {
  event.preventDefault();
}

// button that clears guess
var clearButton = document.getElementById('clear-button');

// when buttons are not clickable, like when the user hasn't put anything in the box, change their display color. Is this actually a problem that can be solved in CSS?


// text that changes to identify status of game for user. "Your last guess was..."" or "Guess a number between 1-100"
function userPrompt() {
  if (/* user hasn't entered a guess yet "Guess a number between 1 and 100. "*/) {}
  else if (/* user submitted a guess "Your last guess was _" */) {}
  else if (/* user guesses correctly "Click the 'Reset' button to play again." */);
}

// projects previous; guess in big, magenta letters
var previousGuess = document.getElementById('last-guess');

// identifies accuracy of guess. "That is too high, too low, just right"
function userFeedback () {
  if (/* user guess is correct */) {}
  else if (/* user guess is high */) {}
  else if (/* user guess is low */) {}
  else if (/* user enter text instead of a number */) {}
  else if (/* user enters a decimal) */) {}
  else (/* default message */);
}
//
// // button that resets game completely.
var resetButton = document.getElementById('reset-button');
