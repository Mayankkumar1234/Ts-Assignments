import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SujectBehaviourSubjectRxjs } from './suject-behaviour-subject-rxjs';

describe('SujectBehaviourSubjectRxjs', () => {
  let component: SujectBehaviourSubjectRxjs;
  let fixture: ComponentFixture<SujectBehaviourSubjectRxjs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SujectBehaviourSubjectRxjs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SujectBehaviourSubjectRxjs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
