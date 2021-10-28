import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: Book[] = [
    { title: 'Dune', author: 'Frank Herbert', publicationYear: 1965},
    { title: 'It', author: 'Stephen King', publicationYear: 1986 },
    { title: 'The Ickabog', author: 'J.K. Rowling', publicationYear: 2020}

  ]

  constructor() { }

readAll(): Book[] {
  return this.books;
}

add(theBook: Book) {
  this.books.push(theBook);
}

delete(theBook: Book) {
  let i = this.books.indexOf(theBook);
  this.books.splice(i, 1);
}

}
