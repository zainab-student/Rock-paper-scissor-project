let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const genCompchoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};
const showWinner=(userWin,userchoice,compchoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        // console.log("you win!");
        msg.innerText=`you win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";

    }else{
        compScore++;
        compScorePara.innerText=compScore;

        // console.log("you lose");
        msg.innerText=`you lose.${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }

}
const drawGame=()=>{
    // console.log("game was draw.");
    msg.innerText="game was draw.Play again";
    msg.style.backgroundColor="purple";
}
const playGame=(userchoice)=>{
    // console.log("user choice=",userchoice);
    const compchoice=genCompchoice();
    // console.log("comp choice=",compchoice);
    if(userchoice===compchoice){
        //Draw Game
        drawGame();
    }else{
        let userWin=true;
        if(userchoice==="rock"){
            //scissors,paper
            userWin=compchoice==="paper"?false:true;
        } else if(userchoice==="paper"){
            //rock,scissors
            userWin=compchoice==="scissors"?false:true;
        }else{
            //rock,paper
            userWin=compchoice==="rock"?false:true;
        }
        showWinner(userWin,userchoice,compchoice);

    }
};
choices.forEach((choice)=>{
 choice.addEventListener("click",() =>{
    const userchoice=choice.getAttribute("id");
    playGame(userchoice);
 });
});