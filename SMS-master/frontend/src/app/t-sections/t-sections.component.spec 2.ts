import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TSectionsComponent } from './t-sections.component';

describe('TSectionsComponent', () => {
  let component: TSectionsComponent;
  let fixture: ComponentFixture<TSectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TSectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
