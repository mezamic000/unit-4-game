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
	var crystalValues = [];

	function reset() {
		//generates the random number and displays it
		var targetNumber = Math.floor(Math.random() * 120) + 19;
		$("#randomNumber").text(targetNumber);

		//starts the players score at 0 and displays it
		var playerScoreCounter = 0;
		$("#playerScore").text("Your Total Score Is: " + playerScoreCounter);

		//generates a random value for the orange crystal
		var crystalOne = Math.floor(Math.random() * 12) + 1;
		$("#crystalOrange").val(crystalOne);
		console.log(crystalOne);

		//generates a random value for the yellow crystal
		var crystalTwo = Math.floor(Math.random() * 12) + 1;
		$("#crystalYellow").val(crystalTwo);
		console.log(crystalTwo);

		//generates a random value for the red crystal
		var crystalThree = Math.floor(Math.random() * 12) + 1;
		$("#crystalRed").val(crystalThree);
		console.log(crystalThree);

		//generates a random value for the yellow crystal
		var crystalFour = Math.floor(Math.random() * 12) + 1;
		$("#crystalBlue").val(crystalFour);
		console.log(crystalFour);
	}

    function logic() {
        $(".selectCrystal").on("click", function() {
            if (counter === targetNumber) {
                alert("You Win!");
                reset();
                wins++;
                $("#wins").text(wins)
    } else if (counter > targetNumber) {
        alert("You Lost!");
        reset();
        losses++;
        $(#losses)
    }
}

	$("#crystalOrange").on("click", function() {
		crystalOne + -playerScoreCounter;
		console.log(playerScoreCounter);
		$("#score").text(playerScoreCounter);
	});

	
		
	});

	function clear() {}
});
