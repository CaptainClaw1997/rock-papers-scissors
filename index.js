function computerPlay() {
    const randomNumber = Math.ceil(Math.random() * 3);
    let computerSelection = '';
    switch (randomNumber) {
        case 1: 
            computerSelection = 'Rock';
            break;

        case 2:
            computerSelection = 'Paper';
            break;

        case 3:
            computerSelection = 'Scissors';
            break;

        default:
            throw "Computer experienced an error: Illegal choice made by computer";
    }

    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    const WIN = 1;
    const LOSS = -1;
    const DRAW = 0;

    let result;
    let message = "";

    // Draw cases
    if (computerSelection === playerSelection) {
        result = DRAW;
    }
    // Non-draw cases
    else if (computerSelection === 'Rock') {
        if (playerSelection === 'Paper') {
            result = WIN;
        }
        else {
            result = LOSS;
        }
    }
    else if (computerSelection === 'Scissors') {
        if (playerSelection === 'Rock') {
            result = WIN;
        }
        else {
            result = LOSS;
        }
    }
    else if (computerSelection === 'Paper') {
        if (playerSelection === 'Scissors') {
            result = WIN;
        }
        else {
            result = LOSS;
        }
    }

    if (result === DRAW) {
        message = `Draw! Both chose ${playerSelection}`;
    }
    else if (result === WIN) {
        message = `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (result === LOSS) {
        message = `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    else {
        throw "Error encountered while playing the game";
    }

    return message;
}

function game() {
    const buttons = document.querySelectorAll("button");
    attachEventListeners(buttons);
}

function isValidPlayerSelection(playerSelection) {
    return (playerSelection === 'Rock' || playerSelection === 'Paper' || playerSelection === 'Scissors') ? true : false;
}

function cleanPlayerSelection(playerSelection) {
    // Player Selection needs to have first letter in upper case and the rest in lower case
    return playerSelection.substr(0,1).toUpperCase() + playerSelection.substr(1, playerSelection.length - 1).toLowerCase();
}

function attachEventListeners(buttons) {
    buttons.forEach((button) => button.addEventListener('click', (e) => {
        const playerSelection = e.target.getAttribute("data-choice");
        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);

        display(result, playerSelection, computerSelection);
    }));
}

function display(result, playerSelection, computerSelection) {
    const resultDiv = document.querySelector("#result");
    //const result;
    resultDiv.innerText = `Player chose: ${playerSelection}
    Computer chose: ${computerSelection}
    Result: ${result}`;
}

game();