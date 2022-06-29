import { CREATE_PRODUCT, GET_ALL_PRODUCT, GET_ERROR } from "../type";

const initial = {
  products: [],
  allProducts: [],
  loading: true,
};

const productsReducer = (state = initial, action) => {
  switch (action.type) {
    case CREATE_PRODUCT:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case GET_ALL_PRODUCT:
      return {
        ...state,
        allProducts: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        products: true,
        brand: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
