var backgroundImg;

const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
var engine,world;

var snow=[];

function preload(){
  backgroundImg = loadImage("snow2.jpg");
  //bgSound = loadSound("https://www.free-stock-music.com/punch-deck-snowfall.html");
}

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
}

function draw() {
  background(backgroundImg);  
  Engine.update(engine);
  if(frameCount % 10 === 0){
    snow.push(new Snow(random(0,800),0,35));
  }
  for(var i=0; i<snow.length; i++){
    snow[i].display();
  }
  //bgSound.play();
  drawSprites();
}