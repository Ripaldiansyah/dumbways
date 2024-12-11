export class Book {
  constructor(title, author, isAvailable = true) {
    this.title = title;
    this.author = author;
    this.isAvailable = isAvailable;
  }
}
