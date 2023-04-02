import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookComponent } from './book/book.component';
import { BooksModule } from './books/books.module';
@NgModule({
  declarations: [AppComponent, BookComponent],
  imports: [BrowserModule, FormsModule, BooksModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
