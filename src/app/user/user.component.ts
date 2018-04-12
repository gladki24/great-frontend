import { Component, OnInit } from '@angular/core';
import {UserService} from '../Services/user.service';
import {User} from './user';
import { ICollectionName } from '../Interfaces/ICollectionName';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {DialogService} from '../Services/dialog.service';
import {EDialogType} from '../Enums/EDialogType';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public userDetails: User;
  public collections: ICollectionName[];
  public userForm: FormGroup;
  public newCollectionName: string;
  constructor(private user: UserService,
              private formBuilder: FormBuilder,
              private router: Router,
              private dialog: DialogService) {
    this.userDetails = this.user.getPublicUserData();
    this.userForm = formBuilder.group({
      'name': [null],
      'surname': [null],
      'description': [null]
    });
  }

  ngOnInit() {
    this.getUsersCollections();
  }
  private getUsersCollections(): void {
    this.user.getCollections(this.userDetails.id).subscribe(collections => {
      this.collections = collections;
    });
  }
  public changeUserDetails(form: any, id: string): void {
    this.user.saveUserDetails(form, id).subscribe(res => {
      if (res) {
        // this.userDetails = this.user.;
        this.dialog.showDialog('Zapisano!', EDialogType.Information);
      }
    });
  }
  public logOut(): void {
    this.user.setUserLogout();
    this.router.navigate(['/login']);
    this.dialog.showDialog('Wylogowano', EDialogType.Warning);
  }
  public addCollection(name: string): void {
    this.user.addCollection(name).subscribe(res => {
      this.dialog.showDialog('Dodano', EDialogType.Information);
    }, err => {
      this.dialog.showDialog('Błąd', EDialogType.Error);
    });
  }
}
