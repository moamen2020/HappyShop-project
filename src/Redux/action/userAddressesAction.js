import { useInsertData } from "../../hooks/useInsertData";
import { useGetDataToken } from "../../hooks/useGetData";
import {
  ADD_USER_ADDRESS,
  GET_ALL_USER_ADDRESS,
  EDIT_USER_ADDRESS,
  GET_ONE_USER_ADDRESS,
  DELETE_USER_ADDRESS,
} from "../type";

//add user Address
export const addUserAddress = (body) => async (dispatch) => {
  try {
    const response = await useInsertData("/api/v1/addresses", body);
    dispatch({
      type: ADD_USER_ADDRESS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: ADD_USER_ADDRESS,
      payload: e.response,
    });
  }
};

//get all user Address
export const getAllUserAddress = () => async (dispatch) => {
  try {
    const response = await useGetDataToken("/api/v1/addresses");
    dispatch({
      type: GET_ALL_USER_ADDRESS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_USER_ADDRESS,
      payload: e.response,
    });
  }
};
