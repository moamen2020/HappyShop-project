import React from "react";
import CategoryContainer from "../../Components/Category/CategoryContainer";
import PaginationCompontent from "../../Components/Utility/Pagination";

const AllCategoryList = () => {
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryContainer />
      <PaginationCompontent />
    </div>
  );
};

export default AllCategoryList;
