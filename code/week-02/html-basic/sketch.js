let btn;
let numOfCircle=0;
function setup(){
    const canvas = createCanvas(windowWidth,windowHeight);
    /*btn = createButton("click me");
    btn.addClass('my-button'); // 
    btn.mousePressed(btnPressed);
    */
    canvas.addClass('background');
    background(220);
}
function btnPressed(){
    numOfCircle++;
}
function draw(){
    
    for(let i=0; i<20;i++){
        circle(random(width),random(height),random(5,15));
    }
}
function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}