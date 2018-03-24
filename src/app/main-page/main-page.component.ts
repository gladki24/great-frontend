import {Component, OnInit} from '@angular/core';
import {MainPageService} from '../Services/main-page.service';
import {ISmallTile} from '../Interfaces/IDetails';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  public brands: ISmallTile[];
  public categories: ISmallTile[];
  constructor(private service: MainPageService) {
    this.getBrands();
    this.getCategories();
  }

  ngOnInit() {
  }
  getBrands(): void {
    this.service.getBrands().subscribe(brands => {
      this.brands = brands;
    });
  }
  getCategories(): void {
    this.service.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }
}
