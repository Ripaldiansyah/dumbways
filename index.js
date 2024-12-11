import { Book } from "./Book.js";
import { Library } from "./Library.js";

const harryPotter = new Book("Harry Potter", "J.K. Rowling");
const library = new Library(harryPotter);

console.log(library.addBook());
console.log(library.books);
console.log(library.lendBook());
console.log(library.books);
console.log(library.returnBook());
console.log(library.books);
