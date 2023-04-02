import { Component, EventEmitter } from '@angular/core';
import { Book } from 'src/types/Book';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  public books: Book[] = [];
  public card: Book[] = [];
  isShowing: boolean = true;
  public displayInput: string = '';

  constructor(private booksService: BooksService) {
    this.books = this.booksService.getBooks();
  }

  addToCart(book: Book): void {
    console.log(book);
  }
}
