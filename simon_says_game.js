let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let h2 = document.querySelector('h2');
let h3=document.getElementById("high-score");
document.body.prepend(h2);  // Temporarily add to body for display
let btns = ['yellow','red', 'purple', 'green']; 
document.addEventListener("keypress",function(){
    if(started==false) 
        {
            console.log("game is started");
            started=true;
            levelUpdate();
        }
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function()
{
    btn.classList.remove("flash");
},250);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function()
{
    btn.classList.remove("userFlash");
},250);
}
function levelUpdate(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;
    let randIndex = Math.floor(Math.random() * btns.length);
    let randColor=btns[randIndex];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(randColor);
    // console.log(randIndex);
    // console.log(randColor);
    // console.log(randBtn);
    gameFlash(randBtn);
}
function btnPress()
{
    // console.log(this);
    let btn=this;
    userFlash(btn);
    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userColor);
    checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll('.btn');
for(let btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function checkAns(idx)
{
    //console.log("curr level",level);
    // let idx=level-1;
    if(userSeq[idx]===gameSeq[idx])
        {
            if(userSeq.length===gameSeq.length)
                {
                    setTimeout(levelUpdate, );  // Delay level update

                }
        }
        else{
            h2.innerHTML=`Game over!!your score was <b>${level}</b>...<br>press any key to start`;
            h3.innerHTML=`<b>Highest score is ${Math.max(level)}</b>`;
            document.querySelector("body").style.backgroundColor="red";

            setTimeout(function(){
                document.querySelector("body").style.backgroundColor="";
            },1500);
            reset();
        }
}
function updateHighScore() {
    let highestScore = Math.max(...scores); // Find the highest score
    h3.innerHTML = `<b>Highest score is ${highestScore}</b>`;
}
function reset()
{
    started=false;
    level=0;
    gameSeq=[];
    userSeq=[];
}
