import React, { useEffect } from "react";
import CategoryContainer from "../../Components/Category/CategoryContainer";
import PaginationCompontent from "../../Components/Utility/Pagination";
import { useDispatch } from "react-redux";
import { getAllCategory } from "../../Redux/action/categoryAction";

const AllCategoryList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory());
  });

  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryContainer />
      <PaginationCompontent />
    </div>
  );
};

export default AllCategoryList;
