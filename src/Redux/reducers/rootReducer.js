import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import brandReducer from "./brandReducer";
import subcategoryReducer from "./subCategoryReducer";
import productsReducer from "./productReducer";

export default combineReducers({
  allCategory: categoryReducer,
  allBrand: brandReducer,
  subCategory: subcategoryReducer,
  allProducts: productsReducer,
});
