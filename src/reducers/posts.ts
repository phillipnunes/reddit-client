import {GET_POSTS} from "../constants";

const initialState = {
  data: []
}

export default (state = initialState, action: any) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        data: action.payload
      }
    default:
      return state
  }
}