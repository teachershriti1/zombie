var bullet,zombie,zombie1,zombie2,zombie3,zombieImage,thickness,shotgun,shotgunImage;
var speed,weight,wall1,wall2; 
var score=0;
var health=100;
var PLAY=1;
var END=0;
var gameState=PLAY;
var gameOver,restart,gameOverImg,resetImg;
function preload(){
shotgunImage=loadImage("shotgun.png");
zombieImage=loadImage("zombie.png");
gameOverImg=loadImage("gameover.png");
resetImg=loadImage("reset.png");
}
function setup() {
 
 createCanvas(1800,800);


var a="shriti"
console.log(a)
var b=100
console.log(b)
var c=null
console.log(c)
var d=true
console.log(d)

var array=["archisman","shriti",7,"MCA"]
array.push("abc")

console.log(array)
array.pop()
console.log(array)
var array1=[[1,2],[3,4],[5,6]]
console.log(array1)
console.log(array1[2][1])




 shotgun=createSprite(100,200,50,50)
 shotgun.addImage(shotgunImage)
 weight=random(30,52);
 gameOver=createSprite(900,400)
 gameOver.addImage(gameOverImg)
 gameOver.scale=2.0;
 restart=createSprite(900,600);
 restart.addImage(resetImg)
 wall1=createSprite(1100,400,1700,20)
 wall2=createSprite(1100,600,1700,20)
 zombieGroup1=new Group()
 zombieGroup2=new Group()
 zombieGroup3=new Group()
 bulletGroup=new Group()
 thickness=random(22,83);
}

function draw() {
  background(255,255,255);  
  
 if (gameState===PLAY){
   restart.visible=false;
   gameOver.visible=false;
  fill("red")
  textSize(30)
  text("score:"+score,1600,100)
  text("health:"+health,1400,100)
  shotgun.y=mouseY;
  //shotgun.depth=bullet.depth;
  //shotgun.depth=shotgun.depth+1;
  reload();
 spawnZombie();
 shoot();
 if(zombieGroup1.isTouching(bulletGroup)){
  zombieGroup1.destroyEach()
  bulletGroup.destroyEach()
  score=score+10;
  
}
if(zombieGroup2.isTouching(bulletGroup)){
  zombieGroup2.destroyEach()
  bulletGroup.destroyEach()
  score=score+10;  
}
if(zombieGroup3.isTouching(bulletGroup)){
  zombieGroup3.destroyEach()
  bulletGroup.destroyEach()
  score=score+10;
  
}
if (shotgun.isTouching(zombieGroup1||zombieGroup2||zombieGroup3)){
  health=health-1;
}
 if (health===0){
   gameState=END;
 }
}
else if(gameState===END){
  restart.visible=true;
  gameOver.visible=true;
  if(mousePressedOver(restart)){
    reset();
  }
}
drawSprites();
  }
 
 function spawnZombie(){
   if(frameCount%60===0){
  
   var a=Math.round(random(1,3));
   switch (a) {
     case 1:
      zombie1=createSprite(1800,500,80,80)
      zombie1.addImage(zombieImage)
       break;
      case 2:
       zombie2=createSprite(1800,300,80,80)
      zombie2.addImage(zombieImage)
      
       break;
      case 3:
      zombie3=createSprite(1800,700,80,80)
      zombie3.addImage(zombieImage)   
       break;

      
   }
  if(zombie1){
     zombie1.velocityX=-4;
     zombie1.scale=0.5
     zombieGroup1.add(zombie1)
  }
  if(zombie2){
     zombie2.velocityX=-4;
     zombie2.scale=0.5
     zombieGroup2.add(zombie2)
  }
  if(zombie3){
     zombie3.velocityX=-4;
     zombie3.scale=0.5
     zombieGroup3.add(zombie3)
  }
    
     
    
   }
 }

 function shoot(){
   if(keyDown("e")){
     bullet.velocityX=600;

   }
  
 }

 function reload(){
  if(frameCount%60===0){
  bullet=createSprite(50,200,50,5);
 
  bullet.y=mouseY;
  
  bulletGroup.add(bullet)
  }
 }
function reset(){
  gameState=PLAY;
  bulletGroup.destroyEach()
  zombieGroup1.destroyEach()
  zombieGroup2.destroyEach()
  zombieGroup3.destroyEach()
  score=0;
  health=100;
}
