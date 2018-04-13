import { Injectable } from '@angular/core';
import {User} from '../user/user';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import { ICollectionName } from '../Interfaces/ICollectionName';

@Injectable()
export class UserService {
  private userId: string;
  private isUserLogged: boolean;
  constructor(private http: HttpClient) {
    this.isUserLogged = false;
  }
  public setUserLogged(id: string): void {
    this.isUserLogged = true;
    this.userId = id;
    localStorage.setItem('user', id);
  }
  public setUserLogout(): void {
    this.isUserLogged = false;
    this.userId = undefined;
    localStorage.clear();
  }
  public getUserLogged(): boolean {
    return this.isUserLogged;
  }
  public getUserId(): string {
    return this.userId;
  }
  public getUserDetails(): Observable<User> {
    const url = `http://${window.location.hostname}:3000/user/${this.userId}`;
    return this.http.get<User>(url);
  }
  public saveUserDetails(form: any, id: string): Observable<boolean> {
    const url = `http://${window.location.hostname}:3000/user/save`;
    return this.http.post<boolean>(url, {
      name: form.name,
      surname: form.surname,
      description: form.description,
      id: id
    });
  }
  public getUserCollections(id: string): Observable<ICollectionName[]> {
    const url = `http://${window.location.hostname}:3000/user/collection/${id}`;
    return this.http.get<ICollectionName[]>(url);
  }
  public addUserCollection(name: string): Observable<number> {
    const url = `http://${window.location.hostname}:3000/collection/new`;
    return this.http.post<number>(url, {
      name: name,
      id: this.userId
    });
  }
  public deleteUserCollection(id: number): Observable<boolean> {
    const url = `http://${window.location.hostname}:3000/collection/delete`;
    return this.http.post<boolean>(url, {
      id: id
    });
  }
}
