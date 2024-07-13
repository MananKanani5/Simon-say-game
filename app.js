let red = document.querySelector("#red");
let green = document.querySelector("#green");
let orange = document.querySelector("#orange");
let blue = document.querySelector("#blue");
let level = document.querySelector(".level");
let allBtn = document.querySelectorAll(".btns")

let gameSeq = [];
let userSeq = [];
let colors = ["red", "green", "orange", "blue"];
let started = false;
let count = 0;

document.addEventListener("keypress", function(e) {
    if(started == false) {
        started = true;
        console.log("Game started");
        gameStart();
    }    
})

let start = document.querySelector("#start");
start.addEventListener("click", function(e) {
    if(started == false) {
        started = true;
        console.log("Game started");
        gameStart();
        start.classList.add("hidden");
    }    
})
 

function gameStart(){
    userSeq = [];
    count++;
    level.innerHTML = `Level ${count}`;

    let ranIndex = Math.floor(Math.random() * 4);
    let ranColor = colors[ranIndex];
    let ranBtn = document.querySelector(`#${ranColor}`);
    btnBlink(ranBtn);
    gameSeq.push(ranColor);
    console.log(gameSeq);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(gameStart, 800);
        }
    }else{
        level.innerHTML = `<span class="text-[#9a3f4d]">Game Over!</span> <br> Your Score is ${count} <br> Press Any key to Restart`;
        started =  false;
        count = 0;
        gameSeq = [];
        start.classList.remove("hidden");
        start.innerHTML = " Start Again";
    }
}

function btnBlink(ranBtn) {
    ranBtn.classList.add("blink");
    setTimeout(() => {
        ranBtn.classList.remove("blink");
    }, 500);
}

    for(btn of allBtn){
        btn.addEventListener("click", btnPress);
    }
    



function btnPress() {
    let btn = this;
    btnBlink(btn);
    userSeq.push(this.id);
    checkAns(userSeq.length - 1);
}