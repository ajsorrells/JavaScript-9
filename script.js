function showRandom(){
    document.getElementById("output").innerText = Math.random();
}

function showFloor(){
    document.getElementById("output").innerText = Math.floor(7.9);
}

function showCeli(){
    document.getElementById("output").innerText = Math.ceil(2.2);
}

function rollDice(){
    let roll = Math.floor(Math.random() * 6) + 1;
    document.getElementById("output").innerText = "Dice Roll: " + roll;
}

function pickRandom(){
    let names = ["Erica", "Chris", "Taylor", "Jordan"]
    let index = Math.floor(Math.random() * names.length);
    document.getElementById("output").innerText = "Chosen: " + names[index];
}