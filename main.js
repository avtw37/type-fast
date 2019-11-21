window.addEventListener('load', init);

// Globals
let time = 5;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
  'joke',
  'space',
  'laughter',
  'siblings',
  'master',
  'definition',
  'grettings',
  'nutrition',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'developer',
  'engineer',
  'hero',
  'runaway',
  'cocktail',
  'serious',
  'monarch',
  'biology',
  'geometry',
  'algebra',
  'science',
  'history',
  'programmer',
  'architect',
  'horizon',
  'peace'
];

// Initialize Game
function init() {
  // Load word from array
  showWord(words);
  wordInput.addEventListener('input', startMatch);
  // Call countdown every second
  setInterval(countdown, 1000);
  setInterval(checkStatus, 50);
}

// Start Match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = 6;
    showWord(words);
    wordInput.value = '';
    score++;
  }
  scoreDisplay.innerHTML = score;
}

// Match currentWord to wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct!';
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
    message.innerHTML = 'Game Over!';
    score = -1;
  }
}