import useGetData from "../../hooks/useDetData";
import { useInsertDataWithImage } from "../../hooks/useInsertData";
import { GET_ALL_BRAND, GET_ERROR, CREATE_BRAND, GET_ONE_BRAND } from "../type";

// Get all Brand
export const getAllBrand = (limit) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/brands?limit=${limit}`);

    dispatch({
      type: GET_ALL_BRAND,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

// Get one Brand
export const getOneBrand = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/brands/${id}`);

    dispatch({
      type: GET_ONE_BRAND,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

// Get all Brand with pagination
export const getAllBrandPage = (page) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/brands?limit=6&page=${page}`);

    dispatch({
      type: GET_ALL_BRAND,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

// Create new Brand
export const createBrand = (formData) => async (dispatch) => {
  try {
    const response = await useInsertDataWithImage(`/api/v1/brands`, formData);
    console.log(response);

    dispatch({
      type: CREATE_BRAND,
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
