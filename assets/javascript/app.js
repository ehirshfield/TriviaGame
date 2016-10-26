window.onload = function(){

//load the start button and hide everything else
$(".StartButton").append('<button class="StartButtonStyle">Start!</button>');
$(".TimeRemaining").hide();
$(".Question").hide();
$(".Choices").hide();
$(".CorrectResponse").hide();
$(".IncorrectResponse").hide();
$(".OutOfTime").hide();
$(".InformUserOfAnswer").hide();
$(".AnswerImage").hide();
$(".AllDone").hide();
$(".AllResults").hide();
$(".StartOver").hide();


//Add intial question and answers to the divs

loadQuestionsAndAnswers(questionBank.questionOne.question,questionBank.questionOne.answers.One
	,questionBank.questionOne.answers.Two,questionBank.questionOne.answers.Three);

};

// Onclick of start button show what needs to be shown. Time Remaining, First Question, and First answers
$(".StartButton").on("click", function(){
	$(".StartButton").hide();
	$(".TimeRemaining").show();
	$(".Question").show();
	$(".Choices").show();
	startTimer();
})

var loadQuestionsAndAnswers = function(x,y,z,w) {

	$(".Question").append('<div class="QuestionDiv"></div>');
	$(".QuestionDiv").append(x);
	$(".AnswerDivOne").append(y);
	$(".AnswerDivTwo").append(z);
	$(".AnswerDivThree").append(w);
	
	}

//Keep Track of Right, Wrong, and Unanswered questions
var correctAnswersCount = 0;
var incorrectAnswersCount = 0;
var unansweredCount = 0;

//Object holding arrays for questions and answers

var questionBank = {

			questionOne: { question: "What is the best pie?",
							answers: { One: "Apple",
										Two: "Cherry",
										Three: "Strawberry"},
							rightAnswer: "Apple"
						},
			questionTwo: { question: "What kind of cake is best?",
							answers: { One: "Chocolate",
										Two: "Pie",
										Three: "Strawberry Shortcake"},
							rightAnswer: "Pie"
						},


			questionThree: { question: "What kind of cookie is best?",
							answers: { One: "Chocolate Chip",
										Two: "Oatmeal Raisin",
										Three: "Sugar"},
							rightAnswer: "Chocolate Chip"
							}

			};


//Get time countdown working
var timeCount = 30;
var decreaseInterval = 0;
var questionKeeper = 0;

var startTimer = function() {
		
	decreaseInterval = setInterval(decreaseTime,1000);
	
};

var decreaseTime = function() {
	timeCount--;
	$(".TimeCountdown").html(timeCount);
	if (timeCount === 0) {
		clearInterval(decreaseInterval);
		runOutOfTime();
		};

	};

//Run out of time

var runOutOfTime = function() {

	$(".Question").empty();
	$(".AnswerDivOne").empty();
	$(".AnswerDivTwo").empty();
	$(".AnswerDivThree").empty();
	$(".OutOfTime").show();
	unansweredCount++;
	if (questionKeeper === 0) {
		$(".AnswerSpace").html(questionBank.questionOne.rightAnswer);
		$(".InformUserOfAnswer").show();
		$(".AnswerImage").show();
		setTimeout(moveToQuestionTwo,5000);
		questionKeeper = 1;
	}
	else if (questionKeeper === 1) {
		$(".AnswerSpace").html(questionBank.questionTwo.rightAnswer);
		$(".InformUserOfAnswer").show();
		$(".AnswerImage").show();
		setTimeout(moveToQuestionThree,5000);
		questionKeeper = 2;
	}
	else if (questionKeeper === 2) {
		$(".AnswerSpace").html(questionBank.questionThree.rightAnswer);
		$(".InformUserOfAnswer").show();
		$(".AnswerImage").show();
		setTimeout(resultsPage,5000);
		questionKeeper = 3;
	}

};


//The user's guess

$(".AnswerDivOne").on("click", function(){
	if (questionKeeper === 0) {
		if (questionBank.questionOne.answers.One === questionBank.questionOne.rightAnswer) {
			console.log("Div 1 Q1 Success!");
			clearInterval(decreaseInterval);
			userCorrect();
			return;
		}
		else{
			console.log("Div 1 Q1 Wrong Dummy!");
			clearInterval(decreaseInterval);
			$(".AnswerSpace").html(questionBank.questionOne.rightAnswer);
			userIncorrect();
			return;
		}
	}
	if (questionKeeper === 1) {
		if (questionBank.questionTwo.answers.One === questionBank.questionTwo.rightAnswer) {
			console.log("Div 1 Q2 Success!");
			clearInterval(decreaseInterval);
			userCorrect();
			return;
		}
		else{
			console.log("Div 1 Q2 Wrong Dummy!");
			clearInterval(decreaseInterval);
			$(".AnswerSpace").html(questionBank.questionTwo.rightAnswer);
			userIncorrect();
			return;
		}
	}
	if (questionKeeper === 2) {
		if (questionBank.questionThree.answers.One === questionBank.questionThree.rightAnswer) {
			console.log("Div 1 Q3 Success!");
			clearInterval(decreaseInterval);
			userCorrect();
			return;
		}
		else{
			console.log("Div 1 Q3 Wrong Dummy!");
			clearInterval(decreaseInterval);
			$(".AnswerSpace").html(questionBank.questionThree.rightAnswer);
			userIncorrect();
			return;
		}
	}


});

$(".AnswerDivTwo").on("click", function(){
	if (questionKeeper === 0) {
		if (questionBank.questionOne.answers.Two === questionBank.questionOne.rightAnswer) {
			console.log("Div 2 Success!");
			clearInterval(decreaseInterval);
			userCorrect();
			return;
		}
		else{
			console.log("Div 2 Wrong Dummy!");
			clearInterval(decreaseInterval);
			$(".AnswerSpace").html(questionBank.questionOne.rightAnswer);
			userIncorrect();
			return;
		}
	}
	if (questionKeeper === 1) {
		if (questionBank.questionTwo.answers.Two === questionBank.questionTwo.rightAnswer) {
			console.log("div 2 Success!");
			clearInterval(decreaseInterval);
			userCorrect();
			return;
		}
		else{
			console.log("Div 2 Wrong Dummy!");
			clearInterval(decreaseInterval);
			$(".AnswerSpace").html(questionBank.questionTwo.rightAnswer);
			userIncorrect();
			return;
		}
	}
	if (questionKeeper === 2) {
		if (questionBank.questionThree.answers.Two === questionBank.questionThree.rightAnswer) {
			console.log("Div 2 Success!");
			clearInterval(decreaseInterval);
			userCorrect();
			return;
		}
		else{
			console.log("Div 2 Wrong Dummy!");
			clearInterval(decreaseInterval);
			$(".AnswerSpace").html(questionBank.questionThree.rightAnswer);
			userIncorrect();
			return;
		}
	}
	
});

$(".AnswerDivThree").on("click", function(){
	if (questionKeeper === 0) { 
		if (questionBank.questionOne.answers.Three === questionBank.questionOne.rightAnswer) {
			console.log("Div 3Success!");
			clearInterval(decreaseInterval);
			userCorrect();
			return;
		}
		else{
			console.log("Div 3 Wrong Dummy!");
			clearInterval(decreaseInterval);
			$(".AnswerSpace").html(questionBank.questionOne.rightAnswer);
			userIncorrect();
			return;
		}
	}
	else if (questionKeeper === 1) {
		if (questionBank.questionTwo.answers.Three === questionBank.questionTwo.rightAnswer) {
			console.log("Div 3 Success!");
			clearInterval(decreaseInterval);
			userCorrect();
			return;
		}
		else{
			console.log("Div 3 Wrong Dummy!");
			clearInterval(decreaseInterval);
			$(".AnswerSpace").html(questionBank.questionTwo.rightAnswer);
			userIncorrect();
			return;
		}
	}
	else if (questionKeeper === 2) {
		if (questionBank.questionThree.answers.Three === questionBank.questionThree.rightAnswer) {
			console.log("Div 3 Success!");
			clearInterval(decreaseInterval);
			userCorrect();
			return;
		}
		else{
			console.log("Div 3 Wrong Dummy!");
			clearInterval(decreaseInterval);
			$(".AnswerSpace").html(questionBank.questionThree.rightAnswer);
			userIncorrect();
			return;
		}
	}
	
});

//Correct Answer
var userCorrect = function() {

	$(".Question").empty();
	$(".AnswerDivOne").empty();
	$(".AnswerDivTwo").empty();
	$(".AnswerDivThree").empty();
	$(".CorrectResponse").show();
	$(".AnswerImage").show();
	correctAnswersCount++;
	if (questionKeeper === 0) {
		setTimeout(moveToQuestionTwo,5000);
		questionKeeper = 1;
	}
	else if (questionKeeper === 1) {
		setTimeout(moveToQuestionThree,5000);
		questionKeeper = 2;
	}
	else if (questionKeeper === 2) {
		setTimeout(resultsPage,5000);
		questionKeeper = 3;
	}

};

//Incorrect Answer
var userIncorrect = function() {

	$(".Question").empty();
	$(".AnswerDivOne").empty();
	$(".AnswerDivTwo").empty();
	$(".AnswerDivThree").empty();
	$(".IncorrectResponse").show();
	$(".InformUserOfAnswer").show();
	$(".AnswerImage").show();
	incorrectAnswersCount++;
	if (questionKeeper === 0) {
		setTimeout(moveToQuestionTwo,5000);
		questionKeeper = 1;
	}
	else if (questionKeeper === 1) {
		setTimeout(moveToQuestionThree,5000);
		questionKeeper = 2;
	}
	else if (questionKeeper === 2) {
		setTimeout(resultsPage,5000);
		questionKeeper = 3;
	}

};


//Next Question

var moveToQuestionTwo = function() {
	$(".OutOfTime").hide();
	$(".CorrectResponse").hide();
	$(".IncorrectResponse").hide();
	$(".InformUserOfAnswer").hide();
	$(".AnswerSpace").empty();
	$(".AnswerImage").empty();
	loadQuestionsAndAnswers(questionBank.questionTwo.question,questionBank.questionTwo.answers.One
	,questionBank.questionTwo.answers.Two,questionBank.questionTwo.answers.Three);
	$(".Choices").show();
	timeCount = 30;
	$(".TimeCountdown").html(timeCount);
	startTimer();
};

var moveToQuestionThree = function() {
	$(".OutOfTime").hide();
	$(".CorrectResponse").hide();
	$(".IncorrectResponse").hide();
	$(".InformUserOfAnswer").hide();
	$(".AnswerSpace").empty();
	$(".AnswerImage").empty();
	loadQuestionsAndAnswers(questionBank.questionThree.question,questionBank.questionThree.answers.One
	,questionBank.questionThree.answers.Two,questionBank.questionThree.answers.Three);
	timeCount = 30;
	$(".TimeCountdown").html(timeCount);
	startTimer();
};

// RESULTS Page

var resultsPage = function() {
	$(".OutOfTime").hide();
	$(".CorrectResponse").hide();
	$(".IncorrectResponse").hide();
	$(".InformUserOfAnswer").hide();
	$(".AnswerSpace").empty();
	$(".AnswerImage").empty();
	$(".AllDone").show();
	$(".CorrectAnswersSpan").html(correctAnswersCount);
	$(".IncorrectAnswersSpan").html(incorrectAnswersCount);
	$(".UnansweredSpan").html(unansweredCount);
	$(".AllResults").show();
	$(".StartOver").show();

}




