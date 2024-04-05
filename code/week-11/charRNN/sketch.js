// https://github.com/ml5js/ml5-data-and-models/tree/master
let charRNN;
let input;
let generated = '';
let tempSlider;
let lengthSlider;
let running = false;

function setup(){
    createCanvas(300,300);
    charRNN = ml5.charRNN('./models/jkrowling_HP', modelReady);
}


// Update the slider values
function updateSliders() {
    select('#length').html(lengthSlider.value());
    select('#temperature').html(tempSlider.value());
  }

  
function modelReady(){
    input = createInput();
    input.position(20,20);   

    tempSlider = select('#tempSlider');
    tempSlider.input(updateSliders);
    lengthSlider = select('#lenSlider');
    lengthSlider.input(updateSliders);

    const button = createButton('generate');
    button.position(input.x + input.width,20);
    button.mousePressed(generate);
}

function generate(){
    const txt = input.value().toLowerCase();
    if(txt.length>0){
        const data = {
            seed: txt,
            temperature: 0.5,
            length:100
        };
        
        charRNN.generate(data, gotData);
    }
}

function gotData(err, result){
    if(err){
        console.err(err);
    }else{
        generated = result.sample;
    }
}

function draw(){
    background(210);
    if(generated){
        const txt = input.value() + generated;
        text(txt, 10, 50,width-10,height-50);
    }

}