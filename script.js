//Use query Selectors to get the class of all the button shapes
const redLight = document.querySelector('.red-light'); 
const yellowLight = document.querySelector('.yellow-light'); 
const greenLight = document.querySelector('.green-light');
const noLight = document.querySelector('.no-light');

//Use getElementById which allows us to get the ID so that we can add an event listener to the buttons, listen for a click and then set the color via css properties.
const redSwitch = document.getElementById('red-switch'); 
const yellowSwitch = document.getElementById('yellow-switch'); 
const greenSwitch = document.getElementById('green-switch');  
const cycleSwitch = document.getElementById('cycle-switch');
const offSwitch = document.getElementById('off-switch');

//Add event listeners that listen for a button click

let isRed = true;

redSwitch.addEventListener('click', () => {
    if (isRed) {
        redLight.style.backgroundColor = 'red';
    } else {
        redLight.style.backgroundColor = '#444';    //Turn all lights on and off with their specific buttons
    }
    isRed = !isRed;
});


let isYellow = true;

yellowSwitch.addEventListener('click', () => {
    if (isYellow) {
        yellowLight.style.backgroundColor = 'yellow';
    } else {
        yellowLight.style.backgroundColor = '#444';    //Turn all lights on and off with their specific buttons
    }
    isYellow = !isYellow;
});

let isGreen = true;

greenSwitch.addEventListener('click', () => {
    if (isGreen) {
        greenLight.style.backgroundColor = 'green';
    } else {
        greenLight.style.backgroundColor = '#444';    //Turn all lights on and off with their specific buttons
    }
    isGreen = !isGreen;
}); 

//Party Mode Button

let currentLight = 'red'; 
let intervalId = null;

function cycleLight(){
    redLight.style.backgroundColor = '#444';
    yellowLight.style.backgroundColor = '#444';
    greenLight.style.backgroundColor = '#444';
    if(currentLight === 'red'){
        redLight.style.backgroundColor = 'red'; 
        currentLight = 'yellow';
    } else if (currentLight === 'yellow'){
        yellowLight.style.backgroundColor = 'yellow'; 
        currentLight = 'green';
    } else {
        greenLight.style.backgroundColor = 'green'; 
        currentLight = 'red';
    }
}

cycleSwitch.addEventListener('click', () => {
    if(!intervalId) {
    intervalId = setInterval(cycleLight, 400);
    }
}); 

//Turn all lights on and off at once with a single button

function turnAllLightsOff() {
    redLight.style.backgroundColor = '#444';
    yellowLight.style.backgroundColor = '#444';
    greenLight.style.backgroundColor = '#444';
}

let isOff = true;

offSwitch.addEventListener('click', () => {
    if (isOff) {
        turnAllLightsOff();
    } 

    isOff = !isOff;
}); 
