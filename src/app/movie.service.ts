import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url: string = 'https://jsonmock.hackerrank.com/api/moviesdata';

  constructor(private http: HttpClient) { }

  getMovies(input: number): Observable<any> {
    return this.http.get<any>(`${this.url}?Year=${input}`);
  }
}
