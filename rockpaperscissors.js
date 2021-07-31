// randomly select either "rock", "paper", or "scissors"
//random number generator for 1-3, assigning each number value to a different computer choice
function random(num) {
    return Math.floor(Math.random()*num)
}
function computerChoice() {
    let choice = random(3)
    console.log(choice)
    if (choice == 0) {
        return "rock"
    } else if (choice == 1) {
        return "paper"
    } else if (choice == 2) {
        return "scissors"
    }
}
