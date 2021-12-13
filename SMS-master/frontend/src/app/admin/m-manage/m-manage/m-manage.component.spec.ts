import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MManageComponent } from './m-manage.component';

describe('MManageComponent', () => {
  let component: MManageComponent;
  let fixture: ComponentFixture<MManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
