import {SET_SELECTED} from "../constants";

export const setSelected = (selected: object) => (dispatch: any) => {
  dispatch({
    type: SET_SELECTED,
    payload: selected
  })
}