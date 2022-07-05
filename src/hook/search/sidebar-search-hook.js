import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategory } from "../../Redux/action/categoryAction";

import { getAllBrand } from "../../Redux/action/brandAction";

const SidebarSearchHook = () => {
  const dispatch = useDispatch();

  const get = async () => {
    await dispatch(getAllCategory());
    await dispatch(getAllBrand());
  };
  //when first load
  useEffect(() => {
    get();
  }, []);

  //to get state from redux
  const allCategory = useSelector((state) => state.allCategory.category);
  const allBrand = useSelector((state) => state.allBrand.brand);

  let category = [];
  if (allCategory.data) {
    category = allCategory.data;
  }

  let brand = [];
  if (allBrand.data) {
    brand = allBrand.data;
  }

  return [category, brand];
};

export default SidebarSearchHook;
