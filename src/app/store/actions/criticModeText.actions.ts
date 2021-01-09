import {StoreAction} from '../app.store';

export enum CriticModeTextActionTypes {
  TOGGLE_CRITIC_MODE_TEXT_ACTION_TRUE = '[CriticModeText] Toggle criticModeText Action true',
  TOGGLE_CRITIC_MODE_TEXT_ACTION_FALSE = '[CriticModeText] Toggle criticModeText Action false',
  UPDATE_CRITIC_MODE_TEXT_ACTION = '[CriticModeText] Update criticModeText Action',
  GET_CRITIC_MODE_TEXT_ACTION = '[CriticModeText] Get criticModeText Action'
}

export const updateCriticModeTextAction = (criticModeText: string): StoreAction<string> => {
  return {
    type: CriticModeTextActionTypes.UPDATE_CRITIC_MODE_TEXT_ACTION,
    payload: criticModeText,
  };
};

export const getCriticModeTextAction = (criticModeText): StoreAction<string> => {
  return {
    type: CriticModeTextActionTypes.GET_CRITIC_MODE_TEXT_ACTION,
    payload: criticModeText,
  };
};

export const toggleCriticModeTextActionTrue = (): StoreAction<boolean> => {
  return {
    type: CriticModeTextActionTypes.TOGGLE_CRITIC_MODE_TEXT_ACTION_TRUE,
    payload: true
  };
};

export const toggleCriticModeTextActionFalse = (): StoreAction<boolean> => {
  return {
    type: CriticModeTextActionTypes.TOGGLE_CRITIC_MODE_TEXT_ACTION_FALSE,
    payload: false
  };
};
