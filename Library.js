export class Library {
  constructor(book) {
    this.book = book;
    this.books = [];
  }

  addBook() {
    this.books.push(this.book);
    return "Buku berhasil ditambahkan";
  }

  lendBook() {
    const isAvailable = this.books.find(
      (book) => book.title === this.book.title
    );

    if (isAvailable) {
      this.book.isAvailable = false;
      return "Buku berhasil dipinjam";
    }

    return "Buka tidak tersedia";
  }

  returnBook() {
    const isAvailable = this.books.find(
      (book) => book.title === this.book.title
    );
    if (isAvailable) {
      this.book.isAvailable = true;
      return "Buku berhasil dikembalikan";
    }
    return "Buku tidak tersedia";
  }
}
