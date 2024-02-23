function setup(){
    createCanvas(600,600);
}
function draw(){
    background(200);

    const myVec = createVector(mouseX,mouseY);
    //myVec.sub(createVector(50,150));

    myVec.mult(3);
    myVec.div(2);

    myVec.normalize();
    myVec.mult(100);

 

    push();
    fill(0,100);
    noStroke();
    rotate(myVec.heading());
    rect(0,0,myVec.mag(),10);
    pop();
     

    line (0, 0, myVec.x, myVec.y);
    circle(myVec.x,myVec.y,10);
}