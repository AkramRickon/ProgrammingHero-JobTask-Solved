


const arr = [
    { name: 'Biplap', age: 22, temperature: 98 },
    { name: 'Jahid', age: 20, temperature: 98 },
    { name: 'Kat', age: 41, temperature: 98 },
    { name: 'Nayem', age: 50, temperature: 100 },
    { name: 'Kabir', age: 36, temperature: 99 },
    { name: 'Rahul', age: 37, temperature: 99 },
    { name: 'Paul', age: 42, temperature: 98 },
    { name: 'sunil', age: 21, temperature: 98 },
    { name: 'Sabnaj', age: 51, temperature: 101 }
]


const sortArray = (arr) => {

    arr.sort((a, b) => {
        return a.age % 2 - b.age % 2 || a.age - b.age;
    })
    return arr;
}

const vaccine = (arr) => {

    let A = [];
    let B = [];
    let C = [];
    let D = [];
    let vaccined = {};

    for (let i of arr) {
        if ((i.age >= 20 && i.age <= 30) && i.temperature < 100) {
            A.push(i);
        }
        if ((i.age >= 31 && i.age <= 40) && i.temperature < 100) {
            B.push(i);
        }
        if ((i.age >= 41 && i.age <= 50) && i.temperature < 100) {
            C.push(i)
        }
        if (i.temperature >= 100) {
            D.push(i);
        }
    }
    A = sortArray(A);
    B = sortArray(B);
    C = sortArray(C);
    D = sortArray(D);

    vaccined['A'] = A;
    vaccined['B'] = B;
    vaccined['C'] = C;
    vaccined['D'] = D;

    return vaccined;
}

console.log(vaccine(arr));


/* Bongo Vax want to trial their vaccine in the human body. So, they have to test their
medicine based on different age ranges.
Input:
Write a javascript function which takes an array of objects. Each object represents
a single person's information.
Each person will have a name, ages, and a body temperature record.
Function name should be vaxTrail . [If you don't give vaxTrail as your main
function name , your code may fail the test cases.]
Sample:
vaxTrail([
    { name: 'sunil', age: 21, temperature: 98 },
    { name: 'Biplap', age: 22, temperature: 98 },
])
Output:
It will return an object from the function. That object will have 4 lists named as A, B,
C, D respectively . Think A, B , C, D as line names in front of the vaccine booth.
A will have person with age 20-30 with temperature less than 100
B will have person with age 31-40 with temperature less than 100
C will have person with age 41-50 with temperature less than 100
D will have any range of age with temperature greater than equal 100
Each array will be sort by even ages people
Sample:
{
    A: [
            { name: 'Biplap', age: 22, temperature: 98 },
            { name: 'sunil', age: 21, temperature: 98 }
       ] 
}
*/