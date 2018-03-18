import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTagsFormComponent } from './product-tags-form.component';

describe('ProductTagsFormComponent', () => {
  let component: ProductTagsFormComponent;
  let fixture: ComponentFixture<ProductTagsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTagsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTagsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
