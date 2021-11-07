
var human,humanImage;
var powerup,powerupImage;
var backGround,backgroundImage;
var zombies,zombiesImage;
var disadvantage,disadvantageImage;
var invisibleGround;
var obstacle;

function preload(){
humanImage=loadImage("images/human.png")
powerupImage=loadImage("images/powerUp.png")
backgroundImage=loadImage("images/bg.jpeg")
disadvantageImage=loadImage("images/disadvantage.png")
zombiesImage=loadImage("images/zombies.png")
obstacleImage=loadImage("images/Obstacle.png")
}

function setup()
{
  createCanvas(600,200);
backGround=createSprite(300,80);
backGround.addImage(backgroundImage)
backGround.scale=0.63
backGround.velocityX=-3
human=createSprite(100,100)
human.addImage(humanImage)
human.scale=0.35
invisibleGround=createSprite(300,200,600,10)


}

function draw() 
{
  background(51);
  if(backGround.x<0){
    backGround.x=150  }

    if(keyDown("space")){
      human.velocityY=-20    
    }
    human.velocityY=human.velocityY+0.8
    human.collide(invisibleGround)
    spawnObstacle();
    spawnDa();
  drawSprites();

 
}

function spawnObstacle() {
  //write code here to spawn the clouds
  if (frameCount % 100 === 0) {
     obstacle= createSprite(600,180,40,10);
    
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 250;
    
    
    
    //adding cloud to the group
   //cloudsGroup.add(cloud);
    }
}
function spawnDa() {
  //write code here to spawn the clouds
  console.log("executed")
  if (frameCount % 100 === 0) {
     disadvantage= createSprite(600,50,40,10);
    
    disadvantage.addImage(disadvantageImage);
     disadvantage.velocityX = -3;
    
     //assign lifetime to the variable
    disadvantage.lifetime = 250;

    //adding cloud to the group
   //cloudsGroup.add(cloud);
    }
}



