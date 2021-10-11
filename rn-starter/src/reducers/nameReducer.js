import { SET_NAME } from "../actions/types";

const initialState = {
  nickname: '',
}

const nameReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        nickname: action.name
        };
    default:
      return state;
    }
}

export default nameReducer;