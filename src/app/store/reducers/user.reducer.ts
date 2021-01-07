import {StoreAction} from '../app.store';
import {UserActionTypes, UserResponsePayload} from '../actions/user.actions';

export interface UserState {
  username: string;
  token: string;
  error: string;
}

const INITIAL: UserState = {username: '', token: '', error: ''};

export function userReducer(state = INITIAL, action: StoreAction<UserResponsePayload|string>): UserState {
  switch (action.type) {

    case UserActionTypes.REGISTER_USER_ACTION_FAILED:
      const errorRegister = action.payload as string;
      return {...state, error: errorRegister};
    case UserActionTypes.REGISTER_USER_ACTION_SUCCESS:
      const userDataRegister = action.payload as UserResponsePayload;
      return {...state, token: userDataRegister.token, username: userDataRegister.username};

    case UserActionTypes.AUTHENTICATE_USER_ACTION_FAILED:
      console.log('error', action.payload);
      const errorAuthenticate = action.payload as string;
      return {...state, error: errorAuthenticate};
    case UserActionTypes.AUTHENTICATE_USER_ACTION_SUCCESS:
      const userDataSignIn = action.payload as UserResponsePayload;
      console.log('success', action.payload);
      return {...state, username: userDataSignIn.username, token: userDataSignIn.token};

    case UserActionTypes.SOCIAL_MEDIA_AUTHENTICATE_USER_FAILED:
      const errorSocialMedia = action.payload as string;
      return {...state, error: errorSocialMedia};
    case UserActionTypes.SOCIAL_MEDIA_AUTHENTICATE_USER_SUCCESS:
      const userDataSocialMedia = action.payload as UserResponsePayload;
      return {...state, username: userDataSocialMedia.username, token: userDataSocialMedia.token};

    default:
      return state;
  }
}

