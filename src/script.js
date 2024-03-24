let userscore = 0;
let compscore = 0;

const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
     // generate computer choice:
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randInx = Math.floor(Math.random() * 3);
    return options[randInx];
}

const drawGame = () => {
    console.log("It's a tie!");
    msg.innerText = "It's a tie! play again."
    msg.style.background = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userscore++;
        userScorePara.innerText = userscore;
        console.log("You win!");
        msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
        msg.style.background = "green";
    }else{
        compscore++;
        compScorePara.innerText = compscore;
        console.log("You lose!")
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.background = "red";
    }
}

const playGame = (userChoice) => {
    console.log("User choice = ", userChoice);
    // COMPUTER CHOICE:
    const compChoice = genCompChoice();
    console.log("Computer choice = ", compChoice);


if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
  
}
const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})
