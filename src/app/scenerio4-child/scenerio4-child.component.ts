import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-scenerio4-child",
  templateUrl: "./scenerio4-child.component.html",
  styleUrls: ["./scenerio4-child.component.css"]
})
export class Scenerio4ChildComponent implements OnInit {
  title: string = "Passing Data from Child to Parent";
  message: string = "Message from Child";

  constructor() {}

  ngOnInit() {}

  @Output() messageEvent = new EventEmitter<any>();

  sendMessage() {
    // console.log("**", this.messageEvent.emit(this.message));
    this.messageEvent.emit(this.message);
  }
}
