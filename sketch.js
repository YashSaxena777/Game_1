var player1,player2,backgroundImg,platform;
var player1img,player2img;




function preload() {
  backgroundImg = loadImage("Sprites/bg_img.jpg");

  player1img = loadImage("Sprites/Player_1.png");
  player2img = loadImage("Sprites/Player_2.png");

  
}

function setup() {
  createCanvas(1800,900);
  //createSprite(400, 200, 50, 50);
  player1 = createSprite(560,600,50,50);
  player1.addImage(player1img);
  player1.scale=0.2

  player2 = createSprite(1400,600,50,50);
  player2.addImage(player2img);
  player2.scale=0.4


 // background = createSprite(0,0,2000,1000);
 // background.addImage(backgroundImg);
  // background.scale =5
}

function draw() {
  background(backgroundImg);  
  drawSprites();
}
  function keyPressed()  {

    if (keyCode === LEFT_ARROW) {
     
       player1.x = player1.x - 10;
    }
   
    if (keyCode === RIGHT_ARROW) {
      
      player1.x = player1.x + 10;
    }
  
    
      
    }
  
