/**
 * Created by raju on 5/6/2017.
 */
import {Ingredient} from '../../shared/ingredient.model';

export class ShoppingListService{
  private ingredients:Ingredient[] =[
    new Ingredient('Apple',5),
    new Ingredient('Banana',5)
  ];
  getIngredients(){
    return this.ingredients;
  }
  addIngredient(newItem:Ingredient){
    this.ingredients.push(newItem);
  }

  addIngredientsFromRecipe(ingredient: Ingredient[]){
    this.ingredients.push(...ingredient);
  }
}
