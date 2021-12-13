import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MClassRosterComponent } from './m-class-roster.component';

describe('MClassRosterComponent', () => {
  let component: MClassRosterComponent;
  let fixture: ComponentFixture<MClassRosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MClassRosterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MClassRosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
