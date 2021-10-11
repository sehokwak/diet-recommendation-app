import { ADD_DIET, ADD_RESTR, DELETE_DIET, SET_NAME } from "../actions/types";

const initialState = {
  dietList: [],
  restrList: []
}

const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DIET:
      return {
        ...state,
        dietList: state.dietList.concat(action.data)
        };
    case DELETE_DIET:
      return {
        ...state,
        dietList: state.dietList.filter((item) =>
          item.key != action.key)
        };
    case ADD_RESTR:
      return {
        ...state,
        restrList: state.restrList.concat(action.data)
        };
    case DELETE_DIET:
      return {
        ...state,
        restrList: state.restrList.filter((item) =>
          item.key != action.key)
        };    
    default:
      return state;
    }
}

export default foodReducer;