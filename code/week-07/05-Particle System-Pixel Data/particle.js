class Particle{
  constructor(loc,size){
    this.loc = loc.copy();
    this.vel = createVector(0,0);
    this.acc = createVector(0,0);
    this.friction = 0.93;
    this.size = size;
    this.maxAge = 1000;
    this.age = random(80, this.maxAge);
    this.isDead = false;
  }
  applyForce(force){
    this.acc.add(force.copy());
  }
  update(size){
    this.size = size;
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    this.acc.mult(0);
    this.vel.mult(this.friction);

    this.age--;
  }
  display(){
    fill(this.size*35);
    ellipse(this.loc.x, this.loc.y, this.size);
  }
}