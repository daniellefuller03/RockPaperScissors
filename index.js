// Rock Paper Scissors
// if userInput is 'bomb' the user automatically wins

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput
  } else {
    console.log('Invalid input!')
  }
}

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3)
  switch(randomNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
    default:
      return 'Incorrect';
      break;
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice) {
    return "It's a tie!"
  } 

  if(userChoice === 'rock') {
    if(computerChoice === 'paper') {
      return 'The computer won!'
    } else {
      return 'You won!'
    }
  }

  if(userChoice === 'paper') {
    if(computerChoice === 'scissors') {
      return 'The computer won!'
    } else {
      return 'You won!'
    }
  }

  if(userChoice === 'scissors') {
    if(computerChoice === 'rock') {
      return 'The computer won!'
    } else {
      return 'You won!'
    }
  }

  if(userChoice == 'bomb') {
    return 'You won!'
  }     
}

const playGame = () => {
  userChoice = getUserChoice('paper')
  console.log(`You entered: ${userChoice}`)
  computerChoice = getComputerChoice()
  console.log(`The computer entered: ${computerChoice}`)

  console.log(determineWinner(userChoice, computerChoice))
}

playGame()