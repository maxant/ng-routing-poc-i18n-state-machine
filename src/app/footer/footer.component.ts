import { Component, Input, OnInit } from '@angular/core';
import { I18Nable } from '../i18nable';
import { RouteState, RouteStateMachine, ROUTE_STATE_MACHINE } from '../route-state-machine';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent extends I18Nable implements OnInit {

  @Input()
  parent: any;

  ngOnInit(): void {
  }

  private getParentComponent(): any {
    return ROUTE_STATE_MACHINE.getStateByName(this.parent.constructor.name)?.component
  }

  getLinkForLanguage(lang: string) {
    let parentComponent = this.getParentComponent();
    let state = ROUTE_STATE_MACHINE.states.find(t =>
      t.component == parentComponent
    );
    return state!![lang as keyof RouteState]
  }

  getNext(lang: string) {
    let parentComponent = this.getParentComponent();
    let transition = ROUTE_STATE_MACHINE.transitions.find(t =>
      t.from.component == parentComponent
    );
    return transition?.to[lang as keyof RouteState]
  }

  hasNext(): boolean {
    return this.getNext("de") != undefined
  }

  getPrevious(lang: string) {
    let parentComponent = this.getParentComponent();
    let transition = ROUTE_STATE_MACHINE.transitions.find(t =>
      t.to.component == parentComponent
    );
    return transition?.from[lang as keyof RouteState]
  }

  hasPrevious(): boolean {
    return this.getPrevious("de") != undefined
  }
}
