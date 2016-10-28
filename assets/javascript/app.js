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
	,questionBank.questionOne.answers.Two,questionBank.questionOne.answers.Three, 
	questionBank.questionOne.answerImage);

};

// Onclick of start button show what needs to be shown. Time Remaining, First Question, and First answers
$(".StartButton").on("click", function(){
	$(".StartButton").hide();
	$(".TimeRemaining").show();
	$(".Question").show();
	$(".Choices").show();
	startTimer();
});

var loadQuestionsAndAnswers = function(x,y,z,w,q) {

	$(".Question").append('<div class="QuestionDiv"></div>');
	$(".QuestionDiv").append(x);
	$(".AnswerDivOne").append(y);
	$(".AnswerDivTwo").append(z);
	$(".AnswerDivThree").append(w);
	$(".AnswerImage").append('<img class="center-block" width="500px" height="250px" src=' + q + ' />')
	
	}

//Keep Track of Right, Wrong, and Unanswered questions
var correctAnswersCount = 0;
var incorrectAnswersCount = 0;
var unansweredCount = 0;

//Object holding arrays for questions and answers -- I'll add right and wrong images in the future

var questionBank = {

			questionOne: { question: 'In which city will you find Michelangelos famous 17-feet-tall marble sculpture "David"?',
							answers: { One: "Florence",
										Two: "Venice",
										Three: "Rome"},
							rightAnswer: "Florence",
							answerImage: "assets/images/kevin.gif"
						},
			questionTwo: { question: "In which country will the 2018 Winter Olympics be held?",
							answers: { One: "France",
										Two: "South Korea",
										Three: "Germany"},
							rightAnswer: "South Korea",
							answerImage: "assets/images/office.gif"
						},


			questionThree: { question: "In England, what is a 'bap'?",
							answers: { One: "A hamburger bun",
										Two: "A bouquet of flowers",
										Three: "A gallon of water"},
							rightAnswer: "A hamburger bun",
							answerImage: "assets/images/programming.gif"
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
			clearInterval(decreaseInterval);
			userCorrect();
			return;
		}
		else{
			clearInterval(decreaseInterval);
			$(".AnswerSpace").html(questionBank.questionOne.rightAnswer);
			userIncorrect();
			return;
		}
	}
	if (questionKeeper === 1) {
		if (questionBank.questionTwo.answers.One === questionBank.questionTwo.rightAnswer) {
			clearInterval(decreaseInterval);
			userCorrect();
			return;
		}
		else{
			clearInterval(decreaseInterval);
			$(".AnswerSpace").html(questionBank.questionTwo.rightAnswer);
			userIncorrect();
			return;
		}
	}
	if (questionKeeper === 2) {
		if (questionBank.questionThree.answers.One === questionBank.questionThree.rightAnswer) {
			clearInterval(decreaseInterval);
			userCorrect();
			return;
		}
		else{
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
			clearInterval(decreaseInterval);
			userCorrect();
			return;
		}
		else{
			clearInterval(decreaseInterval);
			$(".AnswerSpace").html(questionBank.questionOne.rightAnswer);
			userIncorrect();
			return;
		}
	}
	if (questionKeeper === 1) {
		if (questionBank.questionTwo.answers.Two === questionBank.questionTwo.rightAnswer) {
			clearInterval(decreaseInterval);
			userCorrect();
			return;
		}
		else{
			clearInterval(decreaseInterval);
			$(".AnswerSpace").html(questionBank.questionTwo.rightAnswer);
			userIncorrect();
			return;
		}
	}
	if (questionKeeper === 2) {
		if (questionBank.questionThree.answers.Two === questionBank.questionThree.rightAnswer) {
			clearInterval(decreaseInterval);
			userCorrect();
			return;
		}
		else{
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
			clearInterval(decreaseInterval);
			userCorrect();
			return;
		}
		else{
			clearInterval(decreaseInterval);
			$(".AnswerSpace").html(questionBank.questionOne.rightAnswer);
			userIncorrect();
			return;
		}
	}
	else if (questionKeeper === 1) {
		if (questionBank.questionTwo.answers.Three === questionBank.questionTwo.rightAnswer) {
			clearInterval(decreaseInterval);
			userCorrect();
			return;
		}
		else{
			clearInterval(decreaseInterval);
			$(".AnswerSpace").html(questionBank.questionTwo.rightAnswer);
			userIncorrect();
			return;
		}
	}
	else if (questionKeeper === 2) {
		if (questionBank.questionThree.answers.Three === questionBank.questionThree.rightAnswer) {
			clearInterval(decreaseInterval);
			userCorrect();
			return;
		}
		else{
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
	$(".AnswerImage").hide();
	$(".AnswerImage").empty();
	loadQuestionsAndAnswers(questionBank.questionTwo.question,questionBank.questionTwo.answers.One
	,questionBank.questionTwo.answers.Two,questionBank.questionTwo.answers.Three, questionBank.questionTwo.answerImage);
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
	$(".AnswerImage").hide();
	$(".AnswerImage").empty();
	loadQuestionsAndAnswers(questionBank.questionThree.question,questionBank.questionThree.answers.One
	,questionBank.questionThree.answers.Two,questionBank.questionThree.answers.Three, questionBank.questionThree.answerImage);
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
	$(".AnswerImage").hide();
	$(".AnswerImage").empty();
	$(".AllDone").show();
	$(".CorrectAnswersSpan").html(correctAnswersCount);
	$(".IncorrectAnswersSpan").html(incorrectAnswersCount);
	$(".UnansweredSpan").html(unansweredCount);
	$(".AllResults").show();
	$(".StartOver").show();

}

//Start Over Button

$(".StartOverButton").on("click", function(){


	$(".StartOver").hide();
	$(".AllDone").hide();
	$(".AllResults").hide();

	correctAnswersCount = 0;
	incorrectAnswersCount = 0;
	unansweredCount = 0;
	questionKeeper = 0;
	loadQuestionsAndAnswers(questionBank.questionOne.question,questionBank.questionOne.answers.One
	,questionBank.questionOne.answers.Two,questionBank.questionOne.answers.Three,questionBank.questionOne.answerImage);

	$(".TimeRemaining").show();
	$(".Question").show();
	$(".Choices").show();
	startTimer();
});




