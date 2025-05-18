interface ILibrary {
  addBook(book: Book): void;
  removeBook(bookId: number): void;
  findBookById(bookId: number): Book | undefined;
  listAllBooks(): Book[];
}