const choice = ['Rock','Paper','Scissors'];
console.log(choice);

function getComputerChoice() {
    let compIndex = Math.floor(Math.random() * 3);
    let compChoice = choice[compIndex];
    console.log(compChoice);
}

getComputerChoice();
getComputerChoice();
getComputerChoice();
getComputerChoice();
getComputerChoice();