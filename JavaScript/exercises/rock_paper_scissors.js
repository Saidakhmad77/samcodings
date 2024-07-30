

while (true) {
    let playGame = prompt("Play game: (y/n)");
    if (playGame !== "y") 
    {
      break; 
    }
  
  while(true) {
    let numWins = parseInt(prompt("Whoever wins to: "));
    if (isNaN(numWins) || numWins <= 0) 
    {
      console.log("Please enter a valid positive number.");
      continue;
    }
  
    let rounds = 0;
    let compWins = 0;
    let playerWins = 0; 
  
    while (compWins < numWins && playerWins < numWins) 
    {
      let choices = ['rock', 'paper', 'scissors']; 
      let randNum = Math.floor(Math.random() * 3);
      let compChoice = choices[randNum];
      let playerChoose = prompt("Choose: rock, paper, or scissors");
  
      if (!choices.includes(playerChoose)) 
        {
        console.log("Invalid choice, please choose rock, paper, or scissors.");
        continue;
        }
  
      console.log(`Player chose: ${playerChoose}`);
      console.log(`Computer chose: ${compChoice}`);
  
      if (compChoice === playerChoose) 
        {
        console.log("TIE");
        } 
        else if (
        (compChoice === "rock" && playerChoose === "scissors")  
        (compChoice === "paper" && playerChoose === "rock") || 
        (compChoice === "scissors" && playerChoose === "paper"))
        {
        console.log("Computer wins this round");
        compWins++;
        } 
        else 
        {
        console.log("Player wins this round");
        playerWins++;
        }
      rounds++;
    }
  
    console.log(`Number of games played this round: ${rounds}`);
    if (compWins > playerWins) 
    {
      console.log(`Computer is the overall winner with ${compWins} to ${playerWins} wins!`);
    } 
    else if (playerWins > compWins) 
    {
      console.log(`Player is the overall winner with ${playerWins} to ${compWins} wins!`);
    }
  
    let playAgainResponse = prompt("Do you want to play again? (y/n)");
    if (playAgainResponse !== "y") 
    {
      break;
    }
    }
  }