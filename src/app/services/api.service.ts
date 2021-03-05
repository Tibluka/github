import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // repos/

  constructor(
    private http: HttpClient) {
  }

  getAPI<T>(params: string): Observable<T> {
    return this.http.get<T>(environment.url + params)
  }

  

}



