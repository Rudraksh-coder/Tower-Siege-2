// Tower-Siege-2. Proudly created by Rudraksh-coder
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, miniG, miniG2;
var block1,
  block3,
  block4,
  block5,
  block6,
  block7,
  block8,
  block9,
  block10,
  block11,
  block12,
  block13,
  block14,
  block15,
  block16;

var block17,
  block18,
  block19,
  block20,
  block21,
  block22,
  block23,
  block24,
  block25;
var hexa_image, hexa;

var chain;

function preload() {
  hexa_image = loadImage("polygon.png");
}

function setup() {
  createCanvas(800, 600);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400, 580, 1000, 20);
  miniG = new Ground(330, 450, 250, 20);
  miniG2 = new Ground(675, 300, 250, 20)

  block1 = new Block(240, 425, 30, 30);
  block2 = new Block(270, 425, 30, 30);
  block3 = new Block(300, 425, 30, 30);
  block4 = new Block(330, 425, 30, 30);
  block5 = new Block(360, 425, 30, 30);
  block6 = new Block(390, 425, 30, 30);
  block7 = new Block(420, 425, 30, 30);
  
  block8 = new Block2(270, 395, 30, 30);
  block9 = new Block2(300, 395, 30, 30);
  block10 = new Block2(330, 395, 30, 30);
  block11 = new Block2(360, 395, 30, 30);
  block12 = new Block2(390, 395, 30, 30);
  
  block13 = new Block3(300, 365, 30, 30);
  block14 = new Block3(330, 365, 30, 30);
  block15 = new Block3(360, 365, 30, 30);
  
  block16 = new Block4(330, 335, 30, 30);


  block17 = new Block(590, 270, 30, 30);
  block18 = new Block(620, 270, 30, 30);
  block19 = new Block(650, 270, 30, 30);
  block20 = new Block(680, 270, 30, 30);
  block21 = new Block(710, 270, 30, 30);
  block22 = new Block(740, 270, 30, 30);
  block23 = new Block(770, 270, 30, 30);

  block24 = new Block2(620, 240, 30, 30);
  block25 = new Block2(650, 240, 30, 30);
  block26 = new Block2(680, 240, 30, 30);
  block27 = new Block2(710, 240, 30, 30);
  block28 = new Block2(740, 240, 30, 30);

  block29 = new Block3(650, 210, 30, 30);
  block30 = new Block3(680, 210, 30, 30);
  block31 = new Block3(710, 210, 30, 30);

  block32 = new Block4(680, 180, 30, 30);
  

  
  var options = {
    density: 3,
    restitution: 0.2,
  }

  hexa = Bodies.circle(50, 200, 20, options);
  World.add(world, hexa);

  chain = new Chain(hexa, { x: 150, y: 200 });

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("black");

  textSize(23)
  fill("white");
  text("Drag the Polygon to hit the blocks!", 230, 70);

  textSize(13)
  fill("white");
  text("Press space and get a second chance to play!", 500, 540)

  textSize(15)
  fill("white");
  text("Created by Rudraksh-coder", 320, 100)





  ground.display();
  miniG.display();
  miniG2.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  
  block13.display();
  block14.display();
  block15.display();
  
  block16.display();


  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();

  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();

  block29.display();
  block30.display();
  block31.display();

  block32.display();



  chain.display();

  fill("gold");
  imageMode(CENTER);
  image(hexa_image, hexa.position.x, hexa.position.y, 40, 40);

  drawSprites();
}
function mouseDragged() {
  Matter.Body.setPosition(hexa, { x: mouseX, y: mouseY });
}

function mouseReleased() {
  chain.fly();
}

function keyPressed() {
  if(keyCode === 32) {
  chain.attach(hexa);
  }
}
