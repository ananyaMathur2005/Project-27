
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1 , bobObject2 ,bobObject3 ,bobObject4 ,bobObject5
var roof
function preload()
{

}

function setup() {
	createCanvas(800, 700);
  engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	roof = new Roof (250,133,500,50);	
  bobObject1 = new Bob (200,200,50,50);
  rope1 = new Rope (bobObject1.body,roof.body);

  bobObject2 = new Bob (150,200,50,50);
  rope2 = new Rope (bobObject2.body,roof.body);

  bobObject3 = new Bob (250,200,50,50);
  rope3 = new Rope (bobObject3.body,roof.body);

  bobObject4 = new Bob (300,200,50,50);
  rope4 = new Rope (bobObject4.body,roof.body);

  bobObject5 = new Bob (350,200,50,50);
  rope5 = new Rope (bobObject5.body,roof.body);
  
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}