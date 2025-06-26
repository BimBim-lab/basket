let numHome = document.getElementById("number-home")
let numGuest = document.getElementById("number-guest")
let resulth = 0
let resultg = 0


let timer;
let secondsLeft = 720;
let period = 1;
let foulHome = 0;
let foulGuest = 0;
let bonusHome = false;
let bonusGuest = false;
let foulhome = document.getElementById("foul-home")
let foulguest = document.getElementById("foul-guest")


function haddOne(){
    resulth +=1
    numHome.textContent = resulth
}
function haddTwo(){
    resulth += 2
    numHome.textContent = resulth
}
function haddThree(){
    resulth += 3
    numHome.textContent = resulth
}

function gaddOne(){
    resultg += 1
    numGuest.textContent = resultg
}
function gaddTwo(){
    resultg += 2
    numGuest.textContent = resultg
}
function gaddThree(){
    resultg += 3
    numGuest.textContent = resultg
}


function addFoul(team) {
    if (team === 'home') {
        foulhome.textContent = parseInt(foulhome.textContent) + 1;  
    } else if (team === 'guest') {
        foulguest.textContent = parseInt(foulguest.textContent) + 1;
    } 

}
    
function toggleBonus(team) {
    if (team === 'home') {
        bonusHome = !bonusHome;
        document.getElementById("bonus-home").textContent = bonusHome ? "Yes" : "No";
    }
    else if (team === 'guest') {
        bonusGuest = !bonusGuest;
        document.getElementById("bonus-guest").textContent = bonusGuest ? "Yes" : "No";
    }}
function nextPeriod() {
    period++;
    document.getElementById("period").textContent = period;
    secondsLeft = 720; // Reset timer for new period
    clearInterval(timer); // Clear any existing timer
    startTimer(); // Start the timer for the new period
}

function startTimer() {
    clearInterval(timer); // Clear any existing timer
    timer = setInterval(() => {
        if (secondsLeft > 0) {
            secondsLeft--;
            updateDisplay();
        } else {
            clearInterval(timer);
            alert("Period " + period + " has ended.");
        }
    }, 1000);
   
}
function fullReset() {
    resulth = 0;
    resultg = 0;
    numHome.textContent = resulth;
    numGuest.textContent = resultg;
    foulhome.textContent = "0";
    foulguest.textContent = "0";
    bonusHome = false;
    bonusGuest = false;
    document.getElementById("bonus-home").textContent = "No";
    document.getElementById("bonus-guest").textContent = "No";
    period = 1;
    secondsLeft = 720; // Reset timer to 12 minutes
    clearInterval(timer); // Clear any existing timer
    updateDisplay();
}

function updateDisplay() {
    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;
    document.getElementById("timer").textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    document.getElementById("period").textContent = period;
    document.getElementById("foul-home").textContent = foulhome.textContent;
    document.getElementById("foul-guest").textContent = foulguest.textContent;
}
