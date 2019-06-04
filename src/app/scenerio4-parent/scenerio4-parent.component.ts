import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-scenerio4-parent",
  templateUrl: "./scenerio4-parent.component.html",
  styleUrls: ["./scenerio4-parent.component.css"]
})
export class Scenerio4ParentComponent implements OnInit {
  message: string;
  title: string = "Passing Data from Child to Parent";
  constructor() {}

  ngOnInit() {}

  receiveMessage(event) {
    // console.log(event);
    this.message = event;
  }
}
