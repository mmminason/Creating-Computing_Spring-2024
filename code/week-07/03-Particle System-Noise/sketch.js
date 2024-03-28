let particleSystem;

function setup(){
    createCanvas(600,600);
    noStroke();
    rectMode(CENTER);
    colorMode(HSB, 360, 100,100);

    particleSystem = new ParticleSystem();
}

function draw(){
    background(0);
    particleSystem.draw();

    if (mouseIsPressed){
        let mousePos = createVector(mouseX, mouseY);
        let pMousePos = createVector(pmouseX, pmouseY);
        let mouseMoveForce = p5.Vector.sub(mousePos, pMousePos).mult(0.1);
        particleSystem.addParticles(mousePos, mouseMoveForce,2);
    }
}

function mousePressed(){

}