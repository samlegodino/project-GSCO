var zenai,Tourus,Cyclap;
var wall1,wall2,wall3;


function setup() {
  createCanvas(1600,600);

zenai=createSprite(100,50,10,10);
zenai.shapeColor="green";


Tourus=createSprite(100,200,10,10);
Tourus.shapeColor="red";


Cyclap=createSprite(100,500,10,10);
Cyclap.shapeColor="pink";



wall1=createSprite(400,50,5,10);
wall1.shapeColor="blue";


wall2=createSprite(400,200,5,10);
wall2.shapeColor="yellow";


wall3=createSprite(400,500,5,10);
wall3.shapeColor="purple";


}
function draw() {
  background(0,0,0);  
  zenai.display();
  Tourus.display();
  Cyclap.display();
  wall1.display();
  wall2.display();
  wall3.display();

  zenai.velocityX=2
  Tourus.velocityX=2
  Cyclap.velocityX=2
  wall2.collide(Tourus);
  wall3.collide(Cyclap)

  if (zenai - wall1 < wall1/2 + zenai.width/2
    && wall1 - zenai.x < wall1.width/2 +zenai.width/2) {
 zenai.velocityX = zenai.velocityX * (-1);
 wall1.velocityX = wall1.velocityX * (-1);

 if (Tourus.x - wall2.x < wall2.width/2 + Tourus.width/2
  && wall2.x -Tourus.x < wall2.width/2 + Tourus.width/2) {
Tourus.velocityX = Tourus.velocityX * (-1);
wall2.velocityX = wall2.velocityX * (-1);

if (Cyclap.x - wall3.x < wall3.width/2 + Cyclap.width/2
  && wall3.x - Cyclap.x < wall3.width/2 + Cyclap.width/2) {
Cyclap.velocityX =Cyclap.velocityX * (-1);
wall3.velocityX = wall3.velocityX * (-1);
}
}
}




zenai.collide(wall1)


  drawSprites();
}