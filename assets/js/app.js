window.onload = function(){
//Variables to be used in the game
  var timer = 5;
  var intervalId;
  var timerDiv = $(".panel-body");
  var gameStage =$("#gameStage");
  var gameOverdiv =$("#gameOver");
  var correctAnswer = 0;
  var wrongAnswer = 0;
  var notAnswered = 0;

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

      var correctDiv = $(".correct");
      var wrongDiv = $(".incorrect");
      var unansweredDiv = $(".unanswered");


      //hide gameStage
      gameStage.hide();

      //show gameOver
      gameOverdiv.show();

      //show correct incorrect and unanswered score
      correctDiv.html(correctAnswer);
      wrongDiv.html(wrongAnswer);
      unansweredDiv.html(notAnswered);

    }

// gameStart();



// restart game()

// restart timer
// clear score
// clear timer
// clear selections




//checkWin()







// ***************** IF THERE IS TIME SWAP OUT QUETSION PANELS *******************



// =============================================================================
//                             LOGIC
// =============================================================================


///hide gameStage and show click to begin
 $("#begin").on("click", function () {
   gameStage.show();
  //  runTimer();
 });

 $( "input" ).on( "click", function() {

   var selectedRadial = $( "input:checked" );
   var right = "correct";
   var notRight = "wrong";

   //if, for question one, the correct answer is selected add point to correct answer counter
   console.log(selectedRadial.val());
   if( selectedRadial.val() === right){
       correctAnswer ++;
       // console.log("correct" + correctAnswer);
   }

    //if, for question one, the incorrect answer is selected add point to wrong answer counter
    else if (selectedRadial.val() === notRight){
        wrongAnswer ++;
        // console.log("wrong" + wrongAnswer);
    }
    //else, for question one, none are selected then  add point to not answered array
    else if (selectedRadial.val() != notRight ||  selectedRadial.val() != right){
        notAnswered ++;
        // console.log("not anwswered " + notAnswered);
    }

});





// on click event listener
$(".submit").on("click", function () {

  //IF finish and submit button is pressed
  //display correct, incorrect and unanswered selection in DOM and hide gameStage
  gameOver();
  stop();

});

}
