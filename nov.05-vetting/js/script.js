/* js goes here */
var textObj = document.getElementsByTagName('textarea')[0],
	keyOutput = document.querySelector('main div p:first-child'),
	delOutput = document.querySelector('main div p:last-child'),
	timeOutput = document.querySelector('main p:first-child'),
	compareText = document.getElementById('compare').textContent,
	characterNum = 0,
	deleteNum = 0;

var	keyTimer,
	timeStart = 30,
	timeLeft = timeStart;

textObj.addEventListener('keypress', getCharacter);
textObj.addEventListener('keydown', checkDelete);
textObj.addEventListener('focus', keyTimer);	


function checkDelete(evt){
	if(evt.which == 8 || evt.which == 46){
		deleteNum = deleteNum + 1;
		delOutput.textContent = deleteNum;
	}
}
function getCharacter(evt){
	var character;
	if(evt.which == null){
		character = String.fromCharCode(evt.keyCode);
	}else if(evt.which != 0 && evt.keyCode != 0){
		character = String.fromCharCode(evt.which);
		// console.log(character);
		if(evt.which == 46 || evt.which == 8){
			console.log('delete');
		}
	}else{
		console.log('specail key');
	}
	countCharacter();
}
function countCharacter(){
	characterNum = characterNum + 1;
	keyOutput.textContent = characterNum;
}
function keyTimer(){
	keyTimer = setInterval(countdown, 1000);
}
function countdown(){
	if(timeLeft === 0){
		clearTimeout(keyTimer);
		timeOutput.textContent = "times Up!";
		wrapUp();
	}else{
		timeOutput.textContent = timeLeft;
		timeLeft--;

	}
}
function wrapUp(){
	textObj.readOnly = true;
	var userText = textObj.value;
	console.log(compareText.localeCompare(userText) );
}









