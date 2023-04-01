import { Component, EventEmitter } from '@angular/core';
import { Book } from 'src/types/Book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  books: Book[] = [
    {
      name: 'Clean Code',
      author: 'Robert C Martin',
      img: 'https://images-na.ssl-images-amazon.com/images/I/41zoxjP9lcL._SX323_801,204,203,200_.jpg',
      amount: 5000,
    },
    {
      name: 'Programmatic Programmer',
      author: 'David Thomas',
      img: 'https://m.media-amazon.com/images/I/518FqJvR9al.jpg',
      amount: 4000,
    },
  ];

  card: Book[] = [];

  isShowing: boolean = true;

  displayInput: string = '';
  constructor() {}

  addToCart(event: any): void {
    console.log(event);
  }
} 
