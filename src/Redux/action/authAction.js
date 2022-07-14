import { CREATE_NEW_USER, LOGIN_USER, GET_CURRENT_USER } from "../type";
import { useInsertData } from "../../hooks/useInsertData";
import { useGetDataToken } from "../../hooks/useGetData";

// Create new User
export const createNewUser = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/auth/signup`, data);
    console.log(response);

    dispatch({
      type: CREATE_NEW_USER,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: CREATE_NEW_USER,
      payload: e.response,
    });
  }
};

// Login User
export const loginUser = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/auth/login`, data);

    dispatch({
      type: LOGIN_USER,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: LOGIN_USER,
      payload: e.response,
    });
  }
};

// Login User
export const getLoggedUser = () => async (dispatch) => {
  try {
    const response = await useGetDataToken(`/api/v1/users/getMe`);

    dispatch({
      type: GET_CURRENT_USER,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_CURRENT_USER,
      payload: e.response,
    });
  }
};
