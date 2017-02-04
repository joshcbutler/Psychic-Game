    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var userGuesses = [];
    var wins = 0;
    var losses = 0;
    var guesses = 9;
    var guessesLeft = 9;
    var computerChoice = null;

    // Computer selects random letter
    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    // guessesLeft gets pushed to the #guessesRemaining div in HTML.
    var refreshGuessesLeft = function() {
        document.querySelector("#guessesRemaining").innerHTML = "Guesses left: " + guessesLeft;

    };
    // computer choice letter gets updated with a random letter.
    var refreshcomputerChoice = function() {
        this.computerChoice = this.alphabet[Math.floor(Math.random() * this.alphabet.length)];
    };
    // User's current guesses get pushed to currentGuesses ID in HTML and get joined with commas.
    var refreshGuessesSoFar = function() {
        document.querySelector("#currentGuesses").innerHTML = userGuesses.join(', ');
    };
    // variables get reset to their initial values when reset variable is called.
    var reset = function() {
        totalGuesses = 9;
        guessesLeft = 9;
        userGuesses = [];

        refreshGuessesLeft();
        refreshcomputerChoice();
        refreshGuessesSoFar();

    }

    refreshGuessesLeft();
    refreshGuessesSoFar();
    // when user releases key, the character is changed to lowercase, a guess is taken away, variable userGuesses is pushed to the variable userGuess, and the variables refreshGuessesSoFar and refreshGuessesLeft are refreshed.
    document.onkeyup = function(event) {
        guessesLeft--;
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

        userGuesses.push(userGuess);
        refreshGuessesSoFar();
        refreshGuessesLeft();
        // If guessesLeft are greater than zero and if the user's guess is equal to the computer choice, add 1 to wins and that information is updated to the HTML file.
        if (guessesLeft > 0) {
            if (userGuess == computerChoice) {
                wins++;
                document.querySelector("#wins").innerHTML = "Wins: " + wins;
                alert("Unreal, how'd you know!?");
                reset();
            }
            // if there are no guesses left, add one point to losses.
        } else if (guessesLeft == 0) {
            losses++;
            document.querySelector("#losses").innerHTML = "Losses: " + losses;
            alert("Oops, wrong answer! Try again");
            reset();
        }


    };
