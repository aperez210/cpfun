import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DViewComponent } from './d-view.component';

describe('DViewComponent', () => {
  let component: DViewComponent;
  let fixture: ComponentFixture<DViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
