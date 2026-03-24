import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFroms } from './template-driven-froms';

describe('TemplateDrivenFroms', () => {
  let component: TemplateDrivenFroms;
  let fixture: ComponentFixture<TemplateDrivenFroms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateDrivenFroms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDrivenFroms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
