import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FaqQuestionService {

  constructor(private Http: HttpClient) { }

  getHttp(): Observable<any> {
    return this.Http.get('https://localhost:5001/api/Question');
  }
}
