import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() book?: Book;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }
  deleteItem() {
    if (this.book != null){
      this.bookService.delete(this.book);
    }
  }


}
