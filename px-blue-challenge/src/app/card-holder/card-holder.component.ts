import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardData } from '../../models/card-data.model';

@Component({
  selector: 'app-card-holder',
  templateUrl: './card-holder.component.html',
  styleUrls: ['./card-holder.component.scss']
})
export class CardHolderComponent implements OnInit {
  cardData: CardData[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getMockData().subscribe(res => {
      if (res) {
        this.cardData = res;
      }
    });
  }

  getMockData() {
    return this.http.get<CardData[]>('../../assets/mock-data.json');
  }
}
