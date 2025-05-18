class Library {
  books: Book[];

  addBook(book: Book): void {
    this.books.push(book);
  }

  removeBook(id: number): void {
    this.books = this.books.filter(book => book.id !== id);
  }

  borrowBook(id: number): Book | null {
  const index = this.books.findIndex(book => book.id === id);
  if (index !== -1) {
    const borrowedBook = this.books[index];
    this.books.splice(index, 1);
    return borrowedBook;
  }
  return null;
}

   findBookById(bookId: number): Book | undefined {
    return this.books.find(book => book.id === bookId);
  }

  listAllBooks(): Book[] {
    return this.books;
  }
}