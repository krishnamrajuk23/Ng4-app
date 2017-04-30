/**
 * Created by raju on 4/30/2017.
 */
import {Directive, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector:'[appDropDown]'
})
export class DropDownDirective{
  @HostBinding('class.open') isOpen: boolean = false;
  @HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen;
  }
}
