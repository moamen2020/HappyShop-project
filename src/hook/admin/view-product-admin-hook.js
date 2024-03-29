import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getAllProductsPage,
} from "../../Redux/action/productAction";

const ViewProductAdminHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts(12));
  }, []);

  const onPress = async (page) => {
    await dispatch(getAllProductsPage(page, 12));
  };

  const allProducts = useSelector((state) => state.allProducts.allProducts);

  let items = [];
  let pagination = [];

  try {
    if (allProducts.data) {
      items = allProducts.data;
    } else items = [];

    if (allProducts.paginationResult) {
      pagination = allProducts.paginationResult.numberOfPages;
    } else pagination = [];
  } catch (error) {
    console.log(error);
  }
  return [items, pagination, onPress];
};

export default ViewProductAdminHook;
