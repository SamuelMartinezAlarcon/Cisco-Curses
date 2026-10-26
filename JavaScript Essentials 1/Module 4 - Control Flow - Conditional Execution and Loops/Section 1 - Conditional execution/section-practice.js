/* Section Practice */

/* Exercise 1 */
let userResponse = prompt("Enter a number:");

if (userResponse > 90 && userResponse < 110)
    alert("Bingo!");
else
    alert("Miss");

/* Exercise 2 */
let userResponse2 = prompt("Enter a number:");

let message = (userResponse2 > 90 && userResponse2 < 110) ? "Bingo!" : "Miss";
alert(message);

/* Exercise 3 */
let firstNumer = Number(prompt("Enter the first number:"));
let secondNumber = Number(prompt("Enter the second number:"));
let operand = prompt("Enter an operand (+, -, *, /):");
let result;

if (!Number.isNaN(firstNumer) && !Number.isNaN(secondNumber)) {
    switch (operand) {
        case "+": result = firstNumer + secondNumber; break;
        case "-": result = firstNumer - secondNumber; break;
        case "*": result = firstNumer * secondNumber; break;
        case "/": result = firstNumer / secondNumber; break;
        default: alert("Invalid operand!"); break;
    }
} else {
    result = "Error: at least one of the inputs is not a number!";
}

alert(result);