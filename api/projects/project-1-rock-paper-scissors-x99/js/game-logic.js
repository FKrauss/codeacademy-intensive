// All code should be written in this file.
const maxPoints = 99;
const minPointValue = 1;
const maxrounds = 4;

let playerOneMoveOneType = undefined;
let playerOneMoveTwoType = undefined;
let playerOneMoveThreeType = undefined;
let playerTwoMoveOneType = undefined;
let playerTwoMoveTwoType = undefined;
let playerTwoMoveThreeType = undefined;
let playerOneMoveOneValue = undefined;
let playerOneMoveTwoValue = undefined;
let playerOneMoveThreeValue = undefined;
let playerTwoMoveOneValue = undefined;
let playerTwoMoveTwoValue = undefined;
let playerTwoMoveThreeValue = undefined;

// a function to set the values
const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {
// sum the values to validate the 99 points max
let totalvalue = moveOneValue + moveTwoValue + moveThreeValue;
let allmorethanone = (moveOneValue >= minPointValue)  &&  (moveTwoValue >= minPointValue)  && (moveThreeValue >= minPointValue); 
// checks if all moves and values are defined
// checks if all move types are valid
let m1valid = moveOneType === "rock" || moveOneType === "scissors" || moveOneType === "paper";
let m2valid = moveTwoType === "rock" || moveTwoType === "scissors" || moveTwoType === "paper";
let m3valid = moveThreeType === "rock" || moveThreeType === "scissors" || moveThreeType === "paper";

// references the maximum points defined in the beginning
if (totalvalue <= maxPoints && m1valid && m2valid && m3valid && allmorethanone){
	switch (player){
		case "Player One":
			playerOneMoveOneType = moveOneType;
			playerOneMoveTwoType = moveTwoType;
			playerOneMoveThreeType = moveThreeType;
			playerOneMoveOneValue = moveOneValue;
			playerOneMoveTwoValue = moveTwoValue;
			playerOneMoveThreeValue = moveThreeValue;
		case "Player Two":
			playerTwoMoveOneType = moveOneType;
			playerTwoMoveTwoType = moveTwoType;
			playerTwoMoveThreeType = moveThreeType;
			playerTwoMoveOneValue = moveOneValue;
			playerTwoMoveTwoValue = moveTwoValue;
			playerTwoMoveThreeValue = moveThreeValue;
	}
}else {
return null
};

};

const getRoundWinner = (round) => {


switch (round){
	case 1:
		if (playerOneMoveOneType !== undefined && playerTwoMoveOneType !== undefined &&  playerOneMoveOneValue !== undefined &&  playerTwoMoveOneValue !== undefined ){
		
		if(playerOnewins(playerOneMoveOneType,playerTwoMoveOneType, playerOneMoveOneValue, playerTwoMoveOneValue) === "won"){
			return "Player One"
		} else if (playerOnewins(playerOneMoveOneType,playerTwoMoveOneType, playerOneMoveOneValue, playerTwoMoveOneValue) === "lost"){
			return "Player Two"
		} else {"Tie"}
		} else {return null};
	case 2:
		if (playerOneMoveOneType !== undefined && playerTwoMoveOneType !== undefined &&  playerOneMoveOneValue !== undefined &&  playerTwoMoveOneValue !== undefined ){
		if(playerOnewins(playerOneMoveTwoType,playerTwoMoveTwoType, playerOneMoveTwoValue, playerTwoMoveTwoValue) === "won"){
			return "Player One"
		} else if (playerOnewins(playerOneMoveTwoType,playerTwoMoveTwoType, playerOneMoveTwoValue, playerTwoMoveTwoValue) === "lost"){
			return "Player Two"
		} else {"Tie"};
		} else {return null};
	case 3:
		if (playerOneMoveOneType !== undefined && playerTwoMoveOneType !== undefined &&  playerOneMoveOneValue !== undefined &&  playerTwoMoveOneValue !== undefined ){
		if(playerOnewins(playerOneMoveThreeType,playerTwoMoveThreeType, playerOneMoveThreeValue, playerTwoMoveThreeValue) === "won"){
			return "Player One"
		} else if (playerOnewins(playerOneMoveThreeType,playerTwoMoveThreeType, playerOneMoveThreeValue, playerTwoMoveThreeValue) === "lost"){
			return "Player Two"
		} else {"Tie"};
		} else {return null};
	default:
		return null;

}

}

// function that returns if player1 won or lost
const playerOnewins = (p1move, p2move, p1value, p2value) => {
	switch (p1move){
		case "rock":
			if (p2move === "paper"){
				return "lost"
			}else if (p2move === "scissors"){
				return "won"
			}else {if (p1value > p2value){
					return "won" } 
					else if (p1value === p2value){
						return "tie"}
				else {return "lost"};
			};

		case "paper":
			if (p2move === "scissors"){
				return "lost"
			}else if (p2move === "rock"){
				return "won"
			}else {if (p1value > p2value){
					return "won" } 
					else if (p1value === p2value){
						return "tie"}
				else {return "lost"};
			};
		case "scissors":
			if (p2move === "rock"){
				return "lost"
			}else if (p2move === "paper"){
				return "won"
			}else {if (p1value > p2value){
					return "won" } 
					else if (p1value === p2value){
						return "tie"}
				else {return "lost"};
			}
	};
}


const getGameWinner = () => {

// validates if all moves were set and valid

let alldefined = (playerOneMoveOneType !== undefined) &&
(playerOneMoveTwoType !== undefined) &&
(playerOneMoveThreeType !== undefined) &&
(playerTwoMoveOneType !== undefined) &&
(playerTwoMoveTwoType !== undefined) &&
(playerTwoMoveThreeType !== undefined) &&
(playerOneMoveOneValue !== undefined) &&
(playerOneMoveTwoValue !== undefined) &&
(playerOneMoveThreeValue !== undefined) &&
(playerTwoMoveOneValue !== undefined) &&
(playerTwoMoveTwoValue !== undefined) &&
(playerTwoMoveThreeValue !== undefined) ;

// starts the score counter
let p1score = 0;
let p2score = 0;
// only run the score if all values are defined
if (alldefined){
// calculate the winner by iterating through the rounds
for (i = 1; i <= maxrounds ; i++) { 
    switch (getRoundWinner(i)){
    	case "Player One":
    	p1score += 1;
    	case "Player Two":
    	p2score += 1;
    } 

}

debugger;
// by comparing the final score, choose who the winner is
 if (p1score > p2score){
 	return "Player One"
 	} else if (p1score < p2score){
 	return "Player Two"
	} else {
	 	return "Tie"
	};
} else {
		return null;
	};
};




