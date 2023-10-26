
const options = ["rock", "paper", "scissors"]

function getComputerChoice() {
    const item = options[Math.floor(Math.random()*options.length)]
    return item
}

function updateComputerChoice(text) {
    const $computerChoice = document.querySelector('.computer-choice')
    $computerChoice.textContent = text
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice()
    const $computerChoice = document.querySelector('.computer-choice')
    $computerChoice.textContent = computerSelection

    if(playerSelection === computerSelection) {
        return('draw')
    }
    if (
        (playerSelection === "rock" && computerSelection === "paper")
        | (playerSelection === 'paper' && computerSelection === 'scissors')
        | (playerSelection === 'scissors' && computerSelection === 'rock')
    ) {
        return ('computer')
    }
    return ('player')
}

function updateResultText (text) {
    const $result = document.querySelector('.result-text');
    $result.textContent = text;
}

function updateScores() {
    if(playerScore === 3 || computerScore === 3) {
        const buttons = document.querySelectorAll('.input-button');
        buttons.forEach(button => {button.disabled = true})
    }
    const $playerScore = document.querySelector('.player-score');
    const $computerScore = document.querySelector('.computer-score');
    $playerScore.textContent = `Player score: ${playerScore}`
    $computerScore.textContent = `Computer score: ${computerScore}`
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScores();
    const buttons = document.querySelectorAll('.input-button');
    buttons.forEach(button => {button.disabled = false});
    updateResultText('');
    updateComputerChoice('');
}

function game() {
    const buttons = document.querySelectorAll('.input-button');
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const playerChoice = event.target.textContent.toLowerCase()
            const result = playRound(playerChoice)
            if(result === 'draw') {
                updateResultText('draw')
            } else if (result === 'player') {
                updateResultText ('the player wins the round!')
                playerScore++;
            } else {
                updateResultText('the computer wins the round!')
                computerScore++;
            }
            updateScores()
        })
    })
    const $resetButton = document.querySelector('.reset-button');
    $resetButton.addEventListener('click', resetGame)
}

let playerScore = 0;
let computerScore = 0;
game();