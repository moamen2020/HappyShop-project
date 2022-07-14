import { CREATE_NEW_USER, GET_ERROR } from "../type";
import { useInsertData } from "../../hooks/useInsertData";

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
      type: GET_ERROR,
      payload: e.response,
    });
  }
};
