const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
const timer = document.getElementById('timer');

// intilization of variables
let seconds = 00;
let minute = 00;
let intervalId;

//set Interval for start button using a variable intervalId
function timeStart(){
   if(!intervalId){
     intervalId = setInterval(toStartTime,1000);
   }
}

//functionality for start button
function toStartTime(){
    seconds++;
    //if minute or second is in one digit, so make it to display as two digit
    timer.textContent = `${minute<10 ? '0' + minute : minute}:${seconds<10 ? '0' + seconds : seconds}`;
      if(seconds === 59){
        minute++;
        seconds = -1;
      }
}

//functionality for stop button
function toStopTime(){
    clearInterval(intervalId);
    intervalId = null;
}

// Event Listener for all buttons

start.addEventListener('click', timeStart );
stop.addEventListener('click', toStopTime);
reset.addEventListener('click', toResetTime);

//functionality for reset button
function toResetTime(){
        toStopTime();
        seconds = 0;
        minute = 0;
        timer.textContent = `${minute<10 ? '0' + minute : minute}:${seconds<10 ? '0' + seconds : seconds}`;
    
}