import {Component, Input, OnInit} from '@angular/core';
import {TagService} from '../Services/tag.service';
import {UserService} from '../Services/user.service';

@Component({
  selector: 'app-product-tags-form',
  templateUrl: './product-tags-form.component.html',
  styleUrls: ['./product-tags-form.component.scss']
})
export class ProductTagsFormComponent implements OnInit {
  @Input() productId: string;
  public tags: Array<string>;
  constructor(private service: TagService,
              private user: UserService) { }

  ngOnInit() {
    this.getTags();
  }
  public getTags(): void {
    this.service.get(this.productId).subscribe(res => {
      console.log(res);
      this.tags = res;
    });
  }
  public addTag(tag: string): void {
    console.log(tag);
    this.service.add(this.productId, this.user.getUserId(), tag).subscribe(res => {
      if (res) {
        console.log('hi1');
      }
    });
  }
}
