// 01. make a string out of an array

{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(', and ');
    console.log(result);
}

// 02. make an array out of a string
{
    const fruits = '🍎, 🍐, 🍊, 🍋';
    const result = fruits.split(',', 2); //('구분자', 갯수)
    console.log(result);
}

// 03. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
    console.log(array); //기존 array자체도 순서를 reverse시킴
}


function setup(){
    createCanvas(600,600);
}
function draw(){
    background(200);
}