
const snitchImage = new Image()
  snitchImage.src = 'images/snitch.png';

class Snitch {
    constructor(){
        this.x = 50;
        this.y = 500;
        this.velocity = 0;
        this.width = 235;
        this.height = 216;
        this.weight = 0.2;
    }

    update(){
        if (this.y > canvas.height-this.height){
            this.y = canvas.height- this.height;
            this.velocity = 0; 
        } else {
            this.velocity*=0.9;
            this.velocity += this.weight;
            this.y += this.velocity;
            
        };
        if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        }
       if (spacePressed) {this.fly()};  
       
       
    }

    draw(){
        
        ctx.drawImage(snitchImage, this.x, this.y, this.width, this.height);
    }

    fly(){
        this.velocity -= 0.9;
    }
}

const snitch = new Snitch();