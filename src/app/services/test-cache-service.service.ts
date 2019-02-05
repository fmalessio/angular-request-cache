import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const urlTest: string = 'https://jsonplaceholder.typicode.com/photos';

@Injectable({
  providedIn: 'root',
})
export class TestCacheServiceService {

  constructor(private http: HttpClient) { }

  public getARequest(): Observable<any[]> {
    console.log("Calling: " + urlTest);
    return this.http.get<any[]>(urlTest);
  }

}
