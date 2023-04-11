const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
canvas.width = 1920;
canvas.height = 1080;
const startScreen = document.querySelector(".game-start");

const bgImg = new Image();
  bgImg.src = 'images/fondogameboard.png';

 

let spacePressed = false;
let angle = 0;
let score = 0;
let velocity = 0;
let gameOver = false;

function startGame() {
    console.log("Release Snitch");
    startScreen.style.display = "none";
    canvas.style.display = "block";
    function animate(){
        ctx.clearRect(0,0, canvas.width, canvas.height);
        
        bigback.update();
        mediumback.update();
        smallback.update();
        
        snitch.draw();
        snitch.update();
       
        bigfront.update();
        mediumfront.update();
        smallfront.update();

        dementorNumberOne.update();
        dementorNumberTwo.update();
        dementorNumberThree.update();

        dementorNumberOne.collision();
        if (dementorNumberOne.collision()) return;
        dementorNumberTwo.collision();
        dementorNumberThree.collision();

        requestAnimationFrame(animate);
        
    }
    animate();
}



window.addEventListener("load", () => {
    console.log("Snitch is ready");

document.getElementById("start-button").onclick = () => {
    startGame();
}


document.addEventListener('keydown', function(e) {
 
    if (e.code === 'Space') spacePressed = true;
     snitch.fly();
    });
    
document.addEventListener('keyup', function(e) {
    if (e.code === 'Space') spacePressed = false;

    });

document.getElementById("restart-button").onclick = () => {
        startGame();
    }

});