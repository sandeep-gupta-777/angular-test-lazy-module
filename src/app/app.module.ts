import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {Route, RouterModule} from '@angular/router';
import {SharedModule} from './shared/shared.module';

const routes: Route[] = [
  {path: '', loadChildren: './lazy/lazy.module#LazyModule',}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    SharedModule
  ],
  providers: [],
  exports: [
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
