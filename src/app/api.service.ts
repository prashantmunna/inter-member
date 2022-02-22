import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { debounceTime, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  

  constructor(private httpClient: HttpClient) { }
  public getList(): Observable<any> {
    return this.httpClient.get<any>(`https://jsonplaceholder.typicode.com/users`)
    .pipe(map(data => {
        return data;
      }));
  }
}
