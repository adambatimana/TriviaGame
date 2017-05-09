window.onload = function(){
//Variables to be used in the game
  var timer = 90;
  var intervalId;
  var timerDiv = $(".panel-body");
  var gameStage =$("#gameStage");
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

    }

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


      //  Once number hits zero...
      if (timer === 0) {

          //  Alert the user that time is up.
          alert("Time is up young Padawan!");
          stop();
       }
    }

    //  The stop function
    function stop() {

    //  to the clearInterval function.
      clearInterval(intervalId);

    }
// gameStart();
runTimer();



// restart game()

// restart timer
// clear score
// clear timer
// clear selections




//checkWin()


// time runs out()


//TIMER()

// ***************** IF TIME SWAP OUT QUETSION PANELS *******************



// =============================================================================
//                             LOGIC
// =============================================================================


///hide gameStage and show click to begin
 $("#begin").on("click", function () {
   gameStage.show();
 });

//if, for question one, the correct answer is selected add point to correct answer counter



//if, for question one, the incorrect answer is selected add point to wrong answer counter



//else, for question one, none are selected then  add point to not answered array

// on click event listener
$(document).on("click", "button", function () {
  //IF finish and submit button is pressed

  //display correct, incorrect and unanswered selection in DOM and hide gameStage
});



















}
