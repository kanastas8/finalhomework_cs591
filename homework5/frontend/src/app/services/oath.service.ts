import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class OathService {

  constructor(private http: HttpClient) { }

  public url = 'http://localhost:3000/auth/twitter';

  doGoogle(): Observable<string> {
    return this.http.get<string>(this.url);
  }
}
