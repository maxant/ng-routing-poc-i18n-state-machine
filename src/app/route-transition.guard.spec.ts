import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

import { RouteTransitionGuard } from './route-transition.guard';

describe('RouteTransitionGuard', () => {
  let guard: RouteTransitionGuard;

  beforeEach(() => {
    let router = {
      events: {
        pipe(a: any): Observable<any> {
          return new Subject()
        }
      }
    };

    TestBed.configureTestingModule({
      providers: [{ provide: Router, useValue: router }]
    });
    guard = TestBed.inject(RouteTransitionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
