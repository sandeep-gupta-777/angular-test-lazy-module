import {Component, OnInit} from '@angular/core';
import {ChatService} from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public users: number = 0;
  public message: string = '';
  public messages: string[] = [];
  config = JSON.stringify(ChatService.config, null, '\t');

  constructor(private chatService: ChatService) {

  }

  ngOnInit() {
    // tslint:disable-next-line:max-line-length
    this.chatService.socketEvent$.subscribe((data) => {
    debugger;
      const payload = data.payload;
      if (data.event === 'users') {
        this.users = payload;
      }
      if (data.event === 'chat') {
        this.messages.push(payload);
      }
    });

  }

  addChat() {
    this.messages.push(this.message);
    this.chatService.sendChat(this.message);
    this.message = '';
  }

  saveInLC(str) {
    try {
      JSON.parse(str);
      localStorage.setItem('config', str);
      location.reload();
    } catch (e) {
      console.log('json is invalid');
    }
  }

}
