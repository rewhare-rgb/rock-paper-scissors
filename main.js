const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;


function startGame(playerChoice) {

    if (playerScore === 5 || computerScore === 5) {
        return;
    }

    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = ("TIE!");
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") || 
        (playerChoice === "paper" && computerChoice === "rock") || 
        (playerChoice === "scissors" && computerChoice === "paper")
        ) {
            result = "YOU WIN!";
        } else {
            result = "YOU LOSE!";
        }

        playerDisplay.textContent = `PLAYER: ${playerChoice}`;
        computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
        resultDisplay.textContent = result;

        resultDisplay.classList.remove("greenText", "redText");

        switch (result) {
            case "YOU WIN!":
                playerScore++;
                playerScoreDisplay.textContent = playerScore;
                resultDisplay.classList.add("greenText");
                break;
            case "YOU LOSE!":
                computerScore++;
                computerScoreDisplay.textContent = computerScore;
                resultDisplay.classList.add("redText");
                break;    
        }

        if (playerScore === 5) {
            resultDisplay.textContent = "YOU WON THE GAME! 🥳";
        } else if (computerScore === 5) {
            resultDisplay.textContent = "YOU LOST THE GAME 😪"
        }

}


