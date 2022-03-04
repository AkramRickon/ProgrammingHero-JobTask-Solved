## ProgrammingHero-JobTask_Solved 
### Problem 01 (Support Instructor) 

**Bongo Vax want to trial their vaccine in the human body. So, they have to test their
 medicine based on different age ranges**.<br/>

**Input:** 
*Write a javascript function which takes an array of objects. Each object represents
a single person's information.<br/>
Each person will have a name, ages, and a body temperature record.<br/>
Function name should be **vaxTrail** . [If you don't give **vaxTrail** as your main
function name , your code may fail the test cases.]* <br/>
**Sample:** <br/>
```javascript
    vaxTrail([
        { name: 'sunil', age: 21, temperature: 98 },
        { name: 'Biplap', age: 22, temperature: 98 }
    ])
```
**Output:** <br/>
It will return an object from the function. That object will have 4 lists named as A, B,
C, D respectively . Think A, B , C, D as line names in front of the vaccine booth.<br/>

- A will have person with age 20-30 with temperature less than 100
- B will have person with age 31-40 with temperature less than 100
- C will have person with age 41-50 with temperature less than 100
- D will have any range of age with temperature greater than equal 100 <br/>

**Each array will be sort by even ages people** <br/>
**Sample:**<br/>

```javascript
{
  A: [
    { name: 'Jahid', age: 20, temperature: 98 },
    { name: 'Biplap', age: 22, temperature: 98 },
    { name: 'sunil', age: 21, temperature: 98 }
  ],
  B: [
    { name: 'Kabir', age: 36, temperature: 99 },
    { name: 'Rahul', age: 37, temperature: 99 }
  ],
  C: [
    { name: 'Paul', age: 42, temperature: 98 },
    { name: 'Kat', age: 41, temperature: 98 }
  ],
  D: [
    { name: 'Nayem', age: 50, temperature: 100 },
    { name: 'Sabnaj', age: 31, temperature: 101 }
  ]
}
```

### Problem 02 (Web Instructor)
**‘City Bank’ is planning gifts for the newly registered credit user on this International
`Mother Language Day` from 21 February to 28 February. They need to distribute the card to
their user. You need to help to generate their card number and gift.**<br/>

*You will have to take each person's info to register them. For creating their card number:*
1. Take first 2 characters from the district name and make it capital letter. Example-from
Dhaka , take DH.
2. From current year pick last two number.
3. Concat first two numbers of the user postal number.
4. Add user birthdate 4 digit year.
5. After that generate serial number with padding 0 in left from each user.
6. Total character length will be 16.
<br/>

***Create a function named `cardDistribution()` which will take an array of objects. Each
object will have each person's information. (You must use exact function name, or your
test case may fail).***

<br/>
While distributing sort data alphabetically with fist characters. Sort them with priority
numbers. If the user has priority number 1 will be given first.
<br/>
If the last number of the card is even, give the user Red Rose , if odd give white Rose.
<br/>

**R = red rose**
<br/>

**W = white rose**

**Input** <br/>
```javascript
 cardDistribution([
    {
        name: "Mr Rashed", birthYear: 1999, currentYear: 2022, district: "Dhaka", postNo: 1200, priority: 2
    },
    {
        name: "Mr Raju", birthYear: 1995, currentYear: 2022, district: "Rajsahi", postNo: 1211, priority: 1
    }
])
```

**Output** <br/>
```javascript
[
  { cardNumber: 'RA22121995000002', gift: 'R', priority: 1 },
  { cardNumber: 'DH22121999000001', gift: 'W', priority: 2 }
]
```



