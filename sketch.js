var box;
function setup() {
  createCanvas(800,900);
  box = createSprite(300,400,50,80);
  
}

function draw() 
{
  background(30);
  if(keyIsDown(RIGHT_ARROW)){
    box.position.x = box.position.x+5;
  }
  if(keyIsDown(LEFT_ARROW)){
    box.position.x = box.position.x-5;
  }
  if(keyIsDown(UP_ARROW)){
    box.position.y = box.position.y-5;
  }
  if(keyIsDown(DOWN_ARROW)){
    box.position.y = box.position.y+5;
  }
drawSprites();
}




