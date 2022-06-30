import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneProduct } from "../../Redux/action/productAction";

const ViewProductDetailsHook = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneProduct(id));
  }, [dispatch, id]);

  const oneProducts = useSelector((state) => state.allProducts.oneProduct);

  let item = [];
  if (oneProducts.data) {
    item = oneProducts.data;
  } else item = [];

  let images = [];

  if (item.images) {
    images = item.images.map((img) => {
      return { original: img };
    });
  } else {
    images = [{}];
  }

  return [item, images];
};

export default ViewProductDetailsHook;
