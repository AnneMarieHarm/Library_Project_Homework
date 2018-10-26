"use strict";
//Task 1 - Create an array of books
//Task 2 - Create an array of authors
//Task 3 - Create a function to search for a book or author//Task 4 - //Task 4 - Create a function to make a list of all of our books and authors

//Declare the variables
let books = ["The Girl On The Train", "Hannah Coulter", "Snowball", "How Green Was My Valley", "Goodnight Moon"]

let authors = ["Wendell Berry", "Warren Buffett", "Richard Llewellyn", "Margaret Brown", "Paula Hawkins"]

//--------------------------------------
//Declare the function, for reference
// function search(category, name) {
//     if (category === "book") {
//         console.log("book");

//     }else if (category === "author") {
//         for(let i=0; i<authors.length; i++) {
//         if (authors[i] === name) {
//         console.log(authors[i]);
//         }
//       }
//     }
// }
// search("author", "Wendell Berry");
//--------------------------------------

//Declare the function
//For loop wrapped in function
function print() {
    for (let book of books) {
        console.log(books);
    }
    for (let author of authors) {
        console.log(authors);
    }
}
//Calling the function
print();

//--------------------------------------
//For... of loop for reference

/// for (let number of numbers) {
//     console.log(number);
// }
