import { Component } from '@angular/core';
import {IfNotDirective} from "./directives/if-not.directive";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hideResults = false;

  toggleResults() {
    this.hideResults = !this.hideResults;
  }

}
