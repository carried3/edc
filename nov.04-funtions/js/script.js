/* js goes here */

var payBtn = document.getElementById('pay'),
	mainObj = document.getElementsByTagName('main')[0];

payBtn.addEventListener('click', showForm);

function showForm(){
	var formStuff = 
		'<form>'+
		'<fieldset>'+
		'<label for="name">'+
		'<span>name</span>'+
		'<div>'+
		'<input type="text" id="firstname" placeholder="first">'+
		'<input type="text" id="lastname" placeholder="last">'+
		'</div>'+
		'</label>'+
		'<label for="addr">'+
		'<span>address</span>'+
		'<div>'+
		'<span>'+
		'<input type="text" id="address" placeholder="address">'+
		'</span>'+
		'<span>'+
		'<input type="text" id="city" placeholder="city">'+
		'<select name="state" id="state">'+
		'<option value="CA">California</option>'+
		'<option value="FL">Florida</option>'+
		'</select>'+
		'<input type="text" id="zip" placeholder="zip">'+
		'</span>'+
		'</div>'+
		'</label>'+
		'</fieldset>'+
		'<fieldset>'+
		'<label for="card">'+
		'<span>credit card</span>'+
		'<div>'+
		'<input type="text" maxlength="4">'+
		'<input type="text" maxlength="4">'+
		'<input type="text" maxlength="4">'+
		'<input type="text" maxlength="4">'+
		'</div>'+
		'</label>'+
		'</fieldset>'+
		'<fieldset>'+
		'<label for="pay">'+
		'<span>amount</span>'+
		'<div>'+
		'<input type="text" placeholder="$">'+
		'<input type="submit" value="Submit">'+
		'</div>'+
		'</label>'+
		'</fieldset>'+
		'</form>';
	mainObj.innerHTML = formStuff;
}