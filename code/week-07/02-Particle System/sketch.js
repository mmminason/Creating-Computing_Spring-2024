let particleSystem;


function setup(){
    createCanvas(600, 600);
    noStroke();
    rectMode(CENTER);
    colorMode(HSB,360,100,100);

    particleSystem = new ParticleSystem;
}

function draw(){
    background(0);
    particleSystem.draw();
}

function mousePressed(){
    let mousePos = createVector(mouseX, mouseY);
    particleSystem.addParticles(mousePos, 100);
}