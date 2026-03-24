import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RjsOperator } from './rjs-operator';

describe('RjsOperator', () => {
  let component: RjsOperator;
  let fixture: ComponentFixture<RjsOperator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RjsOperator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RjsOperator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
