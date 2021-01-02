import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Router} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {RouteActions} from '../actions/route.actions';
import {switchMap, tap} from 'rxjs/operators';
import {selectToken, StoreAction} from '../app.store';

@Injectable()
export class RouteEffects {

  constructor(private action$: Actions, private router: Router) {
  }
}
