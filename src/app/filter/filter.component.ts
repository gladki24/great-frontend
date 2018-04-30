import { Component, OnInit } from '@angular/core';
import {ISmallTile} from '../Interfaces/IDetails';
import {MainPageService} from '../Services/main-page.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  public categoryList: ISmallTile[];
  public brandList: ISmallTile[];
  public filterForm: FormGroup;
  public params: any;
  constructor(private mainPageService: MainPageService,
              private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) {
    this.filterForm = this.formBuilder.group({
      category: [null, Validators.required],
      brand: [null, Validators.required],
      number: [null, Validators.required]
    });
  }

  ngOnInit() {
    this.getParams();
    this.getCategories();
    this.getBrands();
  }
  private getCategories(): void {
    this.mainPageService.getCategories().subscribe(categories => {
      this.categoryList = categories;
    });
  }
  private getBrands(): void {
    this.mainPageService.getBrands().subscribe(brands => {
      this.brandList = brands;
    });
  }
  private getParams(): void {
    this.route.params.subscribe(params => {
      this.params = params;
    });
  }
  public filter(form: any) {
    this.router.navigate([`/explore/${form.brand}/${form.category}/${form.number}`]);
  }
}
