import { StoreAction } from '../app.store';
import { CriticModeTextActionTypes } from '../actions/criticModeText.actions';

export interface CriticModeTextState {
  criticModeText: string;
  showCriticMode: boolean;
}

const INITIAL: CriticModeTextState = {
  criticModeText: '',
  showCriticMode: false,
};

export function criticModeTextReducer(state = INITIAL, action: StoreAction<boolean | string>): CriticModeTextState {
  switch (action.type) {
    case CriticModeTextActionTypes.TOGGLE_CRITIC_MODE_TEXT_ACTION_TRUE:
      return {...state, showCriticMode: action.payload as boolean};
    case CriticModeTextActionTypes.TOGGLE_CRITIC_MODE_TEXT_ACTION_FALSE:
      return {...state, showCriticMode: action.payload as boolean};
    case CriticModeTextActionTypes.UPDATE_CRITIC_MODE_TEXT_ACTION:
      return {...state, criticModeText: action.payload as string};
    default:
      return state;
  }
}

