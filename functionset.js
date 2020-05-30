let colors = generateRandomColors(6);

let squares = document.querySelectorAll(".square");
let pickedColor = randomColor();

let colorDisplay = document.querySelector('#colorDisplay');
colorDisplay.textContent = pickedColor; 
let messageDisplay = document.querySelector('#message');
let h1 = document.querySelector('h1');
let resetButton = document.querySelector('#reset');
let easyBtn = document.querySelector('#easyBtn');
let hardBtn = document.querySelector('#hardBtn');
let numOf = 6; 

easyBtn.addEventListener('click', function() {
	numOf=3;
	alert("Easy Button Clicked");
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	colors = generateRandomColors(3);
	pickedColor = randomColor();
	colorDisplay.textContent = pickedColor; 
	for(let i=0; i< squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}

	}
	
});

hardBtn.addEventListener('click', function() {
	numOf =6;
	alert("Hard Button Clicked");
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");

	colors = generateRandomColors(6);
	pickedColor = randomColor();
	colorDisplay.textContent = pickedColor; 

	for(let i=0; i< squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		}
			
		

	}
	
});


resetButton.addEventListener('click', function() {
	colors = generateRandomColors(numOf);
	this.textContent="New Colors"
	messageDisplay.textContent="";
	pickedColor = randomColor();
	colorDisplay.textContent = pickedColor; 
	for(let i=0; i< squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
});

for(let i=0; i< squares.length; i++){
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener('click', function() {
		if(this.style.backgroundColor == pickedColor){
			alert("RIGTH!!!")
			messageDisplay.textContent = "Correct!"
			changeAllColors(pickedColor);
			resetButton.textContent ="Play Again"
			h1.style.backgroundColor = pickedColor;
			}else{
			alert("WRONG ;(")
			this.style.backgroundColor ="steelblue";
			messageDisplay.textContent ="Try Again. "

		}
		
	});
}

function changeAllColors(rightColor){
	for (let i =0; i< squares.length; i++){
		squares[i].style.backgroundColor = rightColor;
	}
}

function randomColor(){
	//pick a random number
	//return color[random number]
	return colors[Math.floor(Math.random()*colors.length)]
}

function generateRandomColors(num_squares){
	let arr = []; 
	for(let i =0; i<num_squares; i++){

		arr.push("rgb("+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+")");
	}
	return arr; 
}