import {SET_SELECTED, GET_POSTS, REMOVE_POST, REMOVE_ALL_POSTS, SET_AS_READ} from "../constants";

const initialState = {
  data: [],
  selected: {}
}

function removePostById(id: string, data: any) {
  return data.filter((it: any) => it?.data?.id !== id)
}

function setPostAsRead(id: string, data: any) {
  return data.map((it: any) => {
    if (it?.data?.id === id) {
      it.read = true
    }
    return it
  })
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
    case SET_AS_READ:
      return {
        ...state,
        data: setPostAsRead(action.payload, state?.data)
      }
    default:
      return state
  }
}

export default posts