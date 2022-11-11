import {Component, Input, OnInit} from '@angular/core'
import { Card } from '../app.component'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})


export class CardComponent implements OnInit {

  @Input() card: any
  @Input() index: any

  title: string = 'My Card Title'

  cardDate: Date = new Date()

  textColor: any

  ngOnInit() {
  }

  changeTitle() {
    this.card.title = 'Title has been changed'
  }

  inputHandler(value: any) {
    //const value = event.target.value
    this.title = value
  }

  changeHandler() {
    console.log(this.title)
  }
}
