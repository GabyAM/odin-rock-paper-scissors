const options = ["rock", "paper", "scissors"]

function getComputerChoice() {
    const item = options[Math.floor(Math.random()*options.length)]
    return item
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        return 'draw'
    }
    if (
        (playerSelection === "rock" && computerSelection === "paper")
        | (playerSelection === 'paper' && computerSelection === 'scissors')
        | (playerSelection === 'scissors' && computerSelection === 'rock')
    ) {
        return 'computer'
    }
    return 'player'
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    while(playerScore !== 3 && computerScore !== 3) {
        const playerChoice = prompt('Select rock, paper or scissor: ', '').toLowerCase()
        const computerChoice = getComputerChoice()
        const winner = playRound(playerChoice, computerChoice)

        if(winner === 'player') {
            playerScore++
            console.log(`You win! ${playerChoice} beats ${computerChoice}`)
        } else if (winner ==='computer'){
            computerScore++
            console.log(`You lose! ${computerChoice} beats ${playerChoice}`)
        } else console.log('draw!')

        console.log('player: ' + playerScore + ', computer: ' + computerScore)
    }

    if(playerScore === 3) {
        console.log('The player wins!')
    } else console.log('The computer wins!')
}

game();