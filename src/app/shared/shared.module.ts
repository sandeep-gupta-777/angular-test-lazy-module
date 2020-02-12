import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GlobalDirective} from '../global.directive';


@NgModule({
  declarations: [
    GlobalDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GlobalDirective
  ]
})
export class SharedModule {
}
