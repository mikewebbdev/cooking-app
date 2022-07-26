import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from "../../shared/recipe/recipe.model";
import {RecipeListService} from "../recipe-list.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<{selectedRecipe: Recipe}>()

  recipes: Recipe[] = this.recipeListService.getRecipes();

  constructor(private recipeListService: RecipeListService) { }

  ngOnInit(): void {
  }

  onSelect(target: Recipe) {
    this.recipeListService.recipeSelected.emit(target);
  }

}
