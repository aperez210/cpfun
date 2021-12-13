import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AViewBalancesComponent } from './a-view-balances.component';

describe('AViewBalancesComponent', () => {
  let component: AViewBalancesComponent;
  let fixture: ComponentFixture<AViewBalancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AViewBalancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AViewBalancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
