
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	ground=new Ground(200,690,1600,20);	
	dustbin1=new Dustbin(1300,665,170,20);
	dustbin2=new Dustbin(1205,615,20,120);
	dustbin3=new Dustbin(1395,615,20,120);
	ball=new Paper(400,100);





}


function draw() {

	Engine.update(engine);

  background(0);

  ground.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  ball.display();

  drawSprites();

 

 
}

function keyPressed(){
	if (keyCode===32){

		Matter.Body.applyForce(ball.body,ball.body.position,{x:55,y:-30});

	}


}

