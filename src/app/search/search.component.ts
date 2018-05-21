import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ESearchType } from '../Enums/ESearchType';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private router: Router) {
    this.searchForm = this.formBuilder.group({
      'text': [null, Validators.required],
      'type': [null, Validators.required]
    });
  }

  ngOnInit() {
  }
  public search(form: FormGroup): void {
    const type = parseInt(form.value.type, 0);
    this.router.navigate([`/search/${type}/${form.value.text}/24`]);
  }
}
