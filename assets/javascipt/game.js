$(document).ready(function() {
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

	function start() {
		var targetNumber = Math.floor(Math.random() * 120) + 19;
		$("#randomNumber").text(targetNumber);
		//generates the random number and displays it
		var playerScoreCounter = 0;
		$("#playerScore").text("Your Total Score Is: " + playerScoreCounter);
		//starts the players score at 0 and displays it
		var crystalOne = Math.floor(Math.random() * 12) + 1;
		$("#crystalOrange").val(crystalOne);
		console.log(crystalOne);
		//generates a random value for the yellow crystal
		var crystalTwo = Math.floor(Math.random() * 12) + 1;
		$("#crystalYellow").val(crystalTwo);
		console.log(crystalTwo);
		//generates a random value for the yellow crystal
		var crystalThree = Math.floor(Math.random() * 12) + 1;
		$("#crystalRed").val(crystalThree);
		console.log(crystalThree);
		//generates a random value for the red crystal
		var crystalFour = Math.floor(Math.random() * 12) + 1;
		$("#crystalBlue").val(crystalFour);
		console.log(crystalFour);
		//generates a random value for the yellow crystal
	}
	start();

	$("#crystalOrange").on("click", function() {
		playerScoreCounter += crystalOne;
		$("#score").text(playerScoreCounter);
		console.log(playerScoreCounter);
	});

	$(".selectCrystal").on("click", function() {
		if (counter === targetNumber) {
			wins++;
		} else counter > targetNumber;
	});

	function clear() {}

	function reset() {}
});
