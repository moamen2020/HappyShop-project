import {
  CREATE_REVIEW,
  UPDATE_REVIEW,
  DELETE_REVIEW,
  ALL_REVIEW_PRODUCT,
} from "../type";

const inital = {
  createView: [],
  allReviewProduct: [],
  deleteReview: [],
  updateReview: [],
  loading: true,
};
const reviewReducer = (state = inital, action) => {
  switch (action.type) {
    case CREATE_REVIEW:
      return {
        ...state,
        createView: action.payload,
        loading: false,
      };
    case ALL_REVIEW_PRODUCT:
      return {
        ...state,
        allReviewProduct: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default reviewReducer;
