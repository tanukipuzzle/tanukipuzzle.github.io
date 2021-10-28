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
	colorText("CoNgratulatioNs, Ishy!!", 295,120, "white");
	colorText("All of these pictures have something in common,",180,500, "white");
	colorText("but the answer may not be so simple.",220,520, "white");
	colorText("Look once and look again, what letter stands out?",180,540, "white");
	}
}