import {StoreAction} from '../app.store';

export enum MoviesActions {
  MOVIES_SUCCESS_ACTION = '[Movies] Movies get action'
}

export const moviesGetAction = (movies): StoreAction<Movies> =>
  ({ type: MoviesActions.MOVIES_SUCCESS_ACTION, payload: movies });


export interface Movies {
  movies: any;
}
