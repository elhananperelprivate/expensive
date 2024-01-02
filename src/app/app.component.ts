import { Component } from '@angular/core';
import {IfNotDirective} from "./directives/if-not.directive";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    IfNotDirective
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hideResults = false;

  toggleResults() {
    this.hideResults = !this.hideResults;
  }

}
