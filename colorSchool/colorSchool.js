var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var targetedColor = targetColor();

var rgbDisplay = document.querySelector("#rgbDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var hardBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	colors = generateRandomColors(3);
	targetedColor = targetColor();
	rgbDisplay.textContent = targetedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		}
	}
});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	colors = generateRandomColors(6);
	targetedColor = targetColor();
	rgbDisplay.textContent = targetedColor;
});

resetButton.addEventListener("click", function(){
	
	//generate all new colors, take from above
	colors = generateRandomColors(6);
	//pick new random color from array as target
	targetedColor = targetColor();
	//chanbe rgbDisplay to new targetedColor
	rgbDisplay.textContent = targetedColor;
	//change all squares to target color when correct
	for(var i = 0; i < squares.length; i++){

		squares[i].style.background = colors[i];
	}
	h1.style.background = "#262626";
});
rgbDisplay.textContent = targetedColor;

for(var i = 0; i < squares.length; i++){
	
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.background;
		// console.log(clickedColor, targetedColor);
		//compare color to target color
		if(clickedColor === targetedColor){
			// this.style.background
			messageDisplay.textContent = "CORRECT! You Win!";
			resetButton.textContent = "Play Again?";
			turnColors(clickedColor);
			h1.style.background = clickedColor;
		} else {
			this.style.background = "#262626";
			messageDisplay.textContent = "Try Again!";
		}
	});
}

function turnColors(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = color;
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
		arr.push(randomColor());
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

	
	return "rgb(" + r + ", " + g + ", " + b + ")";

}

//check all basic lang
