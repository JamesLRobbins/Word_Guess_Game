// Global Variables

var gameSelection = ["Contra", "Sonic"];
var wins = 0;
var loss = 0;
var wrongGuess = [];
var guessesLeft = 9;
var blanks = [];
var guesses = [];
var answer;
var winCounter = 0;

// Functions

function startGame() {
    // Picks answer
    resetGame();
answer = gameSelection[Math.floor(Math.random() * gameSelection.length)];
console.log(answer);


for(var i = 0; i < answer.length; i++) {
    blanks.push('_');
}

    document.getElementById("answer").textContent = blanks.join(" ");

    wrongGuess = [];
    guessesLeft = 9;

    
    
    

}

function resetGame() {

    

}

function winLose() {

    if(wins === answer.length) {

        alert("Winner!");
        document.getElementById("wins").textContent = "Wins: " + wins;
        startGame();
    } else if (guessesLeft === 0) {
        alert("Loser!");
        document.getElementById("losses").textContent = "Losses: " + loss;
        startGame();
    }


}

document.onkeyup = function(event) {
    guesses = event.key;
    
    if(answer.indexOf(guesses) > -1) {

        for(var i = 0; i < answer.length; i++) {
            if(answer[i] === guesses) {
                blanks[i] = guesses;
                console.log(blanks);
                wins++;
                winLose();
            }
        }

    } else {
        wrongGuess.push(guesses);
        guessesLeft--;
        loss++;
        document.getElementById("guessesLeft").textContent = "Guesses Left: " + guessesLeft;
        winLose();
        
    }

}

// Main

startGame();






