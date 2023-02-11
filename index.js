let startBtn= document.getElementById('start')
let stopBtn= document.getElementById('stop')
let resetBtn= document.getElementById('reset')
var timer=null;
var stopwatch=document.querySelector('.stopwatch')
var [milseconds,seconds,minutes,hours]=[0,0,0,0];
startBtn.addEventListener('click', ()=>{
    if(timer!==null){
        clearInterval(timer)
    }
    timer= setInterval(startFun,10)
}

)
stopBtn.addEventListener('click',()=>{
    clearInterval(timer)
})
resetBtn.addEventListener('click', () => {
    [ seconds, minutes, hours ] = [0, 0, 0]
    document.querySelector('.stopwatch').innerHTML = '00 : 00 : 00 : 00'
    clearInterval(timer)
})

function startFun(){
    milseconds+=1;
    if(milseconds==100){
        milseconds=0;
        seconds++;
    
    if(seconds==60){
       seconds=0;
      minutes++;
    
    if(minutes==60){
        minutes=0;
      hours++;
     }
    }


}


var h = hours < 10 ? "0" + hours : hours
var m = minutes < 10 ? "0" + minutes : minutes
var s = seconds < 10 ? "0" + seconds : seconds
var ms = milseconds < 10 ? "0" + milseconds : milseconds

stopwatch.innerHTML=`${h}:${m}:${s}:${ms}`
}