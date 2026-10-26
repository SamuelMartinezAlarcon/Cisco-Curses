/* Section Practice */

/* Exercise 1 */
function div (a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    
    return a / b;
}

console.log(div(10, 2));
console.log(div(10, 0));

/* Exercise 2 */
let numbers = [10, 40, 0, 20, 50];

for (let i = 0; i < numbers.length; i++) {
        let result;

        try {
            result = div(1000, numbers[i]);
        } catch (e) {
            result = e.message;
        }

        console.log(result);
    }
