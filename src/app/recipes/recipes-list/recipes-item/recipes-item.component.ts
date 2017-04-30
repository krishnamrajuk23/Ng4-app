import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {Recipes} from "../../recipes.model";

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  @Input() recipe:Recipes;
  @Output() recipeSelceted = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  selectedRecipe(){
    this.recipeSelceted.emit();
  }

}
