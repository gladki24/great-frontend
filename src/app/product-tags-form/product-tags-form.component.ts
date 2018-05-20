import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {TagService} from '../Services/tag.service';
import {UserService} from '../Services/user.service';
import {DialogService} from '../Services/dialog.service';
import {EDialogType} from '../Enums/EDialogType';

@Component({
  selector: 'app-product-tags-form',
  templateUrl: './product-tags-form.component.html',
  styleUrls: ['./product-tags-form.component.scss']
})
export class ProductTagsFormComponent implements OnInit, OnChanges {
  @Input() productId: string;
  public tags: Array<string>;
  constructor(private service: TagService,
              private user: UserService,
              private dialog: DialogService) { }

  ngOnInit() {
    this.getTags();
  }
  ngOnChanges() {
    this.getTags();
  }
  public getTags(): void {
    this.service.get(this.productId).subscribe(res => {
      this.tags = res;
    });
  }
  public addTag(tag: string): void {
    this.service.add(this.productId, this.user.getUserId(), tag).subscribe(res => {
      if (res) {
        this.dialog.showDialog('Dodano', EDialogType.Information);
        this.getTags();
      }
    }, err => {
      this.dialog.showDialog('Tag już istnieje', EDialogType.Warning);
    });
  }
  public vote(tag: string): void {
    this.service.vote(this.productId, this.user.getUserId(), tag).subscribe(res => {
      if (res) {
        this.dialog.showDialog('Zagłosowano', EDialogType.Information);
        this.getTags();
      }
    }, err => {
      this.dialog.showDialog('Już oddałeś głoś na ten tag', EDialogType.Warning);
    });
  }
}
