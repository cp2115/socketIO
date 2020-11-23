import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
  name: string;
  newMessage: string;
  messageList: string[]=[];

  constructor(private chatService: ChatService) {
  }

  ngOnInit() {
    this.chatService
      .getMessages()
      .subscribe((message: any) => {
        this.messageList.push(message);
      });
  }

  sendMessage() {
    this.chatService.sendMessage({
      name: this.name,
      message: this.newMessage,
    });
    this.newMessage='';
  }

}
