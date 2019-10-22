import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatbookinglistComponent } from './seatbookinglist.component';

describe('SeatbookinglistComponent', () => {
  let component: SeatbookinglistComponent;
  let fixture: ComponentFixture<SeatbookinglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatbookinglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatbookinglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
