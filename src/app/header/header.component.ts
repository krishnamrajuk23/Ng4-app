/**
 * Created by raju on 4/8/2017.
 */
import {Component,EventEmitter,Output} from "@angular/core";

@Component({
  "selector":"app-header",
  "templateUrl":"./header.component.html"
})
export class HeaderComponent{
  @Output() itemLoaded = new EventEmitter();
  getLoadedItem(value){
    this.itemLoaded.emit(value);
  }
}
