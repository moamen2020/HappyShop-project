import { useState, useEffect } from "react";
import ViewSearchProductsHook from "../products/view-search-product-hook";

const NavbarSearchHook = () => {
  const [items, pagination, onPress, getProduct] = ViewSearchProductsHook();

  const [searchWord, setSearchWord] = useState("");

  const onChangeSearch = (e) => {
    localStorage.setItem("SearchWord", e.target.value);
    setSearchWord(e.target.value);
  };

  useEffect(() => {
    getProduct();
  }, [searchWord]);

  return [onChangeSearch, searchWord];
};
export default NavbarSearchHook;
