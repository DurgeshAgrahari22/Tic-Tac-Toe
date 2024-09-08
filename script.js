let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
// whose turn
let turnO=true;
const winnpattern=[
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText='O';
            turnO=false
        }
        else{
            box.innerText='X';
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
    });
});
const disableBoxes=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const checkwinner=()=>{
    let cnt=0;
    for(boxx of winnpattern){
        let a=boxx[0];
        let b=boxx[1];
        let c=boxx[2];
        let p1=boxes[a].innerText;
        let p2=boxes[b].innerText;
        let p3=boxes[c].innerText;
        if(p1!="" && p2!="" && p3!=""){
            if(p1===p2 && p2===p3){
                console.log("Winner");
                showwinner(p1);
                cnt=1;
            }
        }
    }
    let f=0;
    for(b of boxes){
        if(b.innerText!="")f++;
    }
    if(f==9)shom();
}
const shom=()=>{
    msg.innerText="Match Draw & Try again Letar!!";
    msgcontainer.classList.remove("hidee");
}
const showwinner=(a)=>{
    msg.innerText=`Congratulations!! ${a} is Winner`;
    disableBoxes();
    msgcontainer.classList.remove("hidee");
}
const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgcontainer.classList.add("hidee");
}
newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
   