//let resPromise;
let data;

async function setup() {
    createCanvas(400, 400);
    background(220);

    let res = await fetch('data.json');
    data = await res.json();
/*
    resPromise = fetch('data.json');
    resPromise.then((res) => {
        res.json().then(jsonObj => {
            data = jsonObj;
        })
    })
*/

    /*short version of ^^^ ,no need let resPromise
    fetch('data.json').then(res=>{res.json().then(jsonObj=>data=jsonOBJ);});
    */



    //delay(1000).then(()=>console.log('fire'));
/*
    await delay(10000);
    console.log('fire');
    */
}
/*
function delay(time){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,time);
    });
}
*/

function draw() {
    background(220);
    if (!data) return;


    /*
    for (let i = 0; i < data.shapes.length; i++) {
        const shapeObj = data.shapes[i];
        fill(shapeObj.color);
        if (shapeObj.shape === 'circle') {
            circle(shapeObj.pos[0], shapeObj.pos[1], 100);
        } else {
            rect(shapeObj.pos[0], shapeObj.pos[1], 100, 100);
        }
    }
    */

   
    data.shapes.sort((a,b)=>a.pos[0] - b.pos[0]);
    
    const filtered = data.shapes.filter(item=>item.pos[0]>10);
    
    filtered.forEach((shapeObj)=>{
        fill(shapeObj.color);
        if (shapeObj.shape === 'circle') {
            circle(shapeObj.pos[0], shapeObj.pos[1], 100);
        } else {
            rect(shapeObj.pos[0], shapeObj.pos[1], 100, 100);
        }
    })
}



/*
function preload() {
    data = loadJSON('data.json');
}

function setup() {
    createCanvas(400, 400);

    //javascript object notation - JSON
    //data = fetch('data.json');

    btn = createButton('click me');
    btn.position(0, 410);

    //Arrow function expression

    btn.mousePressed(event =>
        background(random(255))
    );

}
*/



