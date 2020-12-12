import { Component, OnInit } from '@angular/core';
import Restaurant from 'src/app/types/restaurant';
import isEqual from 'src/app/helpers/comparer';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css'],
})
export class RestaurantListComponent implements OnInit {
  restaurants: Restaurant[] = [];
  newRestExists: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  agregar(newRest: Restaurant) {
    this.restaurants.forEach((rest) => {
      if (isEqual(rest, newRest)) {
        this.newRestExists = true;
      }
    });
    this.newRestExists
      ? window.alert('El restaurante ingresado ya existe en la guía!')
      : this.restaurants.push(newRest);
    console.log(this.restaurants);
    this.newRestExists = false;
  }
}
