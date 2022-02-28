


const arr = [
    {
        name: "Mr Rashed", birthYear: 1999, currentYear: 2022, district: "Dhaka", postNo: 1200, priority: 2
    },
    {
        name: "Mr Raju", birthYear: 1995, currentYear: 2022, district: "Rajsahi", postNo: 1211, priority: 1
    },
    {
        name: "Mr Saju", birthYear: 1997, currentYear: 2022, district: "Comilla", postNo: 1214, priority: 11
    }
]


const cardDistribution = (arr) => {

    let cards = [];

    for (let i = 0; i < arr.length; i++) {

        let card = {};
        let temp;

        temp = arr[i].district.slice(0, 2).toUpperCase();
        temp += String(arr[i].currentYear).slice(-2) + String(arr[i].postNo).slice(0, 2);
        temp += arr[i].birthYear;

        if (i + 1 < 10) {
            temp += '00000' + (i + 1);
        }
        else if (i + 1 < 100) {
            temp += '0000' + (i + 1);
        }
        else if (i + 1 < 1000) {
            temp += '000' + (i + 1);
        }
        // else if (i + 1 < 10000) {
        //     temp += '00' + (i + 1);
        // }
        // else if (i + 1 < 100000) {
        //     temp += '0' + (i + 1);
        // }
        // else if (i + 1 < 100000) {
        //     temp += '0' + (i + 1);
        // }

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