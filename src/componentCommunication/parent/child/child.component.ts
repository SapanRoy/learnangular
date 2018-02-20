import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { DataService } from '../../../shared/data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input()
  messageForChild: string;

  message: string;

  @Output('childtoParentEvent') childtoParentEvent: EventEmitter<string>;
  constructor(
    private dataService: DataService
  ) {
    this.childtoParentEvent = new EventEmitter();
  }
  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => this.message = message);
  }

  sendMessage() {
    this.childtoParentEvent.emit('Message from child.');
  }

}
