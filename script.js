let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor(Math.random() * 10);
}

function compareGuesses(humanGuess, cpuGuess, secretNumber) {
    if ((humanGuess >= 0) && (humanGuess <= 9)) {
        if (Math.abs(secretNumber - humanGuess) < Math.abs(secretNumber - cpuGuess)) {
            return true;
        } else if (Math.abs(secretNumber - humanGuess) === Math.abs(secretNumber - cpuGuess)) {
            return true;
        } else {
            return false;
        }
    } else {
        alert("Guess is not a valid number between 0 and 9!");
    }
}

function updateScore(winner) {
    if (winner === 'human') {
        humanScore++;
    } else {
        computerScore++;
    }
}

function advanceRound() {
    currentRoundNumber++;
}