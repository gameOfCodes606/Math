// querying elements
const clock = document.getElementsByClassName('clock')[0];
const screen = document.getElementsByClassName('display')[0];
const scoreSheet = document.getElementsByClassName('score')[0];
const startButton = document.getElementById('startButton')

const timeLimit = 60;
let currentTime = 0;
let score = 0;
let res;
// get a random number between 0 and 100
const getRandomNumber = ()=>{
    return Math.floor(Math.random()*100)
}

const operators = ["+" , "*" , "-" , "/"];

// get one operator out of the four
// each turn there should be a random operators
const getOperator = ()=>{
    return operators[(Math.floor(Math.random()*4))%4];
}


// updating the score
const updateScore = ()=>{
    scoreSheet.textContent = score;
}
// add a particular text to display
const AddToDisplay = (text) =>{
    screen.textContent += text;
}

// reset Display
const resetDisplay = ()=>{
    screen.textContent = "";
}

// display time to clock

const addTime = ()=>{
    clock.textContent = currentTime;
}



