class Particle{
    constructor(loc, size,hue) {
        this.loc = loc.copy();
        this.vel = createVector(0,0);
        this.acc = createVector(0,0);
        this.size = size;
        this.maxAge = 200;
        this.age = random(80, this.maxAge);
        this.isDead = false;
        this.hue = hue;
        this.friction = 0.96;
    }
    applyForce(force){
        this.acc.add(force.copy());
    }
    update(){
        this.vel.add(this.acc);
        this.loc.add(this.vel);
        this.acc.mult(0);
        this.vel.mult(this.friction);

        if(this.age<=0){
            this.isDead = true;
        }
    }
    
    display(){
        push();
        fill(this.hue, 70,90, this.age/this.maxAge);
        translate(this.loc.x, this.loc.y);
        ellipse(0,0, this.size);
        pop();
    }
}