export class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
    return "Buku berhasil ditambahkan";
  }

  lendBook(book) {
    const tempBook = this.books.find((b) => b === book);

    if (tempBook) {
      tempBook.isAvailable = false;
      return "Buku berhasil dipinjam";
    }

    return "Buka tidak tersedia";
  }

  returnBook(book) {
    const tempBook = this.books.find((book) => book === book);
    if (tempBook) {
      tempBook.isAvailable = true;
      return "Buku berhasil dikembalikan";
    }
    return "Buku tidak tersedia";
  }
}
