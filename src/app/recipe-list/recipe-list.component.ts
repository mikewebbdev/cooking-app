import { Component, OnInit } from '@angular/core';
import { Recipe } from "../shared/recipe/recipe.model";
import {RecipeListService} from "./recipe-list.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers: [RecipeListService]
})
export class RecipeListComponent implements OnInit {
  selectedRecipe: Recipe = new Recipe('', '', '');

  constructor(private recipeListService: RecipeListService) { }

  ngOnInit(): void {
    this.recipeListService.recipeSelected
      .subscribe(
        (recipe: Recipe) => {
          this.selectedRecipe = recipe;
        });
  }

}
