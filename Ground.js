class Ground {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true,
            density : 3.5
        }
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
    }
    display() {
      var pos = this.body.position;
      push();
      rectMode(CENTER);
      translate(pos.x,pos.y);
      fill(255);
      noStroke();
      rect(0,0,this.width,this.height);
      pop();
    }
}