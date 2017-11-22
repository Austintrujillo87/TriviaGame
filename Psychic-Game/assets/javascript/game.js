var options = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var wins = 0;
var losses = 0;
var guesses = 9;
for(i=0; i<9; i++){	
	document.onkeyup = function(event) {
		var userGuess = event.key;
		console.log(userGuess);
		var computerGuess = options[Math.floor(Math.random()*options.length)];
		console.log(wins + " " + losses + " " + guesses);
		if(userGuess == computerGuess){
			wins++;
		} 
		guesses--;
		if((guesses == 0)&&(userGuess != computerGuess)){
			losses++;
			guesses=9;
			document.getElementById("losses").innerHTML = "Losses: " + losses;
			document.getElementById("guesses").innerHTML = "Your Guesses so far: ";
		}
		else if((guesses == 0)&&(userGuess == computerGuess)){
			wins++;
			guesses=9;
			document.getElementById("guesses").innerHTML = "Your Guesses so far: ";
		}
		document.getElementById("wins").innerHTML = "Wins: " + wins;
		document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guesses;
		document.getElementById("guesses").insertAdjacentHTML('beforeend', userGuess + " ")
	}  
    }