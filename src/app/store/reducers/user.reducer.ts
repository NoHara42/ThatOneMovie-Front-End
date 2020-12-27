import {StoreAction} from "../app.store";
import { UserActionTypes } from "./user.actions";

export interface UserState {
  username: String;
}

const INITIAL: UserState = {username: ''};

export function reducer(state = INITIAL, action: StoreAction<any>): UserState {
  switch(action.type) {
    case UserActionTypes.UPDATE_USERNAME_ACTION:
      return {...state, username: action.payload as string}
    default:
      return state;
  }
}

