// randomly select either "rock", "paper", or "scissors"
//random number generator for 1-3, assigning each number value to a different computer choice
function random(num) {
    return Math.floor(Math.random()*num)
}
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
function playerChoice () {
    let choiceP = prompt("Choose Rock Paper or Scissors")
    choiceP.toLowerCase()
    if (choiceP == "rock" || choiceP == "paper" || choiceP == "scissors") {
        return choiceP
    } else return(console.log("Please choose either rock paper or scissors"))
    
}
//compare player selection to computer selection and log the result
function playRound(choiceC,choiceP) {
    choiceP = playerChoice()
    choiceC = computerChoice()
    console.log(`The computer chose: ${choiceC} and you chose: ${choiceP}`)
    if (choiceC == "rock" && choiceP == "paper") {
        console.log("You win. Paper beats Rock")
    } else if (choiceC == "rock" && choiceP == "scissors") {
        console.log("You lose. Rock beats Scissors")
    } else if (choiceC == "paper" && choiceP == "rock") {
        console.log("You lose. Paper beats Rock")
    } else if (choiceC == "paper" && choiceP == "scissors") {
        console.log("You win. Scissors beat Paper")
    } else if (choiceC == "scissors" && choiceP == "paper") {
        console.log("You lose. Scissors beat paper")
    } else if (choiceC == "scissors" && choiceP == "rock") {
        console.log("You win. Rock beats Scissors")
    } else if (choiceC == choiceP) {
        console.log("The game was a tie.")
    } else console.log("Something went wrong.")
    
}
playRound()

