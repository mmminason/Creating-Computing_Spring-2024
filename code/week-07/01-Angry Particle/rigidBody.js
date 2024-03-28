class RigidBody{
    constructor(loc, size){
        this.loc = loc.copy();
        this.size = size;
        this.acc = createVector(0,0);
        this.vel = createVector(0,0);
        this.friction = 0.998;
    }
    applyForce(force){
        this.acc.add(force);
    }
    update(){
        this.vel.add(this.acc);
        this.loc.add(this.vel);
        this.acc.mult(0);
        this.vel.mult(this.friction);
        this.bounce();
    }
    bounce(){
        let top = this.size/2;
        let bottom = height - this.size/2;
        let right = width - this.size/2;
        let left = this.size/2;

        if(this.loc.y > bottom || this.loc.y<top){
            this.vel.y*=-1;
        }
        if(this.loc.x>right || this.loc.x<left){
            this.vel.x*=-1;
        }        
    }
    display(){
        ellipse(this.loc.x,this.loc.y, this.size);
    }
}