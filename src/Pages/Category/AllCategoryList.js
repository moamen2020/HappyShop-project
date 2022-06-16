import React, { useEffect } from "react";
import CategoryContainer from "../../Components/Category/CategoryContainer";
import PaginationCompontent from "../../Components/Utility/Pagination";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCategory,
  getAllCategoryPage,
} from "../../Redux/action/categoryAction";

const AllCategoryList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory(2));
  }, []);

  const category = useSelector((state) => state.allCategory.category);
  const loading = useSelector((state) => state.allCategory.loading);

  let pageCount = 0;
  if (category.paginationResult)
    // eslint-disable-next-line no-unused-vars
    pageCount = category.paginationResult.numberOfPages;

  const getPage = (page) => {
    dispatch(getAllCategoryPage(page));
  };

  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryContainer data={category.data} loading={loading} />
      {pageCount > 1 ? (
        <PaginationCompontent
          pageCount={category.paginationResult.numberOfPages}
          onPress={getPage}
        />
      ) : null}
    </div>
  );
};

export default AllCategoryList;
