var random = 0;
var playerScoreCounter = 0;
var wins = 0;
var losses = 0;
var crystalOne = 0;
var crystalTwo = 0;
var crystalThree = 0;
var crystalFour = 0;
var lockGame = false;

$(document).ready(function() {
	$("#startBtn").on("click", function() {
		var random = Math.floor(Math.random() * 120) + 19;
		$("#randomNumber").text(random);
		var playerScoreCounter = 0;
		$("#playerScore").text(playerScoreCounter);
		var crystalOne = Math.floor(Math.random() * 12) + 1;
		$("#crystalOrange").text(crystalOne);
		console.log(crystalOne);
		var crystalTwo = Math.floor(Math.random() * 12) + 1;
		$("#crystalYellow").text(crystalTwo);
		console.log(crystalTwo);
		var crystalOne = Math.floor(Math.random() * 12) + 1;
		$("#crystalRed").text(crystalOne);
		console.log(crystalOne);
		var crystalOne = Math.floor(Math.random() * 12) + 1;
		$("#crystalBlue").text(crystalOne);
		console.log(crystalOne);
	});

	$("#crystalOrange").on("click", function() {});

	$("#crystalYellow").on("click", function() {});

	$("#crystalRed").on("click", function() {});

	$("#crystalBlue").on("click", function() {});
});
