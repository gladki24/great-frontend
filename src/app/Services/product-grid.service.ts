import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {IProductTile} from '../Interfaces/IProductTile';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {EBrand, ECategory} from '../Enums/EBrand_ECategory';

@Injectable()
export class ProductGridService {
  constructor(private http: HttpClient) { }
  getProducts(count: number, brand?: EBrand, category?: ECategory): Observable<IProductTile[]> {
    const url = `http://${window.location.hostname}:3000/product/${count}/${brand}/${category}`;
    return this.http.get<IProductTile[]>(url);
  }
}
