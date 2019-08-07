// Global Variables

var gameSelection = ["contra", "sonic"];
var wins = 0;
var loss = 0;
var wrongGuess = [];
var guessesLeft = 9;
var blanks = [];
var guesses = [];
var answer;
var winCounter = 0;
var correct = 0;

// Functions

// Start Game
function startGame() {
    

answer = gameSelection[Math.floor(Math.random() * gameSelection.length)];
console.log(answer);

}

function answer() {

for(var i = 0; i < answer.length; i++) {
    blanks.push('_');
}

    document.getElementById("answer").textContent = blanks.join(" ");

    wrongGuess = [];
    guessesLeft = 9;

}


// Win/Lose
function winLose() {

    if(correct === answer.length) {

        alert("Winner!");
        document.getElementById("wins").textContent = "Wins: " + wins;
        wins++;
        
        
        startGame();
    } else if (guessesLeft === 0) {
        alert("Loser!");
        document.getElementById("losses").textContent = "Losses: " + loss;
        startGame();
        loss++;
    }


}

//Check for answer

document.onkeyup = function(event) {
    guesses = event.key;
    
    if(answer.indexOf(guesses) > -1) {

        for(var i = 0; i < answer.length; i++) {
            if(answer[i] === guesses) {
                blanks[i] = guesses;
                document.getElementById("answer").textContent = blanks.join(" ");
                correct++
                winLose();
            }
        }

    } else {
        wrongGuess.push(guesses);
        guessesLeft--;
        document.getElementById("guessesLeft").textContent = "Guesses Left: " + guessesLeft;
        winLose();
        
    }

}

// Main

startGame();






