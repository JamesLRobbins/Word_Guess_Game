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
var correctGuess = "";
var guessArray = [];



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


/*
In WinorLose win condition

if(crrctGuess.length == answer.length)
{
    for(i = 0; i )


}




*/


// Win/Lose
function winLose() {
    console.log("In WinOrLose");
    if(correctGuess === answer) {
        console.log("In win");
        wins++;
        alert(answer + " is correct!");
        blanks = []
        correct = 0;
        correctGuess = ""
        startGame();
    } else if (guessesLeft === 0) {
        console.log("In lose.");
        loss++;
        alert("You lost!");
        blanks = []
        startGame();
        
    }


}

document.onkeyup = function(event) {
    guesses = event.key;

    console.log("IM HERE!!!!!");
    console.log("CorrectGuess Length: " + correctGuess.length);
    if(answer.indexOf(guesses) > -1) {
        console.log("In IF in KeyUp");           
        for(var i = 0; i < answer.length; i++) {
            if(answer[i] === guesses) {
            if(correctGuess.length != 0)
            {
                for(var x = 0; x < correctGuess.length; x++)
                {
                for(var y = 0; y < guessArray.length; y++)
                {
                    if(correctGuess[x] != guesses && guessArray[y] != guesses)
                    {
                        console.log("in correctGuess !if")
                        correctGuess += guesses;
                        guessArray.push(guesses);
                    }
                }//end for y
                }//end for x
            }
            else if(correctGuess.length == 0)
            {
                correctGuess += guesses;
                guessArray.push(guesses);
            }

                //correctGuess += guesses;
                blanks[i] = guesses;
                document.getElementById("answer").textContent = blanks.join(" ");
                correct++
                console.log("correctGuess: " + correctGuess);
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





