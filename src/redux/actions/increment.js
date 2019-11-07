import * as types from './actionTypes';

export const increment = () => {
  console.log("Increment");
  return dispatch => {
    dispatch({
      type: types.INCREMENT
    })
  }
}
