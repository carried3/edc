
function Person(name, age, job){
	this.name = name;
	this.age = age;
	this.job = job;
}

var person1 = new Person('SantaClaus', 1750, 'gives gifts');
var person2 = new Person('EasterBunny', 500, 'gives eggs');
var person3 = new Person('Cupid', 1000, 'shoots love');
var person4 = new Person('GreatPumpkin', 400, 'scares kids');
var person5 = new Person('UncleSam', 88, 'tax collector');

var person = function(){
	for(i = 0; i < arguments.length; i++){
		console.log(arguments[i]);
	}
}(person1, person2, person3, person4, person5);




