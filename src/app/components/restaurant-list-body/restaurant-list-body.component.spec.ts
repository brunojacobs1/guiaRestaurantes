import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantListBodyComponent } from './restaurant-list-body.component';

describe('RestaurantListBodyComponent', () => {
  let component: RestaurantListBodyComponent;
  let fixture: ComponentFixture<RestaurantListBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantListBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantListBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
