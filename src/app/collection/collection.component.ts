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
  public title: string;
  constructor(private router: ActivatedRoute,
              private service: CollectionService,
              private showDetailService: ShowDetailsService) { }

  ngOnInit() {
    this.createView();
  }
  private createView(): void {
    this.router.params.subscribe(params => {
      this.id = parseInt(params['id'], 0);
      this.getItems(this.id);
      this.getCollectionTitle();
    });
  }
  private getItems(id: number): void {
    this.service.getItems(id).subscribe(res => {
      this.products = res;
    });
  }
  private getCollectionTitle(): void {
    this.service.getCollectionTitle(this.id).subscribe(title => {
      this.title = title.title;
    });
  }
  showDetails(id: string): void {
    this.showDetailService.onShowDetails(id);
  }
}

