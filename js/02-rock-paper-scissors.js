let userChoice = prompt('Rock, Paper, or Scissors? Type in all lower case please.')

function computerDecision() {
    let computerChoice = Math.random()
    if (userChoice == "rock") {
        if (computerChoice <= .33) {
            alert('It is a tie!')
        } else if (computerChoice >= .34 && computerChoice <= .66) {
            alert('You chose rock and it chose paper. You lose.')
        } else if (computerChoice >= .67) {
            alert('You chose rock and it chose scissors. You win!')
        } else {
            alert('Error, please choose "rock", "paper", or "scissors" all in lower case.')
        }
    } else if (userChoice == "paper") {
        if (computerChoice <= .33) {
            alert('You chose paper and it chose rock. You win!')
        } else if (computerChoice >= .34 && computerChoice <= .66) {
            alert('It is a tie!')
        } else if (computerChoice >= .67) {
            alert('You chose paper and it chose scissors. You lose.')
        } else {
            alert('Error, please choose "rock", "paper", or "scissors" all in lower case.')
        }
    } else if (userChoice == "scissors") {
        if (computerChoice <= .33) {
            alert('You chose scissors and it chose rock. You lose')
        } else if (computerChoice >= .34 && computerChoice <= .66) {
            alert('You chose scissors and it chose paper. You win!')
        } else if (computerChoice >= .67) {
            alert('It is a tie!')
        } else {
            alert('Error, please choose "rock", "paper", or "scissors" all in lower case.')
        }
    } else {
        alert('Error, please choose "rock", "paper", or "scissors" all in lower case.')
    }
}

computerDecision()