var canvas, ball;

function setup(){

canvas = createCanvas(400,400);

ball  = createSprite(5,200,10,10);
ball.tint = "black";
ball.velocityX = 1;
}

function draw() {

background("white");



  
if(ball.x >= 50 && ball.x <= 100){
  background("red");
}

if(ball.x >= 100 && ball.x <= 150){
  background("orange");
}

if(ball.x >= 150 && ball.x <= 200){
  background("yellow");
}

if(ball.x >= 200 && ball.x <= 250){
  background("green");
}

if(ball.x >= 250 && ball.x <= 300){
  background("cyan");
}

if(ball.x >= 300 && ball.x <= 350){
  background("navy");
}

if(ball.x >= 350 && ball.x <= 400){
  background("purple");
}

drawSprites();
}
