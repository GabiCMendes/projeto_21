
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
let world,engine;
var ground;
var leftSide,rightSide;


function preload() {

}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;
	var ball_options ={
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2,
	}
	
	//Create the Bodies Here.
	ball = Bodies.circle(200,300,20,ball_options)
	World.add(world,ball)
	ground = Bodies.rectangle(width/2,height-20,width,20,{isStatic:true})
	World.add(world,ground)
	leftSide = Bodies.rectangle(width-400,ground.position.y-85,20,150,{isStatic:true})
	World.add(world,leftSide)
	rightSide = Bodies.rectangle(width-200,ground.position.y-85,20,150,{isStatic:true})
	World.add(world,rightSide)


	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);
	ellipseMode(RADIUS)
	ellipse(ball.position.x,ball.position.y,20)
	rect(ground.position.x,ground.position.y,width,20)
	rect(leftSide.position.x,leftSide.position.y,20,150)
	rect(rightSide.position.x,rightSide.position.y,20,150)
	
	drawSprites();

}

function keyPressed() {
	if (keyCode == UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:100,y:-70})
	}


}

