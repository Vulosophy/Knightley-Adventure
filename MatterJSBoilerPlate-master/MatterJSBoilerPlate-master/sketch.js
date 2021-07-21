
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var enemy1, enemy2;
var ground, knight;
var plat1, plat2;
var cooldown = 100;

function preload()
{

}

function setup() {
	var canvas = createCanvas(1800, 935)
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(900, 930, 2000, 10);
	plat1 = new Ground(450, 840, 300, 20);
	plat2 = new Ground(780, 690, 300, 20)
	knight = new Knight(50, 900, 20, 20);
	enemy1 = new Goomba(700, 900)
	enemy2 = new Koopa()
	Matter.Body.setVelocity(enemy1.body, {x:random(-6,6), y:0})

	
}


function draw() {
	background("lightblue")
	Engine.update(engine);
 ground.display();
 knight.display();
 plat1.display();
 plat2.display();
 enemy1.display();
 
 cooldown += Math.round(getFrameRate() / 30)
}

function keyPressed(){
	if(keyCode === 37 ){
		//knight.body.position.x -= 2
		//Matter.Body.setVelocity(knight.body, {x:-5, y: knight.body.velocityY})
		Matter.Body.applyForce(knight.body,{x: knight.body.position.x, y: knight.body.position.y}, {x: -3, y:0} )
		
	}
	
	if(keyCode === 39  ){
		//knight.body.position.x += 2
		//Matter.Body.setVelocity(knight.body, {x:5, y:knight.body.velocityY})
		Matter.Body.applyForce(knight.body,{x: knight.body.position.x, y: knight.body.position.y}, {x: 3, y:0} )
	}
	if(keyCode === 38 && cooldown >= 60){
		//knight.body.position.y -= 2
		//Matter.Body.setVelocity(knight.body, {x: knight.body.velocityX, y: -10})
		Matter.Body.applyForce(knight.body,{x: knight.body.position.x, y: knight.body.position.y}, {x: 0, y:-15} )
		cooldown = 0
	}
	if(keyCode === 40  ){
		//knight.body.position.y += 2
		//Matter.Body.setVelocity(knight.body, {x: knight.body.velocityX, y: 5})
		Matter.Body.applyForce(knight.body,{x: knight.body.position.x, y: knight.body.position.y},  {x: 0, y:3} )
	}
	if(knight.body.position.x - enemy1.body.position.x <50 && enemy1.body.position.x - knight.body.position.x <50 && keyCode ===32){
		enemy1.destroy();
	}

}

