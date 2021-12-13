import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MCreateComponent } from './m-create.component';

describe('MCreateComponent', () => {
  let component: MCreateComponent;
  let fixture: ComponentFixture<MCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
