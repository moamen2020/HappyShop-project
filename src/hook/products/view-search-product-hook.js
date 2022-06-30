import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/action/productAction";

const ViewSearchProductsHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const allProducts = useSelector((state) => state.allProducts.allProducts);

  let items = [];
  if (allProducts.data) {
    items = allProducts.data;
  } else items = [];

  console.log(items);

  return [items];
};

export default ViewSearchProductsHook;
