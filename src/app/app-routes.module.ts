import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipesComponent} from "./recipes/recipes.component";
import {RecipeStartComponent} from "./recipes/recipe-start/recipe-start.component";
import {RecipesDetailComponent} from "./recipes/recipes-detail/recipes-detail.component";
import {RecipesEditComponent} from "./recipes/recipes-edit/recipes-edit.component";

const appRoutes: Routes =[
  {path:'recipes',component:RecipesComponent, children:[
    {path:'',component:RecipeStartComponent},
    {path:'new',component:RecipesEditComponent},
    {path:':id',component:RecipesDetailComponent},
    {path:':id/edit',component:RecipesEditComponent},

  ]},
  {path:'shopping-list',component:ShoppingListComponent},
  {path:'', redirectTo:'/recipes', pathMatch:'full'}
];

@NgModule ({
  imports:[RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})

export class AppRoutingModule{

}
