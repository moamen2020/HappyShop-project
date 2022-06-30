import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/action/productAction";

const ViewProductAdminHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts(9));
  }, []);

  const allProducts = useSelector((state) => state.allProducts.allProducts);

  let items = [];
  if (allProducts.data) {
    items = allProducts.data;
  } else items = [];

  let pagination = [];
  if (allProducts.paginationResult) {
    pagination = allProducts.paginationResult;
  } else pagination = [];

  return [items, pagination];
};

export default ViewProductAdminHook;
