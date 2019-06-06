import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-scenerio5-child",
  templateUrl: "./scenerio5-child.component.html",
  styleUrls: ["./scenerio5-child.component.css"]
})
export class Scenerio5ChildComponent implements OnInit {
  childMessage: string = "Message from child to Grandparent";
  constructor() {}
  ngOnInit() {}

  @Output() messageEvent = new EventEmitter<any>();

  // send message from child to parent
  sendMessage() {
    this.messageEvent.emit(this.childMessage);
  }
}
