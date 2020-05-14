import { Component, OnInit } from '@angular/core';
import { DrawCardsService } from '../deck-of-cards/draw-card.service';

@Component({
  selector: 'app-card-clock',
  templateUrl: './card-clock.component.html',
  styleUrls: ['./card-clock.component.css']
})
export class CardClockComponent implements OnInit {

  constructor(public cardService: DrawCardsService) { }

  ngOnInit() {
  }

  getNewCard() {

  }

}
