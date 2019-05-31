import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Scenerio1Component } from './scenerio1/scenerio1.component';
import { FormsModule } from '@angular/forms';
import { Scenerio2Component } from './scenerio2/scenerio2.component';

@NgModule({
  declarations: [
    AppComponent,
    Scenerio1Component,
    Scenerio2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
