import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ISmallTile} from '../Interfaces/IDetails';
import { HttpClient } from '@angular/common/http';
import {Config} from '../config';

@Injectable()
export class MainPageService {

  constructor(private http: HttpClient) { }
  getBrands(): Observable<ISmallTile[]> {
    const url = `${Config.backendHostname}/tile/brands`;
    return this.http.get<ISmallTile[]>(url);
  }
  getCategories(): Observable<ISmallTile[]> {
    const url = `${Config.backendHostname}/tile/categories`;
    return this.http.get<ISmallTile[]>(url);
  }
}
