import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Book} from "./books.model";

@Injectable({
  providedIn: 'root'
})
export class GoogleBooksService {

  constructor(private http: HttpClient) { }

  getBooks(search: string, maxResults: string): Observable<Array<Book>> {
    return this.http.get<{ items: Book[] }>(
      'https://www.googleapis.com/books/v1/volumes?maxResults=' + maxResults + '&orderBy=relevance&q=' + search
    ).pipe(map((books) => books.items || []));
  }
}
