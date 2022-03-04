
// input data
const arr = [
    { name: 'Biplap', age: 22, temperature: 98 },
    { name: 'Jahid', age: 20, temperature: 98 },
    { name: 'Kat', age: 41, temperature: 98 },
    { name: 'Nayem', age: 50, temperature: 100 },
    { name: 'Kabir', age: 36, temperature: 99 },
    { name: 'Rahul', age: 37, temperature: 99 },
    { name: 'Paul', age: 42, temperature: 98 },
    { name: 'sunil', age: 21, temperature: 98 },
    { name: 'Sabnaj', age: 31, temperature: 101 }
]


//Sort function to sort array by even ages
const sortArray = (arr) => {

    arr.sort((a, b) => {
        return a.age % 2 - b.age % 2 || a.age - b.age;
    })
    return arr;
}

// solution 
const vaxTrail = (arr) => {

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

console.log(vaxTrail(arr));
