import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategory } from "../../Redux/action/categoryAction";

import { getAllBrand } from "../../Redux/action/brandAction";
import ViewSearchProductsHook from "../products/view-search-product-hook";

const SidebarSearchHook = () => {
  const [items, pagination, onPress, getProduct, results] =
    ViewSearchProductsHook();

  const [categoryChecked, setCategoryChecked] = useState([]);
  const [brandChecked, setBrandChecked] = useState([]);
  let queryCategory = "";
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

  const clickCategory = (e) => {
    let value = e.target.value;

    if (value === "0") {
      getQuery();
      setCategoryChecked([]);
    } else {
      if (e.target.checked === true) {
        // getQuery();
        setCategoryChecked([...categoryChecked, value]);
      } else if (e.target.checked === false) {
        const newArray = categoryChecked.filter((e) => e !== value);
        // getQuery();
        setCategoryChecked(newArray);
      }
    }
  };

  const getQuery = () => {
    queryCategory = categoryChecked
      .map((val) => "category[in][]=" + val)
      .join("&");
    localStorage.setItem("CategoryChecked", queryCategory);
    setInterval(() => {
      getProduct();
    }, 1000);
  };

  const clickBrand = (e) => {
    let value = e.target.value;

    if (value === "0") {
      setBrandChecked([]);
    } else {
      if (e.target.checked === true) {
        setBrandChecked([...brandChecked, value]);
      } else if (e.target.checked === false) {
        const newArray = brandChecked.filter((e) => e !== value);
        setBrandChecked(newArray);
      }
    }
  };

  return [category, brand, clickCategory, clickBrand];
};

export default SidebarSearchHook;
