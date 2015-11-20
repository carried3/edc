/* js goes here */
var bodyObj = document.body;
var accEls = document.getElementsByTagName('li');
var lineHeight = getStyle(bodyObj, 'line-height');




function getStyle(el, prop){
	return window.getComputedStyle(el).getPropertyValue(prop);
} 


for(var i = 0; i < accEls.length; i++){
	var pHeight = accEls[i].firstElementChild.clientHeight;
	var $elP = accEls[i].firstElementChild;

	if(pHeight > parseInt(lineHeight)*2){
			$elP.style.height = parseInt(lineHeight)*2 + 'px';
			$elP.style.overflow = 'hidden';
			$elP.style.transition = 'all 500ms ease-in-out';
			$elP.classList.add('more');

		accEls[i].addEventListener('mouseenter', function(){
			this.firstElementChild.style.height = this.firstElementChild.scrollHeight + 'px';
			
		});
		accEls[i].addEventListener('mouseleave', function(){
			this.firstElementChild.style.height = parseInt(lineHeight)*2 + 'px';
			
		});
	
	}
	// var sudoEl = document.getElementsByClassName('more');

}










