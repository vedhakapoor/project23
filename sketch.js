var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(400, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(400, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	boxPosition=width/2-100
	BoxY=610;

	groundSprite=createSprite(width/2,height-35,width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;
	
	packageBody = Bodies.circle(width/2 , 200 , 5 ,{restitution:0.5 ,isStatic:true});
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10,{isStatic:true});
	 World.add(world, ground);
	 
	 boxLeftSprite = createSprite(boxPosition,BoxY,20,100);
	 boxLeftSprite.shapeColor = "red";

	 boxleftSprite = Bodies.rectangle(boxPosition,BoxY,20,100,{isStatic:true});
	 World.add(world,boxleftSprite);

	 boxRightSprite = createSprite(boxPosition+200,BoxY,20,100);
	 boxRightSprite.shapeColor = "red";

	 boxrightSprite = Bodies.rectangle(boxPosition+200,BoxY,20,100,{isStatic:true});
	 World.add(world,boxrightSprite);

	 baseBoxSprite = createSprite(boxPosition+100,BoxY+50,200,20);
	 baseBoxSprite.shapeColor = "red";

	 baseboxSprite = Bodies.rectangle(boxPosition+100,BoxY+50,200,20,{isStatic:true});
	 World.add(world,baseboxSprite);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 


  drawSprites();
  
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	//Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody, false);
  }
}



