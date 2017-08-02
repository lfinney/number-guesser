// variables
// RGN
var ranNum = randomNumber();
// User's Guess
var userGuess = document.getElementById('guess');
// Display User's Guess
var previousGuess = document.getElementById('last-guess');
// Guess
var guessButton = document.getElementById('guess-button');
// Clear
var clearButton = document.getElementById('clear-button');
// Next Level
var nextLevelButton = document.getElementById('next-level-button');
// Reset
var resetButton = document.getElementById('reset-button');
// Range Prompt
var rangePrompt = document.getElementById('range-set');
// Set Range button
var setRange = document.getElementById('submit-min-max');
// User feedback
var feedback = document.getElementById('user-feedback');
// User Prompt
var prompt = document.getElementById('user-prompt');
// Min number
var minNum = 0;
// Min number setting
var minBox = document.getElementById('min-box');
// Max number
var maxNum = 100;
// Min number setting
var maxBox = document.getElementById('max-box');

window.onload = function() {
  defaultGameState();
};

// default button states
guessButton.disabled = true;
clearButton.disabled = true;
resetButton.disabled = true;

// event listeners
  // Guess button
    guessButton.addEventListener('click', function() {
      updateDisplay(event);
      compareGuess();
      checkForNumber();
      nextLevel();
      guessMadeButtonState()
      setRange.disabled = true;
    });

  //Clear button -
    clearButton.addEventListener('click', function() {
      clear();
    });

  //Set Range button
    setRange.addEventListener('click', function() {
      event.preventDefault();
      checkRange();
      minNum = minBox.value;
      maxNum  = maxBox.value;
      ranNum = randomNumber();
      setRange.disabled = true;
      setRangeText ();
    });

  // disableButton();
    userGuess.addEventListener('input', function() {
      if (userGuess.value !== '') {
        guessClearResetButtonsOff();
      }
    });

  // Check Range
    function checkRange() {
        if (maxBox.value <= minBox.value) {
        alert('The max range value must be greater than the min range value.');
        };
      };

  // Next Level button
  function nextLevel() {
      if (parseInt(userGuess.value) === ranNum) {
        nextLevelButton.disabled = false;
      }
      nextLevelButton.addEventListener('click', function() {
        event.preventDefault();
        minBox.value = parseInt(minNum) - 10;
        maxBox.value = parseInt(maxNum) + 10;
        nextLevelRangeSet();
        guessClearButtonsOff();
        levelUp();
      })
    };


  // Reset button
    resetButton.addEventListener('click', function() {
      event.preventDefault();
      minNum = 0;
      maxNum = 100;
      defaultGameState();
      resetButtonText();
      levelUp();
      guessClearButtonsOff();
      resetButton.disabled = true;
    });

// functions
  // Generate Random number
    function randomNumber() {
      return Math.floor((Math.random() * (parseInt(maxNum) - parseInt(minNum) + 1)) + parseInt(minNum));
    };

  // Compare User's guess
    function compareGuess() {
      if (ranNum === parseInt(userGuess.value)) {
        // editInnerText(prompt, textFeedback['correctGuess'])
          prompt.innerText= 'BOOM! You\'re right!';
        // editInnerText(feedback, textFeedback['nextLevel'] )
          feedback.innerText = 'Looks like you\'re ready to kick it up a notch. Click \"Next Level\" to increase your number range.';
      } else if (ranNum > parseInt(userGuess.value) && parseInt(userGuess.value) >= minNum) {
          prompt.innerText = 'Your last guess was'
          feedback.innerText = 'That is too low. Make another guess.';
      } else if (ranNum < parseInt(userGuess.value) && parseInt(userGuess.value) <= maxNum) {
          prompt.innerText = 'Your last guess was'
          feedback.innerText = 'That is too high. Make another guess.'
      } else if (parseInt(userGuess.value) > minNum ||  parseInt(userGuess.value) < maxNum) {
        feedback.innerText = 'Pick a number within your set range.';
      } else {
          prompt.innerText = 'What are you doing?'
          feedback.innerText = 'That\'s not a number';
      }
    };

  // Update display
    function updateDisplay(event){
      event.preventDefault();
      var userInput = parseInt(userGuess.value);
      previousGuess.innerHTML = userInput;
    };

  // Check input for being a number
    function checkForNumber() {
      if (isNaN(userGuess.value)) {
        alert('The value you\'ve input is not a number. Try again.');
      } else if (parseInt(userGuess.value) < minNum || parseInt(userGuess.value) > maxNum) {
      alert('You need to pick a number between ' + minNum + ' and ' + maxNum + '.');
      }
    };

  // Performs clear
    function clear() {
      userGuess.value = '';
      guessButton.disabled = true;
      clearButton.disabled = true;
    };

  // Buttons off+
    function guessClearButtonsOff() {
      guessButton.disabled = true;
      clearButton.disabled = true;
    };

  // Post Guess button state
    function guessMadeButtonState() {
      userGuess.value = '';
      guessButton.disabled = true;
      clearButton.disabled = true;
      resetButton.disabled = false;
    };

  // Guess Clear & Reset Buttons Off
    function guessClearResetButtonsOff() {
      guessButton.disabled = false;
      clearButton.disabled = false;
      resetButton.disabled = false;
    };

  // Default state
    function defaultGameState() {
      ranNum = randomNumber();
      minBox.value = 1;
      maxBox.value = 100;
    };

    //
    function levelUp() {
      nextLevelButton.disabled = true;
      setRange.disabled = false;
    }

    // Set Range Text
    function setRangeText() {
      feedback.innerText = ("Pick a number between " + minNum + " and " + maxNum);
      prompt.innerText = ("");
      rangePrompt.innerText = "Your current guess range is"
    };

    // Next Level Text
    function nextLevelRangeSet() {
      userGuess.value = '';
      previousGuess.innerText = "--";
      rangePrompt.innerText = "Cick \'Set Range\' to accept your new challenge!"
    };

    // Reset Button Text
    function resetButtonText() {
      prompt.innerText = ("Pick a number between " + minNum + " and " + maxNum);
      previousGuess.innerText = "--";
      feedback.innerText = "Do you wanna play a game?";
      rangePrompt.innerText = "Set a range to guess a random number from"
    };
