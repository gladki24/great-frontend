import {Component, OnInit} from '@angular/core';
import {MainPageService} from '../Services/main-page.service';
import {ISmallTile} from '../Interfaces/IDetails';
import {UserService} from '../Services/user.service';
import {User} from '../user/user';
import {ICollectionName} from '../Interfaces/ICollectionName';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  public brands: ISmallTile[];
  public categories: ISmallTile[];
  public userLogged: boolean;
  public collections: ICollectionName[];
  public userDetails: User;
  constructor(private service: MainPageService,
              private user: UserService) {
    this.getBrands();
    this.getCategories();
    this.userLogged = this.user.getUserLogged();
    if (this.userLogged) {
      this.getUserDetails();
      this.getCollections();
    }
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
  getCollections(): void {
    this.user.getUserCollections(this.user.getUserId()).subscribe(collections => {
      this.collections = collections;
    });
  }
  getUserDetails(): void {
    this.user.getUserDetails().subscribe(details => {
      this.userDetails = details;
    });
  }
}
