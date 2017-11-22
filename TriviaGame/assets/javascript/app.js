$(document).ready(function() {

function startButton(){
	$(".question-area").html('<button id="startButton">Start</button>');
	$('#startButton').on('click', function(){
		gameTimer(60);
	});
	
}

function gameTimer(counter){
	gameTime = setInterval(countdown, 1000);
	function countdown(){
		if (counter == 0){
			clearInterval(gameTime);
			timedOut();
		}
		if (counter > 0){
			counter--;
		}
		$(".timer").html(counter);
	}
}
function timedOut(){
	alert('Finish');

}
startButton();
});