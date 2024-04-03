const choices = ["rock", "paper", "scissors"]
let playerScore = 0;
let computerScore = 0;
let ties = 0;


// player choice

function playerChoice (){
    let input = prompt("Enter Rock, Paper or Scissors");
    while(!choices.includes(input)) {
        input = prompt("Invalid choice. Please enter Rock, Paper or Scissors");
    }
    return input.toLowerCase();
}


// computer choice

function computerChoice() {

    return choices[Math.floor(Math.random() * choices.length)];
}


// round

function playRound() {    

    const playerSelection = playerChoice();
    const computerSelection = computerChoice();

    console.log("Player choice:", playerSelection);
    console.log("Computer choice:", computerSelection);

    if (playerSelection === computerSelection) {
        console.log("It's a tie!");
        ties++;
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") || 
        (playerSelection === "paper" && computerSelection === "rock") || 
        (playerSelection === "scissors" && computerSelection === "paper")
        ) {
            console.log("Player wins!");
            playerScore++;
        } else {
            console.log("Computer wins!");
            computerScore++;

        }
}

function playAgain() {
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

// game with five rounds


function game() {
    for (i = 0; i < 5; i++){
        console.log("Round:", i + 1);
        playRound();
    }

    console.log("Player's Score:", playerScore);
    console.log("Computer's Score:", computerScore);
    console.log("Ties:", ties);

    if (playerScore > computerScore) {
        console.log("Congratulations! You are the winner");
    } else if (computerScore > playerScore) {
        console.log("Unlucky! You lost.")
    }

playAgain();

}

game();














