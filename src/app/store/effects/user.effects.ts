import {Actions, Effect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {
  authenticateUserActionFailed,
  authenticateUserActionSuccess,
  registerUserActionFailed,
  registerUserActionSuccess, socialMediaAuthenticateUserFailedAction, socialMediaAuthenticateUserSuccessAction,
  UserActionTypes,
  UserPayload
} from '../actions/user.actions';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {StoreAction} from '../app.store';
import {Store} from '@ngrx/store';
import {of} from 'rxjs';

@Injectable()
export class UserEffects {

  constructor(private action$: Actions,
              private store: Store,
              private authService: AuthService,
              private router: Router) {
  }

  @Effect()
  authenticateUser = this.action$.pipe(
    ofType(UserActionTypes.AUTHENTICATE_USER_ACTION),
    switchMap((action: StoreAction<UserPayload>) => {
      return this.authService.authenticateUser(action.payload).pipe(
        map(response => authenticateUserActionSuccess(response)),
        tap(() => this.router.navigate(['/home'])),
        catchError((error) => of(authenticateUserActionFailed(error.error)))
      );
    })
  );

  @Effect()
  registerUser = this.action$.pipe(
    ofType(UserActionTypes.REGISTER_USER_ACTION),
    switchMap((action: StoreAction<UserPayload>) => {
      return this.authService.registerUser(action.payload).pipe(
        map((response: any) => registerUserActionSuccess(response)),
        tap(() => this.router.navigate(['/home'])),
        catchError((error) => of(registerUserActionFailed(error.message)))
      );
    })
  );
}
