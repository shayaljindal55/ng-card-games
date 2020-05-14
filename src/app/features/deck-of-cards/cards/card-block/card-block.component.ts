import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../../../shared/models/card.model';

@Component({
  selector: 'app-card-block',
  templateUrl: './card-block.component.html',
  styleUrls: ['./card-block.component.scss']
})
export class CardBlockComponent implements OnInit {
  @Input() public card: Card;
  constructor() { }
  ngOnInit() {
    let cardClass = '';
    let isDoubleDgt = false;
    if (this.card.name === '10' || this.card.name === '11' ||
      this.card.name === '12' || this.card.name === '13') {
      isDoubleDgt = true;
    } else {
      isDoubleDgt = false;
    }

    if (this.card) {
      if (this.card.suit === 'club' || this.card.suit === 'spade') {
        cardClass = 'black';
      } else {
        cardClass = 'red';
      }
    }
    document.querySelector('.card-name').classList.add(cardClass);

    if (isDoubleDgt) {
      document.querySelector('.card-name').classList.add('double-digit-card');
    } else {
      document.querySelector('.card-name').classList.remove('double-digit-card');
    }
  }
}
