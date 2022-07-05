import { useState } from "react";

const NavbarSearchHook = () => {
  const [searchWord, setSearchWord] = useState("");

  const onChangeSearch = (e) => {
    console.log(e.target.value);
    setSearchWord(e.target.value);
  };

  return [onChangeSearch, searchWord];
};
export default NavbarSearchHook;
