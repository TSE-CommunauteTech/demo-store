import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { StoreModule } from '@ngrx/store';
import { booksReducer } from "./state/books.reducer";
import { collectionReducer } from "./state/collection.reducer";
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookCollectionComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ books: booksReducer, collection: collectionReducer }),
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
