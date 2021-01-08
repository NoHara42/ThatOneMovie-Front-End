import { Action, ActionReducerMap } from "@ngrx/store";
import { UserState } from "./reducers/user.reducer";
import { CriticModeTextState } from "./reducers/criticModeText.reducer";
import { userReducer } from "./reducers/user.reducer"
import { criticModeTextReducer } from "./reducers/criticModeText.reducer"
import { moviesReducer, MoviesState } from "./reducers/movies.reducer";

export interface State {
  userState: UserState;
  moviesState: MoviesState;
  criticModeTextState: CriticModeTextState;
}

export interface StoreAction<T> extends Action {
  type: string;
  payload: T;
}

export const reducers: ActionReducerMap<State> = {
  userState: userReducer,
  criticModeTextState: criticModeTextReducer,
  moviesState: moviesReducer,
};

export const selectUsername = (state: State) => {
  return state.userState.username;
};

export const selectCriticModeText = (state: State) => {
  return state.criticModeTextState.criticModeText;
};

export const selectMovies = (state: State) => {
  return state.moviesState.movies;
};

export const selectError = (state: State) => state.userState.error;

export const selectToken = (state: State) => state.userState.token;

export const selectShowCriticMode = (state: State) => state.criticModeTextState.showCriticMode;
