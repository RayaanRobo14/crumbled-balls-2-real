const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, dusty, paper,box1,box2,box3;

function preload()
{
	boximage = loadImage('dusty.png');
}

function setup() {
	
	
	var canvas = createCanvas(1400, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	


	
	box1 = new Dustbin(1100,630,150,15);
	box2 = new Dustbin(1185,550,15,170);
	box3 = new Dustbin(1015,550,15,170);
	
	ground1 = new Ground(700,670,1400,30);
	
	paper1 = new Paper(200,300);
	
	 Engine.run(engine);
  
}


function draw() {
	background(255,0,0);
	Engine.update(engine);
	
	
	paper1.display();
	ground1.display();
	box3.display();
	box1.display();
	box2.display();
	image(boximage,1000,450,200,200);
	
	
 
}

	function keyPressed()	{
		if(keyCode===UP_ARROW)	{
			Matter.Body.applyForce(paper1.body,paper1.body.position,{x:110,y:-110});

		}
	}









