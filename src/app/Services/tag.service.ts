import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TagService {

  constructor(private http: HttpClient) { }
  public get(product: string): Observable<string[]> {
    const url = `http://${window.location.hostname}:3000/tag/get/${product}`;
    return this.http.get<string[]>(url);
  }
  public add(product: string, userId: string, tag: string): Observable<boolean> {
    const url = `http://${window.location.hostname}:3000/tag/add`;
    return this.http.post<boolean>(url, {
      user: userId,
      product: product,
      tag: tag
    });
  }
  public vote(product: string, userId: string, tag: string): Observable<boolean> {
    const url = `http://${window.location.hostname}:3000/tag/vote`;
    return this.http.post<boolean>(url, {
      user: userId,
      product: product,
      tag: tag
    });
  }
}
