## ProgrammingHero-JobTask_Solved 
## Problem 01 (Support Instructor) 
Bongo Vax want to trial their vaccine in the human body. So, they have to test their
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
```
{
    A: [
            { name: 'Biplap', age: 22, temperature: 98 },
            { name: 'sunil', age: 21, temperature: 98 }
       ] 
}
```