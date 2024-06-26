import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  url: string = environment.apiUrl;
  
  constructor(private http: HttpClient) { }

  detail() : Observable<any> {
    return this.http.get<any>(this.url + 'dashboard');
  }
}
