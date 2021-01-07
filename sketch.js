
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rod = new Roof(350,100,350,20)
	ball1 = new Bob(250,400,60)
	ball2 = new Bob(300,400,60)
	ball3 = new Bob(350,400,60)
	ball4 = new Bob(400,400,60)
	ball5 = new Bob(450,400,60)
	rope1=new Rope(ball1.body,rod.body,-100,0)
	rope2=new Rope(ball2.body,rod.body,-50,0)
	rope3=new Rope(ball3.body,rod.body,0,0)
	rope4=new Rope(ball4.body,rod.body,50,0)
	rope5=new Rope(ball5.body,rod.body,100,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  Engine.update(engine);

  rod.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed(){

	if(keyCode === 	UP_ARROW){

		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-30,y:15});


	}


}



