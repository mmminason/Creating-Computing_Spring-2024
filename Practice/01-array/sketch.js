//Array

// 1. Declaration

const arr1 = new Array();
const arr2 = [1,2];

// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[fruits.length-1]);
console.clear();

// 3. Looping over an array
// a. for
for(i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}
//b. for of
for(let fruit of fruits){
    console.log(fruit);
}
//c. forEach
fruits.forEach(function(fruit){
    console.log(fruit);
})
fruits.forEach((fruit)=>console.log(fruit));


// 4. Addtion, deletion, copy
// push: add an item to the end

fruits.push('🍓', '🍑');
console.log(fruits);

// pop: remove an item from the end

fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('🍓', '🍑');
console.log(fruits);

// shift: remove an item from the begnning
fruits.shift();
fruits.shift();
console.log(fruits);

//note! shift, unshift are slower thant pop,push

//splice: remove an item by index position
fruits.push('🍓', '🍑', '🍋');
console.log(fruits);

fruits.splice(1,1);
console.log(fruits);

fruits.splice(1,1,'🍏', '🍉');
console.log(fruits);

//combine two arrays
const fruits2 = ['🍐', '🍊'];

const newFruits = fruits.concat(fruits2);
console.log(newFruits);


// 5. Seraching
// find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍎'));

// whether if array includes
console.log(fruits.includes('🍉')); //true
console.log(fruits.includes('🥥')); //false
console.log(fruits.indexOf('🥥')); //-1

// lastIndexOf
console.clear();
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.lastIndexOf('🍎'));


function setup(){
    createCanvas(600,600);
}
function draw(){
    background(200);
}