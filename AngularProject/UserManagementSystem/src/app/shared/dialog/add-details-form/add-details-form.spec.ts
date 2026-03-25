import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDetailsForm } from './add-details-form';

describe('AddDetailsForm', () => {
  let component: AddDetailsForm;
  let fixture: ComponentFixture<AddDetailsForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDetailsForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDetailsForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
