import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {IDetails} from '../Interfaces/IDetails';
import {Config} from '../config';

@Injectable()
export class ShowDetailsService {
  // sources
  private id = new Subject<string>();
  // streams
  public id$ = this.id.asObservable();
  constructor(private http: HttpClient) {}
  onShowDetails(id: string) {
    this.id.next(id);
  }
  getDetails(id: string): Observable<IDetails[]> {
    const url = `${Config.backendHostname}/detail/${id}`;
    return this.http.get<IDetails[]>(url);
  }
}
