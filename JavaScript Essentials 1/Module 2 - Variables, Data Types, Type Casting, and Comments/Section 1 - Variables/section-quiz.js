/* === SECTION QUIZ === */
/* Question 1 */

/*
let rosePrice = 8;
let lilyPrice = 10;
let tulipPrice = 2;

let numberOfRoses = 70;
let numberOfLilies = 50;
let numberOfTulips = 120;

let rosesValue = rosePrice * numberOfRoses;
let liliesValue = lilyPrice * numberOfLilies;
let tulipsValue = tulipPrice * numberOfTulips;

let total = rosesValue + liliesValue + tulipsValue;
console.log("Rose - unit price: ", rosePrice, ", quantity: ", numberOfRoses, ", total value: ", rosesValue);
console.log("Lily - unit price: ", lilyPrice, ", quantity: ", numberOfLilies, ", total value: ", liliesValue);
console.log("Tulip - unit price: ", tulipPrice, ", quantity: ", numberOfTulips, ", total value: ", tulipsValue);
console.log("Total: ", total);
*/

/* Question 2 */
const rosePrice = 8;
const lilyPrice = 10;
const tulipPrice = 2;

let numberOfRoses = 70;
let numberOfLilies = 50;
let numberOfTulips = 120;

let rosesValue = rosePrice * numberOfRoses;
let liliesValue = lilyPrice * numberOfLilies;
let tulipsValue = tulipPrice * numberOfTulips;

let total = rosesValue + liliesValue + tulipsValue;

console.log("Rose - unit price: ", rosePrice, ", quantity: ", numberOfRoses, ", total value: ", rosesValue);
console.log("Lily - unit price: ", lilyPrice, ", quantity: ", numberOfLilies, ", total value: ", liliesValue);
console.log("Tulip - unit price: ", tulipPrice, ", quantity: ", numberOfTulips, ", total value: ", tulipsValue);    
console.log("Total: ", total);

numberOfRoses -= 20;
numberOfLilies -= 30;

rosesValue = rosePrice * numberOfRoses;
liliesValue = lilyPrice * numberOfLilies;
tulipsValue = tulipPrice * numberOfTulips;

total = rosesValue + liliesValue + tulipsValue;

console.log("Rose - unit price: ", rosePrice, ", quantity: ", numberOfRoses, ", total value: ", rosesValue);
console.log("Lily - unit price: ", lilyPrice, ", quantity: ", numberOfLilies, ", total value: ", liliesValue);
console.log("Tulip - unit price: ", tulipPrice, ", quantity: ", numberOfTulips, ", total value: ", tulipsValue);    
console.log("Total: ", total);