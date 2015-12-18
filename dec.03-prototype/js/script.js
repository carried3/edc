/* js goes here */
"use strict";

var Recipe = function(title, time, temp, ingredients, img){
	this.title = title;
	this.time = time;
	this.temp = temp;
	this.ingredients = ingredients;
	this.img= img;

};
Recipe.prototype.card = 'pink';
Recipe.prototype.iLove = function(){
	console.log('I love ' + this.title);
}
var recipe1 = new Recipe('cookies', 45, 350, ['eggs', 'flour', 'baking powder', 'chocolate chips', 'butter', 'vanilla','brown sugar'], '../img/images.jpg');
var recipe2 = new Recipe('mac & cheese', 45, 400, ['elbow noodles', 'dry mustard', 'flour', 'butter', 'cheese', 'salt & pepper'], '../img/Mac-and-Cheese-Recipe.jpg');
var recipe3 = new Recipe('tacos', 30, 350, ['ground turkey', 'tortillas', 'cheese', 'lettuce', 'onion', 'seasoning'], '../img/turkey-tacos.jpg');
var recipe4 = new Recipe('dirt cake', 60, 5, ['oreos', 'pudding', 'vanilla', 'milk'], '../img/the-best-dirt-cake-marcies.jpg');
var recipe5 = new Recipe('spaghetti', 45, 350, ['angel noodles', 'tomato sauce', 'seasoning', 'ground turkey'], '../img/turkey_spaghetti_sauce_2.jpg');


var printRecipe = function(){
	var mainObj = document.getElementsByTagName('main')[0];
	// var imageObj = document.getElementsByClassName('img');

	for(var i = 0; i < arguments.length; i++){
		var recipeCard = document.createElement('div');
		recipeCard.className = 'recipeCard'; 
		arguments[i].iLove();
		
		var recipe = 
			'<div class=img style="background-image: url('+arguments[i].img +');"></div>'+
			'<div class=content style="background-color:'+arguments[i].card+'">'+
			'<h1>'+ arguments[i].title +'</h1>'+
				'<ol>'+
					'<li>Cooking time:'+ arguments[i].time +'</li>'+
					'<li>Cooking Temp:'+ arguments[i].temp +'</li>'+
				'</ol>'+
				'<ul>';
					for(var j = 0; j < arguments[i].ingredients.length; j++){
						recipe += '<li>'+ arguments[i].ingredients[j] +'</li>';

					}	
				recipe +='</ul></div>';

				mainObj.appendChild(recipeCard).innerHTML = recipe;
	}
}(recipe1, recipe2, recipe3, recipe4, recipe5);






