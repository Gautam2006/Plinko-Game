class Plinko {
    constructor(x, y, radius) {
        var options = {
            isStatic: true,
            restitution: 1,
            friction: 0,
            density: 1
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        ellipseMode(RADIUS);
        translate(pos.x,pos.y);
        noStroke();
        fill(255);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}