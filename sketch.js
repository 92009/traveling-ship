var ship,ship_sail;
var seaImage;
function preload(){
ship_sail=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(600,300);
  sea = createSprite(00,00,400,400)
  sea.addImage("sea",seaImage)
  sea.x=sea.width/2
  ship=createSprite(200,100,30,50)
  ship.addAnimation("sail",ship_sail)
  ship.scale=0.4
  
}

function draw() {
  background("white");
  sea.velocityX=-2

 drawSprites();
}