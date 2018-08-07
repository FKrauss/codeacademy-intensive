const printBoard = board => {
  console.log('Current Board: ');

  for (let i = 0 ; i < board.length ; i++){
  	let row = board[i].join(' | ');
  	console.log(row);
	}
};

const generatePlayerBoard = (numRows, numCols) =>{
	let emptyboard = []
	for (let i = 0 ; i < numRows; i++){
		let row = [];

		for(let j = 0 ; j < numCols; j++){
			row.push(' ');
		}
		emptyboard.push(row);
	}
	return emptyboard
}




const generateBombBoard = (numRows, numCols, numBombs) => {

let bombBoard = generatePlayerBoard(numRows,numCols);

	// add the bombs, no control for placing them in the same place
	let numOfBombsPlaced = 0
	while (numOfBombsPlaced < numBombs) {

		let bombCol = Math.floor((Math.random() * numCols));
		let bombRow = Math.floor((Math.random() * numRows));
		if (bombBoard[bombRow][bombCol] === " ") { 
			bombBoard[bombRow][bombCol] = "B";
			numOfBombsPlaced += 1;
		}
		
	}

	return bombBoard;

};

const getNumberOfNeighborBombs = (x, y, board) => {
let numOfBombsAround = 0



}




// main execution piece
console.log("Player Board: ");
printBoard(generatePlayerBoard(3, 4));
console.log("Bomb Board: ");
printBoard(generateBombBoard(8, 10, 10));