const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
canvas.width = 1920;
canvas.height = 1080;
const startScreen = document.querySelector("#game-start");
const endScreen = document.querySelector("#game-over");

const bgImg = new Image();
  bgImg.src = 'images/fondoprincipal.png';
  const wing1Image = new Image();
  wing1Image.src = 'images/wing1.png';
  const wing2Image = new Image();
  wing2Image.src = 'images/wing2.png';
  const audio1= new Audio ('images/theme.mp3');
  const musicButton = document.getElementById("music");

let AudioOn = false;
let spacePressed = false;
let angle = 0;
let score = 0;
let velocity = 0;




function startGame(){
    console.log("Release Snitch");
    startScreen.style.display = "none";
    canvas.style.display = "block";
    
    function animate(){
        ctx.clearRect(0,0, canvas.width, canvas.height);
        
        ctx.font = '50px Arial';
        ctx.fillStyle = 'white';
        ctx.fillText (score, 1750,100);
        bigback.update();
        mediumback.update();
        smallback.update();
        
        snitch.draw();
        ctx.drawImage(wing1Image, snitch.x-80, snitch.y, 186 /1.5, 59/1.5);
        ctx.drawImage(wing2Image, snitch.x, snitch.y-60, 99/1.5, 101/1.5);
       
        snitch.update();
       
        bigfront.update();
        mediumfront.update();
        smallfront.update();

        dementorNumberOne.update();
        dementorNumberTwo.update();
        dementorNumberThree.update();

        dementorNumberOne.collision();  
        dementorNumberTwo.collision();    
        dementorNumberThree.collision();
         

        if (dementorNumberOne.collision()) return;
        if (dementorNumberTwo.collision()) return;
        if (dementorNumberThree.collision()) return;

        bigback.score();
        mediumback.score();
        smallback.score();
        document.querySelector("#score span").innerHTML = score;
       
        requestAnimationFrame(animate);
    }
    animate();
}



window.addEventListener("load", () => {
    

    musicButton.onclick = () => {
        AudioOn = !AudioOn;
            if (AudioOn) {
                musicButton.innerHTML = "MUSIC OFF";
                audio1.pause();
            } else {
                musicButton.innerHTML = "MUSIC ON";
                audio1.play();
            }}


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
     location.reload();
        }
});

