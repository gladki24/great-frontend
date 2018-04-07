import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ICollectionItem} from '../Interfaces/ICollectionItem';
import {CollectionService} from '../Services/collection.service';
import {ShowDetailsService} from '../Services/show-details.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  private id: number;
  public products: ICollectionItem[];
  constructor(private router: ActivatedRoute,
              private service: CollectionService,
              private showDetailService: ShowDetailsService) { }

  ngOnInit() {
    this.createView();
  }
  private createView(): void {
    this.router.params.subscribe(params => {
      this.id = parseInt(params['id'], 0);
      this.getProducts(this.id);
    });
  }
  private getProducts(id: number): void {
    this.service.getProducts(id).subscribe(res => {
      this.products = res;
      console.log(this.products);
    });
  }
  showDetails(id: string): void {
    this.showDetailService.onShowDetails(id);
  }
}

