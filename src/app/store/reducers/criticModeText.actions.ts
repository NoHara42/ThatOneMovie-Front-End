import { StoreAction } from "../app.store"

export enum CriticModeTextActionTypes {
  UPDATE_CRITIC_MODE_TEXT_ACTION = "[CriticModeText] Update criticModeText Action",
}

export const updateCriticModeTextAction = (criticModeText: string): StoreAction<string> => {
  return {
    type: CriticModeTextActionTypes.UPDATE_CRITIC_MODE_TEXT_ACTION,
    payload: criticModeText,
  }
}
