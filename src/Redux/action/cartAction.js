import {
  ADD_TO_CART,
  GET_ALL_USER_CART,
  APPALY_COUPON_CART,
  UPDATE_ITEM_FROMCART,
  DELETE_ITEM_FROMCART,
  CLEAR_ALL_USER_CART,
} from "../type";
import { useInsertData } from "../../hooks/useInsertData";
import { useGetDataToken } from "../../hooks/useGetData";

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

//get all cart items
export const getAllUserCartItems = () => async (dispatch) => {
  try {
    const response = await useGetDataToken(`/api/v1/cart`);
    console.log(response);
    dispatch({
      type: GET_ALL_USER_CART,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_USER_CART,
      payload: e.response,
    });
  }
};
