import {Component, OnInit} from '@angular/core';
import {GoogleBooksService} from "./book-list/books.service";
import {Store} from "@ngrx/store";
import {selectBookCollection, selectBooks} from "./state/books.selectors";
import {addBook, removeBook, retrievedBookList} from "./state/books.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);
  search: string = 'Oliver Sacks';
  maxResults: string = '5';

  constructor(
    private booksService: GoogleBooksService,
    private store: Store
  ) {}

  ngOnInit() {
    this.searchBook();
  }

  onAdd(bookId: string) {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(removeBook({ bookId }));
  }

  searchBook() {
    this.booksService.getBooks(this.search, this.maxResults)
      .subscribe((books) => this.store.dispatch(retrievedBookList({ books })));
  }

  onKeySearch(event: any) {
    this.search = event.target.value;
  }

  onKeyMaxResults(event: any) {
    this.maxResults = event.target.value;
  }
}
