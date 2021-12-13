import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DCreateComponent } from './d-create.component';

describe('DCreateComponent', () => {
  let component: DCreateComponent;
  let fixture: ComponentFixture<DCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
