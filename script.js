// Generate a random number between 1 and 100
const numberToGuess = Math.floor(Math.random() * 100) + 1;

// Keep track of the number of guesses
let numberOfGuesses = 0;

// Function to check if the player has guessed the number
function checkGuess() {
  // Get the player's guess from the input field
  const playerGuess = document.getElementById("guess").value;

  // Convert the player's guess to a number
  const guess = parseInt(playerGuess);

  // Increment the number of guesses
  numberOfGuesses++;

  // Check if the player's guess is correct
  if (guess === numberToGuess) {
    // Display a message to the player
    const message = `Congratulations! You guessed the number in ${numberOfGuesses} tries.`;
    document.getElementById("message").innerHTML = message;

    // Disable the input field and the guess button
    document.getElementById("guess").disabled = true;
    document.getElementById("submit").disabled = true;
  } else if (guess < numberToGuess) {
    // Display a message to the player
    const message = `Your guess is too low. Try again.`;
    document.getElementById("message").innerHTML = message;
  } else if (guess > numberToGuess) {
    // Display a message to the player
    const message = `Your guess is too high. Try again.`;
    document.getElementById("message").innerHTML = message;
  }
}

// Attach an event listener to the guess button
document.getElementById("submit").addEventListener("click", checkGuess);
