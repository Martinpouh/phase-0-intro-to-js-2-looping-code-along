// Code your solutions in this file
let thisArray = [];

function writeCards(cards) {
    for (let i = 0; i < cards.length; i++) {
        thisArray.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`);
    }
    return thisArray
}

function countDown(integer) {
    while (integer >= 0) {
        console.log(integer);
        integer--;
    }
}
countDown(4);