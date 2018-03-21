import { Component, OnInit } from '@angular/core';
import {MainPageService} from '../main-page.service';
import {IBrand, ICategories, IRecommended} from '../IDetails';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  public brands: IBrand[];
  public categories: ICategories[];
  public recommended: IRecommended[];
  constructor(private service: MainPageService) { }

  ngOnInit() {
    this.getBrands();
    this.getCategories();
    this.getRecommended();
  }
  getBrands() {
    this.service.getBrands().subscribe(brands => {
      this.brands = brands;
    });
  }
  getCategories() {
    this.service.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }
  getRecommended() {
    this.service.getRecommended().subscribe(recommended => {
      this.recommended = recommended;
    });
  }
}
