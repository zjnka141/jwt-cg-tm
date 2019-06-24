import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private adminUrl = 'http://localhost:8080/admin/test';
  private operatorUrl = 'http://localhost:8080/operator/test';
  private testUrl = 'http://localhost:8080/test';
  constructor(private http: HttpClient) { }
 
  getAdminBoard(): Observable<string> {
    return this.http.get(this.adminUrl, { responseType: 'text' });
  }
 
  getOperatorBoard(): Observable<string> {
    return this.http.get(this.operatorUrl, { responseType: 'text' });
  }

  getTestBoard(): Observable<string> {
    return this.http.get(this.testUrl, { responseType: 'text' });
  }
}
