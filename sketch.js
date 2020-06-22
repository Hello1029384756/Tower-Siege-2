const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var dustbin;
var ball;
var ground
var slingshot

function setup(){
    var canvas = createCanvas(1600,500);
    engine = Engine.create();
	world = engine.world;

	ball = new Ball(170,200,27);
	invisibleground = new iGround(630,305,380,10);
	dustbin1 = new Blocks(630,300,30,30);
	dustbin2 = new Blocks(660,300,30,30);
	dustbin3 = new Blocks(690,300,30,30);
	dustbin4 = new Blocks(720,300,30,30);
	dustbin5 = new Blocks(750,300,30,30);
	dustbin6 = new Blocks(780,300,30,30);
	dustbin7 = new Blocks(645,260,30,30);
	dustbin8 = new Blocks(675,260,30,30);
	dustbin9 = new Blocks(705,260,30,30);
	dustbin10 = new Blocks(735,260,30,30);
	dustbin11 = new Blocks(765,260,30,30);
	dustbin12 = new Blocks(660,220,30,30);
	dustbin13 = new Blocks(690,220,30,30);
	dustbin14 = new Blocks(720,220,30,30);
	dustbin15 = new Blocks(750,220,30,30);
	dustbin16 = new Blocks(675,180,30,30);
	dustbin17 = new Blocks(705,180,30,30);
	dustbin18 = new Blocks(735,180,30,30);
	dustbin19 = new Blocks(690,140,30,30);
	dustbin20 = new Blocks(720,140,30,30);
	dustbin21 = new Blocks(705,100,30,30);
	slingshot = new Sling(170,200,ball.body)
	platform = new Ground(630,320,380,10)
	ground = new Ground(0,480,1600,10)
	console.log(dustbin);
}

function draw () {
	background(0);
	
	Engine.update(engine);

	ball.display();
	dustbin1.display();
	dustbin2.display();
	dustbin3.display();
	dustbin4.display();
	dustbin5.display();
	dustbin6.display();
	dustbin7.display();
	dustbin8.display();
	dustbin9.display();
	dustbin10.display();
	dustbin11.display();
	dustbin12.display();
	dustbin12.display();
	dustbin13.display();
	dustbin14.display();
	dustbin15.display();
	dustbin16.display();
	dustbin17.display();
	dustbin18.display();
	dustbin19.display();
	dustbin20.display();
	dustbin21.display();
	slingshot.display();
	platform.display();
	//invisibleground.display();
	ground.display();
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body, ball.body.position,{x:85, y:-85})
	}
}

function mouseDragged() {
	Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}

function mouseReleased() {
	slingshot.fly()
}

function keyPressed() {
	if(keyCode === 32) {
		slingshot.attach(this.sling)
	}
}