/* js goes here */
document.addEventListener('DOMContentLoaded', function(){

	var page2Btn = document.getElementById('btn1'),
		mainObj = document.getElementsByTagName('main')[0];
	var pageTwo =
		'<h1>This is page two</h1>'+
		'<div class="cta"><p>Check out the next page</p></div>'+
		'<footer>Coyright 2015</footer>';
	page2Btn.addEventListener('click', function(){
		mainObj.innerHTML = pageTwo;
	});
	 
	var page3Btn = document.getElementById('btn2'),
		mainObj = document.getElementsByTagName('main')[0];
	var pageThree =
		'<main>'+
		'<p></p>'+
		'<textarea name="" id="" cols="40" rows="15"></textarea>'+
		'<div><p>0</p>/<p>0</p></div>'+
		'</main>';
	page3Btn.addEventListener('click', function(){
		mainObj.innerHTML = pageThree;
	});	
	var textObj = document.getElementsByTagName('textarea')[0],
		keyOutput = document.querySelector('main div p:first-child'),
		delOutput = document.querySelector('main div p:last-child'),
		timeOutput = document.querySelector('main p:first-child'),
		characterNum = 0,
		deleteNum = 0;

	var	keyTimer,
		timeStart = 30,
		timeLeft = timeStart;	

	//textObj.addEventListener('keypress', getCharacter);
	//textObj.addEventListener('keydown', checkDelete);
	//textObj.addEventListener('focus', keyTimer);	


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
	}
});
