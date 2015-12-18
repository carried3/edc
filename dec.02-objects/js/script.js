/* js goes here */

var promo1plan = 'basic';
var promo1price = 3.99;
var promo1space = 100;
var promo1speed = 1000;
var promo1sites = 1;

var promo2plan = 'professional';
var promo2price = 5.99;
var promo2space = 250;
var promo2speed = 2500;
var promo2sites = 5;

var promo3plan = 'ultimate';
var promo3price = 19.99;
var promo3space = 1000;
var promo3speed = 5000;
var promo3sites = 10;


var promo1 = {
	plan:'basic',
	price: 3.99,
	space: 100,
	speed: 1000,
	site: 1
};
var promo2 = {
	plan:'professional',
	price: 5.99,
	space: 250,
	speed: 2500,
	site: 5
};
var promo3 = {
	plan:'ultimate',
	price: 19.99,
	space: 1000,
	speed: 5000,
	site: 10
};

var person = {
	name: 'Santa Claus',
	age: 1745,
	job: 'deliver gifts',
	greeting: function(x){
		alert("Hello " + x + ", my name is " + this.name + ", I'm " + this.age + " years old, and I " + this.job + " for a living. ");
	}
}

person.greeting('Carrie');


var hotel = {
	name: 'hyatt',
	rooms: 120,
	booked: 65,
	gym: true,
	testMethod: function(x){
		return x;

	},
	checkAvailability:function(){
		return this.rooms - this.booked;
	}	
};


hotel.roomTypes = ['twin', 'queen', 'king', 'suite'];
hotel.gym = false;
hotel.amenities = {};


delete hotel.gym;

var propertyExist = 'booked' in hotel;

console.log( hotel.testMethod(hotel) );


// console.log('The ' +promo1.plan+ ' hosting plan is $'+promo1.price+' per month giving you '+promo1.site+' site.');
// console.log(promo1.price + ',' + promo1.site);

var scanPromos = function(){

	var mainObj = document.getElementsByTagName('main')[0];

	var newUl = document.createElement('ul');
	mainObj.appendChild(newUl);

	promo1.discountMonth = [7, 12];

	for(var key in arguments[0]){
		// console.log(key);
		// console.log(promo1[key]);

		// if(promo1.discountMonth) 
	}

	// for (var i = 0; i < promo1.discountMonth.length; i++) {
	// 		console.log(promo1.discountMonth[i]);
	// }

	promo1.discountMonth = [12];

	for(var key in arguments[0]){
		// console.log(key);
		// console.log(promo1[key]);

		// if(promo1.discountMonth) 
	}
	
}(promo1);






