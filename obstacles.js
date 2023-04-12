
const audio2= new Audio ('images/wand.mp3');
const audio3= new Audio ('images/laugh.m4a');

// big front hoop 
const bigfrontImage = new Image()
bigfrontImage.src = 'images/aro-grande-afuera.png';

class bigFrontHoop {
    constructor(){
        this.x = 1920;
        this.y = canvas.height + 185;
        this.width = 461;
        this.height = 744;
        this.movement = 2.2;
    }

    draw(){
        ctx.drawImage(bigfrontImage, this.x, this.y, this.width, this.height);
    }

    update(){
        this.x -= this.movement;
        if(this.x < -500){
            this.x = 1920;
        }
        this.draw();
    }  
}

const bigfront = new bigFrontHoop();


// big back hoop  
const bigbackImage = new Image()
bigbackImage.src = 'images/aro-grande-adentro.png';

class bigBackHoop {
    constructor(){
        this.x = 1920;
        this.y = canvas.height + 195;
        this.width = 327;
        this.height = 533;
        this.movement = 2.2;
    }
    draw(){
        ctx.drawImage(bigbackImage, this.x, this.y, this.width, this.height);   
    }

    update(){
        this.x -= this.movement;
        if(this.x < -500){
            this.x = 1920;
        }
        this.draw();
    }

    score(){
        if ( snitch.x + snitch.width < this.x + this.width &&
            snitch.x > this.x  ) {
            console.log('you scored!');
            score += 1;
            audio2.play();
            audio2.volume =0.08;
        }
    }
}

const bigback = new bigBackHoop();


// medium front hoop
const mediumfrontImage = new Image()
mediumfrontImage.src = 'images/aro-mediano-afuera.png';

class mediumFrontHoop {
    constructor(){
        this.x = 3000;
        this.y = canvas.height + 50;
        this.width = 285;
        this.height = 888;
        this.movement = 2.2;
    }


    draw(){
        ctx.drawImage(mediumfrontImage, this.x, this.y, this.width, this.height);   
    }
    update(){
        this.x -= this.movement;
        if(this.x < -500){
            this.x = 2920;
        }
        this.draw();
    }  
}

const mediumfront = new mediumFrontHoop();


// medium back hoop
const mediumbackImage = new Image()
mediumbackImage.src = 'images/aro-mediano-adentro.png';

class mediumBackHoop {
    constructor(){
        this.x = 2970;
        this.y = canvas.height + 51;
        this.width = 225;
        this.height = 396;
        this.movement = 2.2;
    }

    draw(){
        ctx.drawImage(mediumbackImage, this.x, this.y, this.width, this.height);   
    }

    update(){
        this.x -= this.movement;
        if(this.x < -500){
            this.x = 2920;
        }
        this.draw();
        
    }

    score(){
        if ( snitch.x < this.x + this.width &&
            snitch.x + snitch.width > this.x &&
            snitch.y < this.y + this.height &&
            snitch.height + snitch.y > this.y ) {
            console.log('you scored2!');
            score += 1;
            audio2.play();
            audio2.volume =0.08; 
        }
    } 
}

const mediumback = new mediumBackHoop();


// small front hoop
const smallfrontImage = new Image()
smallfrontImage.src = 'images/aro-chico-afuera.png';

class smallFrontHoop {
    constructor(){
        this.x = 4000;
        this.y = canvas.height + 430;
        this.width = 258;
        this.height = 510;
        this.movement = 2.2;
    }

    draw(){
        ctx.drawImage(smallfrontImage, this.x, this.y, this.width, this.height);   
    }

    update(){
        this.x -= this.movement;
        if(this.x < -500){
            this.x = 3920;
        }
        this.draw();
    }  
}

const smallfront = new smallFrontHoop();


// small back hoop
const smallbackImage = new Image()
smallbackImage.src = 'images/aro-chico-adentro.png';

class smallBackHoop {
    constructor(){
        this.x = 3930;
        this.y = canvas.height + 458;
        this.width = 233;
        this.height = 312;
        this.movement = 2.2;
    }

    draw(){
        ctx.drawImage(smallbackImage, this.x, this.y, this.width, this.height);   
    }

    update(){
        this.x -= this.movement;
        if(this.x < -500){
            this.x = 3920;
        }
        
        this.draw();
    }

    score(){
        
        if ( snitch.x < this.x + this.width &&
            snitch.x + snitch.width > this.x &&
            snitch.y < this.y + this.height &&
            snitch.height + snitch.y > this.y) {
            console.log('you scored3!');
            score += 1;
            audio2.play();
            audio2.volume =0.08;
        }
    } 
}

const smallback = new smallBackHoop();


// dementor no. one
const dementoroneImage = new Image()
dementoroneImage.src = 'images/dementor-one.png';

class dementorOne {
    constructor(){
        this.x = 3500;
        this.y = 700;
        this.width = 508 / 1.7;
        this.height = 719 / 1.7;
        this.movement = 3;
    }

    draw(){
        ctx.drawImage(dementoroneImage, this.x, this.y, this.width, this.height);   
    }

    update(){
        this.x -= this.movement;
        if(this.x < -500){
            this.x = 3020;
        }
        if (score >= 800){
            this.movement = 8;
        }
        else if (score>=450){
            this.movement = 5;
        }
        else{
            this.movement = 2;
        }
       
        this.draw();
    }

    collision(){
        if (
            snitch.x < this.x + this.width &&
            snitch.x + snitch.width > this.x &&
            snitch.y < this.y + this.height &&
            snitch.height + snitch.y > this.y
        ) {
            
            console.log('Collision 1');
            audio3.play();
            audio3.volume = 0.7;
            endScreen.style.visibility = "visible";
            canvas.style.display = "none";
            return true;    
        }
    }
}

const dementorNumberOne = new dementorOne(); 


// dementor no. two
const dementortwoImage = new Image()
dementortwoImage.src = 'images/dementor-two.png';

class dementorTwo {
    constructor(){
        this.x = 5500;
        this.y = 10;
        this.width = 438 / 1.7;
        this.height = 708 / 1.7;
        this.movement = 2;
    }

    draw(){
        ctx.drawImage(dementortwoImage, this.x, this.y, this.width, this.height);   
    }

    update(){
        this.x -= this.movement;
        if(this.x < -500){
            this.x = 5920;
        }
        if (score >= 1000){
            this.movement = 7;
        }
        else if (score>=500){
            this.movement = 4;
        }
        else{
            this.movement = 2;
        }
        
        this.draw();
    }

    collision(){
        if (
            snitch.x < this.x + this.width &&
            snitch.x + snitch.width > this.x &&
            snitch.y < this.y + this.height &&
            snitch.height + snitch.y > this.y
        ) {
           
            console.log('Collision 2');
            audio3.play();
            audio3.volume = 0.7;
            endScreen.style.visibility = "visible";
            canvas.style.display = "none";
            return true; 
        }
    }
}

const dementorNumberTwo = new dementorTwo();


// dementor no. three
const dementorthreeImage = new Image()
dementorthreeImage.src = 'images/dementor-three.png';

class dementorThree {
    constructor(){
        this.x = 5000;
        this.y = 600;
        this.width = 642 / 1.7;
        this.height = 793 / 1.7;
        this.movement = 2;
    }

    draw(){
        ctx.drawImage(dementorthreeImage, this.x, this.y, this.width, this.height);   
    }

    update(){
        this.x -= this.movement;
        if(this.x < -500){
            this.x = 5000;
        }
       
        if (score >= 1500){
            this.movement = 10;
        }
        else if (score>=550){
            this.movement = 6;
        }
        else{
            this.movement = 2;
        }
        this.draw();
    }

    collision(){
        if (
            snitch.x < this.x + this.width &&
            snitch.x + snitch.width > this.x &&
            snitch.y < this.y + this.height &&
            snitch.height + snitch.y > this.y
        ) {
           
            console.log('Collision 3');
            audio3.play();
            audio3.volume = 0.7;
            endScreen.style.visibility = "visible";
            canvas.style.display = "none";
            return true;
        }
    }
}

const dementorNumberThree = new dementorThree();

