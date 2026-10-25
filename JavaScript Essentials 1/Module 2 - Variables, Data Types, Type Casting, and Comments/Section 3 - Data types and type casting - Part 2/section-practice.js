/* Objects */

/* Question 1 */
let ticket = {
    from: "San Vicente del Raspeig",
    to: "Alicante",
    price: 2.50
};

console.log("From: " + ticket.from);
console.log("To: " + ticket.to);
console.log("Price: " + ticket.price);

/* Question 2 */
let person = {};
person.name = "John";
person.surname = "Doe";
console.log(`${person.name} ${person.surname}`);

/* Arrays */

/* Question 3 */
let books = [{
        title: "Speaking JavaScript",
        author: "Axel Rauschmayer",
        pages: 460
    },
    {
        title: "Programming JavaScript Applications",
        author: "Eric Elliott",
        pages: 245
    },
    {
        title: "Understanding ECMAScript 6",
        author: "Nicholas C. Zakas",
        pages: 352
    }
];

/* Question 4 */
books.push({
    title: "Learning JavaScript Design Patterns",
    author: "Addy Osmani",
    pages: 254
});

console.log("Total length of the array: " + books.length);
console.log("All titles: " + books.map(book => book.title).join(", "));

/* Question 5 */
let selectedBooks = books.slice(-2);

/* Question 6 */
books.shift();

console.log("Total length of the array: " + books.length);
console.log("All titles: " + books.map(book => book.title).join(", "));

/* Question 7 */
let totalPages = books.reduce((total, book) => total + book.pages, 0);
console.log("Total pages: " + totalPages);
