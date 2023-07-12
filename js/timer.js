// 2023-07-12 2.week5

// (javasqript なくても良いが、文末に ; つけた方が正解？)
var counterElement = document.getElementById("counter");
var interval = 1000;
var timer;
var count = 0;

reset()

function reset(){
    count = 0;
    counterElement.innerHTML = count;
}

function start(){
    timer = setInterval(() => { // setinterval function

    }, interval); 
}