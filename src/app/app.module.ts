import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SocketIoConfig, SocketIoModule} from 'ngx-socket-io';
import {FormsModule} from '@angular/forms';

// const config: SocketIoConfig = {url: 'http://localhost:3000', options: {query: 'param1=value1&param2=value2'}};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // SocketIoModule.forRoot(config),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
