import {ViewEncapsulation, Component} from 'angular2/core';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';


@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.Emulated,
  directives: [MD_CARD_DIRECTIVES],
  styles: [`main {display:flex}; main {flex-flow: row wrap}; main {justify-content: space-around};`],
  templateUrl: 'app/app.html'
})
export class App {
  constructor() {
    console.log('Is it up yet?');
  }
}