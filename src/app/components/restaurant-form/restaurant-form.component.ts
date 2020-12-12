import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Restaurant from 'src/app/types/restaurant';

@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html',
  styleUrls: ['./restaurant-form.component.css'],
})
export class RestaurantFormComponent implements OnInit {
  @Output() salida = new EventEmitter();
  restaurantName: string;
  restaurantCity: string;
  constructor() {}

  ngOnInit(): void {}
  agregar(restaurant: Restaurant, form: any) {
    if (form.valid) {
      this.salida.emit(restaurant);
      console.log(restaurant);
      this.restaurantName = '';
      this.restaurantCity = '';
    }
  }
}
