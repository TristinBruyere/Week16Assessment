import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  
  books?: Book[];

  constructor(private bookList: BookService) { 
    this.books = this.bookList.readAll();
  }

  ngOnInit(): void {
  }

  newTitle?: String;
  newAuthor?: String;
  newPublicationYear?: Number;

  addBook() {
    if (this.newTitle && this.newAuthor && this.newPublicationYear)
    {
      this.bookList.add(
        { title: this.newTitle, author: this.newAuthor, publicationYear: this.newPublicationYear }
      );
    }
  }

}
