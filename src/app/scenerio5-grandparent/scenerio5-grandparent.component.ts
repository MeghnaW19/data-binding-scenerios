import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-scenerio5-grandparent",
  templateUrl: "./scenerio5-grandparent.component.html",
  styleUrls: ["./scenerio5-grandparent.component.css"]
})
export class Scenerio5GrandparentComponent implements OnInit {
  grandParentMessage: string;

  constructor() {}

  ngOnInit() {}

  // receive message from child
  receiveMessage(event) {
    console.log(event);
    this.grandParentMessage = event;
  }
}
