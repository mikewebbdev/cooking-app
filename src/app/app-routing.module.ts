import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipeLandingComponent} from "./recipe-list/recipe-landing/recipe-landing.component";
import {RecipeDetailComponent} from "./recipe-list/recipe-detail/recipe-detail.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipeListComponent , children: [
      { path: '', component: RecipeLandingComponent },
      { path: ':id', component: RecipeDetailComponent }
    ]},
  { path: 'shopping-list', component: ShoppingListComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
