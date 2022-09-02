//Declare the possible choices of RPS
const choice = ['Rock','Paper','Scissors'];
console.log(choice);

//Randomize the computer choice
function getComputerChoice() {
    let computerIndex = Math.floor(Math.random() * 3);
    return choice[computerIndex];
}

function initialCapital(text) {
    text = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    return text;
}

//Single round function
//function playRound(playerSelection, computerSelection) {
//    if 
//}

console.log(getComputerChoice());
console.log(initialCapital("gINO"));