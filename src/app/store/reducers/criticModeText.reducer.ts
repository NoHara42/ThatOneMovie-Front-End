import { StoreAction } from "../app.store";
import { CriticModeTextActionTypes } from "../actions/criticModeText.actions";

export interface CriticModeTextState {
  criticModeText: String;
}

const INITIAL: CriticModeTextState = {criticModeText: ''};

export function criticModeTextReducer(state = INITIAL, action: StoreAction<any>): CriticModeTextState {
  switch(action.type) {
    case CriticModeTextActionTypes.UPDATE_CRITIC_MODE_TEXT_ACTION:
      return {...state, criticModeText: action.payload as string}
    default:
      return state;
  }
}

