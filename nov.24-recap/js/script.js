/* js goes here */

var tog = document.getElementsByClassName('toggle')[0];
var mainObj = document.getElementsByTagName('main')[0];
var headerObj = document.getElementsByTagName('header')[0];
var ulObj = document.getElementsByTagName('ul')[0];
var winObj = window;

winObj.addEventListener('scroll', scrollDist);
tog.addEventListener('click', function(){
	mainObj.classList.toggle('lightcolor');
	headerObj.classList.toggle('lighthdr');
	ulObj.classList.toggle('changecolor');
	console.log(ulObj);
});

function scrollDist(){
	var scrollHeight = winObj.scrollY;
	var headerHeight = headerObj.clientHeight;
	var ulHeight = ulObj.clientHeight;
	if(scrollHeight > headerHeight){
		ulObj.classList.add('fixed');
		mainObj.style.paddingTop = ulHeight + 'px';
	}else{
		ulObj.classList.remove('fixed');
		mainObj.style.paddingTop = '0px';
	}
}













