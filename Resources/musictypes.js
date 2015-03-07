var music = ["1.Jazz", "2.Blues", "3.Punk", "4.Reggae", "5.Rock"];

var length = music.length;
var i = -1;

var previousButton = function(){
	if(i=== length -1){
		i = -1;
	};

	i++;
	arrayDisplayLabel.text = music[i];
};

var nextButton = function(){
	if(i === 0){
		i = length;
	}
	
	i--;
	arrayDisplayLabel.text = music[i];
};
	
buttonView1.addEventListener("click", nextButton);

buttonView2.addEventListener("click", previousButton);