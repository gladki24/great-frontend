import { Component, OnInit } from '@angular/core';
import {UserService} from '../Services/user.service';
import {User} from './user';
import { ICollectionName } from '../Interfaces/ICollectionName';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public userDetails: User;
  public collections: ICollectionName[];
  public saved: Array<string>;
  constructor(private user: UserService) {
    this.userDetails = this.user.getPublicUserData();
  }

  ngOnInit() {
    this.getCollections();
  }
  private getCollections() {
    this.user.getCollections(this.userDetails.id).subscribe(collections => {
      this.collections = collections;
    });
  }
}
