import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ICollectionItem} from '../Interfaces/ICollectionItem';
import {UserService} from './user.service';
import {Config} from '../config';

@Injectable()
export class CollectionService {

  constructor(private http: HttpClient, public user: UserService) { }
  public getItems(id: number): Observable<ICollectionItem[]> {
    const url = `${Config.backendHostname}/collection/get/${id}`;
    return this.http.get<ICollectionItem[]>(url);
  }
  public saveItem(id: string): Observable<string> {
    const url = `${Config.backendHostname}/collection/addItem`;
    return this.http.post<string>(url, {
      productId: id,
      userId: this.user.getUserId()
    });
  }
  public getCollectionTitle(id: number): Observable<any> {
    const sql = `${Config.backendHostname}/collection/title/${id}`
    return this.http.get<any>(sql);
  }
  public addItemToCollection(itemId: string, collectionId: number): Observable<boolean> {
    const url = `${Config.backendHostname}/collection/add`;
    return this.http.post<boolean>(url, {
      productId: itemId,
      collectionId: collectionId
    });
  }
  public removeProduct(collectionId: number, productId: string): Observable<boolean> {
    const url = `${Config.backendHostname}/collection/remove`;
    return this.http.post<boolean>(url, {
      collectionId: collectionId,
      productId: productId
    });
  }
}
