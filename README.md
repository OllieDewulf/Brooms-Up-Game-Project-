# Brooms Up!

Game project for Module 1 at Ironhack.
[Click here to see deployed game](https://olliedewulf.github.io/Brooms-Up-Game-Project-/)

## Description

In 'Brooms Up!' the player can take part in the game of Quidditch. You can control the snitch with the space-bar on the keyboard to move up and down the screen to get through hoops to score and to avoid getting caught by dementors.

### MVP (CANVAS)

- The main element is the snitch.
- Three hoops travel randomly from the right side of the screen to the left.
- Three dementors randomly appear to stop the snitch. Also from right to left of the screen.
- As score goes up the dementor speed increases.

## Backlog

- Scoreboard.
- Music.
- Sound effects when scoring and when caught by dementors.


## Data structure

### broomsup.js
- startGame(){}
- animate(){}

### snitch.js
- Snitch{
    this.x;
        this.y;
        this.velocity;
        this.width;
        this.height;
        this.weight;
}
- constructor(){}
- update(){}
- draw(){}
- fly(){}

### obstacles.js
- bigFrontHoop{
        this.x;
        this.y;
        this.width;
        this.height;
        this.movement;
}
- bigBackHoop{
    this.x;
        this.y;
        this.width;
        this.height;
        this.movement;
}
- mediumFrontHoop{
    this.x;
        this.y;
        this.width;
        this.height;
        this.movement;
}
- mediumBackHoop{
    this.x;
        this.y;
        this.width;
        this.height;
        this.movement;
}
- smallFrontHoop{
    this.x;
        this.y;
        this.width;
        this.height;
        this.movement;
}
- smallBackHoop{
    this.x;
        this.y;
        this.width;
        this.height;
        this.movement;
}
- dementorOne{
    this.x;
        this.y;
        this.width;
        this.height;
        this.movement;
}
- dementorTwo{
    this.x;
        this.y;
        this.width;
        this.height;
        this.movement;
}
- dementorThree{
    this.x;
        this.y;
        this.width;
        this.height;
        this.movement;
}
- constructor(){
    this.x;
        this.y;
        this.width;
        this.height;
        this.movement;
}
- draw(){
    this.x;
        this.y;
        this.width;
        this.height;
        this.movement;
}
- update(){
    this.x;
        this.y;
        this.width;
        this.height;
        this.movement;
}
- collision(){
    this.x;
        this.y;
        this.width;
        this.height;
        this.movement;
}

## States y States Transitions

- #game-start
- #canvas (startGame)
- #game-over

## Task
_List of tasks in order of priority_

## Links

- [Slides Link](https://docs.google.com/presentation/d/1As-pbmtPN47eBoY3jmZh7sClXitifrquBsNe3Tjt674/edit#slide=id.g22ce9ce9f9c_0_73)
- [Github repository Link](https://github.com/OllieDewulf/Brooms-Up-Game-Project-.git)
- [Deployment Link](https://olliedewulf.github.io/Brooms-Up-Game-Project-/)