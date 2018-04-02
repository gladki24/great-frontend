import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ICollectionItem} from '../Interfaces/ICollectionItem';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  private id: number;
  public product: ICollectionItem;
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.getParams();
  }
  private getParams(): void {
    this.router.params.subscribe(params => {
      this.id = parseInt(params['id'], 0);
    });
  }
  private getProducts(): void {
  }
}
