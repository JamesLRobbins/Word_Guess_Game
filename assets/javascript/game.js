// Global Variables

var gameSelection = ["contra", "sonicthehedgehog", "ninjagaiden", "mariokart64", "supermario64", "castlevania", "duckhunt", "megaman", "supermariobros", "donkeykongcountry", "earthwormjim", "finalfight", "mortalkombat", "metroid", "alteredbeast", "goldenaxe", "kidchameleon", "quackshot", "streetsofrage", "toejamandearl"];
var wins = 0;
var loss = 0;
var wrongGuess = [];
var guessesLeft = 9;
var blanks = [];  
var guesses = [];
var answer;
var correct = 0;



// Functions



// Start Game
function startGame() {
    
answer = gameSelection[Math.floor(Math.random() * gameSelection.length)];
console.log(answer);

document.getElementById("wins").textContent = "Wins: " + wins;
document.getElementById("losses").textContent = "Losses: " + loss;
document.getElementById("guessesLeft").textContent = "Guesses Left: " + guessesLeft;
document.getElementById("start").textContent = " ";
guesses = []
wrongGuess = []
guessesLeft = 9;


    for(var i = 0; i < answer.length; i++) {
         blanks.push('_');
    }

        document.getElementById("answer").textContent = blanks.join(" ");      
}


// Win/Lose
function winLose() {

    if(correct === answer.length) {
        wins++;
        alert(answer + " is correct!");
        blanks = []
        correct = 0;
        startGame();
    } else if (guessesLeft === 0) {
        loss++;
        alert("Loser!");
        blanks = []
        startGame();
        
    }


}

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
        document.getElementById("guesses").textContent = "Guesses: " + wrongGuess;
        
        winLose();
        
    }

    

    

}

startGame();



//Check for answer






// Main





