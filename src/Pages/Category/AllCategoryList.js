import React, { useEffect } from "react";
import CategoryContainer from "../../Components/Category/CategoryContainer";
import PaginationCompontent from "../../Components/Utility/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../Redux/action/categoryAction";

const AllCategoryList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory(2));
  }, []);

  const category = useSelector((state) => state.allCategory.category);
  const loading = useSelector((state) => state.allCategory.loading);

  console.log(category, loading);

  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryContainer data={category} loading={loading} />
      <PaginationCompontent
        pageCount={category.paginationResult.numberOfPages}
      />
    </div>
  );
};

export default AllCategoryList;
