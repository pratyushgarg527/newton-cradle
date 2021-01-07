class Bob {
    constructor(x, y, radius) {
        var options = {
            'restitution': 1.8,
            'friction': 0.4,
            'density': 1.5,
            'isStatic': false

        }

        this.body = Bodies.rectangle(x, y,20,20, options);
        this.r = radius;


        World.add(world, this.body);
    }
    display() {

        rectMode(CENTER)
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill(255);
        stroke("white")
        ellipse(0, 0, this.r, this.r)
        pop();






    }
}