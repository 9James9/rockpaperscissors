// randomly select either "rock", "paper", or "scissors"
//random number generator for 1-3, assigning each number value to a different computer choice
//this is a new branch where I will rework my code to add a UI
function random(num) {
    return Math.floor(Math.random() * num)
}
// create a scoring system
let computerWins = 0
let playerWins = 0
//scoring
function computerChoice() {
    let choiceC = random(3)
    if (choiceC == 0) {
        return "rock"
    } else if (choiceC == 1) {
        return "paper"
    } else if (choiceC == 2) {
        return "scissors"
    }
    //allow player to choose and convert it to lowercase
}
/*
  function playerChoice() {
    let choiceP = prompt("Choose Rock Paper or Scissors")
    choiceP.toLowerCase()
    if (choiceP == "rock" || choiceP == "paper" || choiceP == "scissors") {
        return choiceP
    } else return (console.log("Please choose either rock paper or scissors"))
}
*/

//new player choice interface
//created buttons with dom
const container = document.querySelector('#container');
const content = document.createElement('div');
content.classList.add('content')
content.textContent = 'This is the container for three choices'
container.appendChild(content)

const button1 = document.createElement('button')
button1.classList.add('rock')
button1.textContent = 'Rock'
content.appendChild(button1)

const button2 = document.createElement('button')
button2.classList.add('paper')
button2.textContent = 'Paper'
content.appendChild(button2)

const button3 = document.createElement('button')
button3.classList.add('scissors')
button3.textContent = 'Scissors'
content.appendChild(button3)
//

const playerChoseRock = function() {
    playRound(computerChoice(),'rock')
}
const playerChosePaper = function() {
    playRound(computerChoice(),'paper')
}
const playerChoseScissors = function() {
    playRound(computerChoice(),'scissors')    
}
//adding event listener on button click
button1.addEventListener('click',playerChoseRock)
button2.addEventListener('click',playerChosePaper)
button3.addEventListener('click',playerChoseScissors)
//compare player selection to computer selection and log the result
function playRound(choiceC, choiceP) {
    choiceP
  

   // choiceC = computerChoice()
    console.log(`The computer chose: ${choiceC} and you chose: ${choiceP}`)

    if (choiceC == "rock" && choiceP == "paper") {
        console.log("You win. Paper beats Rock")
        return playerWins++
    } else if (choiceC == "rock" && choiceP == "scissors") {
        console.log("You lose. Rock beats Scissors")
        return computerWins++
    } else if (choiceC == "paper" && choiceP == "rock") {
        console.log("You lose. Paper beats Rock")
        return computerWins++
    } else if (choiceC == "paper" && choiceP == "scissors") {
        console.log("You win. Scissors beat Paper")
        return playerWins++
    } else if (choiceC == "scissors" && choiceP == "paper") {
        console.log("You lose. Scissors beat paper")
        return computerWins++
    } else if (choiceC == "scissors" && choiceP == "rock") {
        console.log("You win. Rock beats Scissors")
        return playerWins++
    } else if (choiceC == choiceP) {
        console.log("The game was a tie.")
    } else console.log("Something went wrong.")
}
//playRound() //plays one round of rock paper scissors
function game() { 
    for (let i = 0; i<5; i++)
    playRound()
    if (playerWins > computerWins) {
        console.log("You win!!!")
    } else if (playerWins < computerWins) {
        console.log("You lost the game")
    } else if (playerWins == computerWins) {
        console.log("The game was a tie.")
    }
}
// game()
console.log(`Total player wins: ${playerWins}. Total computer wins: ${computerWins}`)
playRound()

