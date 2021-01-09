import {StoreAction} from '../app.store';

export enum MoviesActions {
  GET_MOVIES_ACTION = '[Movies] Get movies action',
  GET_MOVIES_SUCCESS_ACTION = '[Movies] Get movies success action',
  SET_SORT_CONDITION_ACTION = '[Movies] Set sort condition action'
}

export const getMoviesAction = (): StoreAction<null> =>
  ({ type: MoviesActions.GET_MOVIES_ACTION, payload: null});

export const getMoviesActionSuccess = (movies): StoreAction<Movie[]> =>
  ({ type: MoviesActions.GET_MOVIES_SUCCESS_ACTION, payload: movies });

export const setSortConditionAction = (sortCondition): StoreAction<string> =>
  ({ type: MoviesActions.SET_SORT_CONDITION_ACTION, payload: sortCondition});

export interface Movie {
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: string;
}
