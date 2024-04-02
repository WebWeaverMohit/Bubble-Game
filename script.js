var timer = 60;
var hitnum;
var score = 0;

function handletimer(){
    setInterval (function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerdiv").textContent = timer;
        }
        else{
            document.querySelector("#btm").innerHTML = `<h1>Game Over | Your Score is <span>${score}<span/><h1/>`;
        }
    },1000)
}

function getnewhit(){
    hitnum = Math.floor(Math.random()*10)
    document.querySelector("#hitdiv").textContent = hitnum;
}

function increasescore(){
    score = score + 10;
    document.querySelector("#scorediv").textContent = score ;
}

function makebubbles(){
    document.querySelector("#btm").innerHTML = ``;
    for( var i = 1; i<153; i++){
        var rn = Math.floor(Math.random()*10);
        document.querySelector("#btm").innerHTML += `<div class = "bubble">${rn}</div>`
    } 
}

function handlebubbleclick(){
    document.querySelector("#btm").addEventListener("click",function(dets){
        if(Number(dets.target.textContent) === hitnum){
            increasescore();
            getnewhit();
            makebubbles();
        }
    })
}

handletimer();
getnewhit();
makebubbles();
handlebubbleclick();