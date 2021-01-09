import {StoreAction} from '../app.store';
import {Movie, MoviesActions} from '../actions/movies.actions';

export interface MoviesState {
  movies: Movie[];
  sortCriteria: string;
}

const INITIAL: MoviesState = {movies: [], sortCriteria: ''};

export function moviesReducer(state = INITIAL, action: StoreAction<Movie[] | string>): MoviesState {
  switch (action.type) {
    case MoviesActions.GET_MOVIES_SUCCESS_ACTION:
      console.log(action.payload);
      return {...state, movies: action.payload as Movie[]};
    case MoviesActions.SET_SORT_CONDITION_ACTION:
      console.log(action.payload as string);
      return {...state, sortCriteria: (action.payload as string).toLowerCase()};
    default:
      return state;
  }
}

