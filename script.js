//Declare the possible choices of RPS
const choice = ['Rock','Paper','Scissors'];
console.log(choice);

//Randomize the computer choice
function getComputerChoice() {
    let computerIndex = Math.floor(Math.random() * 3);
    return choice[computerIndex];
}

//Capital initial letter for the inputted choices
function initialCapital(text) {
    text = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    return text;
}

//Single round function
function playRound(playerSelection, computerSelection) {
    switch (initialCapital(playerSelection)) {
        case "Rock":
            switch (computerSelection) {
                case "Rock": 
                    result = "Draw! You both played Rock";
                    break;
                case "Scissors":
                    result = "You won! Rock beats Scissors";
                    break;
                case "Paper":
                    result = "You lost! Paper beats Rock";
                    break;
            }
        break;
        case "Scissors":
            switch (computerSelection) {
                case "Scissors": 
                    result = "Draw! You both played Scissors";
                    break;
                case "Paper":
                    result = "You won! Scissors beats Paper";
                    break;
                case "Rock":
                    result = "You lost! Rock beats Scissors";
                    break;
            }
        break;
        case "Paper":
            switch (computerSelection) {
                case "Paper": 
                    result = "Draw! You both player Paper";
                    break;
                case "Rock":
                    result = "You won! Paper beats Rock";
                    break;
                case "Scissors":
                    result = "You lost! Scissors beats Paper";
                    break;
            }
       break;
       default:
           result = "Wrong input!"
           break;
    }
    return result;
}

//5 games in a row!!
function game() {
    let computerPoints = 0;
    let playerPoints = 0;
    for (let i = 0; i < 5; i++) {
        playerSelection = initialCapital(prompt("Choose Rock, Paper or Scissors!"));
        playRound(playerSelection, getComputerChoice());
        console.log(result);
        if (result.includes("won")) {
            playerPoints++;
        } else if (result.includes("lost")) {
            computerPoints++;
        } else {
            playerPoints++;
            computerPoints++;
        }
    }
    if (playerPoints > computerPoints) {
        finalScore = `Congratulations, you won! Final score is ${playerPoints} to ${computerPoints}`;
    } else if (playerPoints < computerPoints) {
        finalScore = `I'm sorry, you lost! Final score is ${playerPoints} to ${computerPoints}`;
    } else {
        finalScore = `The game was a draw! Final score is ${playerPoints} even!`
    }
    console.log(finalScore);
}

console.log(game());