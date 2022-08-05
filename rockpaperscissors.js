function getComputerChoice() {
        
let computerSelection = (min,max) => (Math.floor(Math.random() * (max - min + 1) ) + min);

return computerSelection(1,3);

}

function playRound(playerSelection, computerSelection) {

// 1 = Rock; 2 = Paper; 3 = Scissors.
let result = document.createElement('div');


if (playerSelection === computerSelection) result.textContent= 'Tie!';
else if (playerSelection === 1 && computerSelection === 2) result.textContent = 'You Lose! Paper beats Rock!';
else if (playerSelection === 1 && computerSelection === 3) result.textContent = 'You Win! Rock beats Scissors!';
else if (playerSelection === 2 && computerSelection === 1) result.textContent = 'You Win! Paper beats Rock!';
else if (playerSelection === 2 && computerSelection === 3) result.textContent = 'You Lose! Scissors beats Paper!';
else if (playerSelection === 3 && computerSelection === 1) result.textContent = 'You Lose! Rock beats Scissors!';
else if (playerSelection === 3 && computerSelection === 2) result.textContent = 'You Win! Scissors beats Paper!';

document.body.appendChild(result);


}

function getPlayerChoice() {

let buttons = document.querySelectorAll('button');

buttons.forEach(button => {

    button.addEventListener('click', () => {

        switch(button.innerText) {

            case 'Rock':
                playRound(1, getComputerChoice());
                break;
            case 'Paper':
                playRound(2, getComputerChoice());
                break;
            case 'Scissors':
                playRound(3, getComputerChoice());
                break;
        }

    });

});

}

getPlayerChoice();

