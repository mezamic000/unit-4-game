$(document).ready(function() {
	var playerScoreCounter = 0;
	var wins = 0;
	var losses = 0;
	$("#startBtn").on("click", function() {
		var random = Math.floor(Math.random() * 120) + 19;
		$("#randomNumber").text(random);
	});

	$("#crystalOne").on("click", function() {});
});
