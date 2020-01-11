import { Component, OnInit, Input } from '@angular/core';
import { CardData } from 'src/models/card-data.model';

@Component({
  selector: 'app-pxb-card',
  templateUrl: './pxb-card.component.html',
  styleUrls: ['./pxb-card.component.scss']
})
export class PxbCardComponent implements OnInit {
  @Input() cardData: CardData;

  constructor() { }

  ngOnInit() {
  }

  navigateToLocation() {
    // navigate to location
    console.log('navigating...')
  }
}
