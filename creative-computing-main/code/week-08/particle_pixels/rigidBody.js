class RigidBody{
  constructor(x,y,size){
    this.loc = createVector(x,y);
    this.vel = createVector();
    this.acc = createVector();
    this.friction = 0.95;
    this.size = size;
  }
}