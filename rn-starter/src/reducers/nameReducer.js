import { SET_NAME, SET_AGE, SET_GENDER } from "../actions/types";

const initialState = {
  nickname: '',
  age: '',
  gender: ''
}

const nameReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        nickname: action.name
        };
    case SET_AGE:
      return {
        ...state,
        age: action.age
        };
    case SET_GENDER:
      return {
        ...state,
        gender: action.gender
        };        
    default:
      return state;
    }
}

export default nameReducer;