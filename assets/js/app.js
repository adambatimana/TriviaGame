window.onload = function(){
//Variables to be used in the game
  var timer = 60;
  var intervalId;
  var timerDiv = $(".panel-body");
  var gameStage =$("#gameStage");
  var gameOverdiv =$("#gameOver");
  var correctDiv = $(".correct");
  var wrongDiv = $(".incorrect");
  var unansweredDiv = $(".unanswered");
  var correctAnswer = 0;
  var wrongAnswer = 0;
  var notAnswered = 7;

// =============================================================================
//                          FUNCTIONS
// =============================================================================

    //gameStart()
    function gameStart(){

        //hide gameStage
        gameStage.hide();
        gameOverdiv.hide();
    }

    //TIMER set up
    // run() to start timer
    function runTimer() {

      intervalId = setInterval(decrement, 1000);

    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      timer--;

      //  Show the number in the .timerDiv tag.
      timerDiv.html(timer);


      // When the time runs out
      if (timer === 0) {
          stop();
          alert("Time is up young Padawan!");
          gameOver();
       }
    }

    //  The stop function
    function stop() {

      //  to the clearInterval function.
      clearInterval(intervalId);

    }

    //end of timer function gameOver()
    function gameOver() {

      //hide gameStage
      gameStage.hide();

      //show gameOver
      gameOverdiv.show();

      //show correct incorrect and unanswered score
      correctDiv.html(correctAnswer);
      wrongDiv.html(wrongAnswer);
      unansweredDiv.html(notAnswered);

    }

    // restart game()
    function restartGame(){

      // restart timer
      timer = 60;
      // clear score
      correctDiv.empty();
      wrongDiv.empty();
      unansweredDiv.empty();

      correctAnswer = 0;
      wrongAnswer = 0;
      notAnswered = 7;

      // clear selections on radio
      var input = $('input');
        for (var i = input.length-1; i>=0; i--) {
          if ('radio'===input[i].type) input[i].checked = false;
        }
    }


// ***************** IF THERE IS TIME SWAP OUT QUETSION PANELS *******************



// =============================================================================
//                             LOGIC
// =============================================================================


///hide gameStage and show click to begin
 $("#begin").on("click", function () {
   gameStage.show();
   $("#begin").hide();
   runTimer();
 });

 $( "input" ).on( "click", function(event) {

   var selectedRadio = $( event.target );
   var right = "correct";
   var notRight = "wrong";
   var questionAnswered = false;

      //if, for question one, the correct answer is selected add point to correct answer counter
      console.log(selectedRadio.val());

   if( selectedRadio.val() === right){
       correctAnswer ++;
       notAnswered --;
       questionAnswered = true;
       // console.log("correct" + correctAnswer);
   }

      //if, for question one, the incorrect answer is selected add point to wrong answer counter
      else if (selectedRadio.val() === notRight){

          wrongAnswer ++;
          notAnswered --;
          questionAnswered = true;

          // console.log("wrong" + wrongAnswer);
      }

      // console.log("not anwswered " + notAnswered);


});


// =============================================================================
//                             ON CLICK GAME
// =============================================================================

gameStart();

// on click event listener
$(".submit").on("click", function () {

  //IF finish and submit button is pressed
  //display correct, incorrect and unanswered selection in DOM and hide gameStage
  gameOver();
  stop();

});

$("#restart").on("click", function () {
restartGame();
gameStage.show();
gameOverdiv.hide();
runTimer();

});


}
