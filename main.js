const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;


function startGame(playerChoice) {

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


// player choice

/* function playerChoice (){
    let input = prompt("Enter Rock, Paper or Scissors");
    while(!choices.includes(input)) {
        input = prompt("Invalid choice. Please enter Rock, Paper or Scissors");
    }
    return input.toLowerCase();
}
*/

// computer choice

/* function computerChoice() {

    return choices[Math.floor(Math.random() * choices.length)];
} 
*/



/* function playRound() {    

    const playerSelection = playerChoice();
    const computerSelection = computerChoice();

    console.log("Player choice:", playerSelection);
    console.log("Computer choice:", computerSelection);

    if (playerSelection === computerSelection) {
        console.log("It's a tie!");
        ;
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") || 
        (playerSelection === "paper" && computerSelection === "rock") || 
        (playerSelection === "scissors" && computerSelection === "paper")
        ) {
            console.log("Player wins!");
            ;
        } else {
            console.log("Computer wins!");
            ;

        }
}
*/

/* function playAgain() {
    const decision = prompt("Play again? (yes/no)").toLowerCase();
    if (decision === "yes") {
        playerScore = 0;
        computerScore = 0;
        ties = 0;
        game();
    } else if (decision === "no") {
        return;
    } else {
        console.log("Invalid choice. Please enter yes or no");
        playAgain();
    }
    }

    */


















