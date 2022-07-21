import { Component, OnInit } from '@angular/core';
import { Recipe } from "../shared/recipe/recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  selectedRecipe: Recipe[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(target: { selectedRecipe: Recipe }) {
    this.selectedRecipe[0] = target.selectedRecipe;
  }

}
