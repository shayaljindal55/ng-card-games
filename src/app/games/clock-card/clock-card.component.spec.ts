import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockCardComponent } from './clock-card.component';

describe('ClockCardComponent', () => {
  let component: ClockCardComponent;
  let fixture: ComponentFixture<ClockCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClockCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
