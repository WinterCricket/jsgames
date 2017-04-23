var colors = [
"rgb(255, 0, 0)",
"rgb(0, 255, 0)",
"rgb(0, 0, 255)",
"rgb(255, 255, 0)",
"rgb(255, 0, 255)",
"rgb(0, 255,255)",
];
var squares = document.querySelectorAll(".square");
var targetColor = targerColor();

var rgbDisplay = document.querySelector("#rgbDisplay");
var messageDisplay = document.querySelector("#message");

rgbDisplay.textContent = targetColor;

for(var i = 0; i < squares.length; i++){
	
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.background;
		console.log(clickedColor +" " + " " +targetColor);
		//compare color to target color
		if(clickedColor === targetColor){
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