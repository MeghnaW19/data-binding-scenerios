import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-scenerio5-parent",
  templateUrl: "./scenerio5-parent.component.html",
  styleUrls: ["./scenerio5-parent.component.css"]
})
export class Scenerio5ParentComponent implements OnInit {
  parentMessage: string;
  constructor() {}

  @Output() messageEvent = new EventEmitter<any>();

  ngOnInit() {}

  // receive message from child
  receiveMessage(event) {
    this.parentMessage = event;
    // console.log("parent", this.parentMessage);
    this.messageEvent.emit(this.parentMessage);
  }

  // // send message from parent to grandparent
  // sendMessage() {
  //   this.messageEvent.emit(this.parentMessage);
  // }
}
