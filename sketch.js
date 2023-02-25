var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(2000, 700);

	

	engine = Engine.create();
	world = engine.world;
	
	ground = new Ground(width/2,670 , width , 20);
	leftSide = new Ground(1100, 600 , 20 , 120)
	rightSide = new Ground(1300, 600, 20, 120);


	//Create the Bodies Here.


	Engine.run(engine);


	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2,
	}
  ball = Bodies.circle(100,200,20,ball_options);
  World.add(world,ball);
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipseMode(RADIUS)
  rectMode(CENTER)
  ellipse(ball.position.x,ball.position.y,20);
  ground.display();
  leftSide.display();
  rightSide.display();
  drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball, {x: 0 , y: 0},{x: 1 , y:-0.909})
}
}




