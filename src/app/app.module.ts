import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {IfNotDirective} from "./directives/if-not.directive";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IfNotDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
