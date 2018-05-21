import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ILogin, IRegister} from '../Interfaces/ILogin_IRegsiter';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) { }
  public signUp(data: IRegister): Observable<boolean> {
    const url = `http://${window.location.hostname}:3000/user/add`;
    return this.http.post<boolean>(url, {
      email: data.email,
      password: data.password,
      nick: data.nick,
      birth: data.birth
    });
  }
  public signIn(data: ILogin): Observable<any> {
    const url = `http://${window.location.hostname}:3000/user/login`;
    return this.http.post<any>(url, {
      email: data.email,
      password: data.password
    });
  }
}
