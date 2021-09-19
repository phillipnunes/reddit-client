import {SET_SELECTED, GET_POSTS} from "../constants";

const initialState = {
  data: [],
  selected: {}
}

export default (state = initialState, action: any) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        data: action.payload
      }
    case SET_SELECTED:
      return {
        ...state,
        selected: action.payload
      }
    default:
      return state
  }
}