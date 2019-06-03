import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenerio3-parent',
  templateUrl: './scenerio3-parent.component.html',
  styleUrls: ['./scenerio3-parent.component.css']
})
export class Scenerio3ParentComponent implements OnInit {
  parentMessage = "message from parent";
  constructor() { }
  ngOnInit() {
  }

}
