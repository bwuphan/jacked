import { CHANGE_FORM_FIELD } from '../constants/constants';

export const initialState = {

};

export const signup = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FORM_FIELD:
      return ({ ...state, [action.field]: action.value });
    default:
      return state;
  }
};
