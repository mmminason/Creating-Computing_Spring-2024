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

//04. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    //const result = array.splice(0,2);
    const result = array.slice(2,5);
    console.log(result);
    console.log(array);
}


class Student {
    constructor(name, age, enrolled, score){
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88)
];

// 05. find a student with the score 90
// find: 처음 나오는 true를 return시켜줌
{
    /*
    const result = students.find(function(item){
        return item.score === 90;
    });
    */
    const result = students.find((item)=>item.score === 90);
    console.log(result);
}

// 06. make an array of enrolled students
{
    /*
    const result = students.filter(function(item){
        return item.enrolled===true;
    });
    */
   
    const result = students.filter((item)=>item.enrolled);
    console.log(result);

}

// 07. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const result = students.map((item)=>item.score);
    console.log(result);
}

// 08 check if there is a student with the score lower than 50
{
    const result = students.some((item)=>item.score<50);
    console.log(result);

    const result2 = students.every((item)=>item.score<50);
    console.log(result2);
}

// 09. compute students' average score 🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺
{
    const result = students.reduce((prev,curr)=>{
        console.log('-----------');
        console.log(prev);
        console.log(curr);
        return prev + curr.score;
    },0);
    console.log(result / students.length);
} 

// 10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const result = students.map((item)=>item.score).join();
    console.log(result);

    const result2 = students.map((student)=>student.score).filter((score)=>score>=50).join();
    console.log(result2);
}

// Bonus! do 10. sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = students.map((student)=>student.score).sort((a,b)=>a-b).join();
    console.log(result);
}




function setup(){
    createCanvas(600,600);
}
function draw(){
    background(200);
}