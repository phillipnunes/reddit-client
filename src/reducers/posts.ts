import {SET_SELECTED, GET_POSTS, REMOVE_POST, REMOVE_ALL_POSTS} from "../constants";

const initialState = {
  data: [],
  selected: {}
}

function removePostById(id: string, data: any){
  return data.filter((it: any) => it?.data?.id !== id)
}

const posts = (state = initialState, action: any) => {
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
    case REMOVE_POST:
      return {
        ...state,
        data: removePostById(action.payload, state?.data)
      }
    case REMOVE_ALL_POSTS:
      return {
        ...state,
        data: []
      }
    default:
      return state
  }
}

export default posts