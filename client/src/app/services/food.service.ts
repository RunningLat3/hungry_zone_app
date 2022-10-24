import { Injectable } from '@angular/core';
import { sample_foods, sample_tags } from 'src/data';
import { Food } from '../shared/models/food.model';
import { Tag } from '../shared/models/tag.model';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getAll(): Food[] {
    return sample_foods;
  }

  getAllFoodsBySearchTerm(searhTerm: string) {
    return this.getAll().filter((f) =>
      f.name.toLowerCase().includes(searhTerm.toLowerCase())
    );
  }

  getAllTags(): Tag[] {
    return sample_tags;
  }

  getAllFoodsByTag(tag: string): Food[] {
    return tag === 'All'
      ? this.getAll()
      : this.getAll().filter((f) => f.tags?.includes(tag));
  }

  getFoodById(foodId:string):Food {
    return this.getAll().find(f => f.id === foodId) ?? new Food();
  }
}
