window.addEventListener("load", init);

// Globals

const levels = {
  easy: 5,
  medium: 3,
  hard: 1
}

// Change the level
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

const words = [
  "joke",
  "space",
  "laughter",
  "siblings",
  "master",
  "definition",
  "greetings",
  "nutrition",
  "investigate",
  "horrendous",
  "symptom",
  "keyboard",
  "developer",
  "engineer",
  "hero",
  "runaway",
  "cocktail",
  "serious",
  "monarch",
  "biology",
  "geometry",
  "algebra",
  "science",
  "history",
  "programmer",
  "architect",
  "horizon",
  "peace",
  "establisment",
  "lucky"
];

// Initialize Game
function init() {
  // Show Seconds
  seconds.innerHTML = currentLevel;
  // Load word from array
  showWord(words);
  wordInput.addEventListener("input", startMatch);
  // Call countdown every second
  setInterval(countdown, 1000);
  setInterval(checkStatus, 50);
}

// Start Match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = "";
    score++;
  }

  // If score is -1, display 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// Match currentWord to wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "Correct!";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
}

// Pick & Show Random Word
function showWord(words) {
  // Generate Random Array Index
  const randIndex = Math.floor(Math.random() * words.length);
  // Output Random Word
  currentWord.innerHTML = words[randIndex];
}

// Countdown Timer
function countdown() {
  // Make sure time has not run out
  if (time > 0) {
    time--;
  } else if (time === 0) {
    isPlaying = false;
  }
  // Show time
  timeDisplay.innerHTML = time;
}

// Check Game Status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Game Over!";
    score = -1;
  }
}
