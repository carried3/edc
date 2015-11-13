/* js goes here */

var NameLI = document.getElementById('Name');
var AddressLI = document.getElementById('Address');
var CityStateZipLI = document.getElementById('CityStateZip');


var myFirstName ='Carrie',
	myLastName = 'Dilbeck',
	myAddress = 'Copper & Fowler',
	myCity,
	myState,
	myZip;



NameLI.textContent = myFirstName + ' ' + myLastName;
AddressLI.textContent = myAddress;




function getInfo(){
	myCity = prompt('what city');
	myState = prompt('my state');
	myZip = parseInt(prompt('what zip'));
	if(!myCity || !myState || !myZip){
	// if(myCity '' || myState || myZip){
		console.log('there was a problem');
		alert('please try again');
		getInfo();
		
	}else{
		var isCorrect = confirm('is this correct?\n' + myCity + ", " + myState + ", " + myZip);
		CityStateZipLI.textContent = myCity + " " + myState + " " + myZip;
		if(!isCorrect){
			getInfo();
		}
		// alert(" You live in " + myCity + " " + myState + " " + parseInt(myZip));
	}
	
}

// var city = prompt("What City do you live in?"),
// 	state = prompt("What state do you live in?"),
// 	zip = parseInt(prompt("what is your zip code?"));
	
	// console.log(typeof zip);