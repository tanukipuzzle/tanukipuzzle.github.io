window.onload = function(){
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');

	colorRect(0,0, canvas.width,canvas.height, 'black');
	loadImages();
	randomizeGrid();
	var framesPerSecond = 30;
	gameOn = setInterval(updateAll,1000/framesPerSecond);

	canvas.addEventListener('mousedown',handleMouseClick);

	canvas.addEventListener('mousemove',
		function(evt) {
			mousePos =  calculateMousePos(evt);
		});
}

function imageLoadingDoneSoStartGame(){
	var framesPerSecond = 30;
	gameOn = setInterval(updateAll,1000/framesPerSecond);
}

function updateAll(){
	if (puzzlesCompleted < 3){
	drawPuzzle();
	drawMoving();
	drawButtons();}
	else{
	colorRect(0,0, canvas.width,canvas.height, 'black');
	puzzleGrid = [1, 2, 3, 
				  4, 5, 6, 
				  8, 9, 10];
	movingGrid = [1, 2, 3, 
			  	4, 5, 6, 
			  	8, 9, 10];
	drawPuzzle();
	drawMoving();
	colorText("CoNgratulatioNs, Ishy!!", 300,100, "white");
	colorText("Now that you have fiNished all puzzles, what do all the items have iN commoN?",50,520, "white");
	}
}