var crumpledBall,ground;
var dustbinSide1,dustbinSide2,dustbinSide3;
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	
}

function setup() {
	createCanvas(800,200);
	crumpledBall=createSprite(100,178,100,100);
	//crumpledBall=Matter.Bodies.circle(100,178,20,{isStatic:true});
	crumpledBall.scale=0.2;
	crumpledBall.shapeColor="purple";

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbinSide1=createSprite(600,178,200,20);
	dustbinSide1.shapeColor="white"
	dustbinSide2=createSprite(700,150,20,75);
	dustbinSide2.shapeColor="white"
	dustbinSide3=createSprite(500,150,20,75);
	dustbinSide3.shapeColor="white" 

	ground=createSprite(400,194,800,10)
	ground.shapeColor="yellow"
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed();
  drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(crumpledBall.Body,crumpledBall.Body.position,{x:85,y:-85});
	}
}

