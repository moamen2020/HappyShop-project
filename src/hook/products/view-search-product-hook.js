import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getAllProductsPage,
} from "../../Redux/action/productAction";

const ViewSearchProductsHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts(12));
  }, [dispatch]);

  const onPress = async (page) => {
    await dispatch(getAllProductsPage(page, 12));
  };

  const allProducts = useSelector((state) => state.allProducts.allProducts);

  let items = [];
  if (allProducts.data) {
    items = allProducts.data;
  } else items = [];

  let pagination = [];
  if (allProducts.paginationResult) {
    pagination = allProducts.paginationResult.numberOfPages;
  } else pagination = [];

  return [items, pagination, onPress];
};

export default ViewSearchProductsHook;
