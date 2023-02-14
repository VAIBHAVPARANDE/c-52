function preload(){
dogImage=loadAnimation("dog.png","dog1.png","dog2.png","dog3.png","dog4.png","dog5.png")
PlayerImage=loadAnimation("player1.png","player2.png","player3.png")
bg=loadImage("bg.png")
}


function setup() {
    createCanvas(500,500)
    backGround=createSprite(300,300,600,600)
    backGround.addImage(bg)
    backGround.scale=1.5
    backGround.velocityX=-2
   Player= createSprite(70,450,20,70)
   Player.addAnimation("moving",PlayerImage)
   

}

function draw() {
    background("red")
 drawSprites()
 if(backGround.x<0){
    backGround.x=width/2
    
 }
   createdog ()
}
function  createdog  (){
    if (frameCount%100===0){
        dog=createSprite(500,470,20,50)
        dog.addAnimation("running",dogImage)
        dog.velocityX=-3
        dog.scale=0.25
    }
}