import { useInsertDataWithImage } from "../../hooks/useInsertData";
import useGetData from "../../hooks/useDetData";

import { CREATE_PRODUCT, GET_ALL_PRODUCT, GET_ERROR } from "../type";

// Create new Product
export const createProduct = (formData) => async (dispatch) => {
  try {
    const response = await useInsertDataWithImage(`/api/v1/products`, formData);
    dispatch({
      type: CREATE_PRODUCT,
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

// Get all Product in DB
export const getAllProducts = () => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/products`);
    dispatch({
      type: GET_ALL_PRODUCT,
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
