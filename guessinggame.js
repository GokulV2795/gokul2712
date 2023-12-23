// Generate a random number between 1 and 100
let secret = Math.floor(Math.random() * 100) + 1;

// Set the maximum number of guesses
let maxGuesses = 10;

// Prompt the player to enter their name
let name = prompt("What is your name?");

// Greet the player and explain the rules
alert("Hello, " + name + "! Welcome to the guessing game.");
alert("I have chosen a number between 1 and 100. You have " + maxGuesses + " guesses to find it.");

// Initialize the number of guesses
let guesses = 0;

// Initialize a flag to indicate whether the game is over
let gameOver = false;

// Loop until the game is over
while (!gameOver) {
  // Increment the number of guesses
  guesses++;

  // Prompt the player to enter a guess
  let guess = parseInt(prompt("Guess #" + guesses + ":"));

  // Check if the guess is valid
  if (isNaN(guess) || guess < 1 || guess > 100) {
    // Invalid guess, display an error message
    alert("Please enter a valid number between 1 and 100.");
  } else {
    // Valid guess, check if it is correct
    if (guess === secret) {
      // Correct guess, display a congratulatory message and end the game
      alert("You got it! The number was " + secret + ".");
      alert("You took " + guesses + " guesses.");
      gameOver = true;
    } else if (guesses === maxGuesses) {
      // Wrong guess and no more guesses left, display a losing message and end the game
      alert("Sorry, you ran out of guesses. The number was " + secret + ".");
      gameOver = true;
    } else {
      // Wrong guess and more guesses left, display a hint and continue the game
      if (guess < secret) {
        alert("Too low. Try again.");
      } else {
        alert("Too high. Try again.");
      }
    }
  }
}
