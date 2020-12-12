import { Component, Input, OnInit } from '@angular/core';
import Restaurant from 'src/app/types/restaurant';

@Component({
  selector: 'app-restaurant-list-body',
  templateUrl: './restaurant-list-body.component.html',
  styleUrls: ['./restaurant-list-body.component.css']
})
export class RestaurantListBodyComponent implements OnInit {
  @Input() restaurants: Restaurant[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
