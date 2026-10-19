/* === SECTION PRACTISE === */
/* Question 1 */

let boolean1 = true;
let boolean2 = Boolean(true);

let number1 = 100;
let numer2 = Number(200);

let bigInt1 = 100n;
let bigInt2 = BigInt(200);

let string1 = "Hello";
let string2 = String("Hello");

let undefined1 = undefined;

/* Question 2 */
console.log(`${boolean1} [${typeof boolean1}]`);
console.log(`${boolean2} [${typeof boolean2}]`);

console.log(`${number1} [${typeof number1}]`);
console.log(`${numer2} [${typeof numer2}]`);

console.log(`${bigInt1} [${typeof bigInt1}]`);
console.log(`${bigInt2} [${typeof bigInt2}]`);

console.log(`${string1} [${typeof string1}]`);
console.log(`${string2} [${typeof string2}]`);

console.log(`${undefined1} [${typeof undefined1}]`);

/* Question 3 */

let startValue = "1234";
let numberValue = Number(startValue);
let bigIntValue = BigInt(numberValue);
let booleanValue = Boolean(bigIntValue);

console.log(`${booleanValue} [${typeof booleanValue}]`);

/* Question 4 */
let boolean = true + false;
let number = 100 + 200;
let bigInt = 100n + 200n;
let string = "He" + "llo";
let undefined = undefined + undefined;

console.log(`${boolean} [${typeof boolean}]`);
console.log(`${number} [${typeof number}]`);
console.log(`${bigInt} [${typeof bigInt}]`);
console.log(`${string} [${typeof string}]`);
console.log(`${undefined} [${typeof undefined}]`);

/* Question 5 */
let b1 = true + 100; 
// let b2 = true + 100n; // -> error!
let b3 = true + "100"; 
// let n1 = 100 + 200n; // -> error!
let n2 = 100 + true;
let n3 = 100 + "200";
// let bi1 = 100n + 200;  // -> error!
// let bi2 = 100n + true  // -> error!
let bi3 = 100n + "200"; 
let s1 = "100" + 200;
let s2 = "100" + 200n;
let s3 = "100" + true;
let s4 = "abc" + 200;
let s5 = "abc" + 200n;
let s6 = "abc" + true;

console.log(`${b1} [${typeof b1}]`);    // -> 101 [number]
// console.log(`${b2} [${typeof b2}]`);
console.log(`${b3} [${typeof b3}]`);    // -> true100 [string]
// console.log(`${n1} [${typeof n1}]`);
console.log(`${n2} [${typeof n2}]`);    // -> 101 [number]
console.log(`${n3} [${typeof n3}]`);    // -> 100200 [string]
// console.log(`${bi1} [${typeof bi1}]`);
// console.log(`${bi2} [${typeof bi2}]`);
console.log(`${bi3} [${typeof bi3}]`);  // -> 100200 [string]
console.log(`${s1} [${typeof s1}]`);    // -> 100200 [string]
console.log(`${s2} [${typeof s2}]`);    // -> 100200 [string]
console.log(`${s3} [${typeof s3}]`);    // -> 100true [string]
console.log(`${s4} [${typeof s4}]`);    // -> abc200 [string]
console.log(`${s5} [${typeof s5}]`);    // -> abc200 [string]
console.log(`${s6} [${typeof s6}]`);    // -> abctrue [string]

/* Question 6 */
const str1 = 42 + + "1"; // -> 43 [number]