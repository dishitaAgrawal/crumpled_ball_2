//var helicopterIMG, helicopterSprite, packageSprite,packageIMG,packageBody;
var ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1;
var rect1 ,rect2,rect3;
var paperball1;
//function preload()
//{
	
//}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	
	

	//Create a Ground
	ground = Bodies.rectangle(800, 690,1600, 10 , {isStatic:true} );
 	World.add(world, ground);
	 
	paperball1=new Paperclass(250,600,50);

	
	trashCan1= new Dustbin(1150,590,20,100); 
	trashCan2 = new Dustbin(1050,670,100,20);
	 trashCan3= new Dustbin(950,590,20,100);

	Engine.run(engine);
	
}


function draw() {
  
  background(230,230,230);
 //draw ground using rect. 
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,1600,20);
    //ellipseMode(RADIUS);
    //ellipse(20,20);
	trashCan3.display();
  
   paperball1.display();
 
}
function keyPressed() {
	
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paperball1.body,paperball1.body.position,{x:35,y:-35});
	   
		}
		
   }


