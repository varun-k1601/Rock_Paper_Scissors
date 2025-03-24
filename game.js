let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const genComputerChoice = () => {
    const options=["rock", "paper", "scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const drawGame = () => {
    msg.innerText="Game was a draw. play again!";
    msg.style.backgroundColor="#081b31";
}

const showWinner= (userWin,userchoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`you win! ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`you lose! ${compChoice} beats ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice) => {
    console.log("user choice = ",userChoice);
    const compChoice=genComputerChoice();
    console.log("comp choice = ",compChoice);
    if(userChoice===compChoice)
    {
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"? false :true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false :true;
        }
        else{
            userWin=compChoice==="rock"? false: true;
        }
        showWinner(userWin,userChoice,compChoice)
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});