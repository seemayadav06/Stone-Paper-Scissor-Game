let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userscorepara=document.querySelector("#userscore");
const compscorepara=document.querySelector("#compscore");

const gencomchoice=()=>{
    const option=["rock","paper","scissor"];
    const randindex=Math.floor(Math.random()*3);
    return option[randindex];
}

const drawgame=()=>{
    console.log("game was draw");
    msg.innerText="game was draw, play again"
    msg.style.backgroundColor="#81b31";
}

const showwinner=(userwin)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        console.log("you win");
        msg.innerText="you win";
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        console.log("you loose");
        msg.innerText="you loose";
        msg.style.backgroundColor="red";
    }
}
const playgame=(userchoice)=>{
    console.log("user choice=",userchoice);
    const compchoice=gencomchoice();
    console.log("computer choice=",compchoice);

    if(userchoice==compchoice){
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice===rock){
            //scissor,paper
            userwin=compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            //scissor, rock
            userwin=compchoice==="scissor"?false:true;
        }
        else{//scissor
            //paper rock
            userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    })
})