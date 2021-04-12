var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  
  bullet = createSprite(50,200,28,8);
  bullet.shapeColor="white"
  bullet.velocityX=speed;

  wall = createSprite(1500,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(0); 
  
   if(bullet.isTouching(wall)){
    bullet.velocity.x=0;
    var damage =Math.round(0.5 * weight * speed * speed/thickness*thickness*thickness);
    console.log(damage)
    if(damage>10){
      bullet.shapeColor="red";
    }
    if(damage<10){
      bullet.shapeColor="green";
    }
   }
  bullet.collide(wall);
  drawSprites();
}

