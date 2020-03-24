$(document).ready(function() {
	var randomTargetNumber = 0;
	var totalScore = 0;
	var wins = 0;
	var losses = 0;
	var crystalOne = 0;
	var crystalTwo = 0;
	var crystalThree = 0;
	var crystalFour = 0;
	var lockGame = false;
	var counter = 0;
	var p;

	function generateRandomNumber() {
		//generates the random number and displays it
		randomTargetNumber = Math.floor(Math.random() * 120) + 19;
		$("#randomNumber").text(randomTargetNumber);
	}
	generateRandomNumber();

	function generateCrystalValues() {
		//generates a random value for the orange crystal
		crystalOne = Math.floor(Math.random() * 12) + 1;
		$("#crystalOrange").val(crystalOne);
		console.log(crystalOne);

		//generates a random value for the yellow crystal
		crystalTwo = Math.floor(Math.random() * 12) + 1;
		// $("#crystalYellow").val(crystalTwo);
		console.log(crystalTwo);

		//generates a random value for the red crystal
		crystalThree = Math.floor(Math.random() * 12) + 1;
		// $("#crystalRed").val(crystalThree);
		console.log(crystalThree);

		//generates a random value for the yellow crystal
		crystalFour = Math.floor(Math.random() * 12) + 1;
		// $("#crystalBlue").val(crystalFour);
		console.log(crystalFour);
	}

	function start() {
		$("#playerScore").text("Your Total Score Is: " + totalScore);
		$("#wins").text("wins: " + wins);
		$("#losses").text("losses: " + losses);
		generateRandomNumber();
		generateCrystalValues();
	}
	start();

	$("#crystalOrange").on("click", function() {
		totalScore = totalScore + crystalOne;
		$("#playerScore").text("Your Total Score Is: " + totalScore);
		scoring();
	});

	$("#crystalYellow").on("click", function() {
		totalScore = totalScore + crystalTwo;
		$("#playerScore").text("Your Total Score Is: " + totalScore);
		scoring();
	});

	$("#crystalRed").on("click", function() {
		totalScore = totalScore + crystalThree;
		$("#playerScore").text("Your Total Score Is: " + totalScore);
		scoring();
	});

	$("#crystalBlue").on("click", function() {
		totalScore = totalScore + crystalFour;
		$("#playerScore").text("Your Total Score Is: " + totalScore);
		scoring();
	});

	function scoring() {
		if (totalScore === randomTargetNumber) {
			wins++;
			$("#wins").text("wins: " + wins);
			alert("You won a point! " + totalScore + " = " + randomTargetNumber);
			totalScore = 0;
			start();
		} else if (totalScore > randomTargetNumber) {
			losses++;
			$("#losses").text("losses: " + losses);
			alert(
				"You lost! " + totalScore + " is greater than! " + randomTargetNumber
			);
			totalScore = 0;
			start();
		}
	}
});
