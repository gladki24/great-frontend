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
  public publicUserData: User;
  public userLogged: boolean;
  public collections: ICollectionName[];
  constructor(private service: MainPageService,
              private user: UserService) {
    this.getBrands();
    this.getCategories();
    this.publicUserData = user.getPublicUserData();
    this.userLogged = user.getUserLogged();
    if (this.userLogged) {
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
    this.user.getCollections(this.publicUserData.id).subscribe(collections => {
      this.collections = collections;
    });
  }
}
