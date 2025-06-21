let numHome = document.getElementById("number-home")
let numGuest = document.getElementById("number-guest")
let resulth = 0
let resultg = 0


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