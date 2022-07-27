import {Recipe} from "../shared/recipe/recipe.model";
import {EventEmitter} from "@angular/core";
import {Ingredient} from "../shared/ingredient/ingredient.model";

export class RecipeListService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Cheeseburger',
      'traditional greasy cheeseburger',
      'https://cdn.pixabay.com/photo/2016/03/05/22/55/barbeque-1239407_960_720.jpg',
      [
        new Ingredient('bun', 1),
        new Ingredient('patty', 1),
        new Ingredient('cheese', 1),
        new Ingredient('tomato', 1),
        new Ingredient('pickle', 1),
        new Ingredient('onion', 1),
      ]),
  ];

  getRecipes() {
    // return a copy, not a direct reference
    return this.recipes.slice();
  }
}
