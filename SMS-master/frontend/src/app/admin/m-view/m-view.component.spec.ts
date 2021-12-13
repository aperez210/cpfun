import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MViewComponent } from './m-view.component';

describe('MViewComponent', () => {
  let component: MViewComponent;
  let fixture: ComponentFixture<MViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
