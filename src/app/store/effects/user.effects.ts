import {Actions, Effect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {
  authenticateUserActionFailed,
  authenticateUserActionSuccess,
  registerUserActionFailed,
  registerUserActionSuccess,
  UserActionTypes,
  UserPayload
} from '../actions/user.actions';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {StoreAction} from '../app.store';
import {Store} from '@ngrx/store';
import {of} from 'rxjs';
import {MoviesService} from 'src/app/services/movies.service';
import {getMoviesAction, getMoviesActionSuccess, MoviesActions} from '../actions/movies.actions';
import {CriticModeTextActionTypes, getCriticModeTextAction, toggleCriticModeTextActionFalse} from '../actions/criticModeText.actions';
import {CriticModeService} from 'src/app/services/critic-mode.service';

@Injectable()
export class UserEffects {

  constructor(private action$: Actions,
              private store: Store,
              private moviesService: MoviesService,
              private criticModeService: CriticModeService,
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
        tap(() => this.store.dispatch(getMoviesAction())),
        catchError((error) => of(authenticateUserActionFailed(error.error)))
      );
    })
  );

  @Effect()
  socialAuthenticateUser = this.action$.pipe(
    ofType(UserActionTypes.SOCIAL_MEDIA_AUTHENTICATE_USER),
    switchMap((_: StoreAction<null>) => {
      console.log('Social authenticate user');
      this.authService.socialMediaSignIn();
      return of(getMoviesAction());
    })
  );

  @Effect()
  getMovies = this.action$.pipe(ofType(MoviesActions.GET_MOVIES_ACTION),
    switchMap((action: StoreAction<UserPayload>) => {
      return this.moviesService.getMoviesFromBackend().pipe(
        map((response) => {
          console.log('movies effect', action.payload);
          return getMoviesActionSuccess(response);
        })
      );
    })
  );

  @Effect()
  getCriticModeText = this.action$.pipe(ofType(CriticModeTextActionTypes.UPDATE_CRITIC_MODE_TEXT_ACTION),
    switchMap((action: StoreAction<any>) => {
      return this.criticModeService.selectCriticModeText().pipe(
        map((response) => {
          console.log('getcriticmoderecommendations effect', action.payload);
          this.criticModeService.getCriticModeRecommendationsFromBackend(response);
          return getCriticModeTextAction(response);
        }),
        tap(() => this.store.dispatch(toggleCriticModeTextActionFalse()))
      );
    })
  );

  @Effect()
  registerUser = this.action$.pipe(
    ofType(UserActionTypes.REGISTER_USER_ACTION),
    switchMap((action: StoreAction<UserPayload>) => {
      return this.authService.registerUser(action.payload).pipe(
        map((response: any) => registerUserActionSuccess(response)),
        tap(() => this.store.dispatch(getMoviesAction())),
        tap(() => this.router.navigate(['/home'])),
        catchError((error) => of(registerUserActionFailed(error.message)))
      );
    })
  );
}
