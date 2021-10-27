var bG , bGImage;
var boy1 , boy1Img;
var boy2 , boy2Img;
var zombie , zombieImg;
var bullet , bulletImg;
var gameState = 0;
var playerCount;
var player , form;
var allPlayers;
var boys;
var distance = 0;

function preload(){
  bGImage = loadImage("background.png");
  boy1Img = loadImage("boy.png");
  boy2Img = loadImage("boy2.png");
  zombieImg = loadImage("zombie2.png");
  bulletImg = loadImage("bullet.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  database = firebase.database();
 // bG = createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
 // bG.addImage(bGImage);
 // bG.scale = 2;
 // bG.velocityX = -5;
 // bG.x = bG.width/2;

 

  game = new Game();
  game.getState();
  game.start();
}

function draw() {
 // background(255,245,250); 

  

  /*if(bG.x < 0){
    bG.x = bG.width/2;
    
  }*/

  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}