import {
  CREATE_PRODUCT,
  GET_ALL_PRODUCT,
  GET_PRODUCT_DETAILS,
  GET_ERROR,
  GET_PRODUCTS_LIKE,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  GET_ALL_PRODUCTS_CATEGORY,
} from "../type";

const initial = {
  products: [],
  allProducts: [],
  oneProduct: [],
  likeProducts: [],
  deleteProduct: [],
  updateProduct: [],
  allProductCat: [],
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
    case GET_PRODUCT_DETAILS:
      return {
        ...state,
        oneProduct: action.payload,
        loading: false,
      };
    case GET_PRODUCTS_LIKE:
      return {
        ...state,
        likeProducts: action.payload,
        loading: false,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        deleteProduct: action.payload,
        loading: false,
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        updateProduct: action.payload,
        loading: false,
      };
    case GET_ALL_PRODUCTS_CATEGORY:
      return {
        loading: true,
        allProductCat: action.payload,
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
