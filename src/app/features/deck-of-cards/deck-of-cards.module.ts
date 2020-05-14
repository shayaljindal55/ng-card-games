import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../../shared/modules/material.module';
import { DeckOfCardsComponent } from './deck-of-cards.component';
import { FilteringComponent } from './filtering/filtering.component';
import { CardsComponent } from './cards/cards.component';
import { CardComponent } from './cards/card/card.component';
import { CardBlockComponent } from './cards/card-block/card-block.component';
import { DeckCardBlockComponent } from './cards/deck-card-block/deck-card-block.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [DeckOfCardsComponent, FilteringComponent,
    CardsComponent, CardComponent, CardBlockComponent, DeckCardBlockComponent],
  exports: [DeckOfCardsComponent, FilteringComponent,
    CardsComponent, CardComponent, CardBlockComponent, DeckCardBlockComponent],
})
export class DeckOfCardsModule { }
