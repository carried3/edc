/* js goes here */

var guy = document.getElementById('guy');
	lite = document.getElementsByTagName('span');


// console.log(lite);

for(var i = 0; i < lite.length; i++){
	lite[i].addEventListener('click', function(){
		if (this === lite [0]){
			for(var i = 0; i < lite.length; i++){
				this.parentNode.children[i].classList.remove('lit');
				this.classList.add('lit');
			}
			guy.style.animationPlayState = 'paused';
		}else if(this ===lite[1]){
			for(var i = 0; i < lite.length; i++){
				this.parentNode.children[i].classList.remove('lit');
				this.classList.add('lit');
			}
			this.classList.toggle('lit');
			guy.style.animationPlayState = 'running';
			guy.style.animationDuration = '2s';
		}else{
			for(var i = 0; i < lite.length; i++){
				this.parentNode.children[i].classList.remove('lit');
				this.classList.add('lit');
			}
			this.classList.toggle('lit');
			guy.style.animationPlayState = 'running';
			guy.style.animationDuration = '.75s';
		}
	});
}























