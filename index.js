const options = ["rock", "paper", "scissors"]

function getComputerChoice() {
    const item = options[Math.floor(Math.random()*options.length)]
    return item
}