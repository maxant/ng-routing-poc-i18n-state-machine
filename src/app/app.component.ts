import { Component } from '@angular/core';
import { MessageService } from './message.service';
import { ROUTE_STATE_MACHINE } from './route-state-machine';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  routeStates = ROUTE_STATE_MACHINE.states;

  constructor(public ms: MessageService){}
}
