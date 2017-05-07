import { Component, OnInit, Input } from '@angular/core';
import {Recipes} from "../recipes.model";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  @Input() recipe: Recipes;
  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
  }
  addIngredientToShoppingList(){
    this.recipeService.addToShoppingList(this.recipe.ingredient);
  }
}
