import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getAllProductsPage,
  getAllProductsSearch,
} from "../../Redux/action/productAction";

const ViewSearchProductsHook = () => {
  const dispatch = useDispatch();

  let limit = 6;

  let word = "";
  if (localStorage.getItem("SearchWord") != null) {
    word = localStorage.getItem("SearchWord");
  }

  const getProduct = async () => {
    await dispatch(getAllProductsSearch(`limit=${limit}&keyword=${word}`));
  };

  useEffect(() => {
    // dispatch(getAllProductsSearch(`limit=${limit}&keyword=${word}`));
    getProduct();
  }, [dispatch]);

  const onPress = async (page) => {
    await dispatch(getAllProductsPage(page, limit));
  };

  const allProducts = useSelector((state) => state.allProducts.allProducts);

  let items = [];
  let pagination = [];
  let results = [];

  try {
    if (allProducts.data) {
      items = allProducts.data;
    } else items = [];
  } catch (error) {}

  try {
    if (allProducts.results) {
      results = allProducts.results;
    } else results = 0;
  } catch (error) {}

  try {
    if (allProducts.paginationResult) {
      pagination = allProducts.paginationResult.numberOfPages;
    } else pagination = [];
  } catch (error) {}

  console.log(allProducts);

  return [items, pagination, onPress, getProduct, results];
};

export default ViewSearchProductsHook;
