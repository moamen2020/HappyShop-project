import {
  ADD_TO_CART,
  GET_ALL_USER_CART,
  CLEAR_ALL_USER_CART,
  APPALY_COUPON_CART,
  UPDATE_ITEM_FROMCART,
  DELETE_ITEM_FROMCART,
} from "../type";

const inital = {
  addToCart: [],
  getAllUserCart: [],
  clearCart: [],
  deleteItem: [],
  updateItem: [],
  applayCoupon: [],
};
const cartReducer = (state = inital, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        addToCart: action.payload,
      };
    case GET_ALL_USER_CART:
      return {
        ...state,
        getAllUserCart: action.payload,
      };
    case CLEAR_ALL_USER_CART:
      return {
        ...state,
        clearCart: action.payload,
      };
    default:
      return state;
  }
};
export default cartReducer;
