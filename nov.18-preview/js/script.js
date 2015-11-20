/* js goes here */

var figImage = document.querySelectorAll('main div div:first-child img');
var figButton = document.querySelectorAll('main div div:last-child a');
var divObj = document.querySelectorAll('main div div:first-child div');

for(var i = 0; i < divObj.length; i++){
	divObj[i].addEventListener('mouseenter', divObjEnter);
	divObj[i].addEventListener('mouseleave', divObjLeave);
}
for(var i = 0; i < figImage.length; i++){
	figImage[i].addEventListener('mouseenter', figImageEnter);
	figImage[i].addEventListener('mouseleave', figImageLeave);
} 
for(var i = 0; i < figButton.length; i++){
	figButton[i].addEventListener('mouseenter', figBtnEnter);
	figButton[i].addEventListener('mouseleave', figBtnLeave);
}
function figImageEnter(){
	this.style.transform = 'scale(1.2)';
	this.style.transition = 'all 500ms ease-in-out';
}
function figImageLeave(){
	this.style.transform = 'scale(1)';
}
function figBtnEnter(){
	var infoWin = this.parentElement.previousElementSibling.lastElementChild;
	infoWin.style.top = '0%';
	infoWin.style.transition = 'all 500ms ease-in-out';
	this.style.backgroundColor = 'hsla(44, 18%, 55%, 1)';
	this.style.borderColor = 'hsla(44, 18%, 45%, 1)';
	this.style.color = 'hsla(0, 0%, 100%, 1)';	
	this.style.transition = 'all 200ms ease-in-out';
}
function figBtnLeave(){
	// var infoWin = this.parentElement.previousElementSibling.lastElementChild;
	// infoWin.style.top = '100%';
	// infoWin.style.transition = 'all 500ms ease-in-out';


	this.style.backgroundColor = 'hsla(44, 18%, 65%, 1)';
	this.style.borderColor = 'hsla(44, 18%, 55%, 1)';
	this.style.color = 'hsla(0, 0%, 9%, 1)';
}

function divObjEnter(){
	this.firstElementChild.classList.add('spin');
	console.log(this);

}
function divObjLeave(){
	this.firstElementChild.classList.remove('spin');
}









