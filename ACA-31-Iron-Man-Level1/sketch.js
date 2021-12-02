
var bg, backgroundImg;

function preload() {
  Space = loadImage("images/bg.jpg");
  Ironman = loadImage("images/iron.png")
 Rock = loadImage("images/stone.png")
 logo = loadImage("images/ironlog.png")
  bgImage=loadImage("images/bg.jpg");
  spriteImage=loadImage("images/iron.png")
  barrierimg = loadImage("images/stone.png")
  logoimg = loadImage("images/ironlog.png")

}

function setup() {
  createCanvas(1280, 800);
  bg=createSprite(600,600);
  bg.addImage(bgImage);
  bg.scale = 2.1;
  ironman = createSprite(300,450);
  ironman.addImage(spriteImage);
  ironman.scale = 0.4;
  stone= createSprite(390,470);
  stone.addImage(barrierimg);
  stone.scale = 1.2;
  style = createSprite(1100,150);
  style.addImage(logoimg);
  style.scale = 1.0;
  
  
  

 
}

function draw() {
  background("")
  if (keyDown("up")){
    ironman.velocityY = -10;
  
  }
  if (keyDown("left")){
  ironman.x = ironman.x -5;
  }
 if (keyDown("right")){
   ironman.x = ironman.x +5;
 }
    ironman.velocityY = ironman.velocityY + 0.5;
    ironman.collide(stone)
    drawSprites();
   
}

