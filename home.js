var max = 6;
var min = 0;
var player1 = 0;
var player2 = 0;
function roll(){
    var dice1 = Math.floor(Math.random() * (max-min)+1) + min;
    var dice2 = Math.floor(Math.random() * (max-min)+1) + min;
    var heading = document.querySelector("#heading");
    var ply1 = document.querySelector("#player1");
    var ply2 = document.querySelector("#player2");
    var img1 = document.querySelector("#img1");
    var img2 = document.querySelector("#img2");
    var audio = new Audio('./Resources/diceSound.mp3'); //Add rolling dice sound
    audio.play();
    if(dice1>dice2){
        heading.innerText = "🚩 Player 1 Wins";
        player1++;
        ply1.innerText = "Player 1 - " + player1;
        img1.src = "./Resources/dice"+dice1+".png";
        img2.src = "./Resources/dice"+dice2+".png";
    }
    else if(dice1<dice2){
        heading.innerText = "Player 2 Wins 🚩";
        player2++;
        ply2.innerText = "Player 2 - " + player2;
        img1.src = "./Resources/dice"+dice1+".png";
        img2.src = "./Resources/dice"+dice2+".png";
    }
    else if(dice1 == dice2){
        heading.innerText = "🏳️ It's a Tie 🏳️";
        img1.src = "./Resources/dice"+dice1+".png";
        img2.src = "./Resources/dice"+dice2+".png";
    }
}
document.body.addEventListener('keydown',roll()); //Just by pressing spacebar the dice will roll
