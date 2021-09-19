import {GET_POSTS} from "../constants";

export const getPosts = () => (dispatch: any) => {
  dispatch({
    type: GET_POSTS,
  })
}