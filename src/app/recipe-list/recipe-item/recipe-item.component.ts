import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from "../../shared/recipe/recipe.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<{selectedRecipe: Recipe}>()

  recipes: Recipe[] = [
    new Recipe('Test', 'testing class', 'https://cdn.pixabay.com/photo/2016/02/05/15/34/pasta-1181189_960_720.jpg'),
    new Recipe('Test2', 'testing 2 class', 'https://cdn.pixabay.com/photo/2016/02/05/15/34/pasta-1181189_960_720.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(target: Recipe) {
    this.selectedRecipe.emit({selectedRecipe: target});
  }

}
