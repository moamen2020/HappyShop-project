import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getAllProductsPage,
  getAllProductsSearch,
} from "../../Redux/action/productAction";

const ViewSearchProductsHook = () => {
  const dispatch = useDispatch();

  // getAllProductsSearch(`limit=${limit}`)

  let limit = 6;

  useEffect(() => {
    dispatch(getAllProducts(limit));
  }, [dispatch]);

  const onPress = async (page) => {
    await dispatch(getAllProductsPage(page, limit));
  };

  const allProducts = useSelector((state) => state.allProducts.allProducts);

  let items = [];
  try {
    if (allProducts.data) {
      items = allProducts.data;
    } else items = [];
  } catch (error) {}

  let pagination = [];
  try {
    if (allProducts.paginationResult) {
      pagination = allProducts.paginationResult.numberOfPages;
    } else pagination = [];
  } catch (error) {}

  return [items, pagination, onPress];
};

export default ViewSearchProductsHook;
