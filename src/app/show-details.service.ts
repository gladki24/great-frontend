import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {IDetails} from './IDetails';

@Injectable()
export class ShowDetailsService {
  // sources
  private id = new Subject<string>();
  // streams
  public id$ = this.id.asObservable();
  constructor(private http: HttpClient) { }
  onShowDetails(id: string) {
    this.id.next(id);
  }
  getDetails(id: string): Observable<IDetails[]> {
    const url = `http://${window.location.hostname}:3000/default/detail/${id}`;
    return this.http.get<IDetails[]>(url);
  }
}
