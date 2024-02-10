"use strict";

import { WordSeekerGame } from "./wordseeker.js";
import { Canvas } from "./canvas.js";

const playButton = document.getElementById("playButton");
const guessWordButton = document.getElementById("guessButton");

const guessInput = document.getElementById("guessInput");
const canvas = document.getElementById("gameCanvas");

const gameControls = document.getElementById("gameControls");
const gamePlayControls = document.getElementById("gamePlayControls");

const words = ["Adventure", "Sunshine", "Harmony", "Treasure", "Serenity"];
const gameCanvas = new Canvas(canvas);
let game;

function enablePlayButton(isEnabled) {
  if (isEnabled) {
    gamePlayControls.style = `display: block;`;
    gameControls.style = `display: none;`;
  } else {
    gamePlayControls.style = `display: none;`;
    gameControls.style = `display: block;`;
  }
}

function showGameMenu() {
  enablePlayButton(true);
}

showGameMenu();

playButton.addEventListener("click", () => {
  enablePlayButton(false);
  canvas.scrollIntoView();
  let word = WordSeekerGame.getRandomWord(words);
  game = new WordSeekerGame(word, gameCanvas, showGameMenu);
});

guessWordButton.addEventListener("click", function () {
  const letter = guessInput.value.trim().toLowerCase();

  if (letter && letter.length === 1 && /^[a-z]$/.test(letter)) {
    game.guess(letter);
  } else {
    alert("Please enter a valid single letter.");
  }
  guessInput.value = "";
});
