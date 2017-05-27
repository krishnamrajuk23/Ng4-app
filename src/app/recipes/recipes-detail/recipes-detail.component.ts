import { Component, OnInit, Input } from '@angular/core';
import {Recipes} from "../recipes.model";
import {RecipeService} from "../recipe.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  recipe: Recipes;
  id:number;
  constructor(private recipeService:RecipeService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (param:Params) => {
        this.id = param['id'];
        this.recipe = this.recipeService.getRecipeDetails(this.id);
      }
    )
  }
  addIngredientToShoppingList(){
    this.recipeService.addToShoppingList(this.recipe.ingredient);
  }

  editRecipe(){
    this.router.navigate(['edit'],{relativeTo:this.route});
    //this.router.navigate(['../',this.id,'edit'],{relativeTo:this.route});
  }
}
