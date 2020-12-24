
var bullet,wall;
var speed , wieght,thickness;
 

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50,200,70,50);

 
 
  speed = random(223,321);
  wieght = random(30,52);
  thickness=random(22,83);

  wall =createSprite(1500, 200, thickness, height/2);
}

function draw() {
  background("white");  

  bullet.velocityX=speed;

  
 wall.shapeColor=color(80,80,80);

 if (hascollided(bullet,wall)){
  
  bullet.velocityX=0;
  var damage= 0.5 * wieght *speed*speed/(thickness*thickness*thickness);

  if(damage > 10){
    wall.shapeColor=color(255,0,0);
  }
  
  if (damage < 10){
    wall.shapeColor=color(0,255,0);
  }

}

  drawSprites();

}


function hascollided (lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge ){
    return true
  }
  return false;
}

