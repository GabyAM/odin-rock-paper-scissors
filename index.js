
const options = ["rock", "paper", "scissors"]

function getComputerChoice() {
    const item = options[Math.floor(Math.random()*options.length)]
    return item
}

function getInputButtons() {
    return document.querySelectorAll('.input-button');
}

function updateComputerChoice(text) {
    const $computerChoice = document.querySelector('.computer-choice')
    if (text === '') $computerChoice.style.visibility = "hidden";
    else $computerChoice.style.visibility = "visible";
    $computerChoice.textContent = text
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice()
    updateComputerChoice(computerSelection);

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
        const buttons = getInputButtons();
        buttons.forEach(button => {button.disabled = true})
        updateResultText(playerScore === 3 ? 'The player wins the game' : 'The computer wins the game!');
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

function highlightButton(button) {
    const buttons = getInputButtons();
    buttons.forEach(button => {
        button.classList.remove('pressed')
    })
    button.classList.add('pressed');
}

function game() {
    const buttons = getInputButtons();
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            highlightButton(button)
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