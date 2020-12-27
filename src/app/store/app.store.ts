import { Action, ActionReducerMap } from "@ngrx/store";
import { UserState } from "./reducers/user.reducer";
import { reducer } from "./reducers/user.reducer"

export interface State {
  userState: UserState;
}

export interface StoreAction<T> extends Action {
  type: string;
  payload: T;
}

export const reducers: ActionReducerMap<State> = {
  userState: reducer
}

export const selectUsername = (state: State) => {
  return state.userState.username;
}

