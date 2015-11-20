var divObj = document.getElementsByTagName('div')[0];
var btn = document.getElementsByTagName('button')[1];
var guessBox = document.querySelector('input[type=text]');
var catCode = '<img src="img/kitten.png">';
var resetBtn = document.getElementById('newBtn');
var htmlObj = document.getElementsByTagName('html')[0];
var badges = document.querySelectorAll('form img');

var strayCats = 0;

divObj.innerHTML = catCode;
btn.addEventListener('click', submitGuess);
resetBtn.addEventListener('click', clearGame);

function startGame(){
	divObj.innerHTML = '';
	strayCats = randomNum(50);
	console.log(strayCats);

	for(var i = 0; i < strayCats; i++){
		divObj.innerHTML += catCode;
	}
	
}
startGame();
function randomNum(max){
	return Math.floor(Math.random() * (max - 1 + 1)) + 1;
}
randomNum();
function submitGuess(evt){
	evt.preventDefault();
	var guess = guessBox.value;
	guessBox.disabled = true;
	checkGuess(guess);
	
}

function checkGuess(guess){
	if (!isNaN(parseInt(guess)) && guess == strayCats) {
		getAward(true);
	}else{
		getAward(false);
	}
}
function getAward(x){
	badges[+x].style.display = 'block';
	if(x){
		htmlObj.style.backgroundColor = 'hsla(100, 20%, 40%, 1)';

	}else{
		htmlObj.style.backgroundColor = 'hsla(0, 50%, 50%, 1)';
	}
}
function clearGame(){
	divObj.innerHTML = '';
	guessBox.value = '';
	guessBox.disabled = false;
	htmlObj.style.backgroundColor = 'white';
	startGame();
	for(var i = 0; i < badges.length; i++){
		badges[i].style.display = 'none';
	}
}