import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SSectionsComponent } from './s-sections.component';

describe('SSectionsComponent', () => {
  let component: SSectionsComponent;
  let fixture: ComponentFixture<SSectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SSectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
