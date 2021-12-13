import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { STuitionComponent } from './s-tuition.component';

describe('STuitionComponent', () => {
  let component: STuitionComponent;
  let fixture: ComponentFixture<STuitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ STuitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(STuitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
