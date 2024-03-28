let bird;
let force;
let mPressed;
let mCurrent;
let isDragging;
let gravity;
let birdSize;

function setup(){
    createCanvas(1000,400);
    isDragging = false;
    gravity = createVector(0,0.053);
    birdSize = 30;
}

function draw(){
    background(200);
    if(isDragging){
        line(mPressed.x,mPressed.y,mCurrent.x,mCurrent.y);
        ellipse(mPressed.x,mPressed.y,birdSize,birdSize);
    }
    if(bird){
        bird.applyForce(gravity);
        bird.update();
        bird.display();
    }
}

function mousePressed(){
    mPressed = createVector(mouseX, mouseY);
    mCurrent = mPressed.copy();
    isDragging = true;
}
function mouseDragged(){
    mCurrent = createVector(mouseX, mouseY);
}

function mouseReleased(){
    mCurrent = createVector(mouseX, mouseY);
    force = p5.Vector.sub(mPressed, mCurrent);
    force.mult(0.1);
    bird = new RigidBody(mPressed, birdSize);
    bird.applyForce(force);
    isDragging = false;
}