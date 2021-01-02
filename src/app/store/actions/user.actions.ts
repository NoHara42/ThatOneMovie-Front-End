import {StoreAction} from '../app.store';

export enum UserActionTypes {
  AUTHENTICATE_USER_ACTION = '[User] Authenticate user action',
  AUTHENTICATE_USER_ACTION_SUCCESS = '[User] Authenticate user action success',
  AUTHENTICATE_USER_ACTION_FAILED = '[User] Authenticate user action failed',
  REGISTER_USER_ACTION = '[User] Register user action',
  REGISTER_USER_ACTION_SUCCESS = '[User] Register user action success',
  REGISTER_USER_ACTION_FAILED = '[User] Register user action failed',
}

export interface UserPayload {
  username: string;
  password: string;
}

export interface UserResponsePayload {
  username: string;
  token: string;
}

export const authenticateUserAction = (userPayload: UserPayload): StoreAction<UserPayload> =>
  ({ type: UserActionTypes.AUTHENTICATE_USER_ACTION, payload: userPayload});

export const authenticateUserActionSuccess = (token: string): StoreAction<string> =>
  ({ type: UserActionTypes.AUTHENTICATE_USER_ACTION_SUCCESS, payload: token });

export const authenticateUserActionFailed = (error: string): StoreAction<string> =>
  ({ type: UserActionTypes.AUTHENTICATE_USER_ACTION_FAILED, payload: error });

export const registerUserAction = (userPayload: UserPayload): StoreAction<UserPayload> =>
  ({ type: UserActionTypes.REGISTER_USER_ACTION, payload: userPayload });

export const registerUserActionSuccess = (responsePayload: UserResponsePayload): StoreAction<UserResponsePayload> =>
  ({ type: UserActionTypes.REGISTER_USER_ACTION_SUCCESS, payload: responsePayload });

export const registerUserActionFailed = (error: string): StoreAction<string> =>
  ({ type: UserActionTypes.REGISTER_USER_ACTION_FAILED, payload: error });
