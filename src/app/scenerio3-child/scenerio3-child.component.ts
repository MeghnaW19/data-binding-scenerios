import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scenerio3-child',
  templateUrl: './scenerio3-child.component.html',
  styleUrls: ['./scenerio3-child.component.css']
})
export class Scenerio3ChildComponent implements OnInit {
  @Input('parentMessage') childMessage: string;

  constructor() { }

  ngOnInit() {
  }

}
