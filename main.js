
// GLOBAL VARIABLES

let canvas =  document.querySelector('#my-canvas');
let ctx = canvas.getContext("2d");


//DOM ELEMENTS 
let splashScreen =  document.querySelector("#splash-screen");
let gameoverScreen = document.querySelector("#gameover-screen");
let startBtn = document.querySelector("#start-btn");
let restartBtn = document.querySelector("#restart-btn");

let welcome = document.querySelector("#welcome");
let game;
//FUNTIONS 



const startGame = () => {
splashScreen.style.display = "flex";
canvas.style.display = "flex";
welcome.style.display= "none";
startBtn.style.display="none";
game = new Game();
game.gameLoop();
}

const restartGame = () => {
    gameoverScreen.style.display = "none";
    canvas.style.display = "flex";

    game = new Game();
    game.gameLoop();
}

//ADD EVENT LISTENERS 

startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", restartGame);
document.addEventListener("keydown", (e)=> {
    game.dude.keyDown(e);
})
