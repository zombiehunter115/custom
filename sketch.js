const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2
var box3, box4
var box5, box6
var box7, box8
var player
var enemies,enemies2
var enemy3,enemy4
var invisiBoxm,invisiBox2
var invisiBox3,invisiBox4
var invisiBox5,invisiBox6
var invisiBox7
var resetSpirt
var winSprit

var gameState = 0
function setup() {
  createCanvas(1600,800);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);
  box1 = createSprite(500,150,150,50)
  box2 = createSprite(100,100,50,50)
  box3 = createSprite(700,200,100,50)
  box4 = createSprite(800,400,150,50)
  box5 = createSprite(250,150,100,50)
  box6 = createSprite(663,483,100,50)
  box7 = createSprite(500,600,150,50)
  box8 = createSprite(183,601,150,50)
  player = createSprite(100,10,50,50)
  player.velocityY += 5
  enemies = createSprite(500,115,50,25)
  enemies.shapeColor ='red'
 enemies.velocityX = 5
 enemies2 = createSprite(491,562,50,25)
 enemies2.shapeColor ='red'
enemies2.velocityX = 5
enemy3 = createSprite(623,448,50,25)
enemy3.shapeColor ='red'
enemy3.velocityX = 5
 invisiBox = createSprite(577,110,1,1)
 invisiBox2 = createSprite(427,114,1,1)
 invisiBox3= createSprite(574,558,1,1)
 invisiBox4 = createSprite(425,555,1,1)
 invisiBox5 = createSprite(716,448,1,1)
 invisiBox6 = createSprite(612,448,1,1)
 invisiBox7 = createSprite(164,141,10,10)
 invisiBox7.visible = false
 resetSpirt =createSprite(1414,145,50,50)
 resetSpirt.shapeColor = "green"
winSprit = createSprite(133,555,50,50)
  winSprit.shapeColor = "blue"


}

function draw() {
  background(180);

   
  text(mouseX+","+mouseY,mouseX,mouseY)
   textSize(30)
   fill("black")
    text("go to the blue block to win",1059,364) 
    text("red blocks are harmful",1059,414)
  Engine.update(engine)
box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
box8.display()
player.display()
if(gameState == 0){
  handlePlayerControls()
player.bounceOff(box1)
player.bounceOff(box2)
player.bounceOff(box3)
player.bounceOff(box4)
player.bounceOff(box5)
player.bounceOff(box6)
player.bounceOff(box7)
player.bounceOff(box8)
player.bounceOff(invisiBox7)

enemies.bounceOff(invisiBox)
enemies.bounceOff(invisiBox2)
enemies2.bounceOff(invisiBox4)
enemies2.bounceOff(invisiBox3)
enemy3.bounceOff(invisiBox5)
enemy3.bounceOff(invisiBox6)

resetSpirt.visible = false

if(player.isTouching(enemies)||player.isTouching(enemies2)||player.isTouching(enemy3)){
  gameState = 1
  
}

if(player.isTouching(winSprit)){
  gameState = 2
}

}
if(gameState == 1){
  player.velocityX = 0
  player.velocityY = 0
  enemies2.velocityX = 0
  enemies.velocityX = 0
  enemy3.velocityX = 0
  textSize(75)
  text("Game over",588,350)
  textSize(50)
  text("reset",1353,112)
  player.x = 100
  player.y = 10
  resetSpirt.visible = true
}

if(gameState == 2){
  player.velocityX = 0
  player.velocityY = 0
  enemies2.velocityX = 0
  enemies.velocityX = 0
  enemy3.velocityX = 0
  textSize(75)
  text("you win",588,350)
  textSize(50)
  text("reset",1353,112)
  player.x = 100
  player.y = 10
  resetSpirt.visible = true
}
if(mousePressedOver(resetSpirt)){
  gameState = 0
enemies.velocityX = 5
enemies2.velocityX = 5
enemy3.velocityX = 5
}

  drawSprites();
}
function handlePlayerControls(){
  if(keyDown(UP_ARROW)){
    player.y += -6 
  }
  
  if(keyDown(DOWN_ARROW)){
    player.y += 6 
  }
 
  if(keyDown(RIGHT_ARROW)){
    player.x += 15
  }

  if(keyDown(LEFT_ARROW)){
    player.x += -15
  }

}
  
  
    