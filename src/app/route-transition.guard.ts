import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, NavigationEnd, Route, Router, RouterStateSnapshot, Routes, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { I18Nable } from './i18nable';
import { MessageService } from './message.service';
import { filter } from "rxjs/operators"
import { ROUTE_STATE_MACHINE, RouteState } from './route-state-machine';

@Injectable({
  providedIn: 'root'
})
export class RouteTransitionGuard implements CanActivate {

  public lastRoute?: RouteState;

  constructor(
    private messages: MessageService,
    router: Router
  ) {
    router.events
      .pipe(
        filter((event: any) => event instanceof NavigationEnd)
      )
      .subscribe(event => {
          console.log("now at route " + event.urlAfterRedirects);
      });
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    this.messages.clear();
    var nextRoute = ROUTE_STATE_MACHINE.getStateByComponent(route.routeConfig?.component);

    var ok = ROUTE_STATE_MACHINE.isValidTransition(this.lastRoute, nextRoute)
    if(!ok) {
      this.messages.add(`${new Date().toISOString().substr(0,23)} Illegal transition from ${this.lastRoute?.key} to ${nextRoute?.key}`)
    } else {
      this.lastRoute = nextRoute;
    }

    this.changeLanguageIfNavigatingToTheSameComponent(route, this.lastRoute, nextRoute)

    return ok;
  }

  changeLanguageIfNavigatingToTheSameComponent(route: ActivatedRouteSnapshot, lastRoute: RouteState | undefined, nextRoute: RouteState | undefined) {
    if(nextRoute == this.lastRoute) {
      if(ROUTE_STATE_MACHINE.states.some(s => s.de == route.routeConfig?.path)) {
        I18Nable.activateDe()
      } else {
        I18Nable.activateFr()
      }
    }
  }

}
