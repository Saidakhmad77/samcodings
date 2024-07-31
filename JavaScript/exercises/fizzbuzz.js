          /////// FizzBuzz game//////
/* 
let userNum = parseInt(prompt("Enter a number"))

    if (userNum % 15 === 0) 
        {
            console.log("FizzBuzz")
        }
        else if (userNum % 3 === 0)
        {
            console.log("Fizz")
        }
        else if (userNum % 5 === 0)
        {
            console.log("Buzz")
        }
        else
        {
            console.log(userNum)
        } */


         //////// Rock Paper Sciccors  ////////

// Get user choice
let userChoice = prompt("Please choose one: rock, paper, or scissors").toLowerCase();

// Generate computer choice
let choices = ["rock", "paper", "scissors"];
let computerChoice = choices[Math.floor(Math.random() * 3)];

// Determine the winner
let result = "";
if (userChoice === computerChoice) {
    result = "It's a tie!";
} else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
) {
    result = "You win!";
} else {
    result = "Computer wins!";
}

// Display the result
console.log(`You chose: ${userChoice}`);
console.log(`Computer chose: ${computerChoice}`);
console.log(result);
