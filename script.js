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
    let result;
    switch (initialCapital(playerSelection)) {
        case "Rock":
            switch (computerSelection) {
                case "Rock": 
                    result = "Draw! Rock draws vs Rock";
                    break;
                case "Scissors":
                    result = "You won!";
                    playerPoints++;
                    break;
                case "Paper":
                    result = "You lost!";
                    computerPoints++;
                    break;
            }
        break;
        case "Scissors":
            switch (computerSelection) {
                case "Scissors": 
                    result = "Draw!";
                    break;
                case "Paper":
                    result = "You won!";
                    playerPoints++;
                    break;
                case "Rock":
                    result = "You lost!";
                    computerPoints++;
                    break;
            }
        break;
        case "Paper":
            switch (computerSelection) {
                case "Paper": 
                    result = "Draw!";
                    break;
                case "Rock":
                    result = "You won!";
                    playerPoints++;
                    break;
                case "Scissors":
                    result = "You lost!";
                    computerPoints++;
                    break;
            }
       break;
    }
    
}

console.log(getComputerChoice());
console.log(initialCapital("gINO"));