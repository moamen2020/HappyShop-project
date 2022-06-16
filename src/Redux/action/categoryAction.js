import useGetData from "../../hooks/useDetData";
import { GET_ALL_CATEGORY, GET_ERROR } from "../type";

//get all category
export const getAllCategory = () => async (dispatch) => {
  try {
    const response = await useGetData("/api/v1/categories");
    console.log(response);

    dispatch({
      type: GET_ALL_CATEGORY,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};
