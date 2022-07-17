import {
  ADD_COUPON,
  EDIT_COUPON,
  GET_ALL_COUPON,
  GET_ONE_COUPON,
  DELTET_COUPON,
} from "../type";

const inital = {
  addCoupon: [],
  allCoupon: [],
  deleteCoupon: [],
  oneCoupon: [],
  editCoupon: [],
};
const couponReducer = (state = inital, action) => {
  switch (action.type) {
    case ADD_COUPON:
      return {
        ...state,
        addCoupon: action.payload,
      };
    default:
      return state;
  }
};

export default couponReducer;
