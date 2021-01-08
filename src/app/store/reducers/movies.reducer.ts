import {StoreAction} from '../app.store';
import {Movie, MoviesActions} from '../actions/movies.actions';

export interface MoviesState {
  movies: Movie[];
}

const INITIAL: MoviesState = {movies: []};

export function moviesReducer(state = INITIAL, action: StoreAction<Movie[]>): MoviesState {
  switch (action.type) {
    case MoviesActions.GET_MOVIES_SUCCESS_ACTION:
      console.log(action.payload);
      return {...state, movies: action.payload as Movie[]};
    default:
      return state;
  }
}

