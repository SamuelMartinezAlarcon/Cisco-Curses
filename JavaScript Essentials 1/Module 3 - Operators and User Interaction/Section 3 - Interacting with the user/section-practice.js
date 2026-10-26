/* Section Practice */

let width = prompt("Enter the width of the box: ", 0);
let height = prompt("Enter the height of the box: ", 0);
let length = prompt("Enter the length of the box: ", 0);
width = parseFloat(width);
height = parseFloat(height);
length = parseFloat(length);

let volume = width * height * length;
alert(`Calculated box volume is: ${volume}`);