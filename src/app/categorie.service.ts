import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categorie } from './categorie';

@Injectable({
    providedIn: 'root'
})
export class CategorieService {

    constructor(private Http: HttpClient) { }

    getHttp(): Observable<any> {
        return this.Http.get('https://localhost:44382/api/Razor');
    }

    /*getHttpArrayFormat(): Observable<Categorie[]> {
      return this.Http.get<Categorie[]>('https://localhost:44382/api/Razor');
    }
    getCategories(): Observable<any> {
        // ...using get request
        const response = this.Http.get('https://localhost:44382/api/Razor)
            // ...and calling .json() on the response to return data
            .map((response: Response) => response.json());
        return response;
    }*/
}
