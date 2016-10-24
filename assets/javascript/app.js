window.onload = function(){

//load the start button and hide everything else
$(".StartButton").append('<button class="StartButtonStyle">Start!</button>');
$(".TimeRemaining").hide();
$(".Question").hide();
$(".Choices").hide();


//Add intial question and answers to the divs
$(".Question").append('<div class="QuestionDiv"></div>');
$(".QuestionDiv").append(questionBank.questionOne.question);
$(".Choices").append('<div class="AnswerDivOne"></div>');
$(".Choices").append('<div class="AnswerDivTwo"></div>');
$(".Choices").append('<div class="AnswerDivThree"></div>');
$(".AnswerDivOne").append(questionBank.questionOne.answers.One);
$(".AnswerDivTwo").append(questionBank.questionOne.answers.Two);
$(".AnswerDivThree").append(questionBank.questionOne.answers.Three);


// Onclick of start button show what needs to be shown. Time Remaining, First Question, and First answers
$(".StartButton").on("click", function(){
	$(".StartButton").hide();
	$(".TimeRemaining").show();
	$(".Question").show();
	$(".Choices").show();
	startTimer();
})


};


//Object holding arrays for questions and answers

var questionBank = {

			questionOne: { question: "What is the best pie?",
							answers: { One: "Apple",
										Two: "Cherry",
										Three: "Strawberry"}
						},
			questionTwo: { question: "What kind of cake is best?",
							answers: { One: "Apple",
										Two: "Cherry",
										Three: "Strawberry"}
						},


			questionThree: { question: "What kind of cookie is best?",
							answers: { One: "Chocolate Chip",
										Two: "Oatmeal Raisin",
										Three: "Sugar"}

							}

			};


//Get time countdown working
var timeCount = 3;
var decreaseInterval = 0;
var startTimer = function() {
		
	decreaseInterval = setInterval(decreaseTime,1000);
	
}

var decreaseTime = function() {
	timeCount--;
	$("#TimeCountdown").html(timeCount);
	if (timeCount === 0) {
		clearInterval(decreaseInterval);
		
		}

	}



