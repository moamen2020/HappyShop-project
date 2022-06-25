import { useInsertData } from "../../hooks/useInsertData";
import { GET_ERROR, CREATE_SUB_CATEGORY } from "../type";

// Create new Sub category
export const createSubCategory = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/subcategories`, data);
    console.log(response);

    dispatch({
      type: CREATE_SUB_CATEGORY,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};
