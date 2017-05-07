/**
 * Created by raju on 5/6/2017.
 */
import {EventEmitter, Injectable} from '@angular/core';
import {Recipes} from './recipes.model';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{
  recipeSelected = new EventEmitter<Recipes>();
  recipes:Recipes[] =[
    new Recipes(
      'A Test Recipes',
      'This is a simple test',
      "http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg",
      [
        new Ingredient('Meat',1),
        new Ingredient('French fry',2)
      ]),
    new Recipes(
      'Another Test Recipes',
      'This is a Another simple test',
      "http://i.ndtvimg.com/i/2015-01/chicken-chettinad_625x350_61421325483.jpg",
      [
        new Ingredient('Bun',2),
        new Ingredient('MEat',1)
      ])
  ];

  constructor( private slService: ShoppingListService){}

  getRecipe(){
    return this.recipes;
  }

  addToShoppingList(ingredient: Ingredient[]){
    this.slService.addIngredientsFromRecipe(ingredient);
  }

}
