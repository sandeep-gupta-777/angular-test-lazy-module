import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LazyComponent} from './lazy.component';
import {Route, RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';

const routes: Route[] = [
  {path: '', component: LazyComponent}
];

@NgModule({
  declarations: [LazyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class LazyModule {
}
