import {
  CREATE_REVIEW,
  UPDATE_REVIEW,
  DELETE_REVIEW,
  ALL_REVIEW_PRODUCT,
} from "../type";
import { useGetData, useGetDataToken } from "../../hooks/useGetData";
import { useInsertData } from "../../hooks/useInsertData";
import useDeleteData from "./../../hooks/useDeleteData";
import { useInsUpdateData } from "../../hooks/useUpdateData";

//create rate
export const createReview = (prodID, body) => async (dispatch) => {
  try {
    const response = await useInsertData(
      `/api/v1/products/${prodID}/reviews`,
      body
    );

    dispatch({
      type: CREATE_REVIEW,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: CREATE_REVIEW,
      payload: e.response,
    });
  }
};
