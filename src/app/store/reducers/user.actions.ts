import { StoreAction } from "../app.store"

export enum UserActionTypes {
  UPDATE_USERNAME_ACTION = "[User] Update username Action",
}

export const updateUserNameAction = (username: string): StoreAction<string> => {
  return {
    type: UserActionTypes.UPDATE_USERNAME_ACTION,
    payload: username,
  }
}
