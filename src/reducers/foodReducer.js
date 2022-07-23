import { ADD_DIET, ADD_RESTR, DELETE_DIET, SET_NAME, SET_SELECTED_LIST } from "../actions/types";

const initialState = {
  dietList: [],
  restrList: [],
  selectedList: []
}

const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DIET:
      return {
        ...state,
        dietList: action.data
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
        restrList: action.data
        };
    case DELETE_DIET:
      return {
        ...state,
        restrList: state.restrList.filter((item) =>
          item.key != action.key)
        };
    case SET_SELECTED_LIST:
      return {
        ...state,
        selectedList: action.list
      };
    default:
      return state;
    }
}

export default foodReducer;