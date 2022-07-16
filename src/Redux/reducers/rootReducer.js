import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import brandReducer from "./brandReducer";
import subcategoryReducer from "./subCategoryReducer";
import productsReducer from "./productReducer";
import authReducer from "./authReducer";
import reviewReducer from "./reviewReducer";
import addToWishListReducer from "./wishListReducer";

export default combineReducers({
  allCategory: categoryReducer,
  allBrand: brandReducer,
  subCategory: subcategoryReducer,
  allProducts: productsReducer,
  authReducer: authReducer,
  reviewReducer: reviewReducer,
  addToWishListReducer: addToWishListReducer,
});
