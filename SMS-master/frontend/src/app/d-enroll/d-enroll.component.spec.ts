import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DEnrollComponent } from './d-enroll.component';

describe('DEnrollComponent', () => {
  let component: DEnrollComponent;
  let fixture: ComponentFixture<DEnrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DEnrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DEnrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
