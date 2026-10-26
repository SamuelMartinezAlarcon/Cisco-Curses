/* Section Practice */

/* Exercise 1 */
for (let i = 100; i >= 0; i -= 10) {
  console.log(i);
}

/* Exercise 2 */
let upperLimit = Number(prompt("Enter an upper limit:"));
let lowerLimit = Number(prompt("Enter a lower limit:"));

if (!isNaN(upperLimit) && !isNaN(lowerLimit) && upperLimit > lowerLimit) {
    for (let i = upperLimit; i >= lowerLimit; i--) {
        console.log(i);
    }
}

/* Exercise 3 */
let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];

numbers.forEach(number => { console.log(number); });
numbers.forEach(number => { if (number % 2 === 0) console.log(number); });
numbers.forEach(number => { if (number > 10 && number < 60) console.log(number); });

/* Exercise 4 */
let continueAddingMovies;

let movies = [];

while (continueAddingMovies !== false) {
    let movieName = prompt("Enter a movie name:");
    let movieRating = Number(prompt("Enter a movie rating (1-5):"));
    continueAddingMovies = confirm("Do you want to enter another movie?");

    movies.push({ name: movieName, rating: movieRating });
}

console.log("All with ratings under 7:");
movies.forEach(movie => { if (movie.rating < 7) console.log(movie.name + " (" + movie.rating + ")"); });

console.log("All with ratings over 7:");
movies.forEach(movie => { if (movie.rating >= 7) console.log(movie.name + " (" + movie.rating + ")"); });

/* Exercise 5 */
let vessel = {
    LATITUDE: 40.07288,
    LONGITUDE: 154.48535,
    COURSE: 285.6,
    SPEED: 14.0,
    IMO: 9175717,
    NAME: "MARENO"
} 
 
for( let key in vessel) { 
    console.log(`${key} -> ${vessel[key]}`); 
}

/* Exercise 6 */
while (true) {
    let firstNumber = Number(prompt("Enter the first number:"));
    let secondNumber = Number(prompt("Enter the second number:"));
    let operand = prompt("Enter an operator (+, -, *, /):");
    let result;

    if (firstNumber === "Q" || secondNumber === "Q" || operand === "Q") {
        break;
    }

    if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
        switch (operand) {
            case "+":
                result = firstNumber + secondNumber;
                break;
            case "-":
                result = firstNumber - secondNumber;
                break;
            case "*":
                result = firstNumber * secondNumber;
                break;
            case "/":
                if (secondNumber !== 0) {
                    result = firstNumber / secondNumber;
                } else {
                    console.log("Error: Division by zero is not allowed.");
                    continue;
                }
                break;
            default:
                console.log("Error: Invalid operator. Please use +, -, *, or /.");
        }
    } else {
        console.log("Error: Please enter valid numbers.");
    }
    alert(`Result: ${result}`);
}
