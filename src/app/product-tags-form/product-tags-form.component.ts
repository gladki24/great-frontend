import {Component, Input, OnChanges, OnInit, OnDestroy} from '@angular/core';
import {TagService} from '../Services/tag.service';
import {UserService} from '../Services/user.service';
import {DialogService} from '../Services/dialog.service';
import {EDialogType} from '../Enums/EDialogType';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-product-tags-form',
  templateUrl: './product-tags-form.component.html',
  styleUrls: ['./product-tags-form.component.scss']
})
export class ProductTagsFormComponent implements OnInit, OnChanges, OnDestroy {
  @Input() productId: string;
  public tags: Array<string>;
  public tagForm: FormGroup;
  private componentDestroy = new Subject<void>();
  constructor(private service: TagService,
              private user: UserService,
              private dialog: DialogService,
              private formBuilder: FormBuilder) {
    this.tagForm = formBuilder.group({
      'tag': [null, Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern(/^[a-z0-9_-]{4,15}$/)
      ])]
    });
  }

  ngOnInit() {
    this.getTags();
  }
  ngOnDestroy() {
    this.componentDestroy.next();
    this.componentDestroy.complete();
  }
  ngOnChanges() {
    this.getTags();
  }
  public getTags(): void {
    this.service.get(this.productId).takeUntil(this.componentDestroy).subscribe(res => {
      this.tags = res;
    });
  }
  public addTag(tag: string): void {
    this.service.add(this.productId, this.user.getUserId(), tag).takeUntil(this.componentDestroy).subscribe(res => {
      if (res) {
        this.dialog.showDialog('Dodano', EDialogType.Information);
        this.getTags();
      }
    }, err => {
      this.dialog.showDialog('Tag już istnieje', EDialogType.Warning);
    });
  }
  public vote(tag: string): void {
    this.service.vote(this.productId, this.user.getUserId(), tag).takeUntil(this.componentDestroy).subscribe(res => {
      if (res) {
        this.dialog.showDialog('Zagłosowano', EDialogType.Information);
        this.getTags();
      }
    }, err => {
      this.dialog.showDialog('Już oddałeś głoś na ten tag', EDialogType.Warning);
    });
  }
}
