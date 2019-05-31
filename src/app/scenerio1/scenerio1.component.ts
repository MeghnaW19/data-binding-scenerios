import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-scenerio1',
  templateUrl: './scenerio1.component.html',
  styleUrls: ['./scenerio1.component.css']
})
export class Scenerio1Component implements OnInit {
  title= 'Single Component One way via events';

  constructor() { }

  ngOnInit() {
  }

  submit(myform: NgForm) {
    console.log(myform.value.username);
  }
}
