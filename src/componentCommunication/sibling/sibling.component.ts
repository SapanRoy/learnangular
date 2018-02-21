import { Component, OnInit } from '@angular/core';
import { DataService } from './../../shared/service/data.service';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent implements OnInit {
  message: string;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => this.message = message);
  }
  sendMessage() {
    this.dataService.changeMessage('Hello from sibling.');
  }
}
