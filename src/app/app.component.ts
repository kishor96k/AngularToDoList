import { Component, OnInit } from '@angular/core';
import { CommonService } from './Services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {

  }
  constructor(service: CommonService) { }
  title = 'todo';
}
