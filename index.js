import { Book } from "./Book.js";
import { Library } from "./Library.js";

const harryPotter = new Book("Harry Potter", "J.K. Rowling");
const naruto = new Book("Naruto", "Masashi Kishimoto");
const library = new Library();

console.log(library.addBook(harryPotter));
console.log(library.addBook(naruto));
console.log(library.books);
console.log(library.lendBook(naruto));
console.log(library.lendBook(harryPotter));
console.log(library.books);
console.log(library.returnBook(harryPotter));
console.log(library.books);
