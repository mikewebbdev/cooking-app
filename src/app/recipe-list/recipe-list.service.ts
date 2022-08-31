import {Recipe} from "../shared/recipe/recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeListService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Cheeseburger',
      'traditional greasy cheeseburger',
      'https://i.insider.com/56cc3ce2dd0895de048b456b?width=1160',
      [
        new Ingredient('bun', 1),
        new Ingredient('patty', 2),
        new Ingredient('cheese', 2),
        new Ingredient('bacon', 3),
        new Ingredient('salad', 1),
      ]),
    new Recipe(
      'Hotdog',
      'traditional greasy hotdog',
      'https://static.fanpage.it/wp-content/uploads/sites/22/2020/01/hotdog.jpg',
      [
        new Ingredient('roll', 1),
        new Ingredient('sausage', 1),
        new Ingredient('mustard sauce', 1),
        new Ingredient('tomato ketchup', 1)
      ]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes() {
    // return a copy, not a direct reference
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
