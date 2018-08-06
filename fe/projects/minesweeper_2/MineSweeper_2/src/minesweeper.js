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



printBoard(generatePlayerBoard(5, 7));

const generateBombBoard = (numRows, numCols, numBombs) => {
	let bombBoard = []
	for (let i = 0 ; i < numRows; i++){
		let row = [];

		for(let j = 0 ; j < numCols; j++){
			row.push(' ');
		}
		bombBoard.push(row);
	}
	// add the bombs
	for (let i = 0; i < numBombs; i++) {

		let bombCol = Math.floor((Math.random() * numCols));
		let bombRow = Math.floor((Math.random() * numRows));
		bombBoard[bombRow][bombCol] = "B";
		
	}
	return bombBoard

}

printBoard(generateBombBoard(5, 7, 5));