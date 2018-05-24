import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {IProductTile} from '../Interfaces/IProductTile';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {EBrand, ECategory} from '../Enums/EBrand_ECategory';
import {ESearchType} from '../Enums/ESearchType';
import {Config} from '../config';

@Injectable()
export class ProductGridService {
  constructor(private http: HttpClient) { }
  getProducts(count: number, brand?: EBrand, category?: ECategory): Observable<IProductTile[]> {
    const url = `${Config.backendHostname}/${count}/${brand}/${category}`;
    return this.http.get<IProductTile[]>(url);
  }
  searchProducts(count: number, type: ESearchType, query: string): Observable<IProductTile[]> {
    const url = `${Config.backendHostname}/search/${count}/${type}/${query}`;
    return this.http.get<IProductTile[]>(url);
  }
}
