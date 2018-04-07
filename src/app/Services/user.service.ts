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
  public setUserLogged(data: User[]) {
    this.isUserLogged = true;
    this.userData = data[0];
  }
  public getUserLogged() {
    return this.isUserLogged;
  }
  public getPublicUserData(): User {
    const userPublicData = Object.assign({password: 'Top Secret'}, this.userData);
    return userPublicData;
  }
  public getUserId(): string {
    return this.userData.id;
  }
  public getCollections(id: string): Observable<ICollectionName[]> {
    const url = `http://${window.location.hostname}:3000/user/collection/${id}`;
    return this.http.get<ICollectionName[]>(url);
  }
  public saveUserDetails(form: any, id: string) {
    const url = `http://${window.location.hostname}:3000/user/save`;
    return this.http.post<any>(url, {
      name: form.name,
      surname: form.surname,
      description: form.description,
      id: id
    });
  }
}
