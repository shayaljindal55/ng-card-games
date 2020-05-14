import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckCardBlockComponent } from './deck-card-block.component';

describe('DeckCardBlockComponent', () => {
  let component: DeckCardBlockComponent;
  let fixture: ComponentFixture<DeckCardBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeckCardBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckCardBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
