import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {IBrand, ICategories, IRecommended} from './IDetails';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MainPageService {

  constructor(private http: HttpClient) { }
  getBrands(): Observable<IBrand[]> {
    const url = `http://${window.location.hostname}:3000/default/brands`;
    return this.http.get<IBrand[]>(url);
  }
  getCategories(): Observable<ICategories[]> {
    const url = `http://${window.location.hostname}:3000/default/categories`;
    return this.http.get<ICategories[]>(url);
  }
  getRecommended(): Observable<IRecommended[]> {
    const url = `http://${window.location.hostname}:3000/random/product/10`;
    return this.http.get<IRecommended[]>(url);
  }
}
