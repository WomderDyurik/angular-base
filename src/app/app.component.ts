import { Component } from '@angular/core';

export interface Card {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-basis';
  toggle = true

  cards: Card[] = [
    {title: 'card1', text: 'Card number one'},
    {title: 'card2', text: 'Card number two'},
    {title: 'card3', text: 'Card number three'}
  ]

  toggleCards() {
    this.toggle = !this.toggle
  }
}
