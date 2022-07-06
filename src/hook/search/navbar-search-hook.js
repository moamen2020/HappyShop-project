import { useState, useEffect } from "react";
import ViewSearchProductsHook from "../products/view-search-product-hook";

const NavbarSearchHook = () => {
  const [items, pagination, onPress, getProduct, results] =
    ViewSearchProductsHook();

  const [searchWord, setSearchWord] = useState("");

  const onChangeSearch = (e) => {
    localStorage.setItem("SearchWord", e.target.value);
    setSearchWord(e.target.value);

    let path = window.location.pathname;

    if (path != "/products") {
      window.location.href = "/products";
    }
  };

  useEffect(() => {
    getProduct();
  }, [searchWord]);

  return [onChangeSearch, searchWord];
};
export default NavbarSearchHook;
