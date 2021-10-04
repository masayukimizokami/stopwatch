
var timerAreaFirst = document.getElementById("time");
timerAreaFirst.innerHTML = "0:0:0:0"
 

let startButton= document.getElementById('startButtonId');
let stopButton= document.getElementById('stopButtonId');
let resetButton= document.getElementById('resetButtonId');

let timeArea= document.getElementById('time')

let time=0;
let timerId=null;



startButton.addEventListener('click',(event) =>{
  timerId=setInterval(()=>{
    time +=100;
    timeArea.innerText = formatTime(time);
  },100);
})

stopButton.addEventListener('click',(event) =>{
  clearInterval(timerId);
})

resetButton.addEventListener('click',(event) =>{
   clearInterval(timerId);
})

function formatTime(time){
  let msec = time % 1000;
  let tempSec = Math.floor(time / 1000);
  let sec = tempSec % 60;
  let tempMin = Math.floor(tempSec / 60);
  let min = tempMin % 60;
  let hour =Math.floor(tempMin / 60);
  
  let strSmin = Math.floor(msec / 100);

  
  
  return hour + ":" + min + ':'  + sec  + ':' + strSmin;
  
}



stopButton.disabled = true; resetButton.disabled = true;
  
// スタート
startButton.addEventListener("click", function() {

startButton.disabled = true; 
stopButton.disabled = false; 
resetButton.disabled = false; 
  });

// ストップ
stopButton.addEventListener("click", function() {
time+= 100; formatTime() 
startButton.disabled = false; 
stopButton.disabled = true; 
resetButton.disabled = false; 
});

// リセット
resetButton.addEventListener("click", function() {
clearInterval(setInterval); 
time = 0; 
timeArea.textContent = "0:0:0:0"; 
time = 0; 
startButton.disabled = false; 
stopButton.disabled = true; 
resetButton.disabled = true; 
});