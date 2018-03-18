import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {IProductTile} from './product-tile/IProductTile';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {EBrand, ECategory} from './EBrand_ECategory';

@Injectable()
export class ProductGridService {
  constructor(private http: HttpClient) { }
  getProducts(count: number, brand?: EBrand, category?: ECategory): Observable<IProductTile[]> {
    const url = `http://${window.location.hostname}:3000/default/${count}/${brand}/${category}`;
    return this.http.get<IProductTile[]>(url);
  }
}
