class User {
    userId: number;
    name: string;
    email: string;

    constructor(userId: number, name: string, email: string){
        this.userId = userId;
        this.name = name;
        this.email = email;
    }

      borrowBook(library: Library, bookId: number): Book | null {
    const book = library.borrowBook(bookId);
    if (book) {
      console.log(`${this.name} kikölcsönözte: ${book.title}`);
      return book;
    } else {
      console.log(`${this.name} nem találta a könyvet az ID alapján: ${bookId}`);
      return null;
        }
    }
}