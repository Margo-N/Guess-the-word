const guessedLettersList = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesParagraph = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters = [];

// Show symbols as placeholders for the letters of the chosen word
const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
}

placeholder(word);

guessButton.addEventListener ("click", function (e) {
    e.preventDefault();
    // Empty message paragraph
    message.innerText = "";
    // Take what was entered in the input
    const guess = letterInput.value;
    // Confirm the input is a single letter
    const goodGuess = checkInput(guess);

    if (goodGuess) {
        // The input is a letter
        makeGuess(guess);
    }
    letterInput.value = "";
});

const checkInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
    // Is the input empty?
    message.innerText = "Please enter a letter.";
    } else if (input.length > 1) {
    // Is there more than one letter?
    message.innerText = "Please enter one letter at a time.";
    } else if (!input.match(acceptedLetter)) {
    // Is there a non-alphabetical character?
    message.innerText = "Please enter a letter from A to Z.";
    } else {
    // There is only one letter!
        return input;
    }
};

const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
        message.innerText = "That letter was already guessed. Please try again!";
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
    }
    };

