let playerSelection;
        let computerSelection;

        function getComputerChoice() {
        
        computerSelection = (min,max) => (Math.floor(Math.random() * (max - min + 1) ) + min);

        return computerSelection(1,3);

        }

        function playRound(playerSelection, computerSelection) {

            // 1 = Rock; 2 = Paper; 3 = Scissors.
            console.log(playerSelection);
            console.log(computerSelection);
            if (playerSelection === computerSelection) console.log("Tie!");
            else if (playerSelection === 1 && computerSelection === 2) console.log("You Lose! Paper beats Rock!");
            else if (playerSelection === 1 && computerSelection === 3) console.log("You Win! Rock beats Scissors!");
            else if (playerSelection === 2 && computerSelection === 1) console.log("You Win! Paper beats Rock!");
            else if (playerSelection === 2 && computerSelection === 3) console.log("You Lose! Scissors beats Paper!");
            else if (playerSelection === 3 && computerSelection === 1) console.log("You Lose! Rock beats Scissors!");
            else if (playerSelection === 3 && computerSelection === 2) console.log("You Win! Scissors beats Paper!");
            else console.log("Please enter Rock, Paper or Scissors");

        }

        function getPlayerChoice() {

            let answer = prompt("Rock, Paper or Scissors?").toUpperCase();

            if (answer === "ROCK") return 1;
            if (answer === "PAPER") return 2;
            if (answer === "SCISSORS") return 3;

            return 4;

        }

        function game() {

            for (let i = 0; i < 5; i++) playRound(getPlayerChoice(), getComputerChoice());
        }

        game();