/**
 * Created by raju on 4/8/2017.
 */
import {Ingredient} from "../../shared/ingredient.model";
export class Recipes{
  constructor(public name:string, public description:string, public imagePath:string, public ingredient:Ingredient[]){
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredient = ingredient;
  }
}
