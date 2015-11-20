var htmlObj = document.querySelector('html');
var inputBx = document.querySelector('input[type=text]');
var colorBox = document.querySelector('input[type=color]');
var submitBtn = document.getElementsByTagName('button')[0];
var inputDate = document.querySelector('input[type=date]');

submitBtn.addEventListener('click', function(){
	var val = inputBx.value;
	var color = colorBox.value;
	var dateVal = inputDate.value;
	getName(val);
	getColor(color);
	myDate(dateVal);
});

// inputBx.addEventListener('blur', inputGrab);

// function inputGrab(){
// 	var valNew = inputBx.value;
// 	console.log(valNew);
// }
function getName(x){
	var resp = parseInt(x);
	if(!isNaN(resp)){
		console.log(true);
	}
}
function getColor(y){
	htmlObj.style.backgroundColor = y;
}
function myDate(z){
	console.log(z);
}

