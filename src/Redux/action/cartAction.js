import {
  ADD_TO_CART,
  APPALY_COUPON_CART,
  GET_ALL_USER_CART,
  UPDATE_ITEM_FROMCART,
  DELETE_ITEM_FROMCART,
  CLEAR_ALL_USER_CART,
} from "../type";
import { useInsertData } from "../../hooks/useInsertData";

//add to cart
export const addProductToCart = (body) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/cart`, body);
    dispatch({
      type: ADD_TO_CART,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: ADD_TO_CART,
      payload: e.response,
    });
  }
};
