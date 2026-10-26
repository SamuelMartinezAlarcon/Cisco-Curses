/* Section Practice */

/* Exercise 1 */
let numbers = [50, 10, 40, 30, 20];
function compareNumbers(a, b) {
     let retVal = 0;
     if (a < b) {
         retVal = -1;
     } else if(a > b) {
         retVal = 1;
     }
     return retVal;
}
let sorted = numbers.sort(compareNumbers);
console.log(sorted); // [10, 20, 30, 40, 50]

/* Task 1A */
let value = (a, b) => {
    let retVal;
    return retVal = a < b ? -1 : a > b ? 1 : 0;
}

console.log(numbers.sort(value));

/* Task 1B */
console.log(numbers.sort((a, b) => b - a));

/* Exercise 2 */
function add(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return NaN;
    }
    return a + b;
}

function sub(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return NaN;
    }
    return a - b;
}

function mult(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return NaN;
    }
    return a * b;
}

console.log(add(12, 10)); // -> 22
console.log(mult(12, 10.1)); // -> NaN

/* Exercise 3 */
let addShort = (a, b) => Number.isInteger(a) && Number.isInteger(b) ? a + b : NaN;
let subShort = (a, b) => Number.isInteger(a) && Number.isInteger(b) ? a - b : NaN;
let multShort = (a, b) => Number.isInteger(a) && Number.isInteger(b) ? a * b : NaN;

/* Exercise 4 */
let action = (callback, a, b) => callback(a, b);

/* Exercise 5 */
let counter = 1;
let intervalId = setInterval(function () {
    console.log(counter++);
}, 2000);
setTimeout(function () {
    clearInterval(intervalId)
}, 20000);

/* Exercise 6 */
let fibbRec = function (n) {
    let retVal = 0;
    if (n != 0) {
        if (n === 1) {
            retVal = 1;
        } else {
            retVal = fibbRec(n - 1) + fibbRec(n - 2);
        }
    }
    return retVal;
}

/* Exercise 7 */
let fibb = n => n == 0 ? 0 : (n == 1 ? 1 : fibb(n - 1) + fibb(n - 2));

/* Exercise 8 */
function fibbIter(n) {
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let c = a;
        a = b;
        b += c;        
    }
    return b;
}
