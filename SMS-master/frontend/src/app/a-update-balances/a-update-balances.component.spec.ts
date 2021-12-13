import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AUpdateBalancesComponent } from './a-update-balances.component';

describe('AUpdateBalancesComponent', () => {
  let component: AUpdateBalancesComponent;
  let fixture: ComponentFixture<AUpdateBalancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AUpdateBalancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AUpdateBalancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
