import useGetData from "../../hooks/useDetData";
import { useInsertDataWithImage } from "../../hooks/useInsertData";
import {
  GET_ALL_CATEGORY,
  GET_ERROR,
  CREATE_CATEGORY,
  GET_ONE_CATEGORY,
} from "../type";

// Get all category
export const getAllCategory = (limit) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/categories?limit=${limit}`);

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

// Get one category
export const getOneCategory = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/categories/${id}`);

    dispatch({
      type: GET_ONE_CATEGORY,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

// Get all category with pagination
export const getAllCategoryPage = (page) => async (dispatch) => {
  try {
    const response = await useGetData(
      `/api/v1/categories?limit=6&page=${page}`
    );

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

// Create new category
export const createCategoryPage = (formData) => async (dispatch) => {
  try {
    const response = await useInsertDataWithImage(
      `/api/v1/categories`,
      formData
    );
    console.log(response);

    dispatch({
      type: CREATE_CATEGORY,
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
