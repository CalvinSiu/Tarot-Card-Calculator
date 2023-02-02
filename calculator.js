class TarotCalculator {
    constructor() {
        let tarotList = [
            {card1: 21, card2: 3},
            {card1: 20, card2: 2},
            {card1: 19, card2: 10},
            {card1: 18, card2: 9},
            {card1: 17, card2: 8},
            {card1: 16, card2: 7},
            {card1: 15, card2: 6},
            {card1: 14, card2: 5},
            {card1: 13, card2: 4},
            {card1: 12, card2: 3},
            {card1: 11, card2: 2},
            {card1: 10, card2: 1},
        ];
        
        this.convertDate = (month, day, year1, year2) => {
            return {m: month, d: day, y1: year1, y2: year2};
        }
    }
}

function convertDate(month,day,year1,year2) {
    return {m: month, d: day, y1: year1, y2: year2};
}

function calculate(date) {
    let num = date.m + date.d + date.y1 + date.y2;
    return Math.floor(num / 10) + num % 10;
}

console.log(calculate(convertDate(12,4,20,02)));