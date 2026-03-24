import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputDecorator } from './input-output-decorator';

describe('InputOutputDecorator', () => {
  let component: InputOutputDecorator;
  let fixture: ComponentFixture<InputOutputDecorator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputOutputDecorator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputOutputDecorator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
