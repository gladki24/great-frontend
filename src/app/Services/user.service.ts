import { Injectable } from '@angular/core';
import {User} from '../user/user';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import { ICollectionName } from '../Interfaces/ICollectionName';

@Injectable()
export class UserService {
  private isUserLogged: boolean;
  private userData: User;
  constructor(private http: HttpClient) {
    this.isUserLogged = false;
  }
  public setUserLogged(data: User[]): void {
    this.isUserLogged = true;
    this.userData = data[0];
    localStorage.setItem('user', this.userData.id);
  }
  public setUserLogout(): void {
    this.isUserLogged = false;
    localStorage.clear();
  }
  public getUserLogged(): boolean {
    return this.isUserLogged;
  }
  public getPublicUserData(): User {
    const userPublicData = Object.assign({password: 'Top Secret'}, this.userData);
    return userPublicData;
  }
  public getCollections(id: string): Observable<ICollectionName[]> {
    const url = `http://${window.location.hostname}:3000/user/collection/${id}`;
    return this.http.get<ICollectionName[]>(url);
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
  public addCollection(name: string): Observable<number> {
    const url = `http://${window.location.hostname}:3000/collection/new`;
    return this.http.post<number>(url, {
      name: name,
      id: this.userData.id
    });
  }
}
