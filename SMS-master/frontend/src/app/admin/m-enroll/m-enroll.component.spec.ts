import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MEnrollComponent } from './m-enroll.component';

describe('MEnrollComponent', () => {
  let component: MEnrollComponent;
  let fixture: ComponentFixture<MEnrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MEnrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MEnrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
