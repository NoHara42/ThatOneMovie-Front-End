import {StoreAction} from '../app.store';

export enum MoviesActions {
  GET_MOVIES_ACTION = '[Movies] Get movies action',
  GET_MOVIES_SUCCESS_ACTION = '[Movies] Get movies success action'
}

export const getMoviesAction = (): StoreAction<null> =>
  ({ type: MoviesActions.GET_MOVIES_ACTION, payload: null});

export const getMoviesActionSuccess = (movies): StoreAction<Movie[]> =>
  ({ type: MoviesActions.GET_MOVIES_SUCCESS_ACTION, payload: movies });

export interface Movie {
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: string;
}
