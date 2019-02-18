import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

    httpOptions = {
        headers: new HttpHeaders({
          'Access-Control-Allow-Headers': 'Content-Type'
        })
      };
  constructor(private Http: HttpClient) { }

  getHttp(): Observable<any> {
    return this.Http.get('https://localhost:44382/api/Razor', this.httpOptions);
  }
}
