var numSquares = 6;
var colors = generateRandomColors("numSquares");
var squares = document.querySelectorAll(".square");
var targetedColor = targetColor();

var rgbDisplay = document.querySelector("#rgbDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");

for(var i =0; i < modeBtns.length; i++){
	modeBtns[i].addEventListener("click", function(){
		modeBtns[0].classList.remove("selected");
		modeBtns[1].classList.remove("selected");
		this.classList.add("selected");
	});
}

function reset()
// easyBtn.addEventListener("click", function(){
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	colors = generateRandomColors(3);
// 	targetedColor = targetColor();
// 	rgbDisplay.textContent = targetedColor;
// 	for(var i = 0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.background = colors[i];
// 		} else {
// 			squares[i].style.background = "none";
// 		}
// 	}
// });

// hardBtn.addEventListener("click", function(){
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.add("selected");
// 	colors = generateRandomColors(6);
// 	targetedColor = targetColor();
// 	rgbDisplay.textContent = targetedColor;
// 	for(var i = 0; i < squares.length; i++){
		
// 			squares[i].style.background = colors[i];

// 			squares[i].style.background = "block";
		
// 	}
// });

resetButton.addEventListener("click", function(){
	
	//generate all new colors, take from above
	colors = generateRandomColors(6);
	//pick new random color from array as target
	targetedColor = targetColor();
	//chanbe rgbDisplay to new targetedColor
	rgbDisplay.textContent = targetedColor;
	this.textContent = "New Colors";
	messageDisplay.textContent = "";
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
			messageDisplay.textContent = "Correct!";
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
