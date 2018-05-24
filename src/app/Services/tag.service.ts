import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {Config} from '../config';

@Injectable()
export class TagService {

  constructor(private http: HttpClient) { }
  public get(product: string): Observable<string[]> {
    const url = `${Config.backendHostname}/tag/get/${product}`;
    return this.http.get<string[]>(url);
  }
  public add(product: string, userId: string, tag: string): Observable<boolean> {
    const url = `${Config.backendHostname}/tag/add`;
    return this.http.post<boolean>(url, {
      user: userId,
      product: product,
      tag: tag
    });
  }
  public vote(product: string, userId: string, tag: string): Observable<boolean> {
    const url = `${Config.backendHostname}/tag/vote`;
    return this.http.post<boolean>(url, {
      user: userId,
      product: product,
      tag: tag
    });
  }
}
