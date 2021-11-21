# NgRoutingPocI18nStateMachine

This is a proof of concept showing how to use a state machine to manage route transitions, with the added complexity of them being internationalised
(german and french). See primarily
[route-state-machine.ts](./src/app/route-state-machine.ts) 
and
[route-transition.guard.ts](./src/app/route-transition.guard.ts) 
.

## Initial Installation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.12.

Based on https://angular.io/guide/router

    ng new ng-routing-poc-i18n-state-machine --routing --defaults
    ng generate component first
    ng generate component second
    ng generate component third
    ng generate service message

    # create a guard, and select CanActivate:
    ng generate guard route-transition

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
