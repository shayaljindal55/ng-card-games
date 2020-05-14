import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DeckOfCardsModule } from './features/deck-of-cards/deck-of-cards.module';
import { MaterialModule } from './shared/modules/material.module';
import { DeckOfCardsService } from './features/deck-of-cards/deck-of-cards.service';
import { ClockCardComponent } from './games/clock-card/clock-card.component';
import { AppRoutingModule } from './app-routing.module';
import { ShowCardsComponent } from './games/show-cards/show-cards.component';
import { CountdownComponent } from './features/countdown/countdown.component';
import { CardClockComponent } from './features/card-clock/card-clock.component';
import { DrawCardsService } from './features/deck-of-cards/draw-card.service';
import { CssDesignsComponent } from './features/css-designs/css-designs.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    DeckOfCardsModule
  ],
  declarations: [
    AppComponent,
    ClockCardComponent,
    ShowCardsComponent,
    CountdownComponent,
    CardClockComponent,
    CssDesignsComponent
  ],
  providers: [DeckOfCardsService, DrawCardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
