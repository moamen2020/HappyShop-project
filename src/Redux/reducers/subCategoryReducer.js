import { GET_ERROR, CREATE_SUB_CATEGORY, GET_SUB_CATEGORY } from "../type";

const initial = {
  subCategory: [],
  loading: true,
};
const subcategoryReducer = (state = initial, action) => {
  switch (action.type) {
    case CREATE_SUB_CATEGORY:
      return {
        ...state,
        subCategory: action.payload,
        loading: false,
      };
    case GET_SUB_CATEGORY:
      return {
        subCategory: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        loading: true,
        subCategory: action.payload,
      };
    default:
      return state;
  }
};
export default subcategoryReducer;
