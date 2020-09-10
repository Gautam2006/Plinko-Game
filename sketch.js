
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
	createCanvas(480, 755);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(0, 750, 1000, 30);

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);

	for (var d = 0; d <= width; d = d + 80) {
		divisions.push(new Divisions(d, height - divisionHeight / 2, 10, divisionHeight));
	}
	for (var d = 0; d < divisions.length; d++) {
		divisions[d].display();
	}

	for (var p = 40; p <= width; p = p + 50) {
		plinkos.push(new Plinko(p, 75, 10));
	}

	for (var p = 15; p <= width; p = p + 50) {
		plinkos.push(new Plinko(p, 175, 10));
	}

	for (var p = 40; p <= width; p = p + 50) {
		plinkos.push(new Plinko(p, 275, 10));
	}

	for (var p = 15; p <= width; p = p + 50) {
		plinkos.push(new Plinko(p, 375, 10));
	}

	for (var p = 0; p < plinkos.length; p++) {
		plinkos[p].display();
	}

	if (frameCount% Math.round(random(20,60)) === 0) {
		particles.push(new Particle(random(width / 2 - 10, width / 2 + 10), 10, 10));
	}

	for (var b = 0; b < particles.length; b++) {
		particles[b].display();
	}

	ground.display();
}



