// Code your solutions in this file

const array = []

function writeCards(names,event) {
    for (let i = 0; i < names.length; i++) {
        array.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    debugger;

    }
    return array;
}

function countDown(num) {
    let i = num;
    while (i >= 0) {
        console.log(i--);
    }
    return i;
}

console.log(countDown(10));