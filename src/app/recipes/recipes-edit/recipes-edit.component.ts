/**
 * Created by raju on 5/27/2017.
 */
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
@Component({
  selector:'app-recipes-edit',
  templateUrl:'recipes-edit.component.html'
})

export class RecipesEditComponent implements OnInit{
  id:number;
  editMode = false;
  constructor(private route:ActivatedRoute){}

  ngOnInit(){
    this.route.params.subscribe(
      (param:Params) => {
        this.id = param['id'];
        this.editMode = this.id != null;
      }
    )
  }
}
