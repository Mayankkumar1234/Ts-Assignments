import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxJsBasics } from './rx-js-basics';

describe('RxJsBasics', () => {
  let component: RxJsBasics;
  let fixture: ComponentFixture<RxJsBasics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxJsBasics]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxJsBasics);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
