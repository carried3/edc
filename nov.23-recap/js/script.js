/* js goes here */
var htmlObj = document.getElementsByTagName('html')[0];
var dropdowns = document.getElementsByClassName('dropdown');
var optionsForm = document.getElementsByTagName('form')[0];
var submitBtn = document.querySelector('input[type=submit]');
var navTimer;


optionsForm.addEventListener('click', function(evt){
	evt.stopPropagation();//prevent event bubbling
});
submitBtn.addEventListener('click', getFormVals);

for (var i = 0; i < dropdowns.length; i++) {
	
	(function(){
		dropdowns[i].addEventListener('mouseenter', delayDropdown);
		dropdowns[i].addEventListener('mouseleave', hideDropdown);

		function delayDropdown(){
			navTimer = window.setTimeout(showDropdown, 500, this);
		}


		function toggleDropdown(){
			this.classList.toggle('visible');
		}

		function showDropdown(x){
			clearTimeout(navTimer);
			x.classList.toggle('visible');
		}
		
	})();
}
function hideDropdown(x){
	clearTimeout(navTimer);
	this.classList.remove('visible');
	console.log(x);
}
function getFormVals(evt){
	var configArr = [];
	evt.preventDefault();
	for (var j = 0; j < optionsForm.elements.length - 1; j++) {
		configArr.push(optionsForm.elements[j].value);
	}
	htmlObj.style.backgroundColor = configArr[1];
	
	hideDropdown(this.parentElement.offsetParent);
}