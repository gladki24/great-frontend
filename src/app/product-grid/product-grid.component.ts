import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ProductGridService} from '../Services/product-grid.service';
import {IProductTile} from '../Interfaces/IProductTile';
import {EBrand, ECategory} from '../Enums/EBrand_ECategory';

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
  /*
  @HostListener('window:scroll', ['$event'])onScroll(event) {
    if (this.products && this.products.length > 0) {
      const height = this.container.nativeElement.scrollHeight;
      // console.log(`${height} : ${window.pageYOffset + 300}`);
      if (height < (window.pageYOffset + 400)) {
        this.router.navigate([`/explore/${this.brand}/${this.category}/${this.productsNumber += 3}`]);
      }
    }
  }*/
  public loadProducts() {
    this.router.navigate([`/explore/${this.brand}/${this.category}/${this.productsNumber += 12}`]);
  }
  private getProducts(count: number, brand?: EBrand, category?: ECategory) {
    this.service.getProducts(count, brand, category).subscribe(products => {
      this.products = products;
      this.onLoad();
    });
  }
  private createView(): void {
    this.route.params.subscribe(params => {
      this.productsNumber = parseInt(params['number'], 0);
      this.brand = parseInt(params['brand'], 0);
      this.category = parseInt(params['category'], 0);
      this.getProducts(this.productsNumber, this.brand, this.category);
    });
  }
}
