import {SET_SELECTED, REMOVE_POST, REMOVE_ALL_POSTS} from "../constants";

export const setSelected = (selected: object) => (dispatch: any) => {
  dispatch({
    type: SET_SELECTED,
    payload: selected
  })
}

export const removePost = (id: string) => (dispatch: any) => {
  dispatch({
    type: REMOVE_POST,
    payload: id
  })
}

export const removeAllPosts = () => (dispatch: any) => {
  dispatch({
    type: REMOVE_ALL_POSTS,
  })
}