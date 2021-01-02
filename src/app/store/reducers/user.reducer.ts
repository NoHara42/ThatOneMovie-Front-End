import {StoreAction} from '../app.store';
import {UserActionTypes, UserResponsePayload} from '../actions/user.actions';

export interface UserState {
  username: string;
  token: string;
}

const INITIAL: UserState = {username: '', token: ''};

export function userReducer(state = INITIAL, action: StoreAction<UserResponsePayload>): UserState {
  switch (action.type) {
    case UserActionTypes.REGISTER_USER_ACTION_SUCCESS:
      console.log(action.payload);
      return {...state, token: action.payload.token, username: action.payload.username};
    default:
      return state;
  }
}

