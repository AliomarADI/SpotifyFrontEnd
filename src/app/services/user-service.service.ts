import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Account} from '../Model/Account';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  user: Observable<Account>;
  url = '/api';

  constructor(private http: HttpClient) { }

  getAccount(username: string, password: string): Observable<Account>{
    this.user = this.http.get<Account>(`http://localhost:8080?username=${username}&password=${password}`);
    return this.user;
  }

  createAccount(user: Account): Observable<any>{
    return  this.http.post(this.url + `/account/create`, user);
  }
}
