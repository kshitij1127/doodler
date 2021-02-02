const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var doodler;
var platform;
var score = 0;
let obstacles = [];
let play = 1;
let end = 0;
let gameState = play;
let platform1;
let platform2;
let platform3;
let platform4;

function setup() {
  createCanvas(400, 657);
  engine = Engine.create();
  world = engine.world;
  doodler = new Doodler();
  platform = new Platform();
}

function draw() {
  background("yellow");
  Engine.update(engine);
  doodler.display();
  doodler.move();
  platform.show();
  platform.move();

  fill(0);
  textSize(24);
  text("your score : " + score, width / 2, 20);
  spawnObjects();
}

function spawnObjects() {
  for (var i = 0; i < 5; i++) {
    let platforms = [];
    platforms[i].push(new Platform());
    platforms[i].show();
    platforms[i].move();
  }
}

//platform1.show()
// platform2.show()
// platform3.show()
// platform4.show()

// platform1.move()
//  platform2.move()
// platform3.move()
// platform4.move()

// platform1 = new Platform()
// platform2 = new Platform()
// platform3 = new Platform()
// platform4 = new Platform()
