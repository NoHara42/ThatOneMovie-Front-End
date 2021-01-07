import { StoreAction } from '../app.store';
import { MoviesActions } from '../actions/movies.actions';

export interface MoviesState {
  movies: Array<any>;
}

const INITIAL: MoviesState = {movies: []};

export function moviesReducer(state = INITIAL, action: StoreAction<MoviesActions>): MoviesState {
  switch (action.type) {
    case MoviesActions.MOVIES_SUCCESS_ACTION:
      console.log(action.payload);
      return {...state, movies: action.payload as any};
    default:
      return state;
  }
}

