var userGuess = 0;
var MAX = 100;
var randnumber = Math.floor(Math.random()*(MAX + 1))
var guessamount = 0;
var intRegex = /^\d+$/;

var submitGuess = function() {
  $("#guess").keypress(function (e) {
    if (e.keyCode == '13') {
      getUserGuess();
    }
  })
};

var newGame = function() {
  $("#restart").click(function() {
    randnumber = Math.floor(Math.random()*(MAX + 1));
    guessamount = 0;
    $(".alert-box").html('Guesses :');
  })
};

var checkNumber = function(num) {

  if (num == randnumber) {
    randnumber = -1;
    return "You Win in " + guessamount + " guesses! Restart for a New Game! </li>";
  }
  else if (num < randnumber) {
    return "Too low guess again! </li>";
  }
  else {
    return "Too high guess again! </li>";
  }
}
var whyy = function(num) {
  guessamount ++;
  $(".alert-box").append('<li>' + num + ': ' + checkNumber(num));
};

function getUserGuess() {
  guess = $('#guess').val();
  if (randnumber == -1) {
    alert('This game is already finished! Restart for a New Game!');
    }
  else { 
    if(intRegex.test(guess)) {  
    whyy(guess);
    $('#guess').val('');
    }
    else {
      alert('Not a valid number!');
      $('#guess').val('');
    }
  }
};



alert("Guess a number between 0 and " + MAX);

$(document).ready(function(){
  submitGuess();
  newGame();
})

