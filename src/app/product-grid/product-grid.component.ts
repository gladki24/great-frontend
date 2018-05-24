import {Component, ElementRef, OnInit, ViewChild, OnDestroy} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ProductGridService} from '../Services/product-grid.service';
import {IProductTile} from '../Interfaces/IProductTile';
import {EBrand, ECategory} from '../Enums/EBrand_ECategory';
import {ESearchType} from '../Enums/ESearchType';
import 'rxjs/add/operator/takeUntil';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent implements OnInit, OnDestroy {
  public products: IProductTile[];
  public modal: string;
  private brand: EBrand;
  private category: ECategory;
  private type: ESearchType;
  private query: string;
  private productsNumber: number;
  private destroyComponent = new Subject<void>();
  @ViewChild('container', {read: ElementRef}) container: ElementRef;

  constructor(private service: ProductGridService,
              private route: ActivatedRoute,
              private router: Router) {
    this.modal = 'grid-modal';
  }

  ngOnInit() {
    this.createView();
  }
  ngOnDestroy() {
    this.destroyComponent.next();
    this.destroyComponent.complete();
  }
  public onLoad() {
    this.modal = '';
  }
  public loadMoreProducts() {
    if (typeof this.brand === 'number' && typeof this.category === 'number') {
      this.router.navigate([`/explore/${this.brand}/${this.category}/${this.productsNumber += 12}`]);
    } else {
      this.router.navigate([`/search/${this.type}/${this.query}/${this.productsNumber += 12}`]);
    }
  }
  private getProducts(count: number, brand?: EBrand, category?: ECategory): void {
    this.service.getProducts(count, brand, category).takeUntil(this.destroyComponent).subscribe(products => {
      this.products = products;
      this.onLoad();
    });
  }
  private searchProducts(count: number, type: ESearchType, query: string): void {
    this.service.searchProducts(count, type, query).takeUntil(this.destroyComponent).subscribe(products => {
      this.products = products;
      this.onLoad();
    });
  }
  private createView(): void {
    this.route.params.takeUntil(this.destroyComponent).subscribe(params => {
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
