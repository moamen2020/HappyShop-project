import React from "react";
import CategoryContainer from "../../Components/Category/CategoryContainer";
import PaginationComponent from "../../Components/Utility/Pagination";
import AllCategoryHook from "../../hook/category/all-category-page-hook";

const AllCategoryList = () => {
  const [category, loading, pageCount, getPage] = AllCategoryHook();

  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryContainer data={category.data} loading={loading} />
      {pageCount > 1 ? (
        <PaginationComponent
          pageCount={category.paginationResult.numberOfPages}
          onPress={getPage}
        />
      ) : null}
    </div>
  );
};

export default AllCategoryList;
