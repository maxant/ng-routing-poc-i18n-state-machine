import { Route, Routes } from "@angular/router";
import { RouteTransitionGuard } from "./route-transition.guard";
import { FirstComponent } from "./first/first.component";
import { SecondComponent } from "./second/second.component";
import { ThirdComponent } from "./third/third.component";

/** effectively a page in the wizard, consisting of a key and then routes in each supported language */
export class RouteState {
  constructor(public key: string, public de: string, public fr: string, public component: any) {}

  getRoute(lang: string): string {
    return this[lang as keyof RouteState]
  }
}

/** represents a legal transition from one page to another */
class RouteTransition {
  constructor(public from: RouteState, public to: RouteState) {}
}

/** the state machine contains functionality, and is based on the model passed into the constructor */
export class RouteStateMachine {

  constructor(public states: RouteState[], public transitions: RouteTransition[]) {}

  isValidTransition(from?: RouteState, to?: RouteState): boolean {
    return from == undefined // initial
      || this.transitions.some(t => t.to == to && t.from == from) // forwards
      || this.transitions.some(t => t.to == from && t.from == to) // backwards
      || from.component == to?.component // when changing languages
  }

  // static, so that it can be used in imports section of the NgModule annotation in AppRoutingModule
  public static getRoutes(): Routes {

    // create a Route object per language and RouteState (page; see bottom of this file)
    // then flatten it and add a redirect

    const routes = ROUTE_STATE_MACHINE.states.map(s => {
      return ["de", "fr"].map( lang => {
        var path = s[lang as keyof RouteState];

        // the following is what you normally add to your app-routing.module.ts
        return {
          path,
          component: s.component,
          canActivate: [RouteTransitionGuard]
        } as Route;
      });
    }).flat();
    routes.push({ path: '',   redirectTo: '/' + FIRST.de, pathMatch: 'full' }) // redirect, with default in german
    return routes;
  }

  getStateByComponent(component: any): RouteState | undefined {
    return this.states.find(s => s.component == component)
  }

  getStateByName(name: string): RouteState | undefined {
    return this.states.find(s => s.component.name == name)
  }
}

//
// here we define the legitimate state (page) transitions
//
const FIRST = new RouteState('first', 'erste', 'premiere', FirstComponent);
const SECOND = new RouteState('second', 'zweite', 'deuxieme', SecondComponent);
const THIRD = new RouteState('third', 'dritte', 'troisieme', ThirdComponent);

/**
 * here we define the legitimate state (page) transitions.
 *
 * TODO probably want to make this injectable
 */
export const ROUTE_STATE_MACHINE: RouteStateMachine = new RouteStateMachine(
  [FIRST, SECOND, THIRD],
  [
    // transitions - only define the ones in the forward direction, the state machine allows backward transitions too
    new RouteTransition(FIRST, SECOND),
    new RouteTransition(SECOND, THIRD),
  ]
)
