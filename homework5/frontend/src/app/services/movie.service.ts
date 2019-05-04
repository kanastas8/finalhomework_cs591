import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Movie {
  name: string;
  release: string;
}


@Injectable( {
  providedIn: 'root'
})

export class MovieService {

  constructor(private http: HttpClient) { }

  public url = 'http://localhost:3000';

  getListMovies(): Observable<string[]> {
    return this.http.get<string[]>(this.url);
  }
}
