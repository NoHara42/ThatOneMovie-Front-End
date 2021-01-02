import { Action, ActionReducerMap } from "@ngrx/store";
import { UserState } from "./reducers/user.reducer";
import { CriticModeTextState } from "./reducers/criticModeText.reducer";
import { userReducer } from "./reducers/user.reducer"
import { criticModeTextReducer } from "./reducers/criticModeText.reducer"

export interface State {
  userState: UserState;
  criticModeTextState: CriticModeTextState;
}

export interface StoreAction<T> extends Action {
  type: string;
  payload: T;
}

export const reducers: ActionReducerMap<State> = {
  userState: userReducer,
  criticModeTextState: criticModeTextReducer,
};

export const selectUsername = (state: State) => {
  return state.userState.username;
};

export const selectCriticModeText = (state: State) => {
  return state.criticModeTextState.criticModeText;
};

export const selectError = (state: State) => state.userState.error;

export const selectToken = (state: State) => state.userState.token;
