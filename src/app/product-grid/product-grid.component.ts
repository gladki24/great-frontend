import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ProductGridService} from '../Services/product-grid.service';
import {IProductTile} from '../Interfaces/IProductTile';
import {EBrand, ECategory} from '../Enums/EBrand_ECategory';
import {ESearchType} from '../Enums/ESearchType';

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
  private type: ESearchType;
  private query: string;
  private productsNumber;
  @ViewChild('container', {read: ElementRef}) container: ElementRef;

  constructor(private service: ProductGridService,
              private route: ActivatedRoute,
              private router: Router) {
    this.modal = 'grid-modal';
  }

  ngOnInit() {
    this.createView();
  }
  public onLoad() {
    this.modal = '';
  }
  public loadMoreProducts() {
    if (this.category && this.brand) {
      this.router.navigate([`/explore/${this.brand}/${this.category}/${this.productsNumber += 12}`]);
    } else {
      this.router.navigate([`/search/${this.type}/${this.query}/${this.productsNumber += 12}`]);
    }
  }
  private getProducts(count: number, brand?: EBrand, category?: ECategory): void {
    this.service.getProducts(count, brand, category).subscribe(products => {
      this.products = products;
      this.onLoad();
    });
  }
  private searchProducts(count: number, type: ESearchType, query: string): void {
    this.service.searchProducts(count, type, query).subscribe(products => {
      this.products = products;
      this.onLoad();
    });
  }
  private createView(): void {
    this.route.params.subscribe(params => {
      this.productsNumber = parseInt(params['number'], 0);

      if (params['category'] && params['category']) {
        this.brand = parseInt(params['brand'], 0);
        this.category = parseInt(params['category'], 0);
        this.getProducts(this.productsNumber, this.brand, this.category);
      } else {
        this.query = params['query'];
        this.type = params['type'];
        this.searchProducts(this.productsNumber, this.type, this.query);
      }
    });
  }
}
