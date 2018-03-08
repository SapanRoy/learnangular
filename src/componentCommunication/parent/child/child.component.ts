
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { DataService } from './../../../shared/service/data.service';
import { ChildComponentMethods } from './child.methods';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input()
  messageForChild: string;
  childComponentMethods: ChildComponentMethods;
  message: string;
  additionOutput: number;

  @Output('childtoParentEvent') childtoParentEvent: EventEmitter<string>;
  constructor(
    private dataService: DataService
  ) {
    this.childtoParentEvent = new EventEmitter();
  }
  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => this.message = message);
    this.childComponentMethods = new ChildComponentMethods();
    this.addNumbers();
  }

  sendMessage() {
    this.childtoParentEvent.emit('Message from child.');
  }

  addNumbers() {
    this.additionOutput = this.childComponentMethods.add(4, 2);
  }



}
