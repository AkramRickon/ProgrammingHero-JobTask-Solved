

//sample input
const arr = [
    {
        name: "Mr Rashed", birthYear: 1999, currentYear: 2022, district: "Dhaka", postNo: 1200, priority: 2
    },
    {
        name: "Mr Raju", birthYear: 1995, currentYear: 2022, district: "Rajsahi", postNo: 1211, priority: 1
    }
]

//Main solution
const cardDistribution = (arr) => {

    let cards = [];

    for (let i = 0; i < arr.length; i++) {

        let card = {};
        let temp;

        temp = arr[i].district.slice(0, 2).toUpperCase();
        temp += String(arr[i].currentYear).slice(-2) + String(arr[i].postNo).slice(0, 2);
        temp += arr[i].birthYear;

        // considering maximum registered credit card users 1000.  
        if (i + 1 < 10) {
            temp += '00000' + (i + 1);
        }
        else if (i + 1 < 100) {
            temp += '0000' + (i + 1);
        }
        else if (i + 1 < 1000) {
            temp += '000' + (i + 1);
        }

        card['cardNumber'] = temp;

        if (Number(temp.slice(-1)) % 2 === 0) {
            card['gift'] = 'R';
        }
        else {
            card['gift'] = 'W';
        }

        card['priority'] = arr[i].priority;
        cards.push(card);
    }

    cards.sort((a, b) => a.priority - b.priority);
    return cards;
}

console.log(cardDistribution(arr));



/* Output:
[
  { cardNumber: 'RA22121995000002', gift: 'R', priority: 1 },
  { cardNumber: 'DH22121999000001', gift: 'W', priority: 2 }
] 
*/