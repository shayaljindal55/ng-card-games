import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCardsComponent } from './show-cards.component';

describe('ShowCardsComponent', () => {
  let component: ShowCardsComponent;
  let fixture: ComponentFixture<ShowCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
