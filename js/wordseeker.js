import { Figure } from "./figure.js";

export class WordSeekerGame {
  constructor(word, gameCanvas, showGameMenu) {
    this.word = word.toLowerCase();
    this.showGameMenu = showGameMenu;
    this.gameCanvas = gameCanvas;
    this.figure = new Figure(gameCanvas);

    this.guesses = [];
    this.maxAttempts = 6;
    this.attemptsLeft = this.maxAttempts;
    this.wordToGuess = this.initializeWordToGuess();
    this.draw();
    this.isGameOver = false;
  }

  guess(letter) {
    if (!this.isGameOver) {
      if (this.word.includes(letter)) {
        if (!this.guesses.includes(letter)) {
          this.guesses.push(letter);
          this.updateWordToGuess();
          this.checkWin();
        }
      } else {
        this.attemptsLeft--;
        this.draw();
        if (this.attemptsLeft === 0) {
          this.gameOver();
        }
      }
    }
  }

  checkWin() {
    const remainingLetters = this.word
      .split("")
      .filter((letter) => !this.guesses.includes(letter));
    if (remainingLetters.length === 0) {
      this.gameWon();
    }
  }

  draw() {
    this.drawBoard();
    this.drawWordToGuess();

    this.figure.drawCar(this.maxAttempts, this.attemptsLeft);

    this.gameCanvas.context.fillStyle = "black";
    this.gameCanvas.context.font = "20px Arial";
    this.gameCanvas.context.fillText(
      `Attempts left: ${this.attemptsLeft}`,
      10,
      20
    );
  }

  drawWordToGuess() {
    this.gameCanvas.context.fillStyle = "black";
    this.gameCanvas.context.font = "20px Arial";
    this.gameCanvas.context.fillText(`Word: ${this.wordToGuess}`, 10, 40);
  }

  initializeWordToGuess() {
    let initialGuess = "";

    const randomIndex = Math.floor(Math.random() * this.word.length);
    let randomLetter0 = this.word[0];
    let randomLetter1 = this.word[randomIndex];
    this.guesses.push(randomLetter0, randomLetter1);

    for (const letter of this.word) {
      if (this.guesses.includes(letter)) {
        initialGuess += letter;
      } else {
        initialGuess += "_";
      }
    }

    return initialGuess;
  }

  updateWordToGuess() {
    let updatedWord = "";
    for (let letter of this.word) {
      if (this.guesses.includes(letter)) {
        updatedWord += letter;
      } else {
        updatedWord += "_";
      }
    }
    this.wordToGuess = updatedWord;
    this.draw();
  }

  drawBoard() {
    this.gameCanvas.context.clearRect(
      0,
      0,
      this.gameCanvas.canvas.width,
      this.gameCanvas.canvas.height
    );

    this.gameCanvas.context.strokeStyle = "gray";
    this.gameCanvas.context.lineWidth = 2;
    this.gameCanvas.context.strokeRect(
      0,
      0,
      this.gameCanvas.canvas.width,
      this.gameCanvas.canvas.height
    );
  }

  static getRandomWord(words) {
    return words[Math.floor(Math.random() * words.length)];
  }

  gameOver() {
    this.isGameOver = true;
    this.gameCanvas.context.fillStyle = "red";
    this.gameCanvas.context.fillText(
      "Game Over! You've used all your attempts.",
      10,
      100
    );
    this.showGameMenu();
  }

  gameWon() {
    this.isGameOver = true;
    this.gameCanvas.context.fillStyle = "green";
    this.gameCanvas.context.fillText(
      "Congratulations! You've guessed the word.",
      10,
      100
    );
    this.showGameMenu();
  }
}
