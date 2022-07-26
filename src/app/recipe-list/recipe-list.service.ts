import {Recipe} from "../shared/recipe/recipe.model";
import {EventEmitter} from "@angular/core";

export class RecipeListService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Test', 'testing class', 'https://cdn.pixabay.com/photo/2016/02/05/15/34/pasta-1181189_960_720.jpg'),
    new Recipe('Test2', 'testing 2 class', 'https://cdn.pixabay.com/photo/2016/02/05/15/34/pasta-1181189_960_720.jpg')
  ];

  getRecipes() {
    // return a copy, not a direct reference
    return this.recipes.slice();
  }
}
