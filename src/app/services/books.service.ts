import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private readonly ApiUrl = 'https://www.googleapis.com/books/v1/volumes';
  constructor(
    private http: HttpClient
  ) { }

  getBooks(query: string) {
    const params = new HttpParams().append('q', query);
    return this.http.get(this.ApiUrl, {params});
  }

}
