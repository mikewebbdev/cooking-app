import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../../shared/recipe/recipe.model";
import {RecipeListService} from "../recipe-list.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // @ts-ignore
  @Input('selectedRecipe') selectedRecipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

}
