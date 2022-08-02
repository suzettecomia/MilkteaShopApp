import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { Food } from 'src/app/models/food.model';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.page.html',
  styleUrls: ['./listing.page.scss'],
})
export class ListingPage implements OnInit {
  categories: Category[] = [];
  foods: Food [] = [];

  constructor( private foodSevice: FoodService) {}

  ngOnInit() {
    this.getCategories();
    this.foods = this.foodSevice.getFoods();
  }
  getCategories() {
    this.categories = [
      {
        id:1,
        label: 'MILK TEA',
        image: 'assets/images/milk_tea.png',
        active:false,
      },
      {
        id:2,
        label: 'ICED COFFEE',
        image: 'assets/images/iced_coffee.png',
        active:false,
      },
      {
        id:3,
        label: 'FRUIT TEA',
        image: 'assets/images/fruit_tea.png',
        active:false,
      },
    ]
  }
}
