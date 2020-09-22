var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var redboxPart1;
var redboxPart2;
var redboxPart3;

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
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10,);
	groundSprite.shapeColor=color(255)
    
	redboxPart1	= createSprite(400,655,200,20,{isStatic:true});
	redboxPart1.shapeColor="red";
	redboxPart2	= createSprite(490,600,20,100,{isStatic:true});
	redboxPart2.shapeColor = "red";
	redboxPart3	= createSprite(310,600,20,100,{isStatic:true});
	redboxPart3.shapeColor = "red";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
    World.add(world,redboxPart1);
	World.add(world,redboxPart2);
	World.add(world,redboxPart3);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 keyPressed();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody,false);
	
  }
}



