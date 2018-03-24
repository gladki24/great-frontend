import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ISmallTile} from './IDetails';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MainPageService {

  constructor(private http: HttpClient) { }
  getBrands(): Observable<ISmallTile[]> {
    const url = `http://${window.location.hostname}:3000/default/brands`;
    return this.http.get<ISmallTile[]>(url);
  }
  getCategories(): Observable<ISmallTile[]> {
    const url = `http://${window.location.hostname}:3000/default/categories`;
    return this.http.get<ISmallTile[]>(url);
  }
}
