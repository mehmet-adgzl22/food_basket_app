import axios from "axios";
import ActionTypes from "../actionTypes";

export const setRestaurants = async (payload) => {
  return {
    type: ActionTypes.REST_SUCCESS,
    payload,
  };
};


export const getRestaurants = () => {
  return (dispatch) => {
    
    dispatch({ type: ActionTypes.REST_LOADING });

    axios
      .get("http://localhost:3000/restaurants")
      .then((res) =>
        dispatch({
          type: ActionTypes.REST_SUCCESS,
          payload: res.data,
        })
      )
      .catch((err) =>
        dispatch({ type: ActionTypes.REST_ERROR, payload: err })
      );
  };
};
