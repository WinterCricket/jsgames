
var pblueButton = document.querySelector("#pblue");
var porangeButton = document.querySelector("#porange");
var resetButton = document.querySelector("#reset");
//
var h1 = document.querySelector("h1");

var pblueScore = 0;
var porangeScore = 0;


pblueButton.addEventListener("click", function(){
	pblueScore++;
	console.log(pblueScore);
	h1.textContent = pblueScore;
});
porangeButton.addEventListener("click", function(){
	porangeScore++;
	console.log(porangeScore);
});
resetButton.addEventListener("click", function(){
	alert("Clicked!");
});