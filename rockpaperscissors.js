// randomly select either "rock", "paper", or "scissors"
//random number generator for 1-3, assigning each number value to a different computer choice
function random(num) {
    return Math.floor(Math.random()*num)
}
function computerChoice() {
    let choice = random(3)
    if (choice == 0) {
        return "rock"
    } else if (choice == 1) {
        return "paper"
    } else if (choice == 2) {
        return "scissors"
    }
    //allow player to choose and convert it to lowercase
}
function playerChoice () {
    let choice = prompt("Choose Rock Paper or Scissors")
    return choice.toLowerCase()
}
//compare player selection to computer selection and log the result
console.log(computerChoice(),playerChoice())
function playRound() {
    if (computerChoice() == "rock" && playerChoice() == "paper") {
        console.log("You win. Paper beats Rock")
    } else if (computerChoice() == "rock" && playerChoice() == "scissors") {
        console.log("You lose. Rock beats Scissors")
    } else if (computerChoice() == "paper" && playerChoice() == "rock") {
        console.log("You lose. Paper beats Rock")
    } else if (computerChoice() == "paper" && playerChoice() == "scissors") {
        console.log("You win. Scissors beat Paper")
    } else if (computerChoice() == "scissors" && playerChoice() == "paper") {
        console.log("You lose. Scissors beat paper")
    } else if (computerChoice() == "scissors" && playerChoice() == "rock") {
        console.log("You win. Rock beats Scissors")
    } else console.log("Something's not right")
}
playRound()


