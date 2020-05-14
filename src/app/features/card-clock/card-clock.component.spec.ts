import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardClockComponent } from './card-clock.component';

describe('CardClockComponent', () => {
  let component: CardClockComponent;
  let fixture: ComponentFixture<CardClockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardClockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
