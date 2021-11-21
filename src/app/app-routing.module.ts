import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouteStateMachine } from './route-state-machine';

@NgModule({
  imports: [RouterModule.forRoot(RouteStateMachine.getRoutes())],
  exports: [RouterModule]
})
export class AppRoutingModule { }
