/* js goes here */
var socialMedia = {
	facebook: 'https://www.facebook.com/CSSTRICKS/',
	twitter: 'https://www.twitter.com/Real_Css_Tricks',
	flickr: 'https://www.flickr.com/photos/zeldman/18658541431',
	youtube: 'https://www.youtube.com/user/realcsstricks'

};

var painters = {
	leonardo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/%C3%9Altima_Cena_-_Da_Vinci_5.jpg/350px-%C3%9Altima_Cena_-_Da_Vinci_5.jpg',
	vangogh: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/300px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg',
	raphael: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Sanzio_01.jpg/300px-Sanzio_01.jpg',
	rembrandt: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Rembrandt-Belsazar.jpg/300px-Rembrandt-Belsazar.jpg",
	picasso: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/14/Picasso_The_Weeping_Woman_Tate_identifier_T05010_10.jpg/200px-Picasso_The_Weeping_Woman_Tate_identifier_T05010_10.jpg',
	munch: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/The_Scream.jpg/220px-The_Scream.jpg'
};	
var artist = function(){
	var output = '<ul>';
	var artList = document.getElementsByClassName('gallery');
	for(var key in arguments[0]){
		output += '<li><img src="' + painters[key] + '" alt="' + i + '"></li>';
	}
	output += '</ul>';
	for(var i = 0; i< artList.length; i++){
		artList[i].innerHTML = output;
	};
}(painters);



// var social = function(){
// 	var output = '<ul>';
// 	var smiList = document.getElementsByClassName('smi');
// 	for(var key in arguments[0]){
// 		output += '<li><a href="' + socialMedia[key] + '"><i class="fa fa-' + key + '"></i></a></li>';
// 	}
// 	output += '<ul>';

// 	for (var i = 0; i < smiList.length; i++) {
// 		smiList[i].innerHTML = output;
// 	};
// }(socialMedia);










