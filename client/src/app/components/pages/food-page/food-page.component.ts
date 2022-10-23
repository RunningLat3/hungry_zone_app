import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/shared/models/food';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css'],
})
export class FoodPageComponent implements OnInit {
  food!: Food;
  constructor(activatedRoute: ActivatedRoute, foodService: FoodService) {
    activatedRoute.params.subscribe((params) => {
      if (params['id']) this.food = foodService.getFoodById(params['id']);
    });
  }

  ngOnInit(): void {}
}
