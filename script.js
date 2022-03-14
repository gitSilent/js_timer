'use strict'
let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');
let button = document.querySelector('#btn');

function timer(){
    if (seconds.value < 60 && seconds.value > 0 ){
        seconds.value = seconds.value - 1;
    }
    else if (minutes.value >= 1){
        seconds.value = 59;
        minutes.value = minutes.value - 1;
    } 
    else if (hours.value >= 1){
        seconds.value = 59;
        minutes.value = 59
        hours.value = hours.value - 1;
    }
}
function disableInput(){
    hours.setAttribute('disabled', 'disabled()');
    minutes.setAttribute('disabled', 'disabled()');
    seconds.setAttribute('disabled', 'disabled()');
}
function enableInput(){
    hours.removeAttribute('disabled');
    minutes.removeAttribute('disabled');
    seconds.removeAttribute('disabled');
}


seconds.value = 0;
minutes.value = 0;
hours.value = 0;
let countSeconds = parseInt(hours)*3600+parseInt(minutes)*60+parseInt(seconds);
let interval;
let divTimer = document.querySelector('.divTimer');
let btnStop = document.createElement('button');
divTimer.addEventListener('click', (event)=>{
    
    if (event.target.classList.contains('start')){
        event.target.classList.remove('start')
        event.target.textContent = "Pause";
        event.target.classList.add('pause');
        interval = setInterval(timer, 1000);

        
        btnStop.classList.add('stop');
        let stopButton = document.querySelector('stop');
        btnStop.textContent = 'Stop';

        document.querySelector('.divTimer').appendChild(btnStop);
        
        disableInput();
        
    }

    else if (event.target.classList.contains('pause')){
        event.target.textContent = "Resume";
        event.target.classList.remove('pause');
        event.target.classList.add('resume');
        clearInterval(interval);

        enableInput();
    }
    else if (event.target.classList.contains('resume')){
        event.target.classList.remove('resume');
        event.target.classList.add('pause');
        event.target.textContent = "Pause";
        interval = setInterval(timer, 1000);
        enableInput();
    }
    else if (event.target.classList.contains('stop')){
        clearInterval(interval);
        seconds.value = 0;
        minutes.value = 0;
        hours.value = 0;

        btnStop.remove();
        button.textContent = 'Start';
        button.classList.remove('pause');
        button.classList.add('start');

        enableInput();
    }
})

