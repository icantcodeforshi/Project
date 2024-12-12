// Scores
let wins = 0;
let losses = 0;
let draws = 0;

// Get references to DOM elements
const opponentsPickSpan = document.getElementById('OppenentsPick');
const roundResultsSpan = document.getElementById('RoundResults');
const winsSpan = document.getElementById('Wins');
const lossesSpan = document.getElementById('Losses');
const drawSpan = document.getElementById('Draw');
const finalResultSpan = document.getElementById('FinalResult');

// Buttons
const rockButton = document.getElementById('RockButton');
const paperButton = document.getElementById('PaperButton');
const scissorsButton = document.getElementById('ScissorsButton');

// Event listeners for user choice
rockButton.addEventListener('click', () => playRound('Rock'));
paperButton.addEventListener('click', () => playRound('Paper'));
scissorsButton.addEventListener('click', () => playRound('Scissors'));

// Function to get the computer's choice
function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to determine outcome of a single round
function determineOutcome(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'Draw';
  }

  if (
    (userChoice === 'Rock' && computerChoice === 'Scissors') ||
    (userChoice === 'Scissors' && computerChoice === 'Paper') ||
    (userChoice === 'Paper' && computerChoice === 'Rock')
  ) {
    return 'Win';
  } else {
    return 'Lose';
  }
}

// Function to play a round
function playRound(userChoice) {
  const computerChoice = getComputerChoice();
  opponentsPickSpan.textContent = computerChoice;

  const result = determineOutcome(userChoice, computerChoice);
  roundResultsSpan.textContent = result;

  // Update scores
  if (result === 'Win') {
    wins++;
  } else if (result === 'Lose') {
    losses++;
  } else {
    draws++;
  }

  // Update displayed scores
  winsSpan.textContent = wins;
  lossesSpan.textContent = losses;
  drawSpan.textContent = draws;

  // Update final result display (e.g. "wins - losses")
  finalResultSpan.textContent = `${wins} - ${losses}`;
}
