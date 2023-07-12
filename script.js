let num = document.getElementsByClassName("numberShow")[0];

// because getElementByClassName list de deta hai isliye [0] use kiya 
// warna fir byId kar lo

let botonIncrease = document.getElementsByClassName("increment")[0];
let botonDecrease = document.getElementsByClassName("decrement")[0];
let botonReset = document.getElementsByClassName("reset")[0];
console.log(num.innerText);

function inc(){
    let currentValue = parseInt(num.innerText);     //parseInt se text ko integer me badal liya
    num.innerText = currentValue + 1;
}

function dec(){
    let currentValue = parseInt(num.innerText);
    num.innerText = currentValue - 1;
}

function res(){
    num.innerText = 0;
}

function increaseKaro(){
   inc();
}

function decreaseKaro(){
   dec();
}

function resetKaro(){
   res();
}

botonIncrease.addEventListener("click", increaseKaro);
botonDecrease.addEventListener("click", decreaseKaro);
botonReset.addEventListener("click", resetKaro);







