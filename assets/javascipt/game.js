var targetNumber = 0;
var playerScoreCounter = 0;
var wins = 0;
var losses = 0;
var crystalOne = 0;
var crystalTwo = 0;
var crystalThree = 0;
var crystalFour = 0;
var lockGame = false;
var counter = 0;

$(document).ready(function() {
	$("#startBtn").on("click", function() {
		var targetNumber = Math.floor(Math.random() * 120) + 19;
		$("#randomNumber").text(targetNumber);
		//generates the random number and displays it
		var playerScoreCounter = 0;
		$("#playerScore").text(playerScoreCounter);
		//starts the players score at 0 and displays it
		var crystalOne = Math.floor(Math.random() * 12) + 1;
		$("#crystalOrange").text(crystalOne);
		console.log(crystalOne);
		//generates a random value for the yellow crystal
		var crystalTwo = Math.floor(Math.random() * 12) + 1;
		$("#crystalYellow").text(crystalTwo);
		console.log(crystalTwo);
		//generates a random value for the yellow crystal
		var crystalOne = Math.floor(Math.random() * 12) + 1;
		$("#crystalRed").text(crystalOne);
		console.log(crystalOne);
		//generates a random value for the red crystal
		var crystalOne = Math.floor(Math.random() * 12) + 1;
		$("#crystalBlue").text(crystalOne);
		console.log(crystalOne);
		//generates a random value for the yellow crystal
	});

	$(".selectCrystal").on("click", function() {
		if (counter === targetNumber) {
			wins++;
		} else (counter >= targetNumber) {
            losses--;
        }
	});
});
