import {EventEmitter, Injectable} from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {config} from 'rxjs';

declare const io: any;

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  url = 'https://imi-bot-middleware.herokuapp.com'; //http://localhost:3000
  // url = 'http://localhost:3000';

  constructor() {
    let config;
    try {
      config = JSON.parse(localStorage.getItem('config'));
      if (config) {
        ChatService.config = config;
      }
    } catch (e) {
      console.log(e);
    }
    document.cookie = `imi_bot_middleware_token=${ChatService.config.imi_bot_middleware_token}`;
    this.socket1 = io(this.url, {query: `data=${JSON.stringify(ChatService.config)}`});
    this.socket1.on('connect', function() {
      console.log('Client has connected to the server!');
    });
    // Add a disconnect listener
    this.socket1.on('disconnect', function() {
      console.log('The client has disconnected!');
    });

    this.socket1.on('error', function() {
      console.log('The client has error!');
    });
    this.init();
  }

  static config = {
    connectionConfig: {
      namespace: 'BOT',
      enterprise_id: '50',
    },
    // tslint:disable-next-line:max-line-length
    imi_bot_middleware_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjoiVGhpcyBpcyBJTUkgQk9UIG1pZGRsZXdhcmUiLCJpYXQiOjE1Njc4ODc5MTAsImV4cCI6NDE1OTg4NzkxMH0.dYbMaf8HYMD5K532p7DpHN0cmru-JKMjst-WS9zi7u8'
  };
  socket1;
  socketEvent$ = new EventEmitter();

  sendChat(message) {
    // this.socket.emit('chat', message);
    this.socket1.emit('chat', {message, options: {broadcast: true}});
  }

  init() {
    this.socket1.on('chat', (data) => {
    console.log("event chat");
      this.socketEvent$.emit({event: 'chat', payload: data});
    });
    this.socket1.on('users', (data) => {
      this.socketEvent$.emit({event: 'data', payload: data});
    });
  }

  getUsers() {
    // return this.socket.fromEvent('users');
  }

}
