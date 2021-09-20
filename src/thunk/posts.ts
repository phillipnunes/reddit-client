import axios from "axios";
import {GET_POSTS} from "../constants";

export const getPosts = () => async (dispatch: any) => {
  dispatch({ type: GET_POSTS })

  const apiUrl = 'https://www.reddit.com/top.json?limit=50'

  try {
    const response = await axios.get(apiUrl)
    return dispatch({ type: GET_POSTS, payload: response?.data?.data?.children })
  } catch (e) {
    console.log('Error', e)
  }
}