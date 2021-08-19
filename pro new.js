var ship,ship_sail;
function preload(){
ship_sail=loadAnimation("ship-1.png")
}

function setup(){
  createCanvas(400,400);
  ship=createSprite(200,200,30,50)
  ship.addAnimation("sail",ship_sail)
  ship.scale=5
}

function draw() {
  background("blue");
  createSprite;
 drawSprites;
}