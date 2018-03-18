import {Component, ComponentFactory, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductTileComponent } from '../product-tile/product-tile.component';
import {ProductGridService} from '../product-grid.service';
import {IProductTile} from '../product-tile/IProductTile';
import {EBrand, ECategory} from '../EBrand_ECategory';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent implements OnInit {
  @ViewChild('placeholder', {read: ViewContainerRef})private placeholder: ViewContainerRef;
  private tileFactory: ComponentFactory<ProductTileComponent>;
  public products: IProductTile[];
  private brand: EBrand;
  private category: ECategory;

  constructor(public resolver: ComponentFactoryResolver,
              private service: ProductGridService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.getParams();
    this.createView(72, this.brand, this.category);
  }
  private createTile(product: IProductTile) {
    this.tileFactory = this.resolver.resolveComponentFactory(ProductTileComponent);
    const componentRef = this.placeholder.createComponent(this.tileFactory);
    componentRef.instance.product = product;
  }
  private getProducts(count: number, brand?: EBrand, category?: ECategory): Promise<IProductTile[]> {
    return new Promise((resolve, reject) => {
      this.service.getProducts(count, brand, category).subscribe(products => {
        if (products) { resolve(products); }
        reject('no data');
      });
    });
  }
  private createView(count: number, brand?: EBrand, category?: ECategory): void {
    this.getProducts(count, brand, category).then(products => {
      this.products = products;
      for (const product of products) {
        this.createTile(product);
      }
    }).catch(err => { console.error(err); });
  }
  private getParams(): void {
    this.route.params.subscribe(params => {
      this.brand = parseInt(params['brand'], 0);
      this.category = parseInt(params['category'], 0);
      this.placeholder.clear();
      this.createView(72, this.brand, this.category);
    });
  }
}
