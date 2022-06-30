import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneBrand } from "../../Redux/action/brandAction";
import { getOneCategory } from "../../Redux/action/categoryAction";
import {
  getOneProduct,
  getProductsLike,
} from "../../Redux/action/productAction";

const ViewProductDetailsHook = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneProduct(id));
  }, [dispatch, id]);

  const oneProducts = useSelector((state) => state.allProducts.oneProduct);
  const oneCategory = useSelector((state) => state.allCategory.oneCategory);
  const oneBrand = useSelector((state) => state.allBrand.oneBrand);
  const allProductsLike = useSelector(
    (state) => state.allProducts.likeProducts
  );

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

  useEffect(() => {
    if (item.category) dispatch(getOneCategory(item.category));
    if (item.brand) dispatch(getOneBrand(item.brand));
    if (item.category) dispatch(getProductsLike(item.category));
  }, [item]);

  let category = [];
  if (oneCategory.data) category = oneCategory.data;
  else category = [];

  let brand = [];
  if (oneBrand.data) brand = oneBrand.data;
  else brand = [];

  let productsLike = [];
  if (allProductsLike.data) productsLike = allProductsLike.data.slice(0, 4);
  console.log("=================================================");
  console.log(category);
  console.log(category);
  console.log(category);
  console.log(category);
  console.log("=================================================");

  return [item, images, category, brand, productsLike];
};

export default ViewProductDetailsHook;
