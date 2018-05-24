import { Component, OnInit, OnDestroy } from '@angular/core';
import {ISmallTile} from '../Interfaces/IDetails';
import {MainPageService} from '../Services/main-page.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/add/operator/takeUntil';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit, OnDestroy {
  public categoryList: ISmallTile[];
  public brandList: ISmallTile[];
  public filterForm: FormGroup;
  public params: any;
  private destroyComponent = new Subject<void>();
  constructor(private mainPageService: MainPageService,
              private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) {
    this.filterForm = this.formBuilder.group({
      category: [null],
      brand: [null],
      number: [null, Validators.required]
    });
  }

  ngOnInit() {
    this.getParams();
    this.getCategories();
    this.getBrands();
  }
  ngOnDestroy() {
    this.destroyComponent.next();
    this.destroyComponent.complete();
  }
  private getCategories(): void {
    this.mainPageService.getCategories().takeUntil(this.destroyComponent).subscribe(categories => {
      this.categoryList = categories;
    });
  }
  private getBrands(): void {
    this.mainPageService.getBrands().takeUntil(this.destroyComponent).subscribe(brands => {
      this.brandList = brands;
    });
  }
  private getParams(): void {
    this.route.params.takeUntil(this.destroyComponent).subscribe(params => {
      this.params = params;
    });
  }
  public filter(form: any) {
    this.router.navigate([`/explore/${form.brand}/${form.category}/${form.number}`]);
  }
}
