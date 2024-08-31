Assignment 1: Digital Library System
Task 1: Create a constructor function for the Book object
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

// Example usage:
let book1 = new Book("To Kill a Mockingbird", "Harper Lee", 281);
let book2 = new Book("1984", "George Orwell", 328);

ask 2: Implement a method within the Book object to display book information
Book.prototype.displayInfo = function() {
    console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`);
}

// Example usage:
book1.displayInfo(); // Output: Title: To Kill a Mockingbird, Author: Harper Lee, Pages: 281

Task 3: Create an array to store book objects and implement functions to add and search books
let library = [];

function addBook(book) {
    library.push(book);
}

function searchByTitle(title) {
    return library.filter(book => book.title.toLowerCase() === title.toLowerCase());
}

function searchByAuthor(author) {
    return library.filter(book => book.author.toLowerCase() === author.toLowerCase());
}

// Example usage:
addBook(book1);
addBook(book2);

console.log(searchByTitle("1984")); // Output: [Book {title: "1984", author: "George Orwell", pages: 328}]


Memory updated
Here's how you can approach both assignments:

Assignment 1: Digital Library System
Task 1: Create a constructor function for the Book object

javascript
Copy code
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

// Example usage:
let book1 = new Book("To Kill a Mockingbird", "Harper Lee", 281);
let book2 = new Book("1984", "George Orwell", 328);
Task 2: Implement a method within the Book object to display book information

javascript
Copy code
Book.prototype.displayInfo = function() {
    console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`);
}

// Example usage:
book1.displayInfo(); // Output: Title: To Kill a Mockingbird, Author: Harper Lee, Pages: 281
Task 3: Create an array to store book objects and implement functions to add and search books

javascript
Copy code
let library = [];

function addBook(book) {
    library.push(book);
}

function searchByTitle(title) {
    return library.filter(book => book.title.toLowerCase() === title.toLowerCase());
}

function searchByAuthor(author) {
    return library.filter(book => book.author.toLowerCase() === author.toLowerCase());
}

// Example usage:
addBook(book1);
addBook(book2);

console.log(searchByTitle("1984")); // Output: [Book {title: "1984", author: "George Orwell", pages: 328}]

Task 4: Implement filter and map methods
// Filter books with more than 100 pages
let filteredBooks = library.filter(book => book.pages > 100);

// Add "Title: " and "Author: " to book properties using map
let mappedBooks = library.map(book => {
    return {
        title: `Title: ${book.title}`,
        author: `Author: ${book.author}`,
        pages: book.pages
    };
});

// Example usage:
console.log(filteredBooks);
console.log(mappedBooks);

Assignment 2: Simple Banking Application
Task 1: Create a constructor function for the Account object
function Account(accountNumber, balance, owner) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner = owner;
}

// Example usage:
let account1 = new Account("123456", 500, "John Doe");

Task 2: Implement deposit and withdraw methods
Account.prototype.deposit = function(amount) {
    this.balance += amount;
    console.log(`Deposited $${amount}. New balance: $${this.balance}`);
}

Account.prototype.withdraw = function(amount) {
    if (amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
    } else {
        console.log("Insufficient funds");
    }
}

// Example usage:
account1.deposit(200); // Output: Deposited $200. New balance: $700
account1.withdraw(100); // Output: Withdrew $100. New balance: $600

Task 3: Create a method to calculate compound interest
Account.prototype.calculateInterest = function(rate, years) {
    let compoundInterest = this.balance * Math.pow((1 + rate / 100), years) - this.balance;
    console.log(`Compound Interest: $${compoundInterest.toFixed(2)}`);
}

// Example usage:
account1.calculateInterest(5, 2); // Output: Compound Interest: $61.00 (assuming rate is 5% and period is 2 years)
