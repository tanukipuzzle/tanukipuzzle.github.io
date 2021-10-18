var puzzlePics = [];
var movingPics = [];

var picsToLoad = 0; //set automatically based on imageList in loadImages()

function countLoadedImagesandLaunchifReady(){
	picsToLoad--;
	// console.log(picsToLoad);
	if (picsToLoad == 0) {
		imageLoadingDoneSoStartGame();
	}	
}

function beginLoadingImage (imgVar, fileName){
	imgVar.onload = countLoadedImagesandLaunchifReady;
	imgVar.src = "images/"+fileName;
}

function loadImageForPuzzleCode(puzzleCode, fileName){
	puzzlePics[puzzleCode] = document.createElement("img");
	beginLoadingImage (puzzlePics[puzzleCode], fileName);	
}

function loadImageForMovingCode(movingCode, fileName){
	movingPics[movingCode] = document.createElement("img");
	beginLoadingImage (movingPics[movingCode], fileName);	
}

function loadImages(){
//	var dataSet = {varName: carPic, theFile: "player1car.png"};

	var imageList = [
	{puzzleType: PUZZLE_EMPTY, theFile: "puzzle_empty.png"},
	{puzzleType: PUZZLE_CROSS_SLOT, theFile: "puzzle_cross_slot.png"},
	{puzzleType: PUZZLE_TRIANGLE_SLOT, theFile: "puzzle_triangle_slot.png"},
	{puzzleType: PUZZLE_CIRCLE_SLOT, theFile: "puzzle_circle_slot.png"},
	{puzzleType: PUZZLE_CROSS_SLOT_2, theFile: "puzzle_cross_slot_2.png"},
	{puzzleType: PUZZLE_TRIANGLE_SLOT_2, theFile: "puzzle_triangle_slot_2.png"},
	{puzzleType: PUZZLE_CIRCLE_SLOT_2, theFile: "puzzle_circle_slot_2.png"},
	{puzzleType: PUZZLE_CROSS_SLOT_3, theFile: "puzzle_cross_slot_3.png"},
	{puzzleType: PUZZLE_TRIANGLE_SLOT_3, theFile: "puzzle_triangle_slot_3.png"},
	{puzzleType: PUZZLE_CIRCLE_SLOT_3, theFile: "puzzle_circle_slot_3.png"},
	{puzzleType: BUTTON, theFile: "rotate_button.png"},
	{movingType: MOVING_EMPTY, theFile: "puzzle_empty.png"},
	{movingType: MOVING_CROSS, theFile: "puzzle_cross.png"},
	{movingType: MOVING_TRIANGLE, theFile: "puzzle_triangle.png"},
	{movingType: MOVING_CIRCLE, theFile: "puzzle_circle.png"},
	{movingType: MOVING_CROSS_2, theFile: "puzzle_cross_2.png"},
	{movingType: MOVING_TRIANGLE_2, theFile: "puzzle_triangle_2.png"},
	{movingType: MOVING_CIRCLE_2, theFile: "puzzle_circle_2.png"},
	{movingType: MOVING_CROSS_3, theFile: "puzzle_cross_3.png"},
	{movingType: MOVING_TRIANGLE_3, theFile: "puzzle_triangle_3.png"},
	{movingType: MOVING_CIRCLE_3, theFile: "puzzle_circle_3.png"},
	];

	picsToLoad = imageList.length;

	for(var i=0; i< imageList.length; i++) {
		if (imageList[i].varName != undefined){
			beginLoadingImage (imageList[i].varName, imageList[i].theFile);	
		} else if (imageList[i].puzzleType != undefined) {
			loadImageForPuzzleCode(imageList[i].puzzleType,imageList[i].theFile);
		} else {
			loadImageForMovingCode(imageList[i].movingType,imageList[i].theFile)
		}
	}
}