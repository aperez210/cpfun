import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TAnnouncementsComponent } from './t-announcements.component';

describe('TAnnouncementsComponent', () => {
  let component: TAnnouncementsComponent;
  let fixture: ComponentFixture<TAnnouncementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TAnnouncementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TAnnouncementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
