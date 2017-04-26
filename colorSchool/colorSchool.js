var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var targetedColor = targetColor();

var rgbDisplay = document.querySelector("#rgbDisplay");
var messageDisplay = document.querySelector("#message");

rgbDisplay.textContent = targetedColor;

for(var i = 0; i < squares.length; i++){
	
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.background;
		console.log(clickedColor +" " + " " +targetColor);
		//compare color to target color
		if(clickedColor === targetedColor){
			this.style.background
			messageDisplay.textContent = "CORRECT! You Win!";
			turnColors(clickedColor);
		} else {
			this.style.background = "#262626";
			messageDisplay.textContent = "Try Again!";
		}
	});
}

function turnColors(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = targetColor;
	}
}
function targetColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	for(var i = 0; i < num; i++){
		//push random color into array
		arr.push(randomColor())
	}
	return arr;
}

function randomColor(){
	//pick red from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick green from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick blue from 0 - 255
	var b = Math.floor(Math.random() * 256);

	
	return "rgb(" + r + ","+ g + ", "+ b +")";

	
}