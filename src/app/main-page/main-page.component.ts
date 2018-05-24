import {Component, OnInit, OnDestroy} from '@angular/core';
import {MainPageService} from '../Services/main-page.service';
import {ISmallTile} from '../Interfaces/IDetails';
import {UserService} from '../Services/user.service';
import {User} from '../user/user';
import {ICollectionName} from '../Interfaces/ICollectionName';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnDestroy {
  public brands: ISmallTile[];
  public categories: ISmallTile[];
  public userLogged: boolean;
  public collections: ICollectionName[];
  public userDetails: User;
  private destroyComponent = new Subject<void>();
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
  ngOnDestroy() {
    this.destroyComponent.next();
    this.destroyComponent.complete();
  }
  getBrands(): void {
    this.service.getBrands().takeUntil(this.destroyComponent).subscribe(brands => {
      this.brands = brands;
    });
  }
  getCategories(): void {
    this.service.getCategories().takeUntil(this.destroyComponent).subscribe(categories => {
      this.categories = categories;
    });
  }
  getCollections(): void {
    this.user.getUserCollections(this.user.getUserId()).takeUntil(this.destroyComponent).subscribe(collections => {
      this.collections = collections;
    });
  }
  getUserDetails(): void {
    this.user.getUserDetails().takeUntil(this.destroyComponent).subscribe(details => {
      this.userDetails = details;
    });
  }
}
