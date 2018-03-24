import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {IProductTile} from '../Interfaces/IProductTile';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {EBrand, ECategory} from '../Enums/EBrand_ECategory';

@Injectable()
export class ProductGridService {
  constructor(private http: HttpClient) { }
  getProducts(count: number, brand?: EBrand, category?: ECategory): Observable<IProductTile[]> {
    let url: string;
    if (brand && category) {
      url = `http://${window.location.hostname}:3000/default/${count}/${brand}/${category}`;
    } else if (brand) {
      url = `http://${window.location.hostname}:3000/default/brand/${brand}/${count}`;
    } else if (category) {
      url = `http://${window.location.hostname}:3000/default/category/${category}/${count}`;
    }
    return this.http.get<IProductTile[]>(url);
  }
}
