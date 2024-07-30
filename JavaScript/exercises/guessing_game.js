
                   ///////////    Guessing Game    ///////////

function generateTargetNumber()      /// Math formula function
{
    return Math.floor(Math.random() * 10) +1;
}

function getGuess()                 /// Printing Guess function
{
    let guess = parseInt(prompt("Enter your guess (1-10):"), 10)
    while(isNaN(guess) || guess < 1 || guess > 10) 
        {
        alert("Please enter a valid number")
        guess = parseInt(prompt("Enter your guess (1-10):"), 10);
        }
}

function checkGuess(guess, targetNumber) ///Checking the guess function
{
    if (guess < targetNumber) 
    {
        alert("Too low, try higher number.")
        return false
    }
    else if (guess > targetNumber)
    {
        alert("Too high, try smaller number.")
        return false
    }
    else 
    {
        return true
    }
}

function playGame()                   /// Function for playing game
{
    let targetNumber = generateTargetNumber();
    let guess = null;
    let attempts = 0;
    let isCorrect = false;

    while(isCorrect)
    {
        guess = getGuess();
        attempts++;
        isCorrect = checkGuess(targetNumber, guess);
        if(isCorrect)
        {
            alert("Congratulation! You guessed the correct number in ${attempts} attempts.");
        }
    } 
}

function startGame()                 /// Function for playing again
{
    let playAgain = false;
    do
    {
        playGame()
        playAgain = confirm("Do you want to play again?")
    }
    while (playAgain)
}





/* let targetNumber
let guess = null;
let attempts = 0;
let isCorrect = false;
let playAgain = false;

do {
    targetNumber = Math.floor(Math.random() * 10) + 1;
    while (!isCorrect) {
    
        guess = parseInt(prompt("Enter your guess (1-10):"), 10);
        if (isNaN(guess) || guess < 1 || guess > 10) {
            alert("Please enter a valid number between 1 and 10.");
            continue;
        }
    
        attempts++;
        if (guess < targetNumber) {
            alert("Too low! Try again.");
        } else if (guess > targetNumber) {
            alert("Too high! Try again.");
        } else {
            isCorrect = true;
            alert(`Congratulations! You guessed the correct number in ${attempts} attempts.`);
        }
}
}while (playAgain) {
    playAgain = confirm("Do you want to play again?")
}
 */
