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
  const [priFrom, setPriFrom] = useState([]);
  const [priTo, setPriTo] = useState([]);
  let queryCategory = "";
  let queryBrand = "";
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

  useEffect(() => {
    queryCategory = categoryChecked
      .map((val) => "category[in][]=" + val)
      .join("&");
    localStorage.setItem("CategoryChecked", queryCategory);
    setInterval(() => {
      getProduct();
    }, 1000);
  }, [categoryChecked]);

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

  useEffect(() => {
    queryBrand = brandChecked.map((val) => "brand[in][]=" + val).join("&");
    localStorage.setItem("BrandChecked", queryBrand);
    setInterval(() => {
      getProduct();
    }, 1000);
  }, [brandChecked]);

  const priceFrom = (e) => {
    localStorage.setItem("PriceForm", e.target.value);
    setPriFrom(e.target.value);
  };
  const priceTo = (e) => {
    localStorage.setItem("PriceTo", e.target.value);
    setPriTo(e.target.value);
  };

  useEffect(() => {
    setInterval(() => {
      getProduct();
    }, 1000);
  }, [priFrom, priTo]);

  return [category, brand, clickCategory, clickBrand, priceFrom, priceTo];
};

export default SidebarSearchHook;
