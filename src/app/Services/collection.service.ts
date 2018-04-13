import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ICollectionItem} from '../Interfaces/ICollectionItem';
import {UserService} from './user.service';

@Injectable()
export class CollectionService {

  constructor(private http: HttpClient, public user: UserService) { }
  public getItems(id: number): Observable<ICollectionItem[]> {
    const url = `http://${window.location.hostname}:3000/collection/get/${id}`;
    return this.http.get<ICollectionItem[]>(url);
  }
  public saveItem(id: string): Observable<string> {
    const url = `http://${window.location.hostname}:3000/collection/addItem`;
    return this.http.post<string>(url, {
      productId: id,
      userId: this.user.getUserId()
    });
  }
  public getCollectionTitle(id: number): Observable<any> {
    const sql = `http://${window.location.hostname}:3000/collection/title/${id}`
    return this.http.get<any>(sql);
  }
}
