function random(num) {
    return Math.floor(Math.random() * num)
}


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

const container = document.querySelector('#container');
const content = document.createElement('div');
content.classList.add('content')
content.textContent = ''
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

//add div that displays results


/*if (choiceC == 'rock' && choiceP == 'paper') {
    results.textContent = 'You win. Paper beats Rock!'
}
*/
//adding event listener on button click
button1.addEventListener('click',playerChoseRock)
button2.addEventListener('click',playerChosePaper)
button3.addEventListener('click',playerChoseScissors)



let playerWins = 0
let computerWins = 0
let theScore = document.createElement('h1')
container.appendChild(theScore)
theScore.innerHTML = `Total player wins: ${playerWins} <br> Total computer wins: ${computerWins}`
theScore.classList.add('score')


//compare player selection to computer selection and log the result
function playRound(choiceC, choiceP) {
    choiceP
    
    const results = document.createElement('div')
results.textContent = `The computer chose: ${choiceC} and you chose: ${choiceP}`
results.classList.add('results')
container.appendChild(results)

console.log(`The computer chose: ${choiceC} and you chose: ${choiceP}`)

   if (choiceC == 'rock' && choiceP == 'paper') {
       results.textContent = `The computer chose: ${choiceC} and you chose: ${choiceP}. You win. Paper beats Rock!`
       ++playerWins
   } else if (choiceC == 'rock' && choiceP == 'scissors') {
       results.textContent = `The computer chose: ${choiceC} and you chose: ${choiceP}. You lose. Rock beats Scissors.`
       ++computerWins
   } else if (choiceC == 'paper' && choiceP == 'rock') {
       results.textContent = `The computer chose: ${choiceC} and you chose: ${choiceP}. You lose. Paper beats Rock`
       ++computerWins
   } else if (choiceC == 'paper' && choiceP == 'scissors') {
       results.textContent = `The computer chose: ${choiceC} and you chose: ${choiceP}. You win. Scissors beats Paper!`
       ++playerWins
   } else if (choiceC == 'scissors' && choiceP == 'paper') {
       results.textContent = `The computer chose: ${choiceC} and you chose: ${choiceP}. You lose. Scissors beats Paper!`
       ++computerWins
   } else if (choiceC == 'scissors' && choiceP == 'rock') {
       results.textContent = `The computer chose: ${choiceC} and you chose: ${choiceP}. You Win. Rock beats Scissors!`
       ++playerWins
   } else results.textContent = 'The game was a tie'
   theScore.innerHTML = `Total player wins: ${playerWins} <br> Total computer wins: ${computerWins}`
//announces a winner and resets scores to 0 when you press ok
   if (playerWins == 5 && playerWins > computerWins) {
    
    let tryAgain = confirm('You are the winner! Click OK to play again.')
    if (tryAgain == true) {
    location.reload()
    } 
} else if (computerWins == 5 && playerWins < computerWins) {
    
    let tryAgain = confirm('The computer wins. Click OK to play again.')
    if (tryAgain == true) {
    location.reload() 
    }
} 
}
const resetBtn = document.createElement('button')
resetBtn.textContent = "Reset Game"
content.appendChild(resetBtn)
resetBtn.addEventListener('click',() => location.reload())
resetBtn.classList.add('reset')


