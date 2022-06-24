import React from "react";
import BrandContainer from "../../Components/Brand/BrandContainer";
import PaginationCompontent from "../../Components/Utility/Pagination";
import AllBrandHook from "../../hook/brand/all-brand-page-hook";

const AllBrand = () => {
  const [brand, loading, pageCount, getPage] = AllBrandHook();
  return (
    <div>
      <BrandContainer data={brand.data} loading={loading} />
      {pageCount > 0 ? (
        <PaginationCompontent
          pageCount={brand.paginationResult.numberOfPages}
          onPress={getPage}
        />
      ) : null}
    </div>
  );
};

export default AllBrand;
