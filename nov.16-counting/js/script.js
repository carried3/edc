/* js goes here */
var divObj = document.getElementsByTagName('div')[0];
var btn = document.getElementsByTagName('button')[0];
var guessBox = document.querySelector('input[type=text]');
var catCode = '<img src="img/kitten.png">';

// divObj.innerHTML = catCode;
btn.addEventListener('click', submitGuess);

function submitGuess(evt){
	var guess = guessBox.value;
	checkGuess(guess);
}

function checkGuess(x){
	console.log(x);
}

