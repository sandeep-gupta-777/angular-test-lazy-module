import {Directive, Input} from '@angular/core';

@Directive({
  selector: '[appGlobal]'
})
export class GlobalDirective {
  @Input() test = false;

  constructor() {
  }

}
