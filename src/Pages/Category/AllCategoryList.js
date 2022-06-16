import React, { useEffect } from "react";
import CategoryContainer from "../../Components/Category/CategoryContainer";
import PaginationCompontent from "../../Components/Utility/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../Redux/action/categoryAction";

const AllCategoryList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  const data = useSelector((state) => state.allCategory.category);
  const loading = useSelector((state) => state.allCategory.loading);

  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryContainer />
      <PaginationCompontent />
    </div>
  );
};

export default AllCategoryList;
