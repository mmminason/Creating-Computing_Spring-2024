let myVehicle;


function setup(){
    createCanvas(600,600);
    myVehicle = new Vehicle(width/2, 30);
}
function draw(){
    background(200);

    const gravity = createVector(0,0.1);


    myVehicle.applyForce(gravity);

    myVehicle.display();
    myVehicle.update();


    if(mouseIsPressed){
        const xDiff = myVehicle.loc.x - mouseX;
        const wind = createVector(xDiff,0);
        wind.mult(0.1);
        myVehicle.applyForce(wind);
    }
}