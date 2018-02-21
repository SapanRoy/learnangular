import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/service/data.service';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  messageFromChild: string;
  parentMessage: string;
  message: string;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => this.message = message);
  }
  sendMessage() {
    this.parentMessage = 'Message from parent.';
  }
  childtoParentEventHandler(message: string) {
    this.messageFromChild = message;
  }
}
