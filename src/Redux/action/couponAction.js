import {
  ADD_COUPON,
  GET_ALL_COUPON,
  EDIT_COUPON,
  GET_ONE_COUPON,
  DELTET_COUPON,
} from "../type";

import { useInsertData } from "../../hooks/useInsertData";

//add coupon
export const addCoupon = (body) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/coupons`, body);
    console.log(response);
    dispatch({
      type: ADD_COUPON,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: ADD_COUPON,
      payload: e.response,
    });
  }
};
