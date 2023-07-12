// 2023-07-12 2.week5

// (javasqript なくても良いが、文末に ; つけた方が正解？)
var counterElement = document.getElementById("counter");
// var interval = 1000; // 1000ミリ秒
var interval = 10; 
var timer;
var count = 0;

reset()

function reset(){
    count = 0;
    counterElement.innerHTML = count;
}

function start(){
    clearInterval(timer)
    timer = setInterval(() => { // setinterval function
        count++
        //counterElement.innerHTML = count
        counterElement.innerHTML = count /100
    }, interval); 
}

function stop(){
    clearInterval(timer)
}
