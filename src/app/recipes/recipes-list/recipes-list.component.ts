import { Component, OnInit } from '@angular/core';
import {Recipes} from "../recipes.model";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes:Recipes[] =[
    new Recipes('A Test Recipes','This is a simple test',"http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

}
