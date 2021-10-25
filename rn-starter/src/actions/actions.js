import { ADD_DIET, DELETE_DIET, SET_NAME, ADD_RESTR, DELETE_RESTR, SET_SELECTED_LIST} from "./types";

export const addDiet = (food) => ({
  type: ADD_DIET,
  data: food
});

export const deleteDiet = (key) => ({
  type: DELETE_DIET,
  key: key
});

export const addName = (name) => ({
  type: SET_NAME,
  name: name
})

export const addRestr = (food) => ({
  type: ADD_RESTR,
  data: food
})

export const delRestr = (key) => ({
  type: DELETE_RESTR,
  key: key
})

export const setSelectedList = (list) => ({
  type: SET_SELECTED_LIST,
  list: list
})