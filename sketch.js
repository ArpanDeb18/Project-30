const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;


function setup() {
  createCanvas(1400,700);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(0, 700, 5000, 50);

  hex = new Polyogon(100, 350, 50);

  stand1 = new Ground(550, 600, 400, 10);
  stand2 = new Ground(1050, 350, 250, 10);

  box1 = new Box(430,568, 40, 55);
  box2 = new Box(470,568, 40, 55);
  box3 = new Box(510,568, 40, 55);
  box4 = new Box(550,568, 40, 55);
  box5 = new Box(590,568, 40, 55);
  box6 = new Box(630,568, 40, 55);
  box7 = new Box(670,568, 40, 55);
  
  box8 = new Box(470,513, 40, 55);
  box9 = new Box(510,513, 40, 55);
  box10 = new Box(550,513, 40, 55);
  box11 = new Box(590,513, 40, 55);
  box12 = new Box(630,513, 40, 55);

  box13 = new Box(510,458, 40, 55);
  box14 = new Box(550,458, 40, 55);
  box15 = new Box(590,458, 40, 55);

  box16 = new Box(550,403, 40, 55);


  block1 = new Box(970, 318, 40, 55);
  block2 = new Box(1010, 318, 40, 55);
  block3 = new Box(1050, 318, 40, 55);
  block4 = new Box(1090, 318, 40, 55);
  block5 = new Box(1130, 318, 40, 55);

  block6 = new Box(1010, 263, 40, 55);
  block7 = new Box(1050, 263, 40, 55);
  block8 = new Box(1090, 263, 40, 55);

  block9 = new Box(1050, 208, 40, 55);

  

  slingshot = new SlingShot(hex.body,{x:100, y:350});

  var render = Render.create({ 
		element: document.body, 
		engine: engine, 
		options: { 
			width: 1200, 
			height: 700, 
			wireframes: false 
		} 
  });
  
  Engine.run(engine);
	//Render.run(render);

}

function draw() {
  background(41, 33, 33);  

  ground.display();
  stand1.display();
  stand2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display2();
  box9.display2();
  box10.display2();
  box11.display2();
  box12.display2();
  box13.display3();
  box14.display3();
  box15.display3();
  box16.display4();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display3();
  block7.display3();
  block8.display3();
  block9.display2();

  hex.display();
  slingshot.display();


  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(hex.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(hex.body);
  }
}