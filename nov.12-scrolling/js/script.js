/* js goes here */
	(function(){

	window.addEventListener('scroll', scrollfunction);

	function scrollfunction(evt){
		fixedNav();
	}

	var bodyObj = document.body,
		headerObj = document.getElementsByTagName('header')[0],
		mainObj = document.getElementsByTagName('main')[0];

	/**
	*Function fetches css applied styles.
	*	x needs to be a js object
	*	y needs to be css property
	*/

	function reqStyle(x, y){
		return parseInt(window.getComputedStyle(x, null).getPropertyValue(y));
	}

	/**
	*Function converting px to vw / vw to px.
	*	num needs to be an integer.
	*/

	function calcUnit(num){
		return (document.documentElement.clientWidth / num);
	}

	function fixedNav(){
		var scrollDist = window.scrollY;
		if(scrollDist > reqStyle(bodyObj, 'padding-top')){
			headerObj.classList.add('fixie');
			mainObj.style.paddingTop = (calcUnit(10) + headerObj.clientHeight) + 'px';
			 
		}else{
			headerObj.classList.remove('fixie');
			mainObj.style.paddingTop = '10vw';
		}
	}


	function colorChange(){
		var cH = document.documentElement.clientHeight,
			sH = document.documentElement.scrollHeight;
		console.log(Math.round(sH / cH));	
	}
	colorChange();
})();


















