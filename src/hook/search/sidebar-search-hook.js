import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategory } from "../../Redux/action/categoryAction";

import { getAllBrand } from "../../Redux/action/brandAction";

const SidebarSearchHook = () => {
  const [categoryChecked, setCategoryChecked] = useState([]);
  const [brandChecked, setBrandChecked] = useState([]);
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
      setCategoryChecked([]);
    } else {
      if (e.target.checked === true) {
        setCategoryChecked([...categoryChecked, value]);
      } else if (e.target.checked === false) {
        const newArray = categoryChecked.filter((e) => e !== value);
        setCategoryChecked(newArray);
      }
    }
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
