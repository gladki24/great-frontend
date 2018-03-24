import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductGridService} from '../product-grid.service';
import {IProductTile} from '../product-tile/IProductTile';
import {EBrand, ECategory} from '../EBrand_ECategory';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent implements OnInit {
  public products: IProductTile[];
  public modal: string;
  private brand: EBrand;
  private category: ECategory;
  @ViewChild('container', {read: ElementRef}) container: ElementRef;

  constructor(private service: ProductGridService,
              private route: ActivatedRoute) {
    this.modal = 'grid-modal';
  }

  ngOnInit() {
    this.getParams();
  }
  public onLoad() {
    this.modal = '';
  }
  private getProducts(count: number, brand?: EBrand, category?: ECategory) {
    this.service.getProducts(count, brand, category).subscribe(products => {
      this.products = products;
      this.onLoad();
    });
  }
  private getParams(): void {
    this.route.params.subscribe(params => {
      this.brand = parseInt(params['brand'], 0);
      this.category = parseInt(params['category'], 0);
      this.getProducts(27, this.brand, this.category);
    });
  }
}
