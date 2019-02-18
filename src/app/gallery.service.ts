import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private Http: HttpClient) { }

  getHttp(): Observable<any>
  {
    return this.Http.get('https://localhost:44337/');
  }
}
