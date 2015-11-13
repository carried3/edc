/* js goes here */
var clickbtn = document.getElementsByTagName("button")[0],
	inputEL = document.getElementsByTagName("input"),
	footId = document.getElementById("results");


clickbtn.addEventListener("click", disableMe);
inputEL[1].addEventListener("click", getInfo);

function getUserName(){
	var firstName = prompt(" What is your first name? ");
	var newEL = document.createElement("h1");
	var parentEL = clickbtn.parentNode;
	
	newEL.textContent = " Welcome " + firstName + "  please click, click me button ";
	console.log(firstName);
	if(isNaN(firstName)){
		parentEL.insertBefore(newEL, clickbtn);
	}
}
getUserName();

function disableMe(){
	
	for(var i = 0; i < inputEL.length; i++){

		if (inputEL[i].disabled) {
		inputEL[i].disabled = false;
		
		}else{
		inputEL[i].disabled = true;
		}
		inputEL[0].value = "";
	}	
}
function getInfo(){
	
	if (!!inputEL[0].value && !isNaN(inputEL[0].value)) {
		var infoVal = inputEL[0].value;
		// footId.textContent = infoVal;
		footId.textContent = getRand(infoVal);
		disableMe();
		
	}else{
		var infoVal = inputEL[0].value;
		footId.textContent = (infoVal + " is not a number ");
		inputEL[0].value = "";
	}
}
function getRand(x){
	var y = Math.floor(Math.random() * 100) + 1;
	return x * y;

}




