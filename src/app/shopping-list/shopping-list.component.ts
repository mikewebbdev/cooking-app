import { Component, OnInit } from '@angular/core';
import { Ingredient } from "../shared/ingredient/ingredient.model";
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = this.shoppingListService.getIngredients();

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      });
  }
}
