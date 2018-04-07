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
    this.getCollections();
  }
  private getCollections() {
    this.user.getCollections(this.userDetails.id).subscribe(collections => {
      this.collections = collections;
    });
  }
  public changeUserDetails(form: any, id: string) {
    this.user.saveUserDetails(form, id).subscribe(res => {
      if (res) {
        this.router.navigate(['user']);
        this.dialog.showDialog('Zapisano!', EDialogType.Information);
      }
    });
  }
}
